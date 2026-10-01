const WORDS = ["Grammar", "Vocabulary", "Reading", "Writing", "Listening", "Speaking", "Phonetics", "Exams"];

export function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <section aria-label="English skills" className="border-y border-brand-100 bg-brand-50/60 py-5">
      <div className="marquee-mask overflow-hidden" dir="ltr">
        <div className="animate-marquee flex w-max items-center gap-10 pl-10">
          {row.map((w, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="font-display text-2xl font-bold text-transparent sm:text-3xl" style={{ backgroundImage: "linear-gradient(90deg,#C026D3,#D946EF,#F59E0B)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>
                {w}
              </span>
              <span className="text-sm text-gold-500/70">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
