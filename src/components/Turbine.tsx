"use client";

/** Pure SVG industrial turbine: outer casing + rotor + 16 blades. */
export default function Turbine({
  size = 320,
  speed = "med",
}: {
  size?: number;
  speed?: "slow" | "med" | "fast";
}) {
  const blades = Array.from({ length: 16 });
  const spinClass = speed === "slow" ? "spin-slow" : speed === "fast" ? "spin-fast" : "spin-med";
  return (
    <svg viewBox="-200 -200 400 400" width={size} height={size} className="block">
      <defs>
        <radialGradient id="hub" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e5c98c" />
          <stop offset="60%" stopColor="#9b7224" />
          <stop offset="100%" stopColor="#221d17" />
        </radialGradient>
        <radialGradient id="casing" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#3d332b" />
          <stop offset="65%" stopColor="#171410" />
          <stop offset="100%" stopColor="#08070a" />
        </radialGradient>
        <linearGradient id="blade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e5c98c" stopOpacity="0.9" />
          <stop offset="55%" stopColor="#9b7224" />
          <stop offset="100%" stopColor="#3d332b" />
        </linearGradient>
        <filter id="emberGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* outer casing */}
      <circle cx="0" cy="0" r="195" fill="url(#casing)" stroke="#5a4012" strokeWidth="2" />
      <circle cx="0" cy="0" r="185" fill="none" stroke="#2e2620" strokeWidth="1" />

      {/* bolts */}
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i / 24) * Math.PI * 2;
        return (
          <circle
            key={i}
            cx={Math.cos(a) * 178}
            cy={Math.sin(a) * 178}
            r="3.2"
            fill="#c89a3a"
            stroke="#5a4012"
          />
        );
      })}

      {/* inner ring */}
      <circle cx="0" cy="0" r="165" fill="none" stroke="#7a591b" strokeWidth="0.8" opacity="0.5" />

      {/* rotor + blades (spinning) */}
      <g className={spinClass}>
        {blades.map((_, i) => {
          const a = (i / blades.length) * 360;
          return (
            <g key={i} transform={`rotate(${a})`}>
              <path
                d="M 0 -20
                   L 14 -150
                   C 22 -160 8 -168 -2 -160
                   L -10 -22 Z"
                fill="url(#blade)"
                stroke="#221d17"
                strokeWidth="0.6"
              />
            </g>
          );
        })}
        <circle cx="0" cy="0" r="46" fill="url(#hub)" stroke="#5a4012" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="12" fill="#1a1614" stroke="#9b7224" />
        <circle cx="0" cy="0" r="3" fill="#ff8a3a" filter="url(#emberGlow)" />
      </g>

      {/* casing seams */}
      <line x1="-195" y1="0" x2="195" y2="0" stroke="#5a4012" strokeWidth="0.6" opacity="0.4" />
      <line x1="0" y1="-195" x2="0" y2="195" stroke="#5a4012" strokeWidth="0.6" opacity="0.4" />
    </svg>
  );
}
