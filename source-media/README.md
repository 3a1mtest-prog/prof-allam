# Source media

Untouched originals as supplied. The processed versions the site actually
loads live in `public/assets/`.

| Original | Becomes | Processing |
| --- | --- | --- |
| `chair-original.jpeg` | `public/assets/avatar.webp` | Cropped below the headline text, then the cream backdrop and the green disc are **recoloured red in place** — not cut out. Each pixel gets a soft weight from how bright-and-desaturated it is (plus a second weight for green-dominant pixels), and its colour is blended toward red by that weight. Because no alpha is produced there are no cutout edges to fringe. An ellipse over the face is excluded so skin and teeth keep their own colour, and the chair survives on its own: its velvet samples at rgb(3,3,3), far below the green threshold. Two earlier approaches were rejected — masking the background out (fringed along the left edge and around the hair) and a global red balance (tinted the face and suit). |
| `portrait-original.mp4` | `public/assets/hero-loop.{webm,mp4}` + `hero-poster.jpg` | The blue studio backdrop is **recoloured red, the subject is left alone.** An earlier version ran a crimson duotone over the whole frame, which turned him red too. Now a weight is taken from blue dominance — `b - max(r, g)`, which measures 14–62 across the backdrop but only 2 on his t-shirt and is negative on skin — and the backdrop's blue channel is mapped across to red by that weight. Scaled to 720px wide, audio stripped, VP9 + H.264. |

Both were produced with ffmpeg. The grade is baked in at encode time rather
than applied via CSS blend modes, so it renders identically across browsers.
