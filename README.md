# NIM Technology Solutions — Website

Marketing website for **NIM Technology Solutions**, a software company building
custom systems for government bodies and private enterprises. Built with
**Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**, with light 3D
and motion accents.

> **Tagline:** *Engineered for quality. Built around service.*

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3 |
| Animation | GSAP (scroll/entrance), CSS reveals |
| 3D | three.js (hero scene) |
| Icons | lucide-react |
| Fonts | Plus Jakarta Sans (display) + Inter (body) via `next/font` |

---

## Getting started

Requires **Node.js 18.17+**.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build && npm run start   # production
npm run lint                     # lint
```

---

## Project structure

```
app/
  layout.tsx            Root layout — wraps every page with Navbar + Footer
  page.tsx              Home (hero + section previews)
  services/page.tsx     All services + how-we-work
  work/page.tsx         Project listing
  work/[slug]/page.tsx  Individual project detail (statically generated)
  industries/page.tsx   Sectors served
  about/page.tsx        Company, why us, tech, security, team, testimonials
  contact/page.tsx      Contact form + details
  not-found.tsx         404
  globals.css           Tailwind layers + design tokens/utilities

components/
  Navbar.tsx            Sticky header, scroll states, magnetic CTA, mobile menu
  Footer.tsx            Brand-gradient footer
  Logo.tsx              SVG wordmark (recolors for light/dark surfaces)
  Reveal.tsx            IntersectionObserver scroll-reveal wrapper
  ContactForm.tsx       Client form with a marked backend integration point
  GISDashboard.tsx      Illustrative mock of the GIS admin console
  home/Hero.tsx         Animated hero
  home/HeroScene.tsx    three.js wireframe + 5-city node ring
  ui/                   PageHeader, SectionHeading, CTABand

lib/
  data.ts               Single source of truth for all site content
```

Routing follows the App Router convention — each file under `app/` is a route.

---

## Editing content

All copy lives in **`lib/data.ts`** — `company`, `nav`, `stats`, `services`,
`industries`, `whyUs`, `process`, `technologies`, `commitments`, `testimonials`,
and `projects`. UI components read from these exports, so content can later be
swapped for a CMS/database without touching any component.

**Add a project:** append an object to the `projects` array in `lib/data.ts`.
The `/work` list and its `/work/[slug]` detail page are generated automatically —
no new files needed.

Other common edits:

- **Contact details** → `company` object in `lib/data.ts`
- **Brand colors** → `brand` scale in `tailwind.config.ts`
- **GIS visuals** → `components/GISDashboard.tsx` (replace mock with real screenshots in `public/`)
- **Testimonials** → currently sample placeholders; replace before launch

---

## Design system

- **Palette** derived from the logo blue (`brand-600 = #2C5DA8`), scaled 50–900,
  on white with soft tints — defined in `tailwind.config.ts`.
- **Smooth & rounded:** large corner radii (`rounded-4xl/5xl`), soft shadows,
  gentle gradients, and curved section transitions.
- **Reusable utilities** (`.shell`, `.eyebrow`, `.btn-*`, `.card`,
  `.brand-gradient`) defined in `app/globals.css`.

---

## Adding a backend

The contact form has a marked integration point in `components/ContactForm.tsx`.
Recommended path:

1. Create `app/api/contact/route.ts` (a Next.js Route Handler).
2. POST the form data to it; send an email or save to a database.
3. Replace the `console.log` block in `ContactForm.tsx` with a `fetch` call.

---

## Accessibility & notes

- Responsive from mobile to desktop, with visible keyboard focus states.
- `prefers-reduced-motion` is respected across GSAP, the 3D scene, and CSS reveals.
- `next.config.mjs` skips ESLint during builds for convenience — remove
  `eslint.ignoreDuringBuilds` once your own CI linting is set up.

---

## License

Proprietary — © NIM Technology Solutions. All rights reserved.