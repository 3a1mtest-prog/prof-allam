# Source media

Untouched originals as supplied. The processed versions the site actually
loads live in `public/assets/`.

| Original | Becomes | Processing |
| --- | --- | --- |
| `chair-original.jpeg` | `public/assets/avatar.webp` | Cream studio background keyed out on a combined luminance + saturation mask (bright *and* desaturated pixels only, so skin survives), composited over a crimson→black radial, then a top fade and subject-centred falloff to swallow the headline text and the green circle. |
| `portrait-original.mp4` | `public/assets/hero-loop.mp4` + `hero-poster.jpg` | Desaturated and re-graded through a crimson duotone curve, so the blue studio backdrop reads red in the site palette. Scaled to 720px wide, H.264 CRF 27, audio stripped. |

Both were produced with ffmpeg. The grade is baked in at encode time rather
than applied via CSS blend modes, so it renders identically across browsers.
