# Ms. Sahar — English Made Simple

The personal English learning platform of **Ms. Sahar** — a clean, light experience built on the unified design system (white background, soft-bordered cards, 0.625rem radius) with a **fuchsia #C026D3** primary and **gold #F59E0B** secondary identity, plus a deep-plum hero with floating English letters.

## ✦ Highlights

- **Hero**: elegant deep-plum gradient (#1A0B1E → #2A1230) with floating S · E · G letters, a shimmering brand title, and a fuchsia/gold placeholder portrait frame.
- **Skills marquee**: Grammar · Vocabulary · Reading · Writing · Listening · Speaking · Phonetics · Exams.
- **Features**: simplified grammar, vocabulary in action, interactive quizzes, steady progress — four white cards with Lucide icons.
- **Classes**: Grade 7 / Grade 8 / Grade 9 / High School — all with "Coming Soon" badges.
- **About the teacher**: introduction with the placeholder photo.
- **Navbar**: MS badge, section links, and a Login button (student portal coming soon).
- Fully responsive — 100% English (LTR) with Plus Jakarta Sans body + Space Grotesk display.

> 📌 **Current version: landing page only** — no admin area, no database, no API.

## ✦ Replacing the teacher photo

The current portrait is a generated placeholder — replace this file with Ms. Sahar's photo (keep the same name):
```
public/images/teacher-frame.jpg
```

## ✦ Deploy on Vercel

Ready to deploy with zero configuration:

1. **Add New → Project → Import** the `Adam-Hawash/Ms-Sahar-English` repository
2. Click **Deploy** and wait for the success check ✅
3. Open the domain from the project page

## ✦ Run locally

```bash
bun install
bun run dev
```

Open `http://localhost:3000`.

## ✦ Tech

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS 4** + shadcn/ui design tokens
- **Framer Motion** for animations
- Fonts: **Plus Jakarta Sans** (400–800, body) + **Space Grotesk** (display)

## ✦ Project structure

```
src/
├── app/
│   ├── layout.tsx            # Fonts + metadata + lang="en" dir="ltr"
│   ├── page.tsx              # Home (single route)
│   └── globals.css           # Fuchsia/gold theme on the unified design system
├── components/
│   ├── english/              # Landing, Navbar, Hero, LettersBackground,
│   │                         # Marquee, Features, Grades, About, Footer
│   └── ui/                   # button + sheet only
└── lib/utils.ts
```
