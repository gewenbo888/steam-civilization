import dynamic from "next/dynamic";
import Turbine from "@/components/Turbine";
import PressureGauge from "@/components/PressureGauge";
import WattEngine from "@/components/WattEngine";
import SankeyFlow from "@/components/SankeyFlow";
import HeatChain from "@/components/HeatChain";
import EnergyDensity from "@/components/EnergyDensity";
import Timeline from "@/components/Timeline";
import MorphSequence from "@/components/MorphSequence";

const SteamHero = dynamic(() => import("@/components/SteamHero"), { ssr: false });

export default function Page() {
  return (
    <main className="relative overflow-x-hidden bg-void text-steam-100">
      {/* ============================================================
          TOP BAR
         ============================================================ */}
      <header className="fixed left-0 right-0 top-0 z-40 flex items-center justify-between border-b border-iron-700/70 bg-void/80 px-6 py-3 backdrop-blur md:px-10">
        <div className="flex items-center gap-3">
          <div className="relative h-7 w-7">
            <div className="absolute inset-0 rounded-sm bg-iron-700 ring-1 ring-brass-700" />
            <div className="absolute inset-1 rounded-[2px] bg-ember-700/70" />
            <div className="absolute inset-[10px] rounded-full bg-ember-500 ember-pulse" />
          </div>
          <div className="leading-tight">
            <div className="heading-mono text-sm text-steam-100">Steam Civilization</div>
            <div className="zh text-[0.65rem] text-steam-500">蒸汽文明 · 世界从未真正离开蒸汽</div>
          </div>
        </div>
        <nav className="hidden gap-6 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-steam-500 md:flex">
          <a href="#i" className="hover:text-brass-400">I · Age of Steam</a>
          <a href="#ii" className="hover:text-brass-400">II · Misunderstanding</a>
          <a href="#iii" className="hover:text-brass-400">III · Turbine</a>
          <a href="#iv" className="hover:text-brass-400">IV · Data Centers</a>
          <a href="#v" className="hover:text-brass-400">V · Thermodynamics</a>
          <a href="#vi" className="hover:text-brass-400">VI · Reveal</a>
        </nav>
        <a
          href="https://psyverse.fun"
          className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-brass-500 hover:text-ember-500"
        >
          ← Psyverse
        </a>
      </header>

      {/* ============================================================
          HERO
         ============================================================ */}
      <section className="relative grain flex min-h-screen items-end overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <SteamHero />
        </div>
        {/* faint Watt engine etching behind text */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-end justify-end opacity-[0.07]">
          <div className="-mr-16 -mb-16 w-[1200px]">
            <Turbine size={1200} speed="slow" />
          </div>
        </div>
        <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pb-24 md:px-12">
          <div className="label-mono">Psyverse · Archive No. 17</div>
          <div className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.4em] text-steam-700">
            EN · 中文  ·  thermodynamic atlas  ·  long-scroll documentary
          </div>
          <h1 className="mt-6 heading-mono leading-[0.88] text-[12vw] text-steam-100 md:text-[7.5rem] lg:text-[9.5rem]">
            STEAM
            <br />
            <span className="ember-glow">CIVILIZATION</span>
          </h1>
          <h2 className="zh mt-2 text-3xl text-steam-300 md:text-5xl">蒸汽文明</h2>
          <p className="mt-10 max-w-2xl font-serif text-lg leading-relaxed text-steam-300 md:text-xl">
            Humanity believes it entered the <em>electrical age</em>, then the
            <em> digital age</em>, then the <em>AI age</em>. But beneath every
            abstraction, modern civilization still runs on an upgraded form of
            steam.
          </p>
          <p className="zh mt-4 max-w-2xl text-base leading-relaxed text-steam-500 md:text-lg">
            人类以为自己依次进入了「电气时代」、「数字时代」、「AI 时代」。
            但在所有抽象的下面，现代文明依然运行在一种被升级的蒸汽之上。
          </p>

          {/* The thermodynamic equation */}
          <div className="mt-14 rounded-md border border-iron-500 bg-iron-900/60 p-5 backdrop-blur">
            <div className="label-mono">The unchanging core · 永恒的内核</div>
            <div className="mt-3 flex flex-wrap items-center gap-3 font-mono text-sm text-steam-100 md:text-lg">
              <span className="rounded bg-ember-800/40 px-3 py-1 text-ember-300">HEAT</span>
              <span className="text-brass-500">→</span>
              <span className="rounded bg-ember-700/40 px-3 py-1 text-ember-300">PRESSURE</span>
              <span className="text-brass-500">→</span>
              <span className="rounded bg-brass-700/40 px-3 py-1 text-brass-300">ROTATION</span>
              <span className="text-brass-500">→</span>
              <span className="rounded bg-brass-600/40 px-3 py-1 text-brass-200">ELECTRICITY</span>
              <span className="text-brass-500">→</span>
              <span className="rounded bg-steam-700/30 px-3 py-1 text-steam-100">CIVILIZATION</span>
            </div>
            <div className="zh mt-3 font-mono text-xs text-steam-500">
              热 → 压力 → 旋转 → 电 → 文明
            </div>
          </div>

          {/* Gauges */}
          <div className="mt-14 flex flex-wrap items-end gap-8 opacity-90">
            <PressureGauge label="Boiler Press." unit="MPa  ·  锅炉压力" />
            <PressureGauge label="Turbine RPM" unit="×10³  ·  涡轮转速" />
            <PressureGauge label="Grid Load" unit="TW  ·  电网负荷" />
            <div className="ml-auto hidden self-end font-mono text-[0.7rem] uppercase tracking-[0.25em] text-brass-500 md:block">
              Scroll downward into the furnace ↓
            </div>
          </div>
        </div>
        {/* section fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-40 section-fade" />
      </section>

      {/* ============================================================
          MARQUEE
         ============================================================ */}
      <div className="relative border-y border-iron-700 bg-coal py-3">
        <div className="flex w-[200%] gap-12 whitespace-nowrap marquee font-mono text-[0.7rem] uppercase tracking-[0.3em] text-brass-400">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12">
              <span>Coal ↔ Steam</span>
              <span>·</span>
              <span>Fission ↔ Steam</span>
              <span>·</span>
              <span>Magma ↔ Steam</span>
              <span>·</span>
              <span>Sunlight ↔ Steam</span>
              <span>·</span>
              <span>燃烧 → 沸腾 → 旋转 → 电流</span>
              <span>·</span>
              <span>The cloud is made of steel, copper, water, and heat</span>
              <span>·</span>
              <span>云不在云端，云在锅炉房</span>
              <span>·</span>
              <span>STEAM CIVILIZATION · ARCHIVE NO. 17</span>
              <span>·</span>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================================
          SECTION I — THE AGE OF STEAM
         ============================================================ */}
      <section id="i" className="relative px-6 py-32 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="label-mono">Section I</div>
              <h2 className="mt-3 heading-mono text-5xl text-steam-100 md:text-7xl">
                The Age of Steam
              </h2>
              <h3 className="zh mt-1 text-2xl text-steam-300 md:text-4xl">蒸汽时代</h3>
            </div>
            <div className="hidden text-right font-mono text-[0.65rem] uppercase tracking-[0.25em] text-brass-500 md:block">
              1712 – 1900
              <br />
              first industrial revolution
            </div>
          </div>
          <div className="mt-6 h-px brass-rule" />

          <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-2">
            <div>
              <p className="font-serif text-xl leading-relaxed text-steam-100">
                For two centuries the most powerful force on Earth was a
                pressurized iron pot. It pulled coal out of British seams,
                threaded railways across continents, drained cotton fields into
                Manchester mills, and woke the dead end of Europe into an
                industrial empire. Boiling water — that was the engine.
              </p>
              <p className="zh mt-5 text-base leading-relaxed text-steam-500">
                有两个世纪，地球上最强大的力量是一只加压的铸铁罐。
                它从英国煤层中拽出煤炭，把铁轨织遍大陆，把棉田灌注进曼彻斯特工厂，
                把欧洲沉睡的边缘地带唤醒成一个工业帝国。烧开水——就是发动机。
              </p>

              <blockquote className="my-12 border-l-2 border-ember-600 pl-6">
                <p className="font-serif text-3xl italic leading-snug text-steam-100 md:text-4xl">
                  “The first machine civilization was powered by boiling water.”
                </p>
                <p className="zh mt-3 text-lg text-steam-300">
                  「第一个机器文明，是用烧开的水驱动的。」
                </p>
              </blockquote>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {[
                  ["Time", "时间", "Train timetables forced humanity onto a single clock for the first time"],
                  ["Labor", "劳动", "Factory shifts replaced agricultural seasons"],
                  ["Transport", "交通", "Coal-fired locomotion collapsed continents"],
                  ["Cities", "城市", "Manchester, Pittsburgh, Birmingham — built around boilers"],
                  ["Empire", "帝国", "British naval steam projected power across all oceans"],
                  ["Mind", "心智", "Industrial logic became the metaphor for everything"],
                ].map(([en, zh, note]) => (
                  <div key={en} className="rounded border border-iron-600 bg-iron-900/60 p-4">
                    <div className="label-mono">{en}</div>
                    <div className="zh text-sm text-steam-300">{zh}</div>
                    <div className="mt-1 text-xs text-steam-500">{note}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="sticky top-28 rounded-md border border-iron-600 bg-iron-900/50 p-6">
                <div className="label-mono mb-4">Anatomy · Watt-style beam engine</div>
                <WattEngine />
                <p className="mt-6 max-w-prose font-serif text-sm text-steam-300">
                  Coal heats water → high-pressure steam pushes a piston → the
                  piston rocks a walking beam → the beam turns a flywheel →
                  the flywheel becomes a textile loom, a railway driver, a
                  ship’s propeller, the printing press.
                </p>
                <p className="zh mt-3 text-sm text-steam-500">
                  煤加热水 → 高压蒸汽推动活塞 → 活塞带动横梁 → 横梁转动飞轮 →
                  飞轮变成织机、机车、螺旋桨、印刷机。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 rounded-md border border-brass-700/50 bg-coal/60 p-10">
            <p className="ember-glow heading-mono text-center text-3xl leading-tight md:text-6xl">
              STEAM WAS THE FIRST ARTIFICIAL MUSCLE
              <br />
              IN HUMAN HISTORY.
            </p>
            <p className="zh mt-4 text-center text-xl text-steam-300">
              蒸汽是人类历史上第一块人造肌肉。
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION II — THE GREAT MISUNDERSTANDING
         ============================================================ */}
      <section id="ii" className="relative border-t border-iron-700 px-6 py-32 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="label-mono">Section II</div>
              <h2 className="mt-3 heading-mono text-5xl text-steam-100 md:text-7xl">
                The Great Misunderstanding
              </h2>
              <h3 className="zh mt-1 text-2xl text-steam-300 md:text-4xl">伟大的误解</h3>
            </div>
            <div className="hidden text-right font-mono text-[0.65rem] uppercase tracking-[0.25em] text-brass-500 md:block">
              1884 — Parsons turbine
              <br />
              continuous rotational flow
            </div>
          </div>
          <div className="mt-6 h-px brass-rule" />

          <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="font-serif text-xl leading-relaxed text-steam-100">
                The textbook story says electricity replaced steam — that the
                age of fire ended, and the age of the electron began.
                <br />
                <span className="text-brass-300">It is wrong.</span>
              </p>
              <p className="zh mt-4 text-base leading-relaxed text-steam-500">
                教科书叙事说：电力取代了蒸汽——火的时代结束了，电子的时代开始了。
                <span className="text-brass-300"> 这是错的。</span>
              </p>

              <p className="mt-8 font-serif text-lg leading-relaxed text-steam-200">
                Electricity did not <em>replace</em> steam. Electricity scaled
                <em> because</em> steam evolved. In 1884 Charles Parsons replaced
                the rocking piston with a long, finned drum spinning inside a
                jet of high-pressure vapor. Pulsed mechanical motion became
                smooth rotational flow. That single geometric change — from
                reciprocation to rotation — is the entire bridge from the
                mechanical age to the electrical one.
              </p>
              <p className="zh mt-5 text-base leading-relaxed text-steam-500">
                电力并没有「取代」蒸汽。电力之所以能扩张，
                是因为蒸汽进化了。1884 年，帕森斯把摇动的活塞换成
                一只在高压蒸汽中旋转的长鼓——脉冲机械运动变成了平滑的旋转流。
                这一次几何形态的改变——从往复到旋转——
                就是机械时代通往电气时代的整座桥梁。
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="rounded border border-iron-600 bg-iron-900/60 p-5">
                  <div className="label-mono text-ember-500">Reciprocating engine</div>
                  <div className="zh text-sm text-steam-300">往复式蒸汽机</div>
                  <p className="mt-3 text-sm text-steam-300">
                    Pulsed. Loud. Inefficient at scale. Cannot couple cleanly to
                    a high-RPM electrical generator.
                  </p>
                </div>
                <div className="rounded border border-brass-700 bg-iron-900/60 p-5 shadow-brass">
                  <div className="label-mono text-brass-300">Steam turbine</div>
                  <div className="zh text-sm text-steam-300">汽轮机</div>
                  <p className="mt-3 text-sm text-steam-100">
                    Continuous. Silent at distance. Couples directly to an AC
                    alternator at 3,000 or 3,600 RPM. Scales to gigawatts in a
                    single hall.
                  </p>
                </div>
              </div>

              <div className="mt-12 rounded-md border border-iron-600 bg-iron-900/60 p-6">
                <div className="label-mono mb-3">Hidden chain · 隐藏的链条</div>
                <div className="flex flex-wrap items-center gap-2 font-mono text-sm text-steam-100">
                  {["COAL", "BOILER", "STEAM", "TURBINE", "GENERATOR", "GRID"].map((step, i) => (
                    <span key={step} className="inline-flex items-center gap-2">
                      <span className="rounded bg-iron-700 px-3 py-1 text-brass-300">{step}</span>
                      {i < 5 && <span className="text-brass-500">→</span>}
                    </span>
                  ))}
                </div>
                <div className="zh mt-3 font-mono text-xs text-steam-500">
                  煤 → 锅炉 → 蒸汽 → 汽轮机 → 发电机 → 电网
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="relative rounded-md border border-iron-500 bg-iron-900/60 p-6 shadow-brass">
                <div className="label-mono mb-4 text-center">Turbine hall · 汽轮机大厅</div>
                <Turbine size={320} speed="med" />
                <p className="mt-4 max-w-xs text-center text-xs text-steam-500">
                  A modern 1 GW turbine spins at 3,000 RPM. Its blade tips
                  approach the speed of sound. Inside one rotor casing lives
                  the electrical demand of a mid-sized city.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 rounded-md border border-brass-700/50 bg-coal/60 p-10">
            <p className="ember-glow heading-mono text-center text-3xl leading-tight md:text-6xl">
              THE ELECTRICAL AGE
              <br />
              WAS BUILT BY ADVANCED STEAM.
            </p>
            <p className="zh mt-4 text-center text-xl text-steam-300">
              电气时代，是由升级版的蒸汽建成的。
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION III — THE TURBINE CIVILIZATION
         ============================================================ */}
      <section id="iii" className="relative border-t border-iron-700 px-6 py-32 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="label-mono">Section III</div>
              <h2 className="mt-3 heading-mono text-5xl text-steam-100 md:text-7xl">
                The Turbine Civilization
              </h2>
              <h3 className="zh mt-1 text-2xl text-steam-300 md:text-4xl">涡轮文明</h3>
            </div>
            <div className="hidden text-right font-mono text-[0.65rem] uppercase tracking-[0.25em] text-brass-500 md:block">
              ≈ 85% of world electricity
              <br />
              is still produced by spinning a steam turbine
            </div>
          </div>
          <div className="mt-6 h-px brass-rule" />

          <div className="mt-14">
            <p className="mx-auto max-w-4xl text-center font-serif text-xl leading-relaxed text-steam-100">
              Almost every large electrical generator in the world today —
              regardless of label, country, or political alignment — is
              ultimately a tea kettle attached to a spinning fan.
            </p>
            <p className="zh mx-auto mt-3 max-w-4xl text-center text-base text-steam-500">
              今天世界上几乎每一台大型发电机——无论挂着什么标签、属于哪个国家、立场如何——
              本质上都是一只接着旋转风扇的水壶。
            </p>
          </div>

          <div className="mt-16">
            <HeatChain />
          </div>

          <div className="mt-24 grid grid-cols-1 gap-10 md:grid-cols-3">
            <div className="rounded border border-iron-600 bg-iron-900/60 p-6">
              <div className="label-mono">Share of grid electricity from steam</div>
              <div className="zh text-xs text-steam-500">来自汽轮机的电网电力占比</div>
              <div className="mt-6 flex items-end gap-2">
                <span className="heading-mono text-7xl text-ember-500">85</span>
                <span className="mb-2 text-3xl text-brass-300">%</span>
              </div>
              <p className="mt-4 text-sm text-steam-300">
                Coal (28%) + Gas-CCGT* (22%) + Nuclear (10%) + Biomass (3%) +
                Geothermal (1%) + CSP (&lt;1%) + waste-heat recovery loops. The
                remaining 15% is hydro, PV, and wind — the only forms that bypass
                steam entirely.
              </p>
              <div className="mt-3 font-mono text-[0.65rem] text-steam-700">
                * combined cycle: gas turbine + bottoming steam turbine
              </div>
            </div>

            <div className="rounded border border-iron-600 bg-iron-900/60 p-6">
              <div className="label-mono">Largest turbine installations</div>
              <div className="zh text-xs text-steam-500">最大汽轮机机组</div>
              <table className="mt-4 w-full text-left text-sm text-steam-300">
                <tbody className="font-mono">
                  <tr className="border-b border-iron-700">
                    <td className="py-2 text-brass-300">Taishan-1</td>
                    <td className="py-2 text-right">1,750 MW</td>
                  </tr>
                  <tr className="border-b border-iron-700">
                    <td className="py-2 text-brass-300">Olkiluoto-3</td>
                    <td className="py-2 text-right">1,600 MW</td>
                  </tr>
                  <tr className="border-b border-iron-700">
                    <td className="py-2 text-brass-300">Hinkley C unit</td>
                    <td className="py-2 text-right">1,630 MW</td>
                  </tr>
                  <tr className="border-b border-iron-700">
                    <td className="py-2 text-brass-300">Drax (per unit)</td>
                    <td className="py-2 text-right">645 MW</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-brass-300">Ivanpah CSP block</td>
                    <td className="py-2 text-right">133 MW</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-4 text-xs text-steam-500">
                Different fuels, same rotor geometry — Siemens / GE / Mitsubishi-Toshiba
                / Dongfang turbines spin at 1,500–3,600 RPM, give or take the same
                blade dimensions.
              </p>
            </div>

            <div className="rounded border border-iron-600 bg-iron-900/60 p-6">
              <div className="label-mono">Per-fuel boiling temperature</div>
              <div className="zh text-xs text-steam-500">不同燃料的沸腾温度</div>
              <ul className="mt-4 space-y-3 font-mono text-sm text-steam-300">
                <li className="flex items-center justify-between border-b border-iron-700 pb-2">
                  <span>Pulverized coal</span>
                  <span className="text-ember-400">1,500–1,800 °C</span>
                </li>
                <li className="flex items-center justify-between border-b border-iron-700 pb-2">
                  <span>Natural gas combustor</span>
                  <span className="text-ember-400">1,400–1,600 °C</span>
                </li>
                <li className="flex items-center justify-between border-b border-iron-700 pb-2">
                  <span>PWR reactor core</span>
                  <span className="text-ember-400">325 °C @ 15.5 MPa</span>
                </li>
                <li className="flex items-center justify-between border-b border-iron-700 pb-2">
                  <span>Hot dry rock (EGS)</span>
                  <span className="text-ember-400">180–260 °C</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>CSP receiver (molten salt)</span>
                  <span className="text-ember-400">565 °C</span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-steam-500">
                Different temperatures, identical mission: drive water across the
                phase boundary into pressurized steam that can spin a rotor.
              </p>
            </div>
          </div>

          <div className="mt-24 rounded-md border border-brass-700/50 bg-coal/60 p-10">
            <p className="ember-glow heading-mono text-center text-3xl leading-tight md:text-6xl">
              MODERN CIVILIZATION
              <br />
              IS A PLANETARY HEAT ENGINE.
            </p>
            <p className="zh mt-4 text-center text-xl text-steam-300">
              现代文明，是一台行星级的热机。
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION IV — DATA CENTERS ARE MODERN FACTORIES
         ============================================================ */}
      <section id="iv" className="relative border-t border-iron-700 px-6 py-32 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="label-mono">Section IV</div>
              <h2 className="mt-3 heading-mono text-5xl text-steam-100 md:text-7xl">
                Data Centers Are Modern Factories
              </h2>
              <h3 className="zh mt-1 text-2xl text-steam-300 md:text-4xl">数据中心是新时代的锅炉房</h3>
            </div>
            <div className="hidden text-right font-mono text-[0.65rem] uppercase tracking-[0.25em] text-brass-500 md:block">
              one hyperscale campus ≈
              <br />
              a small steel mill
            </div>
          </div>
          <div className="mt-6 h-px brass-rule" />

          <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="font-serif text-xl leading-relaxed text-steam-100">
                Software lives nowhere. There is no cloud. There are buildings.
                There are 200,000-ft² hangars in Loudoun County and Goyang and
                Datong filled with rack after rack of accelerators, drinking
                gigawatts, exhaling kilotons of warm water, fed by trunk lines
                that terminate — almost always — at a spinning turbine.
              </p>
              <p className="zh mt-5 text-base leading-relaxed text-steam-500">
                软件不存在于任何地方。没有云。只有建筑。
                有占地 20,000 平方米的机库——在劳登县、在高阳、在大同——
                堆满一排又一排加速器，吞噬千兆瓦，吐出千吨级温水，
                由干线供电，而那些干线，几乎无一例外地，
                终点是一台旋转的汽轮机。
              </p>

              <div className="mt-10 space-y-4">
                {[
                  { k: "Power per GPU", v: "≈ 700 W (B200)", n: "TDP at full sustained load" },
                  { k: "Per rack", v: "≈ 130 kW", n: "NVL72 dense rack envelope" },
                  { k: "Per hyperscale campus", v: "1 – 2 GW", n: "comparable to a single nuclear unit" },
                  { k: "Cooling water draw", v: "1–4 ML/day", n: "evaporative + liquid loop" },
                  { k: "Waste heat recovered", v: "≈ 0%", n: "discarded to outside air or condensers" },
                  { k: "Grid scaling forecast 2030", v: "8% of global power", n: "AI infrastructure alone" },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="grid grid-cols-[1.2fr_1fr_1.4fr] items-baseline gap-4 border-b border-iron-700 pb-3"
                  >
                    <div className="label-mono">{row.k}</div>
                    <div className="font-mono text-lg text-ember-400">{row.v}</div>
                    <div className="text-xs text-steam-500">{row.n}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="rounded border border-iron-600 bg-iron-900/60 p-6">
                <div className="label-mono mb-4">19th c. factory ↔ 21st c. hyperscale</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="zh text-xs text-steam-500">十九世纪工厂</div>
                    <ul className="mt-3 space-y-2 font-serif text-sm text-steam-300">
                      <li>· Coal boiler in the basement</li>
                      <li>· Overhead belt driving line shaft</li>
                      <li>· Looms, lathes, drills on the line</li>
                      <li>· Cooling: river</li>
                      <li>· Output: thread, iron, paper</li>
                      <li>· Workforce: 4,000 hands</li>
                      <li>· Smoke stack visible 20 km</li>
                    </ul>
                  </div>
                  <div>
                    <div className="zh text-xs text-steam-500">二十一世纪超大规模数据中心</div>
                    <ul className="mt-3 space-y-2 font-serif text-sm text-steam-100">
                      <li>· Turbine 800 km upstream</li>
                      <li>· 220 kV substation → busbars</li>
                      <li>· GPUs, switches, NICs on the rack</li>
                      <li>· Cooling: river / aquifer / chilled water</li>
                      <li>· Output: tokens, gradients, weights</li>
                      <li>· Workforce: 30 SREs on shift</li>
                      <li>· Heat plume visible on thermal satellite</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-6 font-serif text-sm italic text-steam-300">
                  The architecture flipped: workforce shrank, energy grew. But
                  the physical layout is the same diagram with new labels.
                </p>
              </div>

              <div className="mt-8 rounded border border-iron-600 bg-iron-900/60 p-6">
                <div className="label-mono mb-4">Steam pipe → fiber cable</div>
                <svg viewBox="0 0 600 100" className="block w-full">
                  {/* steam pipe */}
                  <rect x="20" y="38" width="260" height="24" fill="url(#pipeIron)" stroke="#5a4012" />
                  <circle cx="40" cy="50" r="3" fill="#c89a3a" />
                  <circle cx="60" cy="50" r="3" fill="#c89a3a" />
                  <circle cx="260" cy="50" r="3" fill="#c89a3a" />
                  {/* transition zone */}
                  <path d="M 280 38 L 320 38 L 340 50 L 320 62 L 280 62 Z" fill="#5a4012" />
                  {/* fiber */}
                  <rect x="340" y="44" width="240" height="12" fill="#171410" stroke="#9b7224" />
                  <line x1="340" y1="50" x2="580" y2="50" stroke="#ff6a1a" strokeWidth="1.5" strokeDasharray="6 4" />
                  {/* labels */}
                  <text x="80" y="86" fill="#c89a3a" fontFamily="JetBrains Mono" fontSize="9" letterSpacing="2">
                    1850 · STEAM PIPE · 蒸汽管
                  </text>
                  <text x="395" y="86" fill="#ff8a3a" fontFamily="JetBrains Mono" fontSize="9" letterSpacing="2">
                    2025 · FIBER CABLE · 光纤
                  </text>
                  <defs>
                    <linearGradient id="pipeIron" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3d332b" />
                      <stop offset="100%" stopColor="#0f0d0b" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className="mt-4 font-serif text-sm text-steam-300">
                  Same diameter. Same function: move energy across distance to
                  the point where work happens. The medium changed from
                  pressurized vapor to coherent light, but the topology is a
                  carbon copy.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <div className="label-mono mb-4">Where the watts actually come from · 瓦特真正来自哪里</div>
            <SankeyFlow />
          </div>

          <div className="mt-24 rounded-md border border-brass-700/50 bg-coal/60 p-10">
            <p className="ember-glow heading-mono text-center text-3xl leading-tight md:text-6xl">
              THE CLOUD IS MADE OF STEEL,
              <br />
              COPPER, WATER, AND HEAT.
            </p>
            <p className="zh mt-4 text-center text-xl text-steam-300">
              「云」是由钢、铜、水和热量构成的。
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION V — THERMODYNAMICS IS THE EMPEROR
         ============================================================ */}
      <section id="v" className="relative border-t border-iron-700 px-6 py-32 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="label-mono">Section V</div>
              <h2 className="mt-3 heading-mono text-5xl text-steam-100 md:text-7xl">
                Thermodynamics Is the Real Emperor
              </h2>
              <h3 className="zh mt-1 text-2xl text-steam-300 md:text-4xl">热力学才是真正的统治者</h3>
            </div>
            <div className="hidden text-right font-mono text-[0.65rem] uppercase tracking-[0.25em] text-brass-500 md:block">
              every civilization is
              <br />
              an energy ceiling
            </div>
          </div>
          <div className="mt-6 h-px brass-rule" />

          <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="font-serif text-xl leading-relaxed text-steam-100">
                Every civilization is constrained by five thermodynamic facts:
                how much energy it can extract, how dense that energy is, how
                fast it can move it, how much heat it can dissipate, and how
                much entropy it can tolerate before its institutions break.
              </p>
              <p className="zh mt-5 text-base leading-relaxed text-steam-500">
                每一种文明都被五个热力学事实所约束：
                能开采多少能量、能量的密度有多大、能以多快的速度移动它、
                能耗散多少废热、以及在制度崩溃前能容忍多少熵增。
              </p>

              <ul className="mt-10 space-y-5">
                {[
                  { en: "Roman wood economy", zh: "罗马的木材经济", n: "Ceiling: forests around the Mediterranean. Once the trees fall, the legions stop." },
                  { en: "British coal empire", zh: "英国的煤炭帝国", n: "Ceiling: coal seams across the Midlands and South Wales. Steam power × naval projection = global empire." },
                  { en: "American oil civilization", zh: "美国的石油文明", n: "Ceiling: hydrocarbon access from Spindletop to Ghawar. Suburbs, jet aviation, the dollar." },
                  { en: "Nuclear civilization", zh: "核文明", n: "Ceiling: uranium fuel cycle + political tolerance of risk. A power 10⁶× denser, paid for in dread." },
                  { en: "AI · electricity civilization", zh: "AI · 电力文明", n: "Ceiling: how fast we can build new gigawatts. The supply curve, not the model, sets the pace." },
                ].map((c) => (
                  <li key={c.en} className="border-l-2 border-brass-700 pl-5">
                    <div className="label-mono">{c.en}</div>
                    <div className="zh text-sm text-steam-300">{c.zh}</div>
                    <p className="mt-1 text-sm text-steam-500">{c.n}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <EnergyDensity />

              <div className="mt-10 rounded border border-iron-600 bg-iron-900/60 p-6">
                <div className="label-mono mb-2">Entropy simulation · 熵增模拟</div>
                <div className="zh text-xs text-steam-500">a thermodynamic schematic, not a measurement</div>
                <svg viewBox="0 0 600 180" className="mt-4 block w-full">
                  {/* hot box */}
                  <rect x="20" y="40" width="120" height="100" fill="#a82d0a" />
                  <rect x="20" y="40" width="120" height="100" fill="none" stroke="#ff6a1a" strokeWidth="2" />
                  <text x="80" y="160" textAnchor="middle" fill="#ff8a3a" fontFamily="JetBrains Mono" fontSize="10">
                    T_HOT  ·  1,500 °C
                  </text>
                  {/* arrow */}
                  <line x1="150" y1="90" x2="440" y2="90" stroke="#c89a3a" strokeWidth="2" strokeDasharray="5 4" />
                  <polygon points="440,84 452,90 440,96" fill="#c89a3a" />
                  <text x="295" y="78" textAnchor="middle" fill="#ede4d3" fontFamily="JetBrains Mono" fontSize="10" letterSpacing="2">
                    WORK EXTRACTED  ·  η ≤ 1 − T_cold / T_hot
                  </text>
                  {/* cold box */}
                  <rect x="460" y="40" width="120" height="100" fill="#171410" />
                  <rect x="460" y="40" width="120" height="100" fill="none" stroke="#9c937f" strokeWidth="2" />
                  <text x="520" y="160" textAnchor="middle" fill="#9c937f" fontFamily="JetBrains Mono" fontSize="10">
                    T_COLD  ·  25 °C
                  </text>
                  {/* waste arrows */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <path
                      key={i}
                      d={`M ${200 + i * 40} 120 q 6 30 12 36`}
                      stroke="#5a4012"
                      strokeWidth="1"
                      fill="none"
                      opacity="0.6"
                    />
                  ))}
                  <text x="300" y="170" textAnchor="middle" fill="#7a6a58" fontFamily="JetBrains Mono" fontSize="9" letterSpacing="2">
                    WASTE HEAT  ·  ΔS &gt; 0
                  </text>
                </svg>
                <p className="mt-4 text-sm text-steam-300">
                  Carnot’s rule: the upper bound of useful work is set by the
                  temperature difference. No clever software, no perfect
                  policy, no exotic material relaxes it.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr]">
            <blockquote className="rounded-md border border-iron-600 bg-iron-900/50 p-10">
              <p className="font-serif text-3xl italic leading-snug text-steam-100 md:text-4xl">
                “History is the story of energy systems evolving.”
              </p>
              <p className="zh mt-3 text-lg text-steam-300">
                「历史，是能量系统演化的故事。」
              </p>
              <p className="mt-8 font-serif text-2xl italic leading-snug text-steam-100 md:text-3xl">
                “Civilizations do not rise from ideas alone.
                <br /> They rise from energy gradients.”
              </p>
              <p className="zh mt-3 text-lg text-steam-300">
                「文明并非仅由思想升起。
                <br /> 它们升起于能量梯度。」
              </p>
            </blockquote>

            <div className="rounded border border-iron-600 bg-iron-900/60 p-6">
              <div className="label-mono mb-4">Per-capita primary energy use · 人均一次能源消耗</div>
              <div className="zh mb-4 text-xs text-steam-500">approximate, kWh/person/year</div>
              <table className="w-full font-mono text-sm text-steam-300">
                <tbody>
                  <tr className="border-b border-iron-700">
                    <td className="py-2 text-brass-300">Hunter-gatherer</td>
                    <td className="py-2 text-right">≈ 1,200</td>
                  </tr>
                  <tr className="border-b border-iron-700">
                    <td className="py-2 text-brass-300">Imperial Rome</td>
                    <td className="py-2 text-right">≈ 3,000</td>
                  </tr>
                  <tr className="border-b border-iron-700">
                    <td className="py-2 text-brass-300">1850 Britain</td>
                    <td className="py-2 text-right">≈ 17,000</td>
                  </tr>
                  <tr className="border-b border-iron-700">
                    <td className="py-2 text-brass-300">1950 USA</td>
                    <td className="py-2 text-right">≈ 60,000</td>
                  </tr>
                  <tr className="border-b border-iron-700">
                    <td className="py-2 text-brass-300">2026 USA</td>
                    <td className="py-2 text-right">≈ 80,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-brass-300">Hypothetical AI-era ceiling</td>
                    <td className="py-2 text-right text-ember-400">≈ 250,000?</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-4 text-xs text-steam-500">
                Each step is a phase change in the underlying heat engine —
                bigger boiler, faster rotor, denser fuel.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-24 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <div className="label-mono">Timeline · 时间线</div>
              <h3 className="heading-mono mt-2 text-3xl text-steam-100">
                Industrial energy systems
              </h3>
              <h4 className="zh mt-1 text-lg text-steam-300">工业能源系统演化</h4>
              <p className="mt-6 max-w-md font-serif text-sm leading-relaxed text-steam-300">
                Each milestone is a new way of getting heat to rotate something
                useful. Notice the asymptote — every era after 1884 is a
                refinement of the same Parsons trick.
              </p>
              <p className="zh mt-3 max-w-md text-sm leading-relaxed text-steam-500">
                每一个里程碑，都是让热去旋转某样有用之物的新方式。
                注意那条渐近线——1884 年之后，每个时代都不过是同一招的精修。
              </p>
            </div>
            <Timeline />
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION VI — WE STILL LIVE INSIDE THE STEAM AGE
         ============================================================ */}
      <section
        id="vi"
        className="relative border-t border-iron-700 px-6 py-32 md:px-12"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 0%, rgba(255,106,26,0.18), transparent 55%), radial-gradient(ellipse at 50% 100%, rgba(255,138,58,0.15), transparent 55%)",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="label-mono">Section VI · Final reveal</div>
              <h2 className="mt-3 heading-mono text-5xl text-steam-100 md:text-7xl">
                We Still Live Inside the Steam Age
              </h2>
              <h3 className="zh mt-1 text-2xl text-steam-300 md:text-4xl">我们依然活在蒸汽时代</h3>
            </div>
            <div className="hidden text-right font-mono text-[0.65rem] uppercase tracking-[0.25em] text-brass-500 md:block">
              the operating system
              <br />
              never rebooted
            </div>
          </div>
          <div className="mt-6 h-px brass-rule" />

          <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-2">
            <div>
              <p className="font-serif text-xl leading-relaxed text-steam-100">
                Modernity never escaped steam. It miniaturized it, accelerated
                it, electrified it, computerized it. But underneath every
                upgrade the same four verbs run in sequence:
              </p>
              <p className="zh mt-5 text-base leading-relaxed text-steam-500">
                现代性从未真正逃离蒸汽。它只是把它小型化、加速、电气化、数字化。
                但每一次升级之下，永远是同样四个动词在依次运行：
              </p>

              <ol className="mt-10 space-y-4 font-serif text-2xl text-steam-100">
                <li className="flex items-baseline gap-4">
                  <span className="font-mono text-base text-brass-500">i.</span>
                  Heat becomes motion.
                  <span className="zh ml-3 text-base text-steam-500">热变为运动。</span>
                </li>
                <li className="flex items-baseline gap-4">
                  <span className="font-mono text-base text-brass-500">ii.</span>
                  Motion becomes electricity.
                  <span className="zh ml-3 text-base text-steam-500">运动变为电流。</span>
                </li>
                <li className="flex items-baseline gap-4">
                  <span className="font-mono text-base text-brass-500">iii.</span>
                  Electricity becomes computation.
                  <span className="zh ml-3 text-base text-steam-500">电流变为计算。</span>
                </li>
                <li className="flex items-baseline gap-4">
                  <span className="font-mono text-base text-brass-500">iv.</span>
                  Computation becomes civilization.
                  <span className="zh ml-3 text-base text-steam-500">计算变为文明。</span>
                </li>
              </ol>

              <p className="mt-12 font-serif text-lg leading-relaxed text-steam-200">
                Open any AI cluster, and at the bottom of the diagram you will
                still find a pressurized iron pot — somewhere in Anhui or
                Tennessee or the Île-de-France — boiling water at 600 °C, so a
                rotor can spin at 3,000 RPM, so a copper coil can extrude
                electrons, so a transistor can flip, so a token can be
                predicted, so a sentence can appear on your screen, so this
                paragraph can claim that we are no longer in the steam age.
              </p>
              <p className="zh mt-5 text-base leading-relaxed text-steam-500">
                打开任何一座 AI 集群——在图的最底层，
                你依然会看到一只加压的铸铁罐——在安徽、田纳西，或法兰西岛——
                把水烧到 600 °C，让一只转子在每分钟 3000 转下旋转，
                让一卷铜线推出电子，让一个晶体管翻转，让一个 token 被预测出来，
                让一行文字出现在你的屏幕上——
                让这段文字得以宣称：我们已经不再处于蒸汽时代。
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="relative rounded-full border border-brass-700 bg-iron-900/50 p-8 shadow-ember">
                <Turbine size={420} speed="fast" />
              </div>
              <div className="mt-6 text-center font-mono text-[0.7rem] uppercase tracking-[0.3em] text-brass-500">
                Same rotor. New name.
              </div>
              <div className="zh mt-1 text-sm text-steam-500">同一只转子，新的名字。</div>
            </div>
          </div>

          {/* Morph sequence */}
          <div className="mt-32">
            <div className="text-center">
              <div className="label-mono">The cinematic transformation · 影像演化</div>
              <h3 className="heading-mono mt-3 text-4xl text-steam-100 md:text-6xl">
                Six frames, three centuries
              </h3>
              <h4 className="zh mt-1 text-xl text-steam-300">六帧画面，三个世纪</h4>
            </div>
            <div className="mt-12">
              <MorphSequence />
            </div>
          </div>

          {/* Closing monumental quote */}
          <div className="mt-32 rounded-md border border-ember-600/40 bg-coal/80 p-14 shadow-ember">
            <p className="ember-glow heading-mono text-center text-4xl leading-tight md:text-7xl">
              WE DID NOT LEAVE THE STEAM AGE.
              <br />
              WE SCALED IT TO PLANETARY DIMENSIONS.
            </p>
            <p className="zh mt-6 text-center text-2xl text-steam-200">
              我们没有离开蒸汽时代。
              <br />
              我们只是把它放大到了行星尺度。
            </p>
            <div className="mx-auto mt-12 h-px w-40 brass-rule" />
            <p className="mt-6 text-center font-mono text-[0.65rem] uppercase tracking-[0.4em] text-brass-500">
              Steam Civilization · Archive No. 17 · Psyverse · 2026
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          FOOTER
         ============================================================ */}
      <footer className="border-t border-iron-700 bg-coal px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <div className="label-mono">Steam Civilization</div>
            <div className="zh mt-1 text-sm text-steam-300">蒸汽文明</div>
            <p className="mt-4 max-w-sm font-serif text-sm leading-relaxed text-steam-500">
              A thermodynamic atlas: the operating system beneath the
              electrical, digital, and AI ages was always — and remains —
              boiling water.
            </p>
          </div>
          <div>
            <div className="label-mono">Reading order</div>
            <ul className="mt-4 space-y-2 font-mono text-xs uppercase tracking-[0.25em] text-steam-500">
              <li><a href="#i" className="hover:text-brass-400">I · The Age of Steam</a></li>
              <li><a href="#ii" className="hover:text-brass-400">II · The Great Misunderstanding</a></li>
              <li><a href="#iii" className="hover:text-brass-400">III · The Turbine Civilization</a></li>
              <li><a href="#iv" className="hover:text-brass-400">IV · Data Centers are Factories</a></li>
              <li><a href="#v" className="hover:text-brass-400">V · Thermodynamics is the Emperor</a></li>
              <li><a href="#vi" className="hover:text-brass-400">VI · We Still Live in the Steam Age</a></li>
            </ul>
          </div>
          <div>
            <div className="label-mono">Companion archives</div>
            <ul className="mt-4 space-y-2 font-serif text-sm text-steam-300">
              <li><a href="https://electric-civilization.psyverse.fun" className="hover:text-brass-300">Electric Civilization · 电气文明</a></li>
              <li><a href="https://token-civilization.psyverse.fun" className="hover:text-brass-300">Token Civilization · 代币文明</a></li>
              <li><a href="https://civilization-kernel.psyverse.fun" className="hover:text-brass-300">Civilization Kernel · 文明内核</a></li>
              <li><a href="https://meta-civilization.psyverse.fun" className="hover:text-brass-300">Meta Civilization · 元文明</a></li>
              <li className="pt-3"><a href="https://psyverse.fun" className="text-ember-500 hover:text-ember-400">↩ All Psyverse archives</a></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 h-px max-w-7xl brass-rule" />
        <div className="mx-auto mt-6 flex max-w-7xl items-center justify-between text-[0.6rem] uppercase tracking-[0.3em] text-steam-700">
          <div>© 2026 Gewenbo · Psyverse</div>
          <div>EN · 中文 · long-scroll documentary</div>
        </div>
      </footer>
    </main>
  );
}
