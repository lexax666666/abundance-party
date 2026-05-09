---
name: manage-music
description: >-
  Add, remove, or update music tracks in the playlist. Covers downloading MP3s
  via yt-dlp, placing them in apps/web/public/music/, updating the TRACKS array
  in MusicPlayerContext.tsx, and verifying with the identify-songs script. Use
  when the user wants to add a new song, remove a track, or update track metadata.
---

# Manage Music Playlist

Add, remove, or update tracks in the abundance party music playlist.

## Adding a New Track

1. Download the MP3 using `yt-dlp`:
   ```bash
   yt-dlp --extract-audio --audio-format mp3 --audio-quality 0 \
     -o "apps/web/public/music/<kebab-case-name>.%(ext)s" \
     "ytsearch1:<song title> <artist>"
   ```

2. Verify the download with the identify-songs script:
   ```bash
   node packages/scripts/identify-songs.mjs apps/web/public/music/<file>.mp3
   ```

3. Add the track to the `TRACKS` array in:
   `apps/web/src/components/MusicPlayerContext.tsx`
   ```typescript
   {
     title: "Song Title",
     artist: "Artist Name",
     src: "/music/<kebab-case-name>.mp3",
   },
   ```

## Key Files

- `apps/web/public/music/` — MP3 files served as static assets
- `apps/web/src/components/MusicPlayerContext.tsx` — `TRACKS` array and audio player state
- `apps/web/src/components/MusicPlaylist.tsx` — playlist UI component
- `apps/web/src/components/GlobalPlayer.tsx` — persistent bottom player bar

## Track Metadata Format

```typescript
interface Track {
  title: string;   // Display title from Shazam
  artist: string;  // Artist name from Shazam
  src: string;     // Path relative to public/, e.g. "/music/song-name.mp3"
}
```

## File Naming Convention

- Use kebab-case for MP3 filenames: `morning-queen-energy.mp3`
- Match the song title as closely as possible
