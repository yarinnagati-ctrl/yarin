"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { WALL_RECT, FRUSTUM_BOTTOM } from "./wallRect";
import { withBasePath } from "@/lib/basePath";

const INSTALL_SPAN = 0.2;
// כל קרש מתחיל מתחת לרצפה (מחוץ לפריים לגמרי), לא רק מתחת למיקומו שלו
const DROP_DISTANCE = WALL_RECT.top - FRUSTUM_BOTTOM + 0.5;
// הפרש קטן בתוך כל זוג — הזוג "נוחת" כמעט כאחד, עם micro-beat של שני הקרשים
const PAIR_STAGGER = 0.035;

// עקומת "נחיתה רכה" — התיישבות עדינה ומדודה (פחות "קפיצית", יותר יוקרתית)
function backOut(t, overshoot = 0.85) {
  const x = t - 1;
  return x * x * ((overshoot + 1) * x + overshoot) + 1;
}

// בונה טור קרשים אנכיים במלוא גובה הקיר. ההתקנה עולה בזוגות של שני קרשים
// גובלים בכל פעם (משמאל לימין, עם ג'יטר קטן), ולא קרש-קרש ברצף רציף —
// כל קרש בזוג נכנס גם מהצד שלו (שמאל/ימין) בנוסף לנפילה, לתחושה של "הרכבה".
function buildSlats(count) {
  const slats = [];
  const gapRatio = 0.12;
  const step = WALL_RECT.width / count;
  const width = step * (1 - gapRatio);
  const pairCount = Math.ceil(count / 2);

  for (let i = 0; i < count; i++) {
    const x = WALL_RECT.left + step * (i + 0.5);
    const pairIndex = Math.floor(i / 2);
    const withinPair = i % 2;
    const pairT = pairCount > 1 ? pairIndex / (pairCount - 1) : 0;
    const jitter = (Math.random() - 0.5) * 0.05;
    slats.push({
      x,
      width,
      step,
      delay: pairT + withinPair * PAIR_STAGGER + jitter,
      rotJitter: (Math.random() - 0.5) * 2.4,
      slideFrom: withinPair === 0 ? -width * 0.9 : width * 0.9,
    });
  }

  let min = Infinity;
  let max = -Infinity;
  for (const s of slats) {
    min = Math.min(min, s.delay);
    max = Math.max(max, s.delay);
  }
  const range = max - min || 1;
  for (const s of slats) {
    s.delay = (s.delay - min) / range;
  }

  return slats;
}

export default function Slats({ progressRef, reducedMotion, count = 65 }) {
  const meshRefs = useRef([]);
  const backingRefs = useRef([]);

  const slats = useMemo(() => buildSlats(count), [count]);

  // מרקם עץ חם (wood-slat-warm.jpg) — פרוסה נקייה מהתמונה שסיפק הלקוח, בלי
  // קווי הרווח השחורים ובלי הרצפה. חולקים אותה על פני כל הקרשים ומרבים
  // אותה אופקית (RepeatWrapping) כדי לקבל גוון עץ חם ואחיד עם קצת סיב, בלי
  // גיוון בין קרש לקרש.
  const baseTexture = useTexture(withBasePath("/images/wall-showcase/wood-slat-warm.jpg"));
  const woodTexture = useMemo(() => {
    const t = baseTexture.clone();
    t.needsUpdate = true;
    t.colorSpace = THREE.SRGBColorSpace;
    t.wrapS = THREE.RepeatWrapping;
    t.wrapT = THREE.ClampToEdgeWrapping;
    t.repeat.set(3, 1);
    t.anisotropy = 8;
    return t;
  }, [baseTexture]);

  useFrame(() => {
    const progress = reducedMotion ? 1 : progressRef.current.value;

    slats.forEach((s, i) => {
      const mesh = meshRefs.current[i];
      if (!mesh) return;

      const localStart = s.delay * (1 - INSTALL_SPAN);
      const t = THREE.MathUtils.clamp((progress - localStart) / INSTALL_SPAN, 0, 1);
      const eased = reducedMotion ? 1 : backOut(t);
      // רעד "התיישבות" קטן שדועך עד לנחיתה — פונקציה טהורה של t, בטוחה לגלילה דו־כיוונית
      const settle = reducedMotion ? 0 : Math.sin(t * Math.PI * 5) * (1 - t);

      mesh.position.x = THREE.MathUtils.lerp(s.x + s.slideFrom, s.x, eased);
      mesh.position.y =
        THREE.MathUtils.lerp(
          WALL_RECT.centerY - DROP_DISTANCE,
          WALL_RECT.centerY,
          eased
        ) + settle * 0.018;
      mesh.position.z = THREE.MathUtils.lerp(-0.02, 0.055, Math.min(Math.max(eased, 0), 1));
      mesh.rotation.z =
        THREE.MathUtils.degToRad(
          THREE.MathUtils.lerp(s.rotJitter, s.rotJitter * 0.25, eased)
        ) + settle * 0.045;
      mesh.rotation.x = THREE.MathUtils.lerp(-0.04, 0, eased);

      const impact = reducedMotion || t <= 0 || t >= 1 ? 1 : 1 + Math.sin(t * Math.PI) * 0.03;
      mesh.scale.set(impact, impact, 1);

      // מצע שחור מקומי — עולה בדיוק עם הקרש שלו; לפני זה נשארת תמונת הקיר
      // המקורית גלויה מבעדו (דרך לוכד הצללים השקוף).
      const backing = backingRefs.current[i];
      if (backing) {
        backing.material.opacity = reducedMotion ? 1 : t;
      }
    });
  });

  return (
    <group>
      {slats.map((s, i) => (
        <mesh
          key={`backing-${i}`}
          ref={(el) => (backingRefs.current[i] = el)}
          position={[s.x, WALL_RECT.centerY, -0.015]}
        >
          <planeGeometry args={[s.step, WALL_RECT.height]} />
          <meshStandardMaterial
            color="#0a0908"
            roughness={1}
            metalness={0}
            transparent
            opacity={0}
          />
        </mesh>
      ))}
      {slats.map((s, i) => (
        <RoundedBox
          key={i}
          ref={(el) => (meshRefs.current[i] = el)}
          args={[s.width, WALL_RECT.height, 0.045]}
          radius={0.003}
          smoothness={2}
          position={[s.x, WALL_RECT.centerY, -0.02]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial map={woodTexture} roughness={0.95} metalness={0} />
        </RoundedBox>
      ))}
    </group>
  );
}
