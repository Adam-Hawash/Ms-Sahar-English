import { Heart, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="mt-auto border-t border-border bg-white"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 via-brand-500 to-gold-500 font-display text-sm font-bold text-white">
            MS
          </span>
          <div className="leading-tight">
            <p className="text-sm font-extrabold text-foreground">Ms. Sahar</p>
            <p className="font-display text-[10px] font-medium tracking-[0.22em] text-brand-600/70" dir="ltr">
              MS · ENGLISH
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground sm:text-sm">
          © 2026 Ms. Sahar. All rights reserved.
        </p>

        <p className="inline-flex items-center gap-1.5 text-xs text-brand-600/70">
          <Sparkles className="h-3.5 w-3.5 text-gold-500" />
          English Made Simple
          <Heart className="h-3.5 w-3.5 text-brand-500" />
        </p>
      </div>
    </footer>
  );
}
