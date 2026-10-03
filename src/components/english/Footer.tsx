import { Heart, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="mt-auto border-t border-teal-800/20 bg-teal-950 text-cream-50"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-7 sm:flex-row sm:px-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-800 font-display text-sm font-bold italic text-gold-300 ring-1 ring-gold-400/40" dir="ltr">
            MS
          </span>
          <div className="leading-tight">
            <p className="text-sm font-extrabold">Ms. Sahar</p>
            <p className="font-display text-[10px] font-semibold tracking-[0.22em] text-gold-300/80" dir="ltr">
              ENGLISH MADE SIMPLE
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-cream-50/60 sm:text-sm">
          © 2026 Ms. Sahar. All rights reserved.
        </p>

        <p className="inline-flex items-center gap-1.5 text-xs text-cream-50/70">
          <Sparkles className="h-3.5 w-3.5 text-gold-300" />
          صُنع بحب للطلاب
          <Heart className="h-3.5 w-3.5 text-terra-400" />
        </p>
      </div>
    </footer>
  );
}
