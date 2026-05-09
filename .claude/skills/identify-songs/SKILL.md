---
name: identify-songs
description: >-
  Identify MP3 files using the Shazam API via node-shazam. Run on all tracks in
  apps/web/public/music/ or on a specific file. Use when adding new music,
  verifying track metadata, or checking if a downloaded song matches its expected
  title and artist.
---

# Identify Songs

Identify MP3 files using the Shazam API.

## Usage

```bash
# Identify all tracks in the music directory
node packages/scripts/identify-songs.mjs

# Identify a specific file
node packages/scripts/identify-songs.mjs path/to/song.mp3
```

## When to Use

- After downloading a new MP3 via `yt-dlp`
- To verify track metadata matches what's in `MusicPlayerContext.tsx`
- When a song title or artist is uncertain

## Key Files

- `packages/scripts/identify-songs.mjs` — the identification script
- `packages/scripts/package.json` — workspace package with `node-shazam` dependency
- `apps/web/public/music/` — MP3 files to identify

## Handling Mismatches

If Shazam identifies a track differently than expected:

1. Rename the MP3 file to match its actual title (kebab-case)
2. Download the correct song using `yt-dlp`:
   ```bash
   yt-dlp --extract-audio --audio-format mp3 --audio-quality 0 \
     -o "apps/web/public/music/<song-name>.%(ext)s" \
     "ytsearch1:<song title> <artist>"
   ```
3. Update the `TRACKS` array in `apps/web/src/components/MusicPlayerContext.tsx`
4. Re-run identification to verify
