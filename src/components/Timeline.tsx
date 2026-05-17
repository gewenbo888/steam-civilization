"use client";

const events = [
  { year: "1712", en: "Newcomen atmospheric engine", zh: "纽科门大气式蒸汽机", era: "Pre-industrial" },
  { year: "1769", en: "Watt’s separate condenser", zh: "瓦特分离冷凝器", era: "First Industrial Revolution" },
  { year: "1804", en: "Trevithick locomotive", zh: "特里维西克蒸汽机车", era: "First Industrial Revolution" },
  { year: "1831", en: "Faraday’s induction", zh: "法拉第电磁感应", era: "Electrical pre-history" },
  { year: "1884", en: "Parsons steam turbine", zh: "帕森斯汽轮机", era: "Turbine civilization begins" },
  { year: "1895", en: "Niagara hydro plant", zh: "尼亚加拉水电站", era: "Continuous-rotation grid" },
  { year: "1942", en: "Chicago Pile-1 — first sustained fission", zh: "芝加哥1号堆 · 首次受控裂变", era: "Nuclear heat source" },
  { year: "1954", en: "Obninsk · first grid-connected reactor", zh: "奥布宁斯克 · 首座并网核电站", era: "Nuclear turbines" },
  { year: "1971", en: "Single-cycle gas turbine grid power", zh: "燃气轮机并网发电", era: "Hydrocarbon turbine" },
  { year: "1986", en: "Modern combined-cycle (CCGT) standard", zh: "现代联合循环（CCGT）确立", era: "Heat-recycling steam" },
  { year: "2007", en: "iPhone — civilization moves to silicon load", zh: "iPhone · 文明负载迁移至硅片", era: "Digital demand spike" },
  { year: "2022", en: "Hyperscale GPU clusters ignite", zh: "超大规模 GPU 集群点燃", era: "AI heat era" },
  { year: "2026", en: "Steam still produces ~85% of world electricity", zh: "蒸汽汽轮机仍提供约 85% 世界电力", era: "Present (this site)" },
];

export default function Timeline() {
  return (
    <div className="relative">
      {/* spine */}
      <div className="absolute left-[88px] top-0 h-full w-px bg-gradient-to-b from-brass-700 via-brass-500 to-ember-600 opacity-50" />
      <div className="space-y-8">
        {events.map((e) => (
          <div key={e.year} className="grid grid-cols-[80px_24px_1fr] items-start gap-4">
            <div className="text-right font-mono text-sm text-brass-400">{e.year}</div>
            <div className="relative mt-1.5 h-3 w-3">
              <div className="absolute inset-0 rounded-full bg-ember-600 ember-pulse" />
              <div className="absolute inset-[3px] rounded-full bg-brass-300" />
            </div>
            <div>
              <div className="label-mono text-[0.6rem] text-ember-500">{e.era}</div>
              <div className="font-serif text-base text-steam-100">{e.en}</div>
              <div className="zh text-sm text-steam-500">{e.zh}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
