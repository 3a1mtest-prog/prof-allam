# Allam Ghaben — Portfolio

Personal portfolio of **Allam Ghaben · علام غبن** — software engineer working
in generative media, machine learning, automation and agent systems.

A cinematic single-page site in near-black (`#0a0404`) and deep crimson
(`#ff1e2d`) — glassmorphism cards, a drag-to-swing lanyard ID badge, a
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

| Path | What it's for | Status |
| --- | --- | --- |
| `public/assets/avatar.webp` | Portrait on the lanyard ID card | shipped |
| `public/assets/ig-avatar.jpg` | Instagram card avatar | shipped |
| `public/assets/hero-cutout.webp` | Spare cutout portrait | shipped |
| `public/assets/reels/reel-{1,2,3}.mp4` | Reels section, with extracted `-poster.jpg` stills | shipped |
| `public/assets/frames/frame_001…192.jpg` | Scroll-scrubbed background sequence — see [`frames/README.md`](public/assets/frames/README.md) | not supplied |
| `public/CV.pdf` | Target of a "DOWNLOAD CV" button once `profile.resume` is set | not supplied |

Media was carried over from the source portfolio at
[allam.qd.je](https://allam.qd.je). Missing assets degrade gracefully — the
site builds and renders correctly without them.

## Still to fill in

`lib/data.ts` has no real data for these, so they are intentionally blank
rather than invented:

- `profile.email` and `profile.resume` — the contact CTA falls back to
  Instagram while `email` is empty.
- No LinkedIn — the dock and contact list show Instagram, GitHub and the
  personal site instead.
- Education, work history, awards and certifications — those sections were
  removed from `app/page.tsx`. Supply the content and they can be restored.
- Project cards are typographic by design: there are no screenshots of these
  builds on hand, and unrelated imagery would misrepresent the work.

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
components/       one file per section, plus Reveal / GlowCard / Media / Icons
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
