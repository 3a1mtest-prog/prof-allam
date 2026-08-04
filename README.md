# Allam Ghaben — Portfolio

Personal portfolio of **Allam Ghaben** — software engineer working
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
| `public/assets/hero-loop.mp4` + `hero-poster.jpg` | Crimson-graded clip behind the hero copy | shipped |
| `public/assets/ig-avatar.jpg` | Instagram card avatar | shipped |
| `public/assets/hero-cutout.webp` | Spare cutout portrait, currently unused | shipped |
| `public/assets/reels/reel-{1,2,3}.mp4` | Reels section, with extracted `-poster.jpg` stills | shipped |
| `public/CV.pdf` | Target of a "DOWNLOAD CV" button once `profile.resume` is set | not supplied |

The reels and the Instagram avatar came from the source portfolio at
[allam.qd.je](https://allam.qd.je). The ID-card portrait and the hero clip were
processed from supplied originals — see [`source-media/`](source-media/) for
those files and the exact recipe. Missing assets degrade gracefully: the site
builds and renders correctly without any of them.

## Sourcing rule

**Every string in `lib/data.ts` comes from the owner's own portfolio**
(`3a1mtest-prog/Allam`, deployed at allam.qd.je). Nothing is written or
inferred. A previous revision violated this — it carried an authored bio, a
skills grid derived from GitHub repo stacks, and projects read off the repo
list — and all of it has been removed.

If you extend the site, source the copy. Don't fill a section by writing
plausible text.

Sections dropped for lack of source content: projects, skills, career
objective, philosophy, education, work history, awards, community. The page is
now Hero → What I Do → Reels → Instagram → Contact, mirroring the source
portfolio's own structure.

Still blank because the source portfolio doesn't publish them:
`profile.email`, `profile.resume`. While `email` is empty the contact CTA
falls back to Instagram.

## Backgrounds

The hero backdrop is `components/HeroBackdrop.tsx`: a full-bleed looping clip,
colour-graded to the crimson palette **at encode time** rather than through CSS
blend modes, so it renders identically in every browser. Layered gradients on
top hold the headline and body copy at readable contrast. It pauses once the
hero scrolls out of view and holds its poster frame under
`prefers-reduced-motion`.

`components/ScrollFrames.tsx` — the 192-frame scroll-scrubbed canvas from the
original brief, with the radial watermark patch in `renderFrame()` — is still
in the repo but **no longer mounted**, since the hero clip now does this job at
a fraction of the bytes. It probed `frame_001.jpg` on every page load and 404'd
because the sequence was never supplied. To bring it back: populate
`public/assets/frames/` (see [its README](public/assets/frames/README.md)) and
re-add `<ScrollFrames />` to `app/page.tsx`.

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
