# Source media

Untouched originals as supplied. The processed versions the site actually
loads live in `public/assets/`.

| Original | Becomes | Processing |
| --- | --- | --- |
| `chair-original.jpeg` | `public/assets/avatar.webp` | **Graded, not keyed.** An earlier version masked the background out and composited the subject over a crimson radial; the mask left visible artifacts along the left edge and around the hair, so it was abandoned. The shipped version is a straight crop starting below the headline text, with a warm curve, a red-leaning colour balance and a subject-centred falloff. No alpha is created, so there is nothing to fringe. |
| `portrait-original.mp4` | `public/assets/hero-loop.mp4` + `hero-poster.jpg` | Desaturated and re-graded through a crimson duotone curve, so the blue studio backdrop reads red in the site palette. Scaled to 720px wide, H.264 CRF 27, audio stripped. |

Both were produced with ffmpeg. The grade is baked in at encode time rather
than applied via CSS blend modes, so it renders identically across browsers.
