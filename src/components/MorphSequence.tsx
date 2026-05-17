"use client";

/**
 * The final reveal sequence: Watt engine → turbine → reactor → jet → GPU rack → planet.
 * Each "frame" is a stylized SVG icon, scrolled through as a horizontal industrial conveyor.
 */

const frames = [
  {
    key: "watt",
    en: "1769 · Watt engine",
    zh: "瓦特蒸汽机",
    svg: (
      <g>
        <rect x="-50" y="-20" width="60" height="60" fill="#171410" stroke="#5a4012" />
        <rect x="-46" y="0" width="52" height="36" fill="url(#ember)" />
        <line x1="20" y1="-10" x2="60" y2="-10" stroke="#9c937f" strokeWidth="4" />
        <circle cx="80" cy="-10" r="22" fill="#221d17" stroke="#c89a3a" strokeWidth="2" />
        <line x1="80" y1="-32" x2="80" y2="12" stroke="#c89a3a" strokeWidth="2" />
        <line x1="58" y1="-10" x2="102" y2="-10" stroke="#c89a3a" strokeWidth="2" />
      </g>
    ),
  },
  {
    key: "turbine",
    en: "1884 · Steam turbine",
    zh: "汽轮机",
    svg: (
      <g>
        {Array.from({ length: 12 }).map((_, i) => (
          <path
            key={i}
            d="M 0 -10 L 10 -55 L -10 -55 Z"
            fill="#c89a3a"
            stroke="#5a4012"
            transform={`rotate(${(i * 360) / 12})`}
          />
        ))}
        <circle cx="0" cy="0" r="14" fill="#221d17" stroke="#c89a3a" />
        <circle cx="0" cy="0" r="60" fill="none" stroke="#5a4012" strokeWidth="1.4" />
      </g>
    ),
  },
  {
    key: "reactor",
    en: "1954 · Nuclear reactor",
    zh: "核反应堆",
    svg: (
      <g>
        <rect x="-30" y="-50" width="60" height="100" fill="#171410" stroke="#5a4012" rx="20" />
        <circle cx="0" cy="0" r="20" fill="#a82d0a" />
        {[0, 60, 120].map((a) => (
          <ellipse
            key={a}
            cx="0"
            cy="0"
            rx="30"
            ry="9"
            fill="none"
            stroke="#ff6a1a"
            strokeWidth="1.4"
            transform={`rotate(${a})`}
            opacity="0.8"
          />
        ))}
        <circle cx="0" cy="0" r="4" fill="#ffaa6a" />
      </g>
    ),
  },
  {
    key: "jet",
    en: "1949 · Jet engine",
    zh: "喷气发动机",
    svg: (
      <g>
        <path d="M -60 -20 L 35 -20 L 60 0 L 35 20 L -60 20 Z" fill="#171410" stroke="#5a4012" />
        <circle cx="-30" cy="0" r="14" fill="#221d17" stroke="#c89a3a" />
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={i}
            x1="-30"
            y1="-14"
            x2="-30"
            y2="14"
            stroke="#c89a3a"
            strokeWidth="1.8"
            transform={`rotate(${i * 22.5} -30 0)`}
          />
        ))}
        <path d="M 60 0 L 92 -8 L 92 8 Z" fill="#ff6a1a" opacity="0.8" />
      </g>
    ),
  },
  {
    key: "gpu",
    en: "2026 · GPU server rack",
    zh: "GPU 服务器机柜",
    svg: (
      <g>
        <rect x="-32" y="-58" width="64" height="116" fill="#0f0d0b" stroke="#5a4012" />
        {Array.from({ length: 7 }).map((_, i) => (
          <g key={i}>
            <rect x="-28" y={-54 + i * 16} width="56" height="12" fill="#171410" stroke="#3d332b" />
            <circle cx="-22" cy={-48 + i * 16} r="1.5" fill="#ff6a1a" />
            <circle cx="-16" cy={-48 + i * 16} r="1.5" fill="#c89a3a" />
            <rect x="-8" y={-50 + i * 16} width="32" height="2" fill="#5a4012" />
          </g>
        ))}
      </g>
    ),
  },
  {
    key: "planet",
    en: "21st c. · Planetary heat engine",
    zh: "行星级热机",
    svg: (
      <g>
        <circle cx="0" cy="0" r="56" fill="#171410" stroke="#5a4012" />
        <circle cx="0" cy="0" r="56" fill="url(#planetGrad)" opacity="0.7" />
        {/* meridians */}
        {[0, 30, 60, 90, 120, 150].map((a) => (
          <ellipse
            key={a}
            cx="0"
            cy="0"
            rx="56"
            ry={Math.abs(Math.cos((a * Math.PI) / 180)) * 56}
            fill="none"
            stroke="#c89a3a"
            strokeWidth="0.6"
            opacity="0.5"
          />
        ))}
        <ellipse cx="0" cy="0" rx="56" ry="20" fill="none" stroke="#ff6a1a" strokeWidth="0.8" opacity="0.7" />
        <circle cx="0" cy="0" r="4" fill="#ff8a3a" />
      </g>
    ),
  },
];

export default function MorphSequence() {
  return (
    <div className="relative">
      <svg width="0" height="0" className="absolute">
        <defs>
          <radialGradient id="ember" cx="50%" cy="60%" r="50%">
            <stop offset="0%" stopColor="#ffaa6a" />
            <stop offset="100%" stopColor="#7a1d05" />
          </radialGradient>
          <radialGradient id="planetGrad" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#ff8a3a" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#9b7224" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#08070a" stopOpacity="0.9" />
          </radialGradient>
        </defs>
      </svg>

      {/* Conveyor rail */}
      <div className="absolute left-0 right-0 top-[88px] h-px bg-gradient-to-r from-transparent via-brass-500 to-transparent opacity-50" />

      <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-6">
        {frames.map((f, i) => (
          <div key={f.key} className="flex flex-col items-center text-center">
            <div className="flex h-44 w-44 items-center justify-center rounded-full border border-iron-500 bg-iron-900/70 shadow-brass">
              <svg viewBox="-100 -70 200 140" width="170" height="120">
                {f.svg}
              </svg>
            </div>
            <div className="mt-4 label-mono">{f.en}</div>
            <div className="zh mt-1 text-sm text-steam-300">{f.zh}</div>
            <div className="mt-2 font-mono text-[0.6rem] text-brass-500">FRAME · {String(i + 1).padStart(2, "0")}</div>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-14 max-w-3xl text-center font-serif text-xl italic leading-relaxed text-steam-300">
        Six frames. One mechanism. Across three centuries the carriers change —
        cast iron, alloy steel, zirconium, titanium, silicon — but the
        thermodynamic verb stays the same:
        <br />
        <span className="ember-glow not-italic"> heat is taught to rotate.</span>
      </p>
      <p className="zh mx-auto mt-3 max-w-3xl text-center text-base text-steam-500">
        六帧画面，一套机制。三个世纪以来，载体不断更替——
        铸铁、合金钢、锆合金、钛、硅——
        但热力学的动词从未改变：<span className="text-ember-500">让热学会旋转</span>。
      </p>
    </div>
  );
}
