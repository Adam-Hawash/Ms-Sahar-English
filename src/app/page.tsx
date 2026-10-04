import { Navbar } from "@/components/english/Navbar";
import { Hero } from "@/components/english/Hero";
import { Marquee } from "@/components/english/Marquee";
import { Features } from "@/components/english/Features";
import { Grades } from "@/components/english/Grades";
import { About } from "@/components/english/About";
import { Footer } from "@/components/english/Footer";
import { Reveal } from "@/components/landing/Reveal";

// (و111-d) نفس بنية Landing الأصلية حرفيًا — كل قسم بعد الهيرو ملفوف
// بـ <Reveal> (تلاشي + صعود مع السكرول، زي منصة مستر صبري ص5).
// الهيرو والنافبار بدون لفّ — Landing.tsx نفسها متلمستش.
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Reveal>
          <Marquee />
        </Reveal>
        <Reveal>
          <Features />
        </Reveal>
        <Reveal>
          <Grades />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
      </main>
      <Reveal>
        <Footer />
      </Reveal>
    </div>
  );
}
