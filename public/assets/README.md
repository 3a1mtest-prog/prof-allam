# Assets

| Path | Used by | Notes |
| --- | --- | --- |
| `avatar.png` | Lanyard ID card | Portrait, ~3:3.6 ratio. A placeholder silhouette renders until you add it. |
| `frames/` | Background canvas | 192-frame scroll sequence — see `frames/README.md`. |
| `projects/*.svg` | Featured projects | Generated placeholders. Replace with real screenshots (16:9). |
| `gallery/*.svg` | Gallery | Generated placeholders. Replace with real photos (4:3). |

Replacing an image is a drop-in swap as long as the filename matches what
`lib/data.ts` points at — or just change the path there.

Also expected at the site root: `public/Shadin_Kappachali_CV.pdf` for the
"DOWNLOAD CV" button (path configurable via `profile.resume`).
