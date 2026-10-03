"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const GRADES = [
  { label: "Grade 7", code: "G7", topics: "Present Simple · Nouns · Reading" },
  { label: "Grade 8", code: "G8", topics: "Past Simple · Prepositions · Writing" },
  { label: "Grade 9", code: "G9", topics: "Present Perfect · Conditionals · Exam Prep" },
  { label: "High School", code: "HS", topics: "Advanced Grammar · Comprehension · Translation" },
];

export function Grades() {
  return (
    <section id="classes" className="relative scroll-mt-20 overflow-hidden py-20 sm:py-24">
      {/* خلفية كريمي أغمق بسيطة تفصل القسم */}
      <div aria-hidden className="absolute inset-0 bg-cream-100/60" />
      {/* توهج تيل هادي */}
      <div
        aria-hidden
        className="orb left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(circle, rgba(17,75,76,0.08), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="font-display text-sm font-semibold tracking-[0.3em] text-gold-600" dir="ltr">
            ALL LEVELS
          </p>
          <h2 className="mt-2 text-3xl font-black text-foreground sm:text-4xl">
            Lessons for <span className="text-gradient-brand">every level</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Organized content for each grade — from Grade 7 through high school, added and updated continuously.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {GRADES.map((g, i) => (
            <motion.div
              key={g.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex items-center gap-5 overflow-hidden rounded-xl border border-border bg-card p-6 shadow-[0_2px_10px_rgba(15,61,62,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-teal-800/30 hover:shadow-[0_14px_44px_rgba(15,61,62,0.12)]"
            >
              {/* كود الصف كعلامة مائية Serif خلف الكارت */}
              <span
                aria-hidden
                className="serif-ghost font-display absolute -left-3 -top-7 text-8xl font-bold"
                dir="ltr"
              >
                {g.code}
              </span>

              {/* شارة الكود — تيل غامق بحلقة ذهبية */}
              <span
                className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-teal-800 font-display text-lg font-bold text-gold-300 ring-1 ring-gold-400/50 shadow-[0_6px_20px_rgba(15,61,62,0.3)] transition-transform duration-300 group-hover:scale-105"
                dir="ltr"
              >
                {g.code}
              </span>

              <div className="relative min-w-0 flex-1">
                <h3 className="text-lg font-extrabold text-foreground" dir="ltr">{g.label}</h3>
                <p className="mt-1 truncate font-display text-xs font-medium text-teal-700/70" dir="ltr">
                  {g.topics}
                </p>
              </div>

              <span className="relative inline-flex shrink-0 items-center gap-1.5 rounded-full border border-gold-500/30 bg-gold-50 px-3 py-1.5 text-xs font-bold text-gold-700">
                <Clock className="h-3.5 w-3.5" />
                Coming Soon
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
