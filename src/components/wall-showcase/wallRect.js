// גיאומטריית המסגרת האורתוגרפית — חייבת לשקף בדיוק את יחס הממדים של תמונת
// הרקע (room-backdrop.jpg) כדי שהקרשים ייושרו בפיקסל מול הקיר בתמונה.
// התמונה (1536x1024) היא הרקע הקבוע והסופי של הפיצ'ר — לא להחליף.
export const BACKDROP_ASPECT = 1536 / 1024;

export const FRUSTUM_HALF_HEIGHT = 1;
export const FRUSTUM_LEFT = -BACKDROP_ASPECT * FRUSTUM_HALF_HEIGHT;
export const FRUSTUM_RIGHT = BACKDROP_ASPECT * FRUSTUM_HALF_HEIGHT;
export const FRUSTUM_TOP = FRUSTUM_HALF_HEIGHT;
export const FRUSTUM_BOTTOM = -FRUSTUM_HALF_HEIGHT;

// מיקום קיר הבטון בתוך התמונה, כאחוזים (נמדד ידנית מהתמונה) → מומר ליחידות עולם.
// השוליים בצד שמאל מוזחים מעט כדי לא "לפגוע" בעציץ שחוצה את פינת הקיר.
const WALL_LEFT_PCT = 0.12;
const WALL_RIGHT_PCT = 0.941;
const WALL_TOP_PCT = 0.066;
const WALL_BOTTOM_PCT = 0.796;

function pctToX(pct) {
  return FRUSTUM_LEFT + pct * (FRUSTUM_RIGHT - FRUSTUM_LEFT);
}

function pctToY(pct) {
  // ציר Y בתמונה הופכי לציר Y בעולם (0% תמונה = למעלה = Y גבוה)
  return FRUSTUM_TOP - pct * (FRUSTUM_TOP - FRUSTUM_BOTTOM);
}

export const WALL_RECT = {
  left: pctToX(WALL_LEFT_PCT),
  right: pctToX(WALL_RIGHT_PCT),
  top: pctToY(WALL_TOP_PCT),
  bottom: pctToY(WALL_BOTTOM_PCT),
};

WALL_RECT.width = WALL_RECT.right - WALL_RECT.left;
WALL_RECT.height = WALL_RECT.top - WALL_RECT.bottom;
WALL_RECT.centerX = (WALL_RECT.left + WALL_RECT.right) / 2;
WALL_RECT.centerY = (WALL_RECT.top + WALL_RECT.bottom) / 2;
