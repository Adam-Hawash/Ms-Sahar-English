"use client";

import { motion } from "framer-motion";
import { BookOpenText, Gamepad2, MessagesSquare, TrendingUp } from "lucide-react";

const FEATURES = [
  {
    icon: BookOpenText,
    title: "Simplified Grammar",
    body: "Grammar explained step by step with real-life examples — no memorizing dry rules.",
    accent: "from-brand-600 to-brand-400",
  },
  {
    icon: MessagesSquare,
    title: "Vocabulary in Action",
    body: "Words and idioms stick through smart, repeated practice — ready to use with confidence in speech and writing.",
    accent: "from-gold-500 to-gold-600",
  },
  {
    icon: Gamepad2,
    title: "Interactive Quizzes",
    body: "Fun quizzes measure your level instantly and show exactly where you shine and where to focus next.",
    accent: "from-brand-500 to-brand-700",
  },
  {
    icon: TrendingUp,
    title: "Steady Progress",
    body: "Every lesson builds on the last, with continuous follow-up that takes you all the way to the top.",
    accent: "from-gold-600 to-gold-400",
  },
];

export function Features() {
  return (
    <section id="features" className="relative scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="font-display text-sm font-semibold tracking-[0.3em] text-gold-600" dir="ltr">
            WHY US?
          </p>
          <h2 className="mt-2 text-3xl font-black text-foreground sm:text-4xl">
            Why <span className="text-shine">Ms. Sahar</span>?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Everything you need to master English in one place — modern, clear, and genuinely fun.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-[0_2px_10px_rgba(26,10,30,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_50px_rgba(192,38,211,0.14)]"
            >
              {/* Transparent English letter behind the card content */}
              <span aria-hidden className="letter-outline absolute -left-2 -top-4 font-display text-7xl font-bold opacity-80 transition-opacity group-hover:opacity-100">
                {["A", "B", "C", "D"][i]}
              </span>

              <span className={`relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${f.accent} shadow-lg`}>
                <f.icon className="h-6 w-6 text-white" />
              </span>
              <h3 className="relative text-lg font-extrabold text-foreground">{f.title}</h3>
              <p className="relative mt-2 text-sm leading-7 text-muted-foreground">{f.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
