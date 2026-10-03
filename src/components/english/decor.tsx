import type { ReactNode } from "react";

/** خط موجة ذهبي مرسوم يدويًا تحت الكلمة المهمة — موتيف الهوية الجديدة */
export function Squiggle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`relative inline-block pb-1.5 ${className ?? ""}`}>
      {children}
      <svg
        aria-hidden
        viewBox="0 0 120 12"
        preserveAspectRatio="none"
        fill="none"
        className="absolute inset-x-0 bottom-0 h-2.5 w-full text-gold-400"
      >
        <path
          d="M2 8.5C13 3.5 25 3 37 7s25 5.5 37 1.5S99 3 118 7.5"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  );
}

/** كتاب مفتوح — موتيف المكتبة */
export function OpenBook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 44" fill="none" aria-hidden className={className}>
      <path
        d="M32 8C26 3.5 17 2 4 3v34c13-1 22 .5 28 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 8c6-4.5 15-6 28-5v34c-13-1-22 .5-28 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M32 8v34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* سطور الصفحات */}
      <path
        d="M11 13c5-.4 9 0 13 1.5M11 21c5-.4 9 0 13 1.5M11 29c5-.4 9 0 13 1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M53 13c-5-.4-9 0-13 1.5M53 21c-5-.4-9 0-13 1.5M53 29c-5-.4-9 0-13 1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

/**
 * بديل مؤقت أنيق لصورة مس سحر — إطار مقوّس بألوان الهوية (تيل + ذهبي)
 * لما الصورة الحقيقية تبقى جاهزة تتبدل بنفس المكان
 */
export function TeacherPlaceholder({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative rounded-t-full rounded-b-3xl border border-gold-400/50 bg-gradient-to-b from-teal-800 via-teal-900 to-teal-950 p-2.5 shadow-[0_24px_70px_rgba(10,44,45,0.4)]">
      {/* شريط كتاب (Bookmark) تيراكوتا — لمسة مكتبة */}
      <span
        aria-hidden
        className="absolute -top-2 right-10 z-10 h-16 w-7 rounded-b-sm bg-gradient-to-b from-terra-500 to-terra-600 shadow-md [clip-path:polygon(0_0,100%_0,100%_100%,50%_78%,0_100%)]"
      />
      <div className="relative flex aspect-[3/4] flex-col items-center justify-end overflow-hidden rounded-t-full rounded-b-2xl border border-cream-50/10 bg-[radial-gradient(ellipse_90%_55%_at_50%_0%,rgba(217,164,65,0.16),transparent_60%),linear-gradient(to_bottom,#114B4C,#0F3D3E_58%,#0A2C2D)] px-6 pb-8 text-center">
        {/* علامة مائية Aa بخط Fraunces */}
        <span
          aria-hidden
          className="serif-ghost-light pointer-events-none absolute inset-x-0 top-[10%] text-center font-display italic"
          style={{ fontSize: compact ? "5.5rem" : "7.5rem", lineHeight: 1 }}
        >
          Aa
        </span>

        {/* زخارف دائرية هادية */}
        <span aria-hidden className="pointer-events-none absolute left-5 top-12 h-14 w-14 rounded-full border border-dashed border-gold-300/25" />
        <span aria-hidden className="pointer-events-none absolute bottom-28 right-6 h-9 w-9 rounded-full border border-cream-50/15" />

        <OpenBook className={`mb-3 text-gold-400 ${compact ? "h-8 w-12" : "h-10 w-16"}`} />
        <p className="font-display text-2xl font-semibold italic text-cream-50" dir="ltr">
          Ms. Sahar
        </p>
        <p className={`mt-1 font-bold text-gold-300 ${compact ? "text-xs" : "text-sm"}`}>
          مدرسة اللغة الإنجليزية
        </p>
      </div>
    </div>
  );
}
