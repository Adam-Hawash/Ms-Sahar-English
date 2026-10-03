"use client";

import { motion } from "framer-motion";
import { BookOpenText, Gamepad2, MessagesSquare, TrendingUp } from "lucide-react";
import { OpenBook } from "./decor";

const FEATURES = [
  {
    icon: BookOpenText,
    title: "Simplified Grammar",
    body: "Grammar explained step by step with real-life examples — no memorizing dry rules.",
    iconWrap: "bg-teal-800 text-gold-300",
    ghost: "rgba(17, 75, 76, 0.12)",
  },
  {
    icon: MessagesSquare,
    title: "Vocabulary in Action",
    body: "Words and idioms stick through smart, repeated practice — ready to use with confidence in speech and writing.",
    iconWrap: "bg-gold-400 text-teal-950",
    ghost: "rgba(217, 164, 65, 0.18)",
  },
  {
    icon: Gamepad2,
    title: "Interactive Quizzes",
    body: "Fun quizzes measure your level instantly and show exactly where you shine and where to focus next.",
    iconWrap: "bg-terra-500 text-cream-50",
    ghost: "rgba(201, 111, 74, 0.16)",
  },
  {
    icon: TrendingUp,
    title: "Steady Progress",
    body: "Every lesson builds on the last, with continuous follow-up that takes you all the way to the top.",
    iconWrap: "bg-teal-600 text-cream-50",
    ghost: "rgba(42, 98, 87, 0.14)",
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
          <h2 className="mt-2 text-3xl font-black text-foreground sm:text-4xl" dir="ltr">
            Why <span className="text-gradient-brand">Ms. Sahar</span>?
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
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-[0_2px_10px_rgba(15,61,62,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/50 hover:shadow-[0_16px_50px_rgba(15,61,62,0.13)]"
            >
              {/* حرف Serif شفاف كعلامة مائية خلف المحتوى */}
              <span
                aria-hidden
                className="serif-ghost absolute -left-2 -top-5 font-display text-7xl font-bold transition-opacity group-hover:opacity-100"
                style={{ WebkitTextStrokeColor: f.ghost }}
              >
                {["A", "B", "C", "D"][i]}
              </span>

              <span className={`relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl shadow-md transition-transform duration-300 group-hover:scale-110 ${f.iconWrap}`}>
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="relative text-lg font-extrabold text-foreground" dir="ltr">{f.title}</h3>
              <p className="relative mt-2 text-sm leading-7 text-muted-foreground" dir="ltr">{f.body}</p>
            </motion.article>
          ))}
        </div>

        {/* لمسة ختامية — كتاب مفتوح صغير وسط القسم */}
        <div className="mt-12 flex justify-center">
          <OpenBook className="h-8 w-14 text-teal-800/25" />
        </div>
      </div>
    </section>
  );
}
