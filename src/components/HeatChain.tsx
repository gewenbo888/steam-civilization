"use client";

/**
 * Four heat sources, all routed to the same boiler symbol.
 * Reveals: "All roads lead to steam."
 */

const sources = [
  {
    key: "coal",
    en: "Coal · Combustion",
    zh: "煤炭 · 燃烧",
    note: "Burned at 1,800 °C inside steel boilers",
    color: "#3d332b",
    glyph: (
      <g>
        <ellipse cx="0" cy="6" rx="22" ry="10" fill="#0f0d0b" />
        <path d="M -18 4 L -6 -10 L 0 -2 L 8 -16 L 14 -4 L 20 -10 L 22 6 Z" fill="#1a1614" stroke="#5a4012" />
      </g>
    ),
  },
  {
    key: "nuclear",
    en: "Nuclear · Fission",
    zh: "核能 · 裂变",
    note: "U-235 fission heats primary loop",
    color: "#a82d0a",
    glyph: (
      <g>
        <circle cx="0" cy="0" r="14" fill="#221d17" stroke="#a82d0a" />
        <circle cx="0" cy="0" r="3" fill="#ff8a3a" />
        {[0, 60, 120].map((a) => (
          <ellipse
            key={a}
            cx="0"
            cy="0"
            rx="22"
            ry="6"
            fill="none"
            stroke="#ff6a1a"
            strokeWidth="1.3"
            transform={`rotate(${a})`}
            opacity="0.85"
          />
        ))}
      </g>
    ),
  },
  {
    key: "geo",
    en: "Geothermal · Earth heat",
    zh: "地热 · 地心热",
    note: "Water drilled into hot rock returns as steam",
    color: "#7a591b",
    glyph: (
      <g>
        <path
          d="M -22 12 Q -16 -2 -8 4 Q 0 10 8 0 Q 16 -10 22 4 L 22 14 L -22 14 Z"
          fill="#5a4012"
          stroke="#c89a3a"
        />
        <path d="M -4 -2 L 0 -16 L 4 -2 Z" fill="#ff6a1a" opacity="0.85" />
      </g>
    ),
  },
  {
    key: "csp",
    en: "Solar · Concentrated thermal",
    zh: "太阳能 · 聚光集热",
    note: "Mirrors focus sunlight onto a molten-salt receiver",
    color: "#d8b260",
    glyph: (
      <g>
        <circle cx="0" cy="0" r="9" fill="#ffaa6a" />
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={i}
            x1="0"
            y1="0"
            x2="0"
            y2="-18"
            stroke="#ffaa6a"
            strokeWidth="1.2"
            transform={`rotate(${i * 45})`}
          />
        ))}
      </g>
    ),
  },
];

export default function HeatChain() {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto_1fr]">
      {/* Left column: 4 sources */}
      <div className="space-y-6">
        {sources.map((s) => (
          <div key={s.key} className="flex items-center gap-5">
            <svg viewBox="-30 -22 60 44" width="64" height="48" className="shrink-0">
              {s.glyph}
            </svg>
            <div>
              <div className="label-mono">{s.en}</div>
              <div className="zh text-sm text-steam-300">{s.zh}</div>
              <div className="mt-1 max-w-xs text-xs text-steam-700">{s.note}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Center: convergence arrows + boiler + steam */}
      <div className="relative flex items-center justify-center">
        <svg viewBox="-160 -160 320 320" width="320" height="320">
          {/* arrows */}
          {[-90, -30, 30, 90].map((angle, i) => {
            const a = (angle * Math.PI) / 180;
            const x = Math.cos(a) * -120;
            const y = Math.sin(a) * 120;
            return (
              <g key={i}>
                <line
                  x1={x}
                  y1={y}
                  x2="-30"
                  y2="0"
                  stroke="#9b7224"
                  strokeWidth="1.4"
                  opacity="0.6"
                  strokeDasharray="2 4"
                />
                <polygon points="-30,-4 -22,0 -30,4" fill="#c89a3a" />
              </g>
            );
          })}
          {/* central boiler */}
          <rect x="-30" y="-50" width="120" height="100" fill="#171410" stroke="#5a4012" strokeWidth="1.4" rx="6" />
          {Array.from({ length: 6 }).map((_, i) => (
            <circle key={`bl-${i}`} cx={-22 + i * 22} cy="-42" r="2" fill="#c89a3a" />
          ))}
          <rect x="-18" y="-14" width="96" height="38" fill="url(#firebox)" />
          <text
            x="30"
            y="46"
            textAnchor="middle"
            fill="#c89a3a"
            fontFamily="JetBrains Mono"
            fontSize="9"
            letterSpacing="3"
          >
            BOILER · 锅炉
          </text>
          {/* steam puffs going right */}
          <g>
            {[0, 1, 2, 3].map((i) => (
              <circle
                key={i}
                cx={95 + i * 14}
                cy={-30 + (i % 2) * 18}
                r={14 - i * 1.5}
                fill="#ede4d3"
                opacity={0.35 - i * 0.05}
              />
            ))}
          </g>
          <defs>
            <radialGradient id="firebox" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#ffaa6a" />
              <stop offset="100%" stopColor="#a82d0a" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Right column: outcome */}
      <div className="flex flex-col justify-center">
        <div className="label-mono">→ Output</div>
        <div className="heading-mono mt-1 text-3xl text-steam-100">
          High-pressure steam
        </div>
        <div className="zh mt-1 text-xl text-steam-300">高压蒸汽</div>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-steam-300">
          The fuel does not matter. What matters is the temperature gradient.
          Every primary energy source you list — coal, fission, magma, sunlight —
          is just a different way of boiling water.
        </p>
        <p className="zh mt-3 max-w-sm text-sm leading-relaxed text-steam-500">
          燃料并不重要，重要的是温度梯度。
          煤炭、核裂变、岩浆、阳光——
          人类列出的每一种一次能源，
          都只是把水烧开的不同方式。
        </p>
      </div>
    </div>
  );
}
