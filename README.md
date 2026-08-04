# Ultra-Dark Marvel Developer Portfolio

A cinematic single-page developer portfolio in near-black (`#0a0404`) and deep
crimson (`#ff1e2d`) — glassmorphism cards, a drag-to-swing lanyard ID badge,
scroll-scrubbed canvas background, and a floating macOS-style dock.

Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**,
**Tailwind CSS v4** and **Framer Motion**.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Editing your content

**Everything on the page comes from one file: [`lib/data.ts`](lib/data.ts).**
Change your name, roles, bio, projects, skills, awards and links there and the
whole site re-skins — no component edits needed.

Prefer a UI? Open **`/spidey.html`** (the terminal icon in the dock). It's a
self-contained admin console that generates a ready-to-paste `data.ts` block
and keeps a draft in your browser's local storage. Nothing is uploaded.

## Assets to drop in

| Path | What it's for |
| --- | --- |
| `public/assets/avatar.png` | Portrait on the lanyard ID card (~3:3.25). A silhouette placeholder renders until you add it. |
| `public/assets/frames/frame_001…192.jpg` | Scroll-scrubbed background sequence — see [`frames/README.md`](public/assets/frames/README.md). |
| `public/assets/projects/*.svg` | Project thumbnails (16:9). Generated placeholders ship in the repo. |
| `public/assets/gallery/*.svg` | Gallery photos (4:3). Generated placeholders ship in the repo. |
| `public/Shadin_Kappachali_CV.pdf` | Target of the "DOWNLOAD CV" button (path set by `profile.resume`). |

Every asset is optional — the site builds and renders correctly without any of
them.

## The scroll-frame background

`components/ScrollFrames.tsx` maps page scroll position onto a 192-frame image
sequence drawn to a `<canvas>`. Inside `renderFrame()` a soft radial patch in
`#0a0404` is painted over the bottom-right corner so a watermark burned into
the source video blends away instead of hard-edging.

The component probes `frame_001.jpg` on mount; if the folder is empty it never
mounts the canvas and the page falls back to its CSS gradient backdrop. So the
feature is strictly additive — populate the folder and it activates.

## Structure

```
app/
  layout.tsx      fonts (Bebas Neue, Outfit, Fira Code, Caveat) + metadata
  page.tsx        section assembly
  globals.css     design tokens, glass/card surfaces, dock, grain overlay
components/       one file per section, plus Reveal / GlowCard / Icons
lib/data.ts       ← all site content
public/spidey.html  admin console
```

## Notes

- Mobile-first: single column at 375px, 44px minimum touch targets, a drawer
  nav below `lg`, and no horizontal overflow at any width.
- `prefers-reduced-motion` disables the reveals, the pendulum drag and the
  dock/nav entrances.
- The palette is a deliberate single-look dark theme; it holds in both light
  and dark system settings rather than inverting.

## Deploy

Push to GitHub and import the repo on Vercel — no configuration needed. Any
Node host works via `npm run build && npm start`.
