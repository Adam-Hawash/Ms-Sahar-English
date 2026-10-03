"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const LINKS = [
  { href: "#home", label: "الرئيسية" },
  { href: "#features", label: "المميزات" },
  { href: "#classes", label: "الحصص" },
  { href: "#about", label: "عن المعلمة" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const loginRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // قفل بوب أب الدخول لو المستخدم داس في أي مكان بره
  useEffect(() => {
    if (!loginOpen) return;
    const onDocClick = (e: MouseEvent) => {
      if (loginRef.current && !loginRef.current.contains(e.target as Node)) {
        setLoginOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [loginOpen]);

  // فوق الهيرو الغامق النصوص كريمي، وبعد السكرول بتبقى غامقة على الكريمي
  const solid = scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        solid
          ? "glass-strong shadow-[0_8px_30px_rgba(15,61,62,0.12)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* الشعار */}
        <Link href="#home" className="flex items-center gap-3">
          <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-teal-800 shadow-[0_6px_20px_rgba(15,61,62,0.35)] ring-1 ring-gold-400/50">
            <span className="font-display text-lg font-bold italic text-gold-300" dir="ltr">MS</span>
          </span>
          <span className="flex flex-col leading-tight">
            <span className={`text-lg font-extrabold transition-colors ${solid ? "text-foreground" : "text-cream-50"}`}>
              مس سحر
            </span>
            <span
              className={`font-display text-[11px] font-semibold tracking-[0.25em] transition-colors ${solid ? "text-teal-700/80" : "text-gold-300/85"}`}
              dir="ltr"
            >
              MS · ENGLISH
            </span>
          </span>
        </Link>

        {/* لينكات الديسكتوب */}
        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                  solid
                    ? "text-foreground/80 hover:bg-cream-100 hover:text-teal-800"
                    : "text-cream-50/85 hover:bg-cream-50/10 hover:text-gold-300"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <span
          className={`hidden items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold md:inline-flex ${
            solid
              ? "border-gold-500/30 bg-gold-50 text-gold-700"
              : "border-gold-400/30 bg-cream-50/5 text-gold-300"
          }`}
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span dir="ltr">English Made Simple</span>
        </span>

        {/* زرار الدخول (ديسكتوب) — نفس سلوك التوجل القديم */}
        <div ref={loginRef} className="relative hidden md:block">
          <Button
            size="sm"
            className="h-10 rounded-full bg-teal-800 px-6 text-sm font-bold text-cream-50 shadow-[0_6px_20px_rgba(15,61,62,0.35)] transition-all hover:bg-teal-700 hover:shadow-[0_8px_28px_rgba(15,61,62,0.45)]"
            onClick={() => setLoginOpen((v) => !v)}
            aria-expanded={loginOpen}
            aria-haspopup="true"
          >
            تسجيل الدخول
          </Button>
          {loginOpen && (
            <div
              role="status"
              className="absolute left-0 top-12 z-50 w-64 rounded-xl border border-cream-300 bg-popover p-4 shadow-[0_16px_50px_rgba(15,61,62,0.18)]"
            >
              <p className="flex items-center gap-2 text-sm font-bold text-foreground">
                <Sparkles className="h-4 w-4 text-gold-500" />
                بوابة الطلاب — قريبًا
              </p>
              <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
                حسابات الطلاب هتفتح مع أول ترم من الحصص. استنونا!
              </p>
            </div>
          )}
        </div>

        {/* الموبايل */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className={`md:hidden ${
                solid
                  ? "border-cream-300 bg-cream-50/80 text-foreground hover:bg-cream-100"
                  : "border-cream-50/25 bg-cream-50/10 text-cream-50 hover:bg-cream-50/20 hover:text-cream-50"
              }`}
              aria-label="افتح القائمة"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 border-cream-200 bg-cream-50">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2 text-foreground">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-800 font-display text-sm font-bold italic text-gold-300 ring-1 ring-gold-400/50"
                  dir="ltr"
                >
                  MS
                </span>
                مس سحر
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-4 flex flex-col gap-1 px-4">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-bold text-foreground/85 transition-colors hover:bg-cream-100 hover:text-teal-800"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-3 border-t border-cream-200 pt-4">
                <Button
                  className="h-11 w-full rounded-full bg-teal-800 text-sm font-bold text-cream-50 shadow-[0_6px_20px_rgba(15,61,62,0.35)] hover:bg-teal-700"
                  onClick={() => setLoginOpen((v) => !v)}
                  aria-expanded={loginOpen}
                >
                  تسجيل الدخول
                </Button>
                {loginOpen && (
                  <div
                    role="status"
                    className="mt-3 rounded-xl border border-cream-200 bg-cream-100/70 p-3.5"
                  >
                    <p className="flex items-center gap-2 text-sm font-bold text-foreground">
                      <Sparkles className="h-4 w-4 text-gold-500" />
                      بوابة الطلاب — قريبًا
                    </p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      حسابات الطلاب هتفتح مع أول ترم من الحصص.
                    </p>
                  </div>
                )}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
