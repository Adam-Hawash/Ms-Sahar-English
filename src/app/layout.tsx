import type { Metadata, Viewport } from "next";
import "./globals.css";
/* (ص8) حماية المنصة: منع F12/الزرار + قفل أسود خالص لأدوات المطوّر — زي باقي المنصات */
import { RecordingGuard } from "@/components/RecordingGuard";

export const metadata: Metadata = {
  title: "مس سحر | English Made Simple",
  description:
    "منصة مس سحر لتعليم اللغة الإنجليزية — قواعد مبسطة، مفردات بتتثبت، اختبارات تفاعلية، ومتابعة مستمرة. اتعلم الإنجليزي بثقة!",
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#0F3D3E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* خطوط الهوية: Fraunces (Serif أنيق للإنجليزي) + Cairo للعربي */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- App Router: fonts live in the root layout so they apply to every page */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400..900&family=Fraunces:ital,opsz,wght@0,9..144,400..900;1,9..144,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
        <RecordingGuard />
      </body>
    </html>
  );
}
