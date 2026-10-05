# Jobayer Ahmed — Personal Portfolio

> A modern, full-stack developer portfolio built with **Next.js 15**, **TypeScript**, **MongoDB**, and **Tailwind CSS v4** — deployed on **Vercel**.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-green?logo=mongodb)](https://mongoosejs.com)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)](https://vercel.com)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [API Reference](#api-reference)
- [Data Models](#data-models)
- [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
- [Design System](#design-system)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## Overview

A production-ready personal portfolio website that showcases professional work, skills, and experience. Data is stored in **MongoDB Atlas** and served via **Next.js API Routes**. The site is fully SEO-optimized with dynamic `sitemap.xml`, `robots.txt`, and Google Tag Manager integration.

**Key capabilities:**
- Dynamic project showcase fetched from MongoDB
- Full-text and technology-based project filtering
- Floating glassmorphic pill navigation on desktop with animated active link tracking (`motion`)
- Auto-hiding floating island with shadcn/ui Sheet drawer on mobile (slides out on scroll-down, reveals on scroll-up)
- Site-wide persistent navigation across home and sub-pages (`/projects`)
- Anti-flicker scroll lock ensuring smooth transitions between sections without intermediate highlight jumping
- Contact form with client-side validation (React Hook Form + Zod)
- Image carousel on project detail pages (Embla Carousel)
- Reusable navigation components (`BackButton`, `Loading` spinner)

---

## Live Demo

🌐 **[https://jobayerahmed.vercel.app](https://jobayerahmed.vercel.app)**

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 + tw-animate-css |
| UI Components | shadcn/ui (New York style) + Radix UI |
| Icons | Lucide React + React Icons |
| Animation | Framer Motion (`motion`) |
| Carousel | Embla Carousel + Autoplay plugin |
| Database | MongoDB via Mongoose v8 |
| Forms | React Hook Form v7 + Zod v4 |
| Fonts | Geist Sans & Geist Mono (Google Fonts) |
| Analytics | Google Tag Manager |
| Deployment | Vercel |

---

## Project Structure

```
next-portfolio/
├── public/
│   ├── assets/
│   │   ├── background.jpg      # Fixed full-page background
│   │   ├── developer.png       # Hero section illustration
│   │   ├── hero-dark.jpg       # Hero section background
│   │   └── jobayer.jpg         # Profile photo (About section)
│   └── resume.pdf              # Downloadable CV
│
├── src/
│   ├── app/
│   │   ├── (CommonLayout)/             # Route group — shared layout (background + navbar + footer)
│   │   │   ├── layout.tsx              # CommonLayout: background image + site-wide floating Navbar + Footer
│   │   │   ├── (home)/
│   │   │   │   └── page.tsx            # Home page — all sections assembled
│   │   │   └── projects/
│   │   │       ├── page.tsx            # /projects — full project listing + filter
│   │   │       └── [projectId]/
│   │   │           └── page.tsx        # /projects/:id — project detail with carousel
│   │   │
│   │   ├── api/
│   │   │   └── projects/
│   │   │       ├── route.ts            # GET /api/projects
│   │   │       └── [id]/
│   │   │           └── route.ts        # GET /api/projects/:id
│   │   │
│   │   ├── layout.tsx                  # Root layout: fonts + GTM + metadata
│   │   ├── globals.css                 # Global styles: Tailwind + custom theme + animations
│   │   ├── favicon.ico
│   │   ├── sitemap.ts                  # Dynamic sitemap generator
│   │   └── robots.ts                  # robots.txt generator
│   │
│   ├── components/
│   │   ├── home/                       # Single-use home page section components
│   │   │   ├── HeroSection.tsx         # Name, title animation, social links, CTA
│   │   │   ├── AboutMe.tsx             # Bio, profile photo
│   │   │   ├── Skills.tsx              # Technology skills grid
│   │   │   ├── FeaturedProjects.tsx    # Projects grid with show more / view all
│   │   │   ├── Experience.tsx          # Work/education timeline
│   │   │   └── ContactMe.tsx          # Contact form + social info panel
│   │   │
│   │   ├── shared/                     # Reusable components across pages
│   │   │   ├── Navbar.tsx              # Site-wide floating nav (desktop: glassmorphic pill | mobile: auto-hiding island with Sheet)
│   │   │   ├── Footer.tsx              # Site footer
│   │   │   ├── ProjectCard.tsx         # Card used in project listings
│   │   │   ├── FilterPanel.tsx         # Search, technology filter, sort, view toggle
│   │   │   ├── SectionHeading.tsx      # Consistent styled section title
│   │   │   ├── TechnologyBadge.tsx     # Pill badge for tech tags
│   │   │   ├── Loading.tsx             # Full-area spinner component
│   │   │   └── butttons/
│   │   │       ├── BackButton.tsx      # Reusable back navigation button (router.back)
│   │   │       ├── navButton/
│   │   │       │   ├── NavButton.tsx   # Icon + label nav pill button
│   │   │       │   └── navButton.css   # NavButton specific styles
│   │   │       └── PrimaryButton/
│   │   │           └── PrimaryButton.tsx    # Gold-styled CTA / download button
│   │   │
│   │   └── ui/                         # shadcn/ui primitives (auto-generated, do not edit manually)
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       └── tooltip.tsx
│   │
│   ├── hooks/
│   │   └── use-mobile.ts               # Hook: detects viewport < 768px
│   │
│   ├── lib/
│   │   ├── db.ts                       # MongoDB connection with cached singleton
│   │   ├── api.ts                      # Client-side fetch helpers (fetchProjects, fetchProjectById)
│   │   └── utils.ts                    # Utility: cn() (clsx + tailwind-merge)
│   │
│   └── models/
│       ├── Projects.ts                 # Mongoose Project schema + IProject interface
│       └── Users.ts                    # Mongoose User schema + bcrypt pre-save hook
│
├── types.d.ts                          # Global type augmentations (mongoose cache)
├── components.json                     # shadcn/ui configuration
├── next.config.ts                      # Next.js config (remote image patterns)
├── tsconfig.json                       # TypeScript config (@/* path alias)
├── eslint.config.mjs                   # ESLint config
└── postcss.config.mjs                  # PostCSS config (Tailwind)
```

---

## Pages & Routes

| Route | File | Description |
|-------|------|-------------|
| `/` | `(CommonLayout)/(home)/page.tsx` | Single-page portfolio with 6 sections |
| `/projects` | `(CommonLayout)/projects/page.tsx` | All projects with search, filter, sort |
| `/projects/:id` | `(CommonLayout)/projects/[projectId]/page.tsx` | Project detail: carousel, overview, features, tech stack |

### Home Page Sections

The home page assembles the following sections via anchor IDs for smooth-scroll navigation:

| Section ID | Component | Description |
|------------|-----------|-------------|
| `#home` | `HeroSection` | Name, animated typing title, social links, CTA buttons |
| `#about` | `AboutMe` | Biography and profile photo |
| `#skills` | `Skills` | Technology skills grid |
| `#projects` | `FeaturedProjects` | Project cards (3 visible, expand to 6) |
| `#experience` | `Experience` | Work and education timeline |
| `#contact` | `ContactMe` | Contact form + social info |

---

## API Reference

All API routes are under `/api/`. They connect directly to MongoDB via `connectToDatabase()`.

### `GET /api/projects`

Returns all projects sorted by `createdAt` descending.

**Response:** `200 OK` — Array of [`IProject`](#iproject-schema)

```json
[
  {
    "_id": "...",
    "title": "Project Name",
    "overview": "...",
    "images": ["https://..."],
    "liveLink": "https://...",
    "frontendCode": "https://github.com/...",
    "backendCode": "https://github.com/...",
    "features": ["Feature 1", "Feature 2"],
    "technologies": {
      "frontend": ["React", "TypeScript"],
      "backend": ["Node.js", "MongoDB"],
      "tools": ["Git", "Vercel"]
    },
    "isFeatured": true,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

**Error:** `500` — `{ "error": "Error fetching projects" }`

---

### `GET /api/projects/:id`

Returns a single project by its MongoDB `_id`.

**Path Parameters:** `id` — MongoDB ObjectId string

**Response:** `200 OK` — Single [`IProject`](#iproject-schema) object

**Errors:**
- `400` — `{ "error": "Project ID is required" }`
- `404` — `{ "error": "Project not found" }`
- `500` — `{ "error": "Error fetching project" }`

---

## Data Models

### IProject Schema

```typescript
interface IProject {
  _id?: string;
  images: string[];           // Array of image URLs (remote URLs allowed)
  title: string;
  overview: string;           // Long-form project description
  liveLink: string;           // Deployed project URL
  frontendCode: string;       // GitHub URL for frontend repo
  backendCode: string;        // GitHub URL for backend repo
  features: string[];         // Bullet-point feature list
  technologies: {
    frontend: string[];       // e.g. ["React", "TypeScript", "Tailwind"]
    backend: string[];        // e.g. ["Node.js", "MongoDB", "Express"]
    tools: string[];          // e.g. ["Git", "Vercel", "Postman"]
  };
  isFeatured: boolean;        // Highlight in featured section
  createdAt?: Date;           // Auto-managed by Mongoose timestamps
  updatedAt?: Date;           // Auto-managed by Mongoose timestamps
}
```

### IUser Schema

```typescript
interface IUser {
  email: string;    // Unique, required
  password: string; // Bcrypt-hashed via pre-save hook
  _id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
```

> **Note:** Passwords are automatically hashed with bcryptjs (10 rounds) before saving.

---

## Environment Variables

Create a `.env` file in the project root:

```env
# MongoDB Atlas connection string
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority

# Google Tag Manager container ID
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Public site base URL (used for sitemap and robots.txt)
NEXT_PUBLIC_SITE_URL=https://yoursite.vercel.app
```

> **Important:** Never commit `.env` to version control. A `.env.example` template is recommended.

---

## Getting Started

### Prerequisites

- Node.js **18+**
- npm or yarn
- A **MongoDB Atlas** cluster (free tier works)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/jobayer-ahmed7/next-portfolio.git
cd next-portfolio

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env with your MongoDB URI and other values

# 4. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create production build |
| `npm run start` | Start production server (requires build first) |
| `npm run lint` | Run ESLint |

---

## Design System

### Color Palette

Defined as CSS custom properties in [`globals.css`](src/app/globals.css) via `@theme`:

| Token | Value | Usage |
|-------|-------|-------|
| `richBlack` | `#0D0D0D` | Primary backgrounds |
| `classicGold` | `#D4AF37` | Accent color, CTAs, highlights |
| `lightGrey` | `#CCCCCC` | Body text |
| `darkGrey` | `#444444` | Borders, subtle separators |
| `mutedGrey` | `#2A2A2A` | Input backgrounds, muted surfaces |
| `offWhite` | `#F5F5F5` | Headings, emphasized text |
| `cardBg` | `#1A1A1A` | Card and panel backgrounds |

### Typography

- **Geist Sans** — primary UI font
- **Geist Mono** — monospace variant
- Applied via CSS variables `--font-geist-sans` and `--font-geist-mono`

### Custom Animations

Defined in `globals.css`:
- `animate-fade-in` — fade up on entry (0.6s ease-out)
- `animate-slide-in-up` — slide up on entry (used in mobile filter modal)
- `animate-pulse-glow` — gold glow pulse (used on card hover states)

### Path Aliases

`@/*` maps to `./src/*` — use `@/components/...`, `@/lib/...`, `@/models/...` throughout.

---

## Deployment

The project is configured for **Vercel** deployment.

```bash
# Deploy via Vercel CLI
npm i -g vercel
vercel deploy
```

**Or push to `main` branch** — Vercel auto-deploys on every push.

### Vercel Environment Variables

Set the following in your Vercel project dashboard under **Settings → Environment Variables**:

```
MONGODB_URI
NEXT_PUBLIC_GTM_ID
NEXT_PUBLIC_SITE_URL
```

### SEO

- `sitemap.xml` — dynamically generated at `/sitemap.xml`, includes all project detail pages
- `robots.txt` — generated at `/robots.txt`, blocks `/api/` from crawlers
- GTM — integrated in root layout via `@next/third-parties/google`

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push to the branch: `git push origin feat/your-feature`
5. Open a Pull Request

Please follow the existing code style (TypeScript strict mode, Tailwind utility classes, functional React components).

---

## Author

**Jobayer Ahmed** — Full Stack Developer

- 🌐 [jobayerahmed.vercel.app](https://jobayerahmed.vercel.app)
- 💼 [linkedin.com/in/jobayerahmmed7](https://www.linkedin.com/in/jobayerahmmed7/)
- 🐙 [github.com/jobayer-ahmed7](https://github.com/jobayer-ahmed7)
- 🐦 [x.com/jobayer_ahmed07](https://x.com/jobayer_ahmed07)
- 📧 jobayerahm7@gmail.com
