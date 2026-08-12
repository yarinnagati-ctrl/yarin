"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { WALL_RECT } from "./wallRect";

const COOL_COLOR = new THREE.Color("#fff1de");
const WARM_COLOR = new THREE.Color("#ffcf9c");

// האור עצמו קבוע במיקומו (לא זז) — רק העוצמה/החום שלו עולים בעדינות ככל
// שיותר קרשים מותקנים, בהתאם ל: "the wood should react subtly... slightly
// warmer reflections, deeper shadows, more richness as the wall fills".
// תאורת החדר עצמה (התמונה) לא משתנה בכלל.
export default function WarmAccentLight({ progressRef, reducedMotion }) {
  const lightRef = useRef(null);

  useFrame(() => {
    if (!lightRef.current) return;
    const progress = reducedMotion ? 1 : progressRef.current.value;
    lightRef.current.intensity = 0.35 + progress * 0.2;
    lightRef.current.color.copy(COOL_COLOR).lerp(WARM_COLOR, progress * 0.7);
  });

  return (
    <directionalLight
      ref={lightRef}
      position={[WALL_RECT.centerX - 1.2, WALL_RECT.top + 0.6, 2]}
      intensity={0.75}
      color="#fff1de"
      castShadow
      shadow-mapSize={[1024, 1024]}
    />
  );
}
