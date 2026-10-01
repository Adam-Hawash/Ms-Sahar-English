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
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#classes", label: "Classes" },
  { href: "#about", label: "About" },
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

  // Close the login popover when clicking anywhere outside of it
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

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-strong shadow-[0_8px_30px_rgba(192,38,211,0.12)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <Link href="#home" className="flex items-center gap-3">
          <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 via-brand-500 to-gold-500 shadow-[0_0_24px_rgba(192,38,211,0.45)]">
            <span className="font-display text-lg font-bold text-white">MS</span>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-extrabold text-foreground">Ms. Sahar</span>
            <span className="font-display text-[11px] font-medium tracking-[0.25em] text-brand-600/80" dir="ltr">
              MS · ENGLISH
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <span className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1.5 text-xs font-bold text-gold-600">
          <Sparkles className="h-3.5 w-3.5" />
          English Made Simple
        </span>

        {/* Login button (desktop) */}
        <div ref={loginRef} className="relative hidden md:block">
          <Button
            size="sm"
            className="h-10 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-6 text-sm font-bold text-white shadow-[0_6px_20px_rgba(192,38,211,0.35)] transition-all hover:from-brand-700 hover:to-brand-600 hover:shadow-[0_8px_28px_rgba(217,70,239,0.45)]"
            onClick={() => setLoginOpen((v) => !v)}
            aria-expanded={loginOpen}
            aria-haspopup="true"
          >
            Login
          </Button>
          {loginOpen && (
            <div
              role="status"
              className="absolute right-0 top-12 z-50 w-64 rounded-xl border border-border bg-popover p-4 shadow-[0_16px_50px_rgba(26,10,30,0.16)]"
            >
              <p className="flex items-center gap-2 text-sm font-bold text-foreground">
                <Sparkles className="h-4 w-4 text-gold-500" />
                Student portal — coming soon
              </p>
              <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
                Student accounts open with the first term of classes. Stay tuned!
              </p>
            </div>
          )}
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden border-brand-200 bg-white/70 text-foreground hover:bg-brand-50"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 border-brand-100 bg-white">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2 text-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 via-brand-500 to-gold-500 font-display text-sm font-bold text-white">
                  MS
                </span>
                Ms. Sahar
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-4 flex flex-col gap-1 px-4">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-foreground/85 transition-colors hover:bg-brand-50 hover:text-brand-700"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-3 border-t border-border pt-4">
                <Button
                  className="h-11 w-full rounded-full bg-gradient-to-r from-brand-600 to-brand-500 text-sm font-bold text-white shadow-[0_6px_20px_rgba(192,38,211,0.35)]"
                  onClick={() => setLoginOpen((v) => !v)}
                  aria-expanded={loginOpen}
                >
                  Login
                </Button>
                {loginOpen && (
                  <div
                    role="status"
                    className="mt-3 rounded-xl border border-border bg-muted/60 p-3.5"
                  >
                    <p className="flex items-center gap-2 text-sm font-bold text-foreground">
                      <Sparkles className="h-4 w-4 text-gold-500" />
                      Student portal — coming soon
                    </p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      Student accounts open with the first term of classes.
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
