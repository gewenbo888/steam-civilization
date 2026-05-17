"use client";

/**
 * Hand-tuned Sankey-style energy flow:
 * heat sources → boilers → turbine → grid → end uses.
 * No external dep. Pure SVG.
 */
export default function SankeyFlow() {
  // x: 50, 280, 460, 650, 880
  // Flows are drawn as smooth bezier ribbons (filled paths).
  const ribbon = (
    x1: number,
    y1: number,
    w1: number,
    x2: number,
    y2: number,
    w2: number,
    fill: string,
    opacity = 0.85,
    key?: string
  ) => {
    const cx = (x1 + x2) / 2;
    const d =
      `M ${x1} ${y1} ` +
      `C ${cx} ${y1}, ${cx} ${y2}, ${x2} ${y2} ` +
      `L ${x2} ${y2 + w2} ` +
      `C ${cx} ${y2 + w2}, ${cx} ${y1 + w1}, ${x1} ${y1 + w1} Z`;
    return <path key={key} d={d} fill={fill} opacity={opacity} />;
  };

  return (
    <svg viewBox="0 0 980 460" className="block w-full h-auto">
      <defs>
        <linearGradient id="coalFlow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3d332b" />
          <stop offset="100%" stopColor="#1a1614" />
        </linearGradient>
        <linearGradient id="nukeFlow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a82d0a" />
          <stop offset="100%" stopColor="#ff6a1a" />
        </linearGradient>
        <linearGradient id="geoFlow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5a4012" />
          <stop offset="100%" stopColor="#c89a3a" />
        </linearGradient>
        <linearGradient id="solarFlow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#d8b260" />
          <stop offset="100%" stopColor="#ffaa6a" />
        </linearGradient>
        <linearGradient id="steamFlow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9c937f" />
          <stop offset="100%" stopColor="#ede4d3" />
        </linearGradient>
        <linearGradient id="elecFlow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#c89a3a" />
          <stop offset="100%" stopColor="#ff8a3a" />
        </linearGradient>
      </defs>

      {/* ---- SOURCES (x=50) ---- */}
      {/* Coal */}
      <rect x="20" y="30" width="40" height="80" fill="#1a1614" stroke="#5a4012" />
      <text x="40" y="22" textAnchor="middle" fill="#c89a3a" fontFamily="JetBrains Mono" fontSize="10">COAL</text>
      <text x="40" y="124" textAnchor="middle" fill="#7a6a58" fontFamily="JetBrains Mono" fontSize="9">35%</text>

      {/* Nuclear */}
      <rect x="20" y="150" width="40" height="65" fill="#7a1d05" stroke="#a82d0a" />
      <text x="40" y="142" textAnchor="middle" fill="#c89a3a" fontFamily="JetBrains Mono" fontSize="10">NUCLEAR</text>
      <text x="40" y="228" textAnchor="middle" fill="#7a6a58" fontFamily="JetBrains Mono" fontSize="9">10%</text>

      {/* Gas (CCGT) */}
      <rect x="20" y="245" width="40" height="55" fill="#221d17" stroke="#9b7224" />
      <text x="40" y="237" textAnchor="middle" fill="#c89a3a" fontFamily="JetBrains Mono" fontSize="10">GAS</text>
      <text x="40" y="313" textAnchor="middle" fill="#7a6a58" fontFamily="JetBrains Mono" fontSize="9">23%</text>

      {/* Geothermal */}
      <rect x="20" y="325" width="40" height="20" fill="#3d332b" stroke="#c89a3a" />
      <text x="40" y="317" textAnchor="middle" fill="#c89a3a" fontFamily="JetBrains Mono" fontSize="10">GEO</text>

      {/* Concentrated Solar */}
      <rect x="20" y="360" width="40" height="22" fill="#a82d0a" stroke="#ffaa6a" />
      <text x="40" y="395" textAnchor="middle" fill="#c89a3a" fontFamily="JetBrains Mono" fontSize="10">CSP</text>

      {/* ---- BOILERS / HEAT EXCHANGERS (x=260) ---- */}
      <rect x="260" y="30" width="50" height="200" fill="url(#iron)" stroke="#5a4012" rx="4" />
      <text x="285" y="22" textAnchor="middle" fill="#c89a3a" fontFamily="JetBrains Mono" fontSize="10">BOILER</text>
      <text x="285" y="245" textAnchor="middle" fill="#7a6a58" fontFamily="JetBrains Mono" fontSize="8" letterSpacing="2">HEAT EXCHANGE</text>

      <rect x="260" y="260" width="50" height="120" fill="url(#iron)" stroke="#5a4012" rx="4" />

      {/* ribbons SOURCE → BOILER */}
      {ribbon(60, 30, 80, 260, 30, 90, "url(#coalFlow)", 0.9, "r1")}
      {ribbon(60, 150, 65, 260, 122, 65, "url(#nukeFlow)", 0.85, "r2")}
      {ribbon(60, 245, 55, 260, 188, 42, "url(#geoFlow)", 0.85, "r3")}
      {ribbon(60, 325, 20, 260, 260, 50, "url(#geoFlow)", 0.7, "r4")}
      {ribbon(60, 360, 22, 260, 310, 50, "url(#solarFlow)", 0.85, "r5")}

      {/* ---- STEAM (boiler → turbine, x=460) ---- */}
      <rect x="460" y="80" width="60" height="240" fill="url(#iron)" stroke="#5a4012" rx="6" />
      <text x="490" y="72" textAnchor="middle" fill="#c89a3a" fontFamily="JetBrains Mono" fontSize="10">TURBINE</text>

      {ribbon(310, 60, 170, 460, 80, 80, "url(#steamFlow)", 0.9, "s1")}
      {ribbon(310, 260, 120, 460, 200, 120, "url(#steamFlow)", 0.85, "s2")}

      {/* ---- GENERATOR (x=650) ---- */}
      <rect x="650" y="120" width="60" height="180" fill="url(#iron)" stroke="#5a4012" rx="6" />
      <text x="680" y="112" textAnchor="middle" fill="#c89a3a" fontFamily="JetBrains Mono" fontSize="10">GENERATOR</text>

      {ribbon(520, 80, 240, 650, 120, 180, "url(#steamFlow)", 0.8, "sg")}

      {/* ---- GRID + END USES (x=880) ---- */}
      {/* Grid bar */}
      <rect x="850" y="50" width="14" height="350" fill="url(#elecFlow)" stroke="#5a4012" />
      <text x="857" y="42" textAnchor="middle" fill="#ff8a3a" fontFamily="JetBrains Mono" fontSize="10">GRID</text>

      {ribbon(710, 120, 180, 850, 110, 180, "url(#elecFlow)", 0.85, "ge")}

      {/* End uses */}
      <g fontFamily="JetBrains Mono" fontSize="10" fill="#ede4d3">
        <rect x="880" y="50" width="80" height="46" fill="#221d17" stroke="#5a4012" />
        <text x="920" y="78" textAnchor="middle">INDUSTRY</text>

        <rect x="880" y="106" width="80" height="46" fill="#221d17" stroke="#5a4012" />
        <text x="920" y="134" textAnchor="middle">DATA CENTER</text>

        <rect x="880" y="162" width="80" height="46" fill="#221d17" stroke="#5a4012" />
        <text x="920" y="190" textAnchor="middle">TRANSPORT</text>

        <rect x="880" y="218" width="80" height="46" fill="#221d17" stroke="#5a4012" />
        <text x="920" y="246" textAnchor="middle">HOUSEHOLD</text>

        <rect x="880" y="274" width="80" height="46" fill="#221d17" stroke="#5a4012" />
        <text x="920" y="302" textAnchor="middle">DEFENSE</text>

        <rect x="880" y="330" width="80" height="46" fill="#221d17" stroke="#5a4012" />
        <text x="920" y="358" textAnchor="middle">AI COMPUTE</text>
      </g>

      {/* connectors grid → end uses */}
      {[
        [864, 73, 880, 73],
        [864, 129, 880, 129],
        [864, 185, 880, 185],
        [864, 241, 880, 241],
        [864, 297, 880, 297],
        [864, 353, 880, 353],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#c89a3a" strokeWidth="2" />
      ))}

      {/* loss tag */}
      <text x="490" y="350" textAnchor="middle" fill="#7a6a58" fontFamily="JetBrains Mono" fontSize="9" letterSpacing="2">
        WASTE HEAT ≈ 60%   ·   废热 ≈ 60%
      </text>
      <line x1="380" y1="340" x2="600" y2="340" stroke="#5a4012" strokeWidth="0.6" opacity="0.5" />
    </svg>
  );
}
