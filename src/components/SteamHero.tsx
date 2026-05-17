"use client";

import { useEffect, useRef } from "react";

/**
 * Canvas-2D volumetric steam + ember field for the hero.
 * No WebGL dependency — keeps first paint fast, works on every device.
 */
export default function SteamHero() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let w = (canvas.width = canvas.clientWidth * devicePixelRatio);
    let h = (canvas.height = canvas.clientHeight * devicePixelRatio);

    type P = { x: number; y: number; vx: number; vy: number; r: number; life: number; max: number; kind: 0 | 1 };
    const particles: P[] = [];

    const spawnSteam = (n: number) => {
      for (let i = 0; i < n; i++) {
        particles.push({
          x: w * 0.5 + (Math.random() - 0.5) * w * 0.55,
          y: h + Math.random() * 80,
          vx: (Math.random() - 0.5) * 0.6,
          vy: -Math.random() * 1.2 - 0.6,
          r: 40 + Math.random() * 120,
          life: 0,
          max: 260 + Math.random() * 320,
          kind: 0,
        });
      }
    };

    const spawnEmber = (n: number) => {
      for (let i = 0; i < n; i++) {
        particles.push({
          x: w * 0.5 + (Math.random() - 0.5) * w * 0.45,
          y: h - Math.random() * 40,
          vx: (Math.random() - 0.5) * 1.4,
          vy: -Math.random() * 2.4 - 0.8,
          r: 1.2 + Math.random() * 1.4,
          life: 0,
          max: 120 + Math.random() * 220,
          kind: 1,
        });
      }
    };

    const onResize = () => {
      w = canvas.width = canvas.clientWidth * devicePixelRatio;
      h = canvas.height = canvas.clientHeight * devicePixelRatio;
    };
    window.addEventListener("resize", onResize);

    spawnSteam(60);
    spawnEmber(40);

    const tick = () => {
      ctx.clearRect(0, 0, w, h);

      // Forge glow at bottom
      const grd = ctx.createRadialGradient(w * 0.5, h * 1.02, 0, w * 0.5, h * 1.0, h * 0.85);
      grd.addColorStop(0, "rgba(255,138,58,0.55)");
      grd.addColorStop(0.35, "rgba(255,106,26,0.22)");
      grd.addColorStop(1, "rgba(8,7,10,0)");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);

      // Periodic spawning
      if (Math.random() < 0.6) spawnSteam(1);
      if (Math.random() < 0.45) spawnEmber(1);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx * devicePixelRatio;
        p.y += p.vy * devicePixelRatio;
        p.vx *= 0.995;
        p.vy *= 0.992;

        const t = p.life / p.max;
        if (t >= 1) {
          particles.splice(i, 1);
          continue;
        }

        if (p.kind === 0) {
          // Steam
          const a = Math.sin(t * Math.PI) * 0.18;
          const sg = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * (0.6 + t * 0.6));
          sg.addColorStop(0, `rgba(237,228,211,${a * 0.9})`);
          sg.addColorStop(0.5, `rgba(212,202,180,${a * 0.55})`);
          sg.addColorStop(1, "rgba(0,0,0,0)");
          ctx.fillStyle = sg;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * (0.6 + t * 0.6), 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Ember spark
          const a = (1 - t) * 0.95;
          ctx.fillStyle = `rgba(255, ${Math.floor(160 + (1 - t) * 80)}, ${Math.floor(40 * (1 - t))}, ${a})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * devicePixelRatio, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 h-full w-full"
      style={{ filter: "saturate(1.15)" }}
    />
  );
}
