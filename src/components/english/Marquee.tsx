const WORDS = ["Grammar", "Vocabulary", "Reading", "Writing", "Listening", "Speaking", "Phonetics", "Exams"];

export function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <section aria-label="English skills" className="border-y border-teal-800/15 bg-cream-100/70 py-5">
      <div className="marquee-mask overflow-hidden" dir="ltr">
        <div className="animate-marquee flex w-max items-center gap-10 pl-10">
          {row.map((w, i) => (
            <span key={i} className="flex items-center gap-10">
              <span
                className="font-display text-2xl font-bold text-transparent sm:text-3xl"
                style={{ backgroundImage: "linear-gradient(90deg,#114B4C,#3E7A6D 55%,#D9A441)", WebkitBackgroundClip: "text", backgroundClip: "text" }}
              >
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
