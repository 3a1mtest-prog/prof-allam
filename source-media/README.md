# Source media

Untouched originals as supplied. The processed versions the site actually
loads live in `public/assets/`.

| Original | Becomes | Processing |
| --- | --- | --- |
| `chair-original.jpeg` | `public/assets/avatar.webp` | **Kept in its original colours.** Two earlier attempts were dropped: keying the cream background out left fringing along the left edge and around the hair, and a red colour balance tinted the face and suit away from the shot. What ships is a crop starting below the headline text, a touch of contrast, and a neutral edge falloff — no red in the image at all. The crimson lives in the card frame instead (inset glow + hairline ring in `LanyardCard`), so the portrait reads exactly as photographed. |
| `portrait-original.mp4` | `public/assets/hero-loop.mp4` + `hero-poster.jpg` | Desaturated and re-graded through a crimson duotone curve, so the blue studio backdrop reads red in the site palette. Scaled to 720px wide, H.264 CRF 27, audio stripped. |

Both were produced with ffmpeg. The grade is baked in at encode time rather
than applied via CSS blend modes, so it renders identically across browsers.
