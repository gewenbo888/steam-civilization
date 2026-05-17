"use client";

export default function PressureGauge({
  label,
  unit = "MPa",
  size = 180,
}: {
  label: string;
  unit?: string;
  size?: number;
}) {
  return (
    <div className="inline-flex flex-col items-center">
      <svg viewBox="-110 -110 220 130" width={size} height={size * 0.6}>
        <defs>
          <radialGradient id="dial" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#221d17" />
            <stop offset="100%" stopColor="#0f0d0b" />
          </radialGradient>
          <linearGradient id="bezel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c89a3a" />
            <stop offset="100%" stopColor="#5a4012" />
          </linearGradient>
        </defs>
        {/* bezel */}
        <path d="M -102 0 A 102 102 0 0 1 102 0" fill="url(#bezel)" />
        <path d="M -95 0 A 95 95 0 0 1 95 0" fill="url(#dial)" />
        {/* ticks */}
        {Array.from({ length: 11 }).map((_, i) => {
          const angle = -180 + i * 18;
          const a = (angle * Math.PI) / 180;
          const r1 = 88;
          const r2 = i % 5 === 0 ? 70 : 78;
          return (
            <line
              key={i}
              x1={Math.cos(a) * r1}
              y1={Math.sin(a) * r1}
              x2={Math.cos(a) * r2}
              y2={Math.sin(a) * r2}
              stroke={i >= 8 ? "#ff6a1a" : "#c89a3a"}
              strokeWidth={i % 5 === 0 ? 2 : 1}
            />
          );
        })}
        {/* danger arc */}
        <path d="M 60 -55 A 88 88 0 0 1 88 0" fill="none" stroke="#ff6a1a" strokeWidth="3" opacity="0.7" />
        {/* needle */}
        <g className="needle">
          <line x1="0" y1="0" x2="0" y2="-78" stroke="#ff8a3a" strokeWidth="2.4" strokeLinecap="round" />
          <line x1="0" y1="0" x2="0" y2="10" stroke="#ff8a3a" strokeWidth="3" strokeLinecap="round" />
        </g>
        <circle cx="0" cy="0" r="6" fill="#c89a3a" stroke="#5a4012" strokeWidth="1" />
      </svg>
      <div className="-mt-1 text-center">
        <div className="label-mono">{label}</div>
        <div className="font-mono text-[0.65rem] text-steam-700">{unit}</div>
      </div>
    </div>
  );
}
