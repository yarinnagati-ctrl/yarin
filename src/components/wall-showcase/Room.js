"use client";

import { WALL_RECT } from "./wallRect";

// לוכד צללים "שקוף" — לא צובע כלום, רק קולט את הצללים הרכים שהקרשים מטילים
// זה על זה. הרקע (תמונת הקיר המקורית) ממשיך להיראות מבעדו בכל מקום שעוד
// לא הותקן שם קרש — המצע השחור בין הקרשים מגיע מ-Slats.js, קרש-קרש.
export default function ShadowCatcher() {
  return (
    <mesh position={[WALL_RECT.centerX, WALL_RECT.centerY, -0.021]} receiveShadow>
      <planeGeometry args={[WALL_RECT.width, WALL_RECT.height]} />
      <shadowMaterial transparent opacity={0.35} />
    </mesh>
  );
}
