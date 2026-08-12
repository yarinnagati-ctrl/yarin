"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
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
      shadows={{ type: THREE.PCFShadowMap }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="!absolute !inset-0"
    >
      <CameraRig />
      <WarmAccentLight progressRef={progressRef} reducedMotion={reducedMotion} />
      <ambientLight intensity={0.7} color="#efe3d2" />

      <Suspense fallback={null}>
        <ShadowCatcher />
        <Slats progressRef={progressRef} reducedMotion={reducedMotion} count={count} />
      </Suspense>
    </Canvas>
  );
}
