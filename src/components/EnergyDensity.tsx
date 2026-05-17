"use client";

/**
 * Logarithmic comparison of energy density (MJ/kg).
 * Hand-tuned so the visual ladder reads instantly.
 */
const rows = [
  { en: "Wood (dry)", zh: "木材", v: 16, note: "Roman, Tang dynasty hearth" },
  { en: "Coal (bituminous)", zh: "烟煤", v: 24, note: "British Empire" },
  { en: "Crude oil", zh: "原油", v: 42, note: "American century" },
  { en: "Natural gas", zh: "天然气", v: 55, note: "CCGT peaker plants" },
  { en: "Hydrogen", zh: "氢气", v: 142, note: "Cryogenic, low volumetric" },
  { en: "Uranium-235 (fission)", zh: "铀-235 裂变", v: 82_000_000, note: "Nuclear age" },
  { en: "Deuterium (fusion)", zh: "氘 核聚变", v: 87_900_000, note: "Hypothetical future" },
];

export default function EnergyDensity() {
  // log10 scale, mapped to bar width 0..100%
  const logMax = Math.log10(100_000_000);
  return (
    <div className="overflow-hidden rounded-lg border border-iron-500 bg-iron-900/60 backdrop-blur">
      <div className="grid grid-cols-[1.4fr_3fr_auto] gap-3 border-b border-iron-500 px-5 py-3 label-mono">
        <div>Fuel · 燃料</div>
        <div>Energy density (log scale)</div>
        <div className="text-right">MJ / kg</div>
      </div>
      {rows.map((r) => {
        const pct = (Math.log10(r.v) / logMax) * 100;
        const nuclear = r.v > 100_000;
        return (
          <div
            key={r.en}
            className="grid grid-cols-[1.4fr_3fr_auto] items-center gap-3 border-b border-iron-700 px-5 py-3 last:border-0"
          >
            <div>
              <div className="font-serif text-steam-100">{r.en}</div>
              <div className="zh text-xs text-steam-500">{r.zh}</div>
              <div className="mt-0.5 text-[0.65rem] text-steam-700">{r.note}</div>
            </div>
            <div className="relative h-6 rounded-sm bg-iron-800">
              <div
                className="absolute inset-y-0 left-0 rounded-sm"
                style={{
                  width: `${pct}%`,
                  background: nuclear
                    ? "linear-gradient(90deg,#a82d0a,#ff6a1a,#ffaa6a)"
                    : "linear-gradient(90deg,#5a4012,#c89a3a,#e5c98c)",
                  boxShadow: nuclear
                    ? "0 0 18px rgba(255,106,26,0.45)"
                    : "0 0 6px rgba(200,154,58,0.25)",
                }}
              />
              {/* log-decade marks */}
              {[1, 2, 4, 6, 8].map((d) => (
                <div
                  key={d}
                  className="absolute inset-y-0 w-px bg-iron-500/60"
                  style={{ left: `${(d / logMax) * 100}%` }}
                />
              ))}
            </div>
            <div className="text-right font-mono text-sm text-steam-300">
              {r.v.toLocaleString()}
            </div>
          </div>
        );
      })}
    </div>
  );
}
