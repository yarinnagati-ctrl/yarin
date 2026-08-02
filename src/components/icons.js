// אייקוני קו מינימליסטיים, מצוירים ידנית (ללא ספריית אייקונים חיצונית) — שומרים על אחידות עיצובית.

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconCarpentry(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20V4h16" />
      <path d="M4 12h8" />
      <path d="M12 4v8" />
    </svg>
  );
}

export function IconWorkshop(props) {
  const teeth = [0, 60, 120, 180, 240, 300];
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
      {teeth.map((deg) => (
        <line
          key={deg}
          x1="12"
          y1="2.2"
          x2="12"
          y2="5.2"
          transform={`rotate(${deg} 12 12)`}
        />
      ))}
    </svg>
  );
}

export function IconConcrete(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 9l8-4 8 4-8 4-8-4Z" />
      <path d="M4 9v6l8 4 8-4V9" />
      <path d="M12 13v6" />
    </svg>
  );
}

export function IconPVC(props) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="16" height="4" rx="1" />
      <rect x="4" y="10" width="16" height="4" rx="1" />
      <rect x="4" y="16" width="16" height="4" rx="1" />
    </svg>
  );
}

export function IconWallCladding(props) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="3" width="20" height="18" rx="1" />
      <line x1="2" y1="9" x2="22" y2="9" />
      <line x1="2" y1="15" x2="22" y2="15" />
      <line x1="8" y1="3" x2="8" y2="9" />
      <line x1="16" y1="3" x2="16" y2="9" />
      <line x1="12" y1="9" x2="12" y2="15" />
      <line x1="4" y1="15" x2="4" y2="21" />
      <line x1="20" y1="15" x2="20" y2="21" />
      <line x1="12" y1="15" x2="12" y2="21" />
    </svg>
  );
}

export function IconProjects(props) {
  const windows = [
    [5.5, 12],
    [7.5, 12],
    [5.5, 16],
    [7.5, 16],
    [15, 7],
    [18, 7],
    [15, 11],
    [18, 11],
    [15, 15],
    [18, 15],
  ];
  return (
    <svg {...base} {...props}>
      <rect x="3" y="9" width="7" height="12" />
      <rect x="12" y="3" width="9" height="18" />
      {windows.map(([x, y]) => (
        <line key={`${x}-${y}`} x1={x} y1={y} x2={x} y2={y + 0.01} />
      ))}
    </svg>
  );
}

export function IconStar(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.1 6.6L12 17.8l-5.8 3.8 1.1-6.6L2.5 9.4l6.6-.9L12 2.5Z" />
    </svg>
  );
}

export function IconQuote(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7.17 6C4.87 6 3 7.87 3 10.17c0 2.02 1.42 3.7 3.32 4.1-.2 1.44-1.1 2.6-2.32 3.23l.6 1.2c2.6-1.06 4.4-3.5 4.4-6.53V10.17C9 7.87 9.47 6 7.17 6Zm10 0c-2.3 0-4.17 1.87-4.17 4.17 0 2.02 1.42 3.7 3.32 4.1-.2 1.44-1.1 2.6-2.32 3.23l.6 1.2c2.6-1.06 4.4-3.5 4.4-6.53V10.17C19 7.87 19.47 6 17.17 6Z" />
    </svg>
  );
}

export function IconArrows(props) {
  return (
    <svg {...base} {...props}>
      <path d="M8 8l-4 4 4 4M16 8l4 4-4 4" />
    </svg>
  );
}

export function IconClock(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function IconUsers(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
      <path d="M16 5.2c1.5.4 2.5 1.7 2.5 3.3s-1 2.9-2.5 3.3" />
      <path d="M18 14.3c1.9.6 3.2 2.1 3.2 4.2" />
    </svg>
  );
}

export function IconMapPin(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

export function IconCheck(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12.5l5 5.5L20 6" />
    </svg>
  );
}
