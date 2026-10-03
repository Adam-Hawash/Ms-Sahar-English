"use client";

import { motion } from "framer-motion";
import { ArrowDown, GraduationCap, Languages, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AcademyBackground } from "./AcademyBackground";
import { Squiggle, TeacherPlaceholder } from "./decor";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-gradient-to-br from-teal-950 via-teal-900 to-teal-800 pt-16"
    >
      {/* توهج علوي ذهبي خفيف */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(217,164,65,0.12), transparent 60%)",
        }}
      />

      <AcademyBackground />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        {/* النصوص */}
        <motion.div variants={container} initial="hidden" animate="show" className="text-center lg:text-start">
          <motion.div variants={item} className="mb-6 flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-cream-50/5 px-4 py-2 text-sm font-bold text-gold-200">
              <Languages className="h-4 w-4 text-gold-300" />
              لغة إنجليزية — بشرح مبسّط وممتع
            </span>
          </motion.div>

          <motion.h1 variants={item} className="text-5xl font-black leading-[1.2] text-cream-50 sm:text-6xl lg:text-7xl">
            مس <Squiggle>سحر</Squiggle>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 font-display text-lg font-semibold italic tracking-[0.35em] text-gold-300/90 sm:text-xl"
            dir="ltr"
          >
            ENGLISH MADE SIMPLE
          </motion.p>

          <motion.h2 variants={item} className="mt-5 text-2xl font-extrabold text-cream-50/90 sm:text-3xl">
            اتعلم الإنجليزي بثقة
          </motion.h2>

          <motion.p variants={item} className="mx-auto mt-4 max-w-xl text-base leading-8 text-cream-50/65 lg:mx-0">
            قواعد واضحة، مفردات بتتثبّت فعلًا، واختبارات تفاعلية بتقيس تقدمك خطوة بخطوة.
            <span className="font-display font-semibold italic text-gold-300" dir="ltr"> Your journey starts here!</span>
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Button
              asChild
              size="lg"
              className="group h-12 rounded-full bg-gold-400 px-8 text-base font-extrabold text-teal-950 shadow-[0_10px_30px_rgba(217,164,65,0.35)] transition-all hover:bg-gold-300 hover:shadow-[0_12px_40px_rgba(217,164,65,0.5)]"
            >
              <a href="#features">
                اكتشف المنصّة
                <ArrowDown className="ml-1 h-5 w-5 transition-transform group-hover:translate-y-0.5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="glass h-12 rounded-full px-8 text-base font-bold text-cream-50 hover:bg-cream-50/10 hover:text-gold-300"
            >
              <a href="#about">اعرف مس سحر</a>
            </Button>
          </motion.div>

          {/* شريط الثقة تحت الأزرار */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-cream-50/60 lg:justify-start"
          >
            <span className="inline-flex items-center gap-1.5">
              <GraduationCap className="h-4 w-4 text-gold-300" />
              من الأول الإعدادي لحد الثانوي
            </span>
            <span className="inline-flex items-center gap-1.5" dir="ltr">
              <Star className="h-4 w-4 text-gold-300" /> Grammar · Vocabulary · Exams
            </span>
          </motion.div>
        </motion.div>

        {/* بورتريه المعلمة — بديل مؤقت أنيق لحد ما صورتها تبقى جاهزة (يتبدل بنفس المكان) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px]"
        >
          <TeacherPlaceholder />
          <p className="mt-4 text-center text-xs text-cream-50/40">
            صورة مس سحر هتتحط هنا قريبًا
          </p>
        </motion.div>
      </div>

      {/* مؤشر النزول */}
      <motion.a
        href="#features"
        aria-label="انزل لتحت"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-gold-300/70 transition-colors hover:text-gold-200"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
