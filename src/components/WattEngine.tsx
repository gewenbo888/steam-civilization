"use client";

/**
 * Animated cross-section of a Watt-style beam engine:
 * boiler → cylinder → piston → walking beam → flywheel.
 */
export default function WattEngine({ width = 760 }: { width?: number }) {
  return (
    <svg viewBox="0 0 760 360" width={width} className="block w-full h-auto">
      <defs>
        <linearGradient id="iron" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3d332b" />
          <stop offset="100%" stopColor="#0f0d0b" />
        </linearGradient>
        <linearGradient id="brassGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e5c98c" />
          <stop offset="100%" stopColor="#7a591b" />
        </linearGradient>
        <radialGradient id="firebox" cx="50%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#ffaa6a" />
          <stop offset="60%" stopColor="#ff6a1a" />
          <stop offset="100%" stopColor="#7a1d05" />
        </radialGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      {/* base */}
      <rect x="0" y="320" width="760" height="40" fill="#171410" />
      <line x1="0" y1="320" x2="760" y2="320" stroke="#5a4012" strokeWidth="1.2" />

      {/* ---- BOILER (left) ---- */}
      <g transform="translate(40 130)">
        <rect x="0" y="0" width="190" height="190" fill="url(#iron)" stroke="#5a4012" strokeWidth="1.4" rx="6" />
        {/* rivets */}
        {Array.from({ length: 8 }).map((_, i) => (
          <circle key={`b1-${i}`} cx={10 + i * 25} cy="10" r="2.4" fill="#c89a3a" />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <circle key={`b2-${i}`} cx={10 + i * 25} cy="180" r="2.4" fill="#c89a3a" />
        ))}
        {/* firebox */}
        <rect x="20" y="110" width="150" height="70" fill="url(#firebox)" opacity="0.95" />
        <rect x="20" y="110" width="150" height="70" fill="none" stroke="#a82d0a" strokeWidth="1" />
        {/* fire glow */}
        <circle cx="95" cy="145" r="35" fill="#ff8a3a" opacity="0.6" filter="url(#glow)" />
        {/* boiler face label */}
        <text x="95" y="60" textAnchor="middle" fill="#c89a3a" fontFamily="JetBrains Mono" fontSize="10" letterSpacing="3">
          BOILER · 锅炉
        </text>
        {/* steam outlet */}
        <rect x="180" y="30" width="50" height="14" fill="#221d17" stroke="#5a4012" />
      </g>

      {/* steam pipe */}
      <path
        d="M 270 168 L 320 168 L 320 130 L 380 130"
        fill="none"
        stroke="#5a4012"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M 270 168 L 320 168 L 320 130 L 380 130"
        fill="none"
        stroke="#c89a3a"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* ---- CYLINDER + PISTON ---- */}
      <g transform="translate(360 90)">
        <rect x="0" y="20" width="60" height="180" fill="url(#iron)" stroke="#5a4012" strokeWidth="1.2" rx="4" />
        {/* piston rod */}
        <g className="piston">
          <rect x="22" y="38" width="16" height="100" fill="#9c937f" stroke="#221d17" />
          <rect x="14" y="38" width="32" height="14" fill="#c89a3a" stroke="#5a4012" />
        </g>
        {/* rod exits cylinder upward */}
        <line x1="30" y1="20" x2="30" y2="-40" stroke="#9c937f" strokeWidth="4" />
        <text x="30" y="220" textAnchor="middle" fill="#c89a3a" fontFamily="JetBrains Mono" fontSize="9" letterSpacing="3">
          CYLINDER
        </text>
      </g>

      {/* ---- WALKING BEAM (pivot at center) ---- */}
      <g transform="translate(490 60)">
        {/* pivot post */}
        <rect x="-6" y="0" width="12" height="120" fill="url(#iron)" stroke="#5a4012" />
        {/* beam (slight rocking via inline animation) */}
        <g style={{ transformOrigin: "0 0", animation: "needleSweep 1.4s ease-in-out infinite", animationDirection: "alternate" }}>
          <rect x="-130" y="-8" width="260" height="16" fill="url(#brassGrad)" stroke="#5a4012" />
          <circle cx="0" cy="0" r="9" fill="#221d17" stroke="#c89a3a" strokeWidth="1.5" />
          {/* left link to piston rod */}
          <line x1="-120" y1="0" x2="-120" y2="40" stroke="#9c937f" strokeWidth="3" />
          <circle cx="-120" cy="0" r="4" fill="#c89a3a" />
          {/* right link to crank */}
          <line x1="120" y1="0" x2="120" y2="50" stroke="#9c937f" strokeWidth="3" />
          <circle cx="120" cy="0" r="4" fill="#c89a3a" />
        </g>
      </g>

      {/* ---- FLYWHEEL ---- */}
      <g transform="translate(640 200)">
        <circle cx="0" cy="0" r="68" fill="url(#iron)" stroke="#5a4012" strokeWidth="2" />
        <g className="spin-med">
          {Array.from({ length: 6 }).map((_, i) => (
            <line
              key={i}
              x1="0"
              y1="-62"
              x2="0"
              y2="62"
              stroke="#c89a3a"
              strokeWidth="3"
              transform={`rotate(${(i * 180) / 6})`}
            />
          ))}
          <circle cx="0" cy="0" r="12" fill="#c89a3a" stroke="#5a4012" />
          <circle cx="0" cy="0" r="3" fill="#ff6a1a" />
        </g>
        <circle cx="0" cy="0" r="62" fill="none" stroke="#9b7224" strokeWidth="1" opacity="0.5" />
        <text x="0" y="92" textAnchor="middle" fill="#c89a3a" fontFamily="JetBrains Mono" fontSize="9" letterSpacing="3">
          FLYWHEEL · 飞轮
        </text>
      </g>

      {/* ---- STEAM PUFFS escaping cylinder cap ---- */}
      <g transform="translate(390 60)">
        {[0, 1, 2].map((i) => (
          <circle
            key={i}
            cx={i * 6 - 6}
            cy="0"
            r="18"
            fill="#ede4d3"
            opacity="0.35"
            className="steam-puff"
            style={{ animationDelay: `${i * 0.9}s` }}
          />
        ))}
      </g>

      {/* labels along bottom */}
      <g fill="#7a6a58" fontFamily="JetBrains Mono" fontSize="10" letterSpacing="2">
        <text x="135" y="345" textAnchor="middle">FIRE</text>
        <text x="280" y="345" textAnchor="middle">STEAM</text>
        <text x="395" y="345" textAnchor="middle">PRESSURE</text>
        <text x="555" y="345" textAnchor="middle">MECHANICAL WORK</text>
        <text x="690" y="345" textAnchor="middle">ROTATION</text>
      </g>
      <line x1="40" y1="335" x2="730" y2="335" stroke="#5a4012" strokeWidth="0.5" opacity="0.4" />
    </svg>
  );
}
