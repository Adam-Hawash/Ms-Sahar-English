"use client";

import { motion } from "framer-motion";

/**
 * Giant English letters floating in the hero background — the signature touch
 * of the platform: S · E · G floaters at low opacity + glowing orbs + MS watermark
 */
const FLOATERS = [
  { ch: "S", x: "7%", y: "20%", size: "clamp(80px, 10vw, 170px)", cls: "letter-outline-hero", dur: 10, delay: 0, rot: -12 },
  { ch: "E", x: "40%", y: "66%", size: "clamp(60px, 7.5vw, 130px)", cls: "letter-glow", dur: 11.5, delay: 0.8, rot: 10 },
  { ch: "G", x: "72%", y: "14%", size: "clamp(64px, 8vw, 140px)", cls: "letter-outline-hero", dur: 9.5, delay: 1.6, rot: 8 },
];

const ORBS = [
  { x: "-8%", y: "-12%", size: 420, color: "rgba(192,38,211,0.32)" },
  { x: "70%", y: "10%", size: 360, color: "rgba(217,70,239,0.2)" },
  { x: "30%", y: "75%", size: 300, color: "rgba(245,158,11,0.13)" },
];

export function LettersBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Glow orbs */}
      {ORBS.map((o, i) => (
        <div
          key={i}
          className="orb"
          style={{
            left: o.x,
            top: o.y,
            width: o.size,
            height: o.size,
            background: `radial-gradient(circle, ${o.color}, transparent 70%)`,
          }}
        />
      ))}

      {/* Floating letters */}
      {FLOATERS.map((f, i) => (
        <motion.span
          key={i}
          className={`absolute font-display font-bold ${f.cls}`}
          style={{ left: f.x, top: f.y, fontSize: f.size, rotate: `${f.rot}deg` }}
          animate={{ y: [0, -26, 0], x: [0, 12, 0] }}
          transition={{ duration: f.dur, delay: f.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          {f.ch}
        </motion.span>
      ))}

      {/* Giant watermark in the center */}
      <span
        className="letter-outline-hero absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-bold tracking-tight opacity-70"
        style={{ fontSize: "clamp(140px, 26vw, 400px)" }}
      >
        MS
      </span>
    </div>
  );
}
