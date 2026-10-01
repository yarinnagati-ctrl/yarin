"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import * as THREE from "three";
import ShadowCatcher from "./Room";
import Slats from "./Slats";
import CameraRig from "./CameraRig";
import WarmAccentLight from "./WarmAccentLight";

// פחות קרשים במסכים קטנים — ביצועים, בלי לשנות את המראה הסופי.
function useSlatCount() {
  const [count, setCount] = useState(65);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const tabletQuery = window.matchMedia("(max-width: 1100px)");

    function update() {
      setCount(mobileQuery.matches ? 28 : tabletQuery.matches ? 46 : 65);
    }

    update();
    mobileQuery.addEventListener("change", update);
    tabletQuery.addEventListener("change", update);
    return () => {
      mobileQuery.removeEventListener("change", update);
      tabletQuery.removeEventListener("change", update);
    };
  }, []);

  return count;
}

// ה-Canvas שקוף לגמרי — התמונה הפוטוריאליסטית (DOM, נעולה) נראית מאחוריו,
// כולל ברווחים שבין הקרשים ובחלקי הקיר שעדיין לא הותקנו (לא רקע שחור).
// כאן מצוירים רק: לוכד צללים שקוף, הקרשים המונפשים, ותאורה קבועה.
export default function Scene({ progressRef, reducedMotion }) {
  const count = useSlatCount();

  return (
    <Canvas
      shadows={{ type: THREE.PCFSoftShadowMap }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="!absolute !inset-0"
    >
      <CameraRig />
      <WarmAccentLight progressRef={progressRef} reducedMotion={reducedMotion} />
      <ambientLight intensity={0.25} color="#efe3d2" />

      {/* תאורה סביבתית — מוסיפה השתקפויות רכות על העץ ומעניקה עומק לחומר */}
      <Environment resolution={256}>
        <Lightformer
          form="rect"
          intensity={1.5}
          position={[0, 1.8, 2]}
          scale={[8, 4, 1]}
          color="#fff5e6"
        />
        <Lightformer
          form="rect"
          intensity={0.7}
          position={[-3.5, 0, 1]}
          rotation={[0, Math.PI / 5, 0]}
          scale={[5, 8, 1]}
          color="#e8c8a0"
        />
        <Lightformer
          form="rect"
          intensity={0.5}
          position={[3.5, -0.5, 1]}
          rotation={[0, -Math.PI / 5, 0]}
          scale={[5, 8, 1]}
          color="#d4a76a"
        />
      </Environment>

      <Suspense fallback={null}>
        <ShadowCatcher />
        <Slats progressRef={progressRef} reducedMotion={reducedMotion} count={count} />
      </Suspense>
    </Canvas>
  );
}
