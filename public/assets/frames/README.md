# Scroll frame sequence

`components/ScrollFrames.tsx` scrubs a 192-frame image sequence against page
scroll to drive the cinematic background.

## Expected files

```
frame_001.jpg … frame_192.jpg
```

Zero-padded to three digits, placed directly in this folder.

## How to produce them

1. Shoot or pick a high-quality portrait photo.
2. Turn it into a 5–10 second cinematic clip with an image-to-video tool
   (Luma Dream Machine, Runway, Kling), keeping the face consistent.
3. Export exactly 192 frames:

   ```bash
   ffmpeg -i clip.mp4 -vf "scale=1600:-1,fps=192/DURATION_IN_SECONDS" \
     -frames:v 192 -q:v 4 frame_%03d.jpg
   ```

   Replace `DURATION_IN_SECONDS` with your clip length, then verify you got
   192 files (`ls frame_*.jpg | wc -l`).

## Behaviour without frames

The component probes `frame_001.jpg` on mount. If it 404s, the canvas never
mounts and the page falls back to its CSS gradient backdrop — so the site is
fully functional with this folder empty. Drop the sequence in and it activates
with no code change.

Any watermark burned into the bottom-right of the source video is covered at
render time by a soft radial patch in `#0a0404`; tune `patchW` / `patchH` in
`renderFrame()` if your watermark sits elsewhere.
