"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Quote } from "lucide-react";
import { Squiggle, TeacherPlaceholder } from "./decor";

const TRAITS = [
  "Clear, friendly explanations",
  "Experience with school curricula",
  "Regular practice & assessment",
  "Care for every student",
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden py-20 sm:py-24">
      {/* توهج كريمي هادي ورا الكارت */}
      <div
        aria-hidden
        className="orb left-1/2 top-1/2 h-[380px] w-[640px] -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(circle, rgba(217,164,65,0.09), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="font-display text-sm font-semibold tracking-[0.3em] text-gold-600" dir="ltr">
            YOUR TEACHER
          </p>
          <h2 className="mt-2 text-3xl font-black text-foreground sm:text-4xl" dir="ltr">
            Meet <Squiggle>Ms. Sahar</Squiggle>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto grid max-w-4xl items-center gap-8 overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-[0_14px_50px_rgba(15,61,62,0.08)] sm:p-10 md:grid-cols-[280px_1fr]"
        >
          {/* شريط علوي ذهبي رفيع — لمسة الكتب المدرسية */}
          <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-gold-400 via-gold-300 to-teal-600" />

          {/* بورتريه المعلمة — نفس الهوية الأنيقة (الصورة الحقيقية تتبدل بنفس المكان) */}
          <div className="relative mx-auto w-56 sm:w-64 md:w-full">
            <TeacherPlaceholder compact />
          </div>

          <div>
            <Quote aria-hidden className="mb-3 h-8 w-8 text-gold-400" />
            <p className="text-base leading-8 text-foreground/85 sm:text-lg sm:leading-9" dir="ltr">
              Hello and welcome! I&apos;m <strong className="text-teal-800">Ms. Sahar</strong>, your English teacher.
              I believe English isn&apos;t a subject to memorize — it&apos;s a skill built through understanding
              and enjoyable practice. Here you&apos;ll find everything clear and organized: simple explanations,
              steady practice, and quizzes that measure your real progress.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5" dir="ltr">
              {TRAITS.map((t) => (
                <li
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-full border border-teal-800/20 bg-teal-50 px-3.5 py-1.5 text-xs font-bold text-teal-800"
                >
                  <BadgeCheck className="h-3.5 w-3.5 text-gold-500" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
