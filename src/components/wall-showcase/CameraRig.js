"use client";

import { OrthographicCamera } from "@react-three/drei";
import { FRUSTUM_LEFT, FRUSTUM_RIGHT, FRUSTUM_TOP, FRUSTUM_BOTTOM } from "./wallRect";

// המצלמה נעולה לגמרי — ללא זום, סיבוב או תזוזה (לפי דרישה מפורשת: "Do not
// change the camera"). מיושרת בדיוק מול מלבן הקיר בתמונת הרקע הקבועה.
export default function CameraRig() {
  return (
    <OrthographicCamera
      makeDefault
      left={FRUSTUM_LEFT}
      right={FRUSTUM_RIGHT}
      top={FRUSTUM_TOP}
      bottom={FRUSTUM_BOTTOM}
      near={0.1}
      far={10}
      position={[0, 0, 5]}
      zoom={1}
    />
  );
}
