"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { WALL_RECT } from "./wallRect";
import { withBasePath } from "@/lib/basePath";

// שולחן קונסול יוקרתי במרכז הקיר — מופיע רק בסוף הגלילה, אחרי שרוב הקרשים
// כבר מותקנים, כדי לא להפריע לאנימציית ההתקנה.
const TABLE_WIDTH = WALL_RECT.width * 0.26;
const TOP_THICKNESS = 0.038;
const TABLE_DEPTH = 0.16;
const LEG_WIDTH = 0.035;
const LEG_HEIGHT = WALL_RECT.height * 0.20;
const STRETCHER_THICKNESS = 0.02;

const TABLE_X = WALL_RECT.centerX;
const TABLE_BASE_Y = WALL_RECT.bottom;
const TABLE_Z = 0.09;

const TINT = new THREE.Color("hsl(28, 45%, 33%)");

const APPEAR_START = 0.80;
const APPEAR_SPAN = 0.12;

function backOut(t, overshoot = 0.8) {
  const x = t - 1;
  return x * x * ((overshoot + 1) * x + overshoot) + 1;
}

export default function Table({ progressRef, reducedMotion }) {
  const groupRef = useRef(null);
  const matRefs = useRef([]);

  const baseTexture = useTexture(withBasePath("/images/wall-showcase/wood-slat-warm.jpg"));
  const woodTexture = useMemo(() => {
    const t = baseTexture.clone();
    t.needsUpdate = true;
    t.colorSpace = THREE.SRGBColorSpace;
    t.wrapS = THREE.RepeatWrapping;
    t.wrapT = THREE.ClampToEdgeWrapping;
    t.repeat.set(2, 1);
    t.anisotropy = 8;
    return t;
  }, [baseTexture]);

  useFrame(() => {
    if (!groupRef.current) return;
    const progress = reducedMotion ? 1 : progressRef.current.value;
    const t = THREE.MathUtils.clamp((progress - APPEAR_START) / APPEAR_SPAN, 0, 1);
    const eased = reducedMotion ? 1 : backOut(t);

    // עולה מלמטה בתנועה עדינה
    groupRef.current.position.y = THREE.MathUtils.lerp(
      TABLE_BASE_Y - 0.35,
      TABLE_BASE_Y,
      eased
    );

    // עמעום כניסה
    matRefs.current.forEach((mat) => {
      if (mat) mat.opacity = t;
    });
  });

  const legX = TABLE_WIDTH / 2 - LEG_WIDTH * 1.5;

  return (
    <group ref={groupRef} position={[TABLE_X, TABLE_BASE_Y, TABLE_Z]}>
      {/* לוח שולחן */}
      <RoundedBox
        args={[TABLE_WIDTH, TOP_THICKNESS, TABLE_DEPTH]}
        radius={0.003}
        smoothness={2}
        position={[0, LEG_HEIGHT + TOP_THICKNESS / 2, 0]}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          ref={(el) => (matRefs.current[0] = el)}
          map={woodTexture}
          color={TINT}
          roughness={0.65}
          metalness={0}
          clearcoat={0.2}
          clearcoatRoughness={0.55}
          transparent
          opacity={0}
        />
      </RoundedBox>

      {/* רגל שמאל */}
      <RoundedBox
        args={[LEG_WIDTH, LEG_HEIGHT, TABLE_DEPTH * 0.75]}
        radius={0.002}
        smoothness={2}
        position={[-legX, LEG_HEIGHT / 2, 0]}
        castShadow
      >
        <meshPhysicalMaterial
          ref={(el) => (matRefs.current[1] = el)}
          map={woodTexture}
          color={TINT}
          roughness={0.72}
          metalness={0}
          clearcoat={0.15}
          clearcoatRoughness={0.65}
          transparent
          opacity={0}
        />
      </RoundedBox>

      {/* רגל ימין */}
      <RoundedBox
        args={[LEG_WIDTH, LEG_HEIGHT, TABLE_DEPTH * 0.75]}
        radius={0.002}
        smoothness={2}
        position={[legX, LEG_HEIGHT / 2, 0]}
        castShadow
      >
        <meshPhysicalMaterial
          ref={(el) => (matRefs.current[2] = el)}
          map={woodTexture}
          color={TINT}
          roughness={0.72}
          metalness={0}
          clearcoat={0.15}
          clearcoatRoughness={0.65}
          transparent
          opacity={0}
        />
      </RoundedBox>

      {/* אום תחתון (קורה רוחבית) */}
      <RoundedBox
        args={[TABLE_WIDTH - LEG_WIDTH * 3, STRETCHER_THICKNESS, TABLE_DEPTH * 0.5]}
        radius={0.002}
        smoothness={2}
        position={[0, LEG_HEIGHT * 0.2, 0]}
        castShadow
      >
        <meshPhysicalMaterial
          ref={(el) => (matRefs.current[3] = el)}
          map={woodTexture}
          color={TINT}
          roughness={0.72}
          metalness={0}
          clearcoat={0.15}
          clearcoatRoughness={0.65}
          transparent
          opacity={0}
        />
      </RoundedBox>
    </group>
  );
}
