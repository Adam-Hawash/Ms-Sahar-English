"use client";

import { motion } from "framer-motion";
import { Squiggle } from "./decor";
import { introEmbedSrc, introVideoKind } from "@/lib/intro-video";

// ============================================================
// الفيديوهات التعريفية — ستاتيك في الكود (المنصة من غير باك إند)
// بنفس أسلوب zikola القديم: لينك فاضي = القسم مخفي خالص من الـ DOM
// ============================================================

// حط هنا لينك الفيديو التعريفي عن المنصة (يوتيوب/ستريمابل/درايف) — فاضي = القسم مخفي خالص
export const INTRO_VIDEO_URL = "";

// حط هنا لينك الفيديو التعريفي عن المعلمة — فاضي = القسم مخفي خالص
export const TEACHER_VIDEO_URL = "";

/**
 * مشغل موحد: يوتيوب/ستريمابل/درايف/فيميو → iframe embed،
 * لينك mp4 مباشر → <video controls playsInline>.
 */
function VideoPlayer({ url, title }: { url: string; title: string }) {
  const kind = introVideoKind(url);
  const embed = introEmbedSrc(url);

  if (kind === "file") {
    return (
      <video
        controls
        playsInline
        preload="metadata"
        src={url}
        className="absolute inset-0 h-full w-full bg-teal-950"
      />
    );
  }

  return (
    <iframe
      src={embed ?? url}
      title={title}
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="absolute inset-0 h-full w-full"
    />
  );
}

/** إطار الفيديو المشترك — كارت كريمي بشريط ذهبي علوي بنفس توقيع المنصة */
function VideoCard({ url, title }: { url: string; title: string }) {
  return (
    <div className="relative mt-10 overflow-hidden rounded-3xl border border-border bg-card p-2.5 shadow-[0_14px_50px_rgba(15,61,62,0.1)] sm:p-3">
      {/* شريط علوي ذهبي رفيع — لمسة الكتب المدرسية */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-gold-400 via-gold-300 to-teal-600"
      />
      <div className="relative mt-1 aspect-video overflow-hidden rounded-2xl bg-teal-950 shadow-[0_16px_44px_-24px_rgba(10,44,45,0.55)]">
        <VideoPlayer url={url} title={title} />
      </div>
    </div>
  );
}

/** «الفيديو التعريفي» — عن المنصة نفسها، بعد الهيرو مباشرة */
export function IntroVideoSection() {
  if (!INTRO_VIDEO_URL.trim()) return null;

  return (
    <section
      id="intro-video"
      className="relative scroll-mt-20 overflow-hidden bg-background py-20 sm:py-24"
    >
      {/* توهج ذهبي هادي + علامة مائية Serif */}
      <div
        aria-hidden
        className="orb left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2"
        style={{ background: "radial-gradient(circle, rgba(217,164,65,0.10), transparent 70%)" }}
      />
      <span
        aria-hidden
        className="serif-ghost pointer-events-none absolute -top-8 right-2 select-none font-display text-[7rem] font-bold leading-none sm:text-[10rem]"
      >
        Aa
      </span>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-display text-sm font-semibold tracking-[0.3em] text-gold-600" dir="ltr">
            INTRO VIDEO
          </p>
          <h2 className="mt-2 text-3xl font-black text-foreground sm:text-4xl">
            الفيديو <Squiggle>التعريفي</Squiggle>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            اتعرف على المنصة في دقائق
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          <VideoCard url={INTRO_VIDEO_URL} title="الفيديو التعريفي — اتعرف على المنصة في دقائق" />
        </motion.div>
      </div>
    </section>
  );
}

/** «فيديو عن المعلمة» — قبل قسم About (المحتوى عن مس سحر) */
export function TeacherVideoSection() {
  if (!TEACHER_VIDEO_URL.trim()) return null;

  return (
    <section
      id="teacher-video"
      className="relative scroll-mt-20 overflow-hidden border-t border-teal-800/10 py-20 sm:py-24"
    >
      {/* توهج تيل هادي */}
      <div
        aria-hidden
        className="orb left-1/2 top-1/3 h-[340px] w-[620px] -translate-x-1/2"
        style={{ background: "radial-gradient(circle, rgba(17,75,76,0.08), transparent 70%)" }}
      />
      <span
        aria-hidden
        className="serif-ghost pointer-events-none absolute -top-8 left-2 select-none font-display text-[7rem] font-bold leading-none sm:text-[10rem]"
        dir="ltr"
      >
        Ms
      </span>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-display text-sm font-semibold tracking-[0.3em] text-gold-600" dir="ltr">
            TEACHER VIDEO
          </p>
          <h2 className="mt-2 text-3xl font-black text-foreground sm:text-4xl">
            فيديو عن المعلمة
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            تعرّف على <Squiggle>مس سحر</Squiggle>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          <VideoCard url={TEACHER_VIDEO_URL} title="فيديو عن المعلمة — تعرّف على مس سحر" />
        </motion.div>
      </div>
    </section>
  );
}
