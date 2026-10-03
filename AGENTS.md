# AGENTS.md — AI Agent Working Guide

> This file is the single source of truth for any AI agent (Copilot, Cursor, Claude, Gemini, etc.) working on this codebase. Read it fully before making any changes.

---

## 1. Project Identity

| Field | Value |
|-------|-------|
| **Project** | `next-portfolio` — Jobayer Ahmed's personal developer portfolio |
| **Owner** | Jobayer Ahmed (`jobayer-ahmed7`) |
| **Stack** | Next.js 15 App Router · TypeScript 5 · Tailwind CSS v4 · MongoDB / Mongoose · Vercel |
| **Deployed at** | https://jobayerahmed.vercel.app |
| **Node version** | ≥ 18 |
| **Package manager** | npm (lock file: `package-lock.json`) |

---

## 2. Repository Map

Understand these directories before touching any file:

```
src/
├── app/
│   ├── (CommonLayout)/         ← Route group: shared background + footer
│   │   ├── layout.tsx          ← READS: wraps children in background image + <Footer>
│   │   ├── (home)/page.tsx     ← Home page; assembles all section components
│   │   └── projects/
│   │       ├── page.tsx        ← /projects list: filter + sort + grid/list view
│   │       └── [projectId]/
│   │           └── page.tsx    ← /projects/:id detail: carousel + overview + tech
│   ├── api/projects/
│   │   ├── route.ts            ← GET /api/projects (returns all, sorted by createdAt desc)
│   │   └── [id]/route.ts       ← GET /api/projects/:id (returns one by MongoDB _id)
│   ├── layout.tsx              ← Root: fonts (Geist), GTM, global metadata
│   ├── globals.css             ← Tailwind @theme tokens + custom animations
│   ├── sitemap.ts              ← Dynamic SEO sitemap (includes project pages)
│   └── robots.ts              ← robots.txt (blocks /api/)
├── components/
│   ├── home/                   ← One component per home section (HeroSection, AboutMe, Skills, etc.)
│   ├── shared/                 ← Reusable: Navbar, Footer, ProjectCard, FilterPanel, etc.
│   └── ui/                     ← shadcn/ui primitives — DO NOT edit manually
├── hooks/
│   └── use-mobile.ts           ← Returns true when viewport < 768px
├── lib/
│   ├── db.ts                   ← connectToDatabase() — cached Mongoose singleton
│   ├── api.ts                  ← fetchProjects() + fetchProjectById() — client-side fetch wrappers
│   └── utils.ts                ← cn() helper (clsx + tailwind-merge)
├── models/
│   ├── Projects.ts             ← Mongoose Project model + IProject TypeScript interface
│   └── Users.ts                ← Mongoose User model + bcrypt pre-save hook
└── types.d.ts                  ← Global: augments NodeJS.Global with mongoose cache
```

---

## 3. Architecture Decisions (Do Not Violate)

### 3.1 Server vs. Client Boundary
- **API routes** (`src/app/api/`) run **server-side only**. They call `connectToDatabase()` and Mongoose models directly.
- **Page components** that fetch data (e.g., `FeaturedProjects`, project pages) are **client components** (`"use client"`). They call `fetchProjects()` / `fetchProjectById()` from `src/lib/api.ts`, which hit the REST API endpoints.
- **Do NOT** import Mongoose models or `connectToDatabase()` in client components. This will break the build.

### 3.2 Route Group Convention
The `(CommonLayout)` folder is a Next.js route group — it applies a shared layout (background + footer) without adding a URL segment. When adding new pages visible to end-users (not API), place them inside `(CommonLayout)/`.

### 3.3 shadcn/ui Components
Files in `src/components/ui/` are **auto-generated** by the shadcn CLI. Do not edit them manually unless you have a strong reason (and document it). To add a new component: `npx shadcn@latest add <component-name>`.

### 3.4 MongoDB Connection Pattern
`src/lib/db.ts` uses a global cached connection (`global.mongoose`) to avoid creating multiple connections in Next.js serverless functions. Do not create new Mongoose connections elsewhere.

### 3.5 Styling Rules
- All styling uses **Tailwind CSS v4** utility classes directly in JSX.
- Custom design tokens are defined in `src/app/globals.css` under `@theme`. Use `text-classicGold`, `bg-richBlack`, etc.
- Do not add inline styles (`style={{...}}`) except where absolutely necessary (e.g., `objectFit` on `<Image>`).
- The `cn()` helper from `src/lib/utils.ts` must be used for conditional class merging.

### 3.6 TypeScript
- Strict mode is **enabled** in `tsconfig.json`. All code must type-check cleanly.
- Use the `IProject` interface from `src/models/Projects.ts` whenever referencing project objects.
- The path alias `@/*` maps to `src/*`. Always use `@/` imports, never relative `../../` paths from `src/`.

---

## 4. Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `MONGODB_URI` | ✅ Server only | Full MongoDB Atlas connection string |
| `NEXT_PUBLIC_GTM_ID` | ✅ Client | Google Tag Manager container ID |
| `NEXT_PUBLIC_SITE_URL` | ✅ Client | Site base URL for sitemap and robots.txt |

- Variables prefixed `NEXT_PUBLIC_` are exposed to the browser.
- `MONGODB_URI` must **never** be exposed to the client.
- For local development, copy `.env` or create one following the README's template.

---

## 5. Key Data Shapes

### Project (`IProject`)
```typescript
{
  _id?: string;
  images: string[];           // Remote image URLs
  title: string;
  overview: string;           // Detailed description
  liveLink: string;           // Live deployment URL
  frontendCode: string;       // GitHub repo URL (frontend)
  backendCode: string;        // GitHub repo URL (backend)
  features: string[];         // List of feature bullets
  technologies: {
    frontend: string[];
    backend: string[];
    tools: string[];
  };
  isFeatured: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
```

### User (`IUser`)
```typescript
{
  _id?: string;
  email: string;       // unique
  password: string;    // stored as bcrypt hash (auto-hashed on save)
  createdAt?: Date;
  updatedAt?: Date;
}
```

---

## 6. API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `GET` | `/api/projects` | None | All projects, newest first |
| `GET` | `/api/projects/:id` | None | Single project by MongoDB `_id` |

**Error response shape:** `{ "error": "<message>" }` with appropriate HTTP status.

---

## 7. Navigation Architecture

The Navbar (`src/components/shared/Navbar.tsx`) works purely via **anchor-based smooth scroll**:
- Desktop: fixed right-side vertical pill nav
- Mobile: fixed bottom horizontal pill nav
- Active section is detected via `IntersectionObserver`-style scroll handler
- Links scroll to `<section id="home|about|skills|projects|experience|contact">` elements
- This is **not** a router-based nav for the home page. The only real router links are `/projects` and `/projects/:id`.

---

## 8. Image Handling

- Uses `next/image` throughout for optimization.
- `next.config.ts` allows **any** remote hostname: `{ protocol: "https", hostname: "**" }`.
- Project images are stored as external URLs in MongoDB (not in `public/`).
- Static assets (background, developer illustration, profile photo, resume) live in `public/assets/` and `public/`.

---

## 9. SEO

- `src/app/sitemap.ts` — auto-generates `sitemap.xml` including all project pages fetched from MongoDB.
- `src/app/robots.ts` — generates `robots.txt` blocking `/api/` from crawlers.
- `src/app/layout.tsx` — sets global `<title>` and `<meta description>`.
- GTM is injected in the root layout via `<GoogleTagManager gtmId={...} />`.

---

## 10. Common Tasks & How to Do Them

### Add a new home section
1. Create `src/components/home/YourSection.tsx` as a client component.
2. Add `<section id="your-section"><YourSection /></section>` to `src/app/(CommonLayout)/(home)/page.tsx`.
3. Add a nav entry `{ id: "your-section", icon: YourIcon, label: "Label" }` in `src/components/shared/Navbar.tsx`.

### Add a new API route
1. Create `src/app/api/<resource>/route.ts`.
2. Call `await connectToDatabase()` before any DB queries.
3. Use `NextResponse.json(data, { status: 200 })` for responses.
4. Always handle errors and return appropriate HTTP status codes.

### Add a new Mongoose model
1. Create `src/models/YourModel.ts`.
2. Export both the model (`export default Model`) and its TypeScript interface (`export interface IYour {...}`).
3. Use the `models.YourModel || model(...)` pattern to avoid re-registering on hot reload.

### Add a new page
1. Place it inside `src/app/(CommonLayout)/your-page/page.tsx` to inherit background + footer.
2. Add it to `src/app/sitemap.ts` static routes.

### Add a shadcn/ui component
```bash
npx shadcn@latest add <component-name>
```

### Update the color theme
Edit `@theme {}` block in `src/app/globals.css`. Do not hardcode hex values in components — use the token names.

---

## 11. Code Style Guide

| Rule | Detail |
|------|--------|
| Formatting | Prettier defaults (no config file — be consistent with existing code) |
| Imports | `@/` alias always; auto-sorted by type (external → internal → relative) |
| Components | Functional only, named exports preferred, default export at bottom of file |
| State | `useState` / `useEffect` for client state; no global state library currently |
| Error handling | Always `try/catch` async operations; log with `console.error(...)` |
| Types | No `any` except where unavoidable (comment why); no `@ts-ignore` |
| Tailwind classes | Order: layout → sizing → spacing → color → typography → effects → animation |
| Console logs | Remove debug `console.log` before committing; `console.error` in catch blocks is OK |

---

## 12. What NOT to Do

- ❌ **Do NOT** run `npm install <package>` without checking if the functionality already exists in the current dependencies.
- ❌ **Do NOT** edit files in `src/components/ui/` manually — use `npx shadcn@latest`.
- ❌ **Do NOT** import Mongoose or `connectToDatabase()` in client components.
- ❌ **Do NOT** use `MONGODB_URI` in any file prefixed with `NEXT_PUBLIC_` or client-accessible code.
- ❌ **Do NOT** add hardcoded color values — use the design token names (`classicGold`, `richBlack`, etc.).
- ❌ **Do NOT** use relative `../../` imports when `@/` alias is available.
- ❌ **Do NOT** bypass TypeScript strict mode with `any` or `@ts-ignore` without a comment explaining why.
- ❌ **Do NOT** create new Mongoose connections — always use `connectToDatabase()` from `src/lib/db.ts`.
- ❌ **Do NOT** leave debug `console.log` statements in committed code.

---

## 13. Running Locally (Quick Reference)

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Type-check
npx tsc --noEmit

# Lint
npm run lint

# Build for production
npm run build
```

---

## 14. Deployment Context

- **Platform:** Vercel (project config in `.vercel/project.json`)
- **Build command:** `next build`
- **Output directory:** `.next`
- **Environment variables:** Must be set in Vercel dashboard (not committed to repo)
- **Auto-deploy:** Pushes to `main` trigger a new Vercel deployment

---

## 15. Asking Good Questions Before Coding

Before making changes, an agent should confirm:
1. **Scope** — Does this change affect only one component, or multiple layers (UI + API + model)?
2. **Data flow** — Is this a server-only change (API route / model) or client-side change (component)?
3. **Breaking changes** — Does it change the `IProject` shape? If yes, update both the model AND any component consuming it.
4. **SEO impact** — Does this add/remove a route? Update `sitemap.ts` accordingly.
5. **Design consistency** — Are the colors using design tokens from `@theme`? Is spacing consistent with existing sections?
