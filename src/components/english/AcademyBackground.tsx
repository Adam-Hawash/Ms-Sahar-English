"use client";

import { motion } from "framer-motion";

/**
 * خلفية الهيرو الجديدة — أكاديمية هادية بدل الحروف المتطايرة:
 * سطور دفتر خفيفة + توهجات دافية + قوس مكتبة + حلقة منقّطة + علامة مائية Serif
 * (الحركات بتتوقف تلقائيًا مع prefers-reduced-motion عبر MotionConfig)
 */
export function AcademyBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* سطور دفتر خفيفة على التيل الغامق */}
      <div className="paper-lines absolute inset-0" />
      {/* هامش دفتر ذهبي على اليمين (اتجاه RTL) */}
      <div className="absolute inset-y-0 right-[10%] w-px bg-gold-400/10" />

      {/* توهجات دافية هادية */}
      <div
        className="orb"
        style={{ left: "-10%", top: "-14%", width: 460, height: 460, background: "radial-gradient(circle, rgba(217,164,65,0.14), transparent 70%)" }}
      />
      <div
        className="orb"
        style={{ right: "-8%", bottom: "-12%", width: 420, height: 420, background: "radial-gradient(circle, rgba(201,111,74,0.12), transparent 70%)" }}
      />
      <div
        className="orb"
        style={{ left: "38%", top: "55%", width: 320, height: 320, background: "radial-gradient(circle, rgba(94,148,134,0.18), transparent 70%)" }}
      />

      {/* قوس مكتبة خفيف على الجنب الشمال */}
      <svg className="absolute -left-10 bottom-0 h-[72%] w-auto opacity-[0.07] text-cream-50" viewBox="0 0 200 400" fill="none">
        <path d="M20 400V180a80 80 0 0 1 160 0v220" stroke="currentColor" strokeWidth="2" />
        <path d="M50 400V190a50 50 0 0 1 100 0v210" stroke="currentColor" strokeWidth="2" />
      </svg>

      {/* حلقة منقّطة بتلف ببطء شديد */}
      <motion.div
        className="absolute left-[8%] top-[18%] h-36 w-36 rounded-full border border-dashed border-cream-50/15 sm:h-44 sm:w-44"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      />

      {/* علامة مائية أنيقة بدل الحروف المتطايرة */}
      <span
        className="serif-ghost-light absolute -bottom-12 left-2 font-display italic"
        style={{ fontSize: "clamp(150px, 22vw, 320px)", lineHeight: 1 }}
      >
        Aa
      </span>
    </div>
  );
}
