"use client";

import { useMusicPlayer } from "./MusicPlayerContext";

function formatTime(seconds: number): string {
  if (!seconds || !isFinite(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export default function GlobalPlayer() {
  const {
    tracks,
    currentTrackIndex,
    isPlaying,
    progress,
    duration,
    currentTime,
    volume,
    toggle,
    next,
    prev,
    seekTo,
    setVolume,
  } = useMusicPlayer();

  const track = tracks[currentTrackIndex];

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const fraction = (e.clientX - rect.left) / rect.width;
    seekTo(Math.max(0, Math.min(1, fraction)));
  };

  if (!track) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-[player-slide-up_0.6s_ease-out]">
      {/* Progress bar — full width, thin, interactive */}
      <div
        className="group h-1 w-full cursor-pointer bg-gold-primary/10 transition-all hover:h-1.5"
        onClick={handleProgressClick}
        role="slider"
        aria-label="Seek"
        aria-valuenow={Math.round(progress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
      >
        <div
          className="relative h-full bg-gradient-to-r from-gold-warm via-gold-primary to-gold-light transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }}
        >
          <div className="absolute -right-1.5 -top-0.5 h-3 w-3 rounded-full bg-gold-light opacity-0 shadow-[0_0_8px_rgba(255,215,0,0.5)] transition-opacity group-hover:opacity-100" />
        </div>
      </div>

      {/* Player body */}
      <div className="border-t border-gold-primary/10 bg-cosmic-deep/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3 sm:gap-5 sm:px-6">
          {/* Track info */}
          <div className="min-w-0 flex-1 sm:flex-initial sm:w-52">
            <p className="truncate font-[family-name:var(--font-serif)] text-sm font-medium text-gold-pale sm:text-base">
              {track.title}
            </p>
            <p className="truncate font-[family-name:var(--font-body)] text-xs text-gold-warm/50 sm:text-sm">
              {track.artist}
            </p>
          </div>

          {/* Playback controls */}
          <div className="flex items-center gap-1 sm:gap-3">
            {/* Previous */}
            <button
              onClick={prev}
              className="flex h-9 w-9 items-center justify-center text-gold-warm/50 transition-colors hover:text-gold-light"
              aria-label="Previous track"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
              </svg>
            </button>

            {/* Play/Pause */}
            <button
              onClick={toggle}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-primary/40 text-gold-light transition-all hover:border-gold-primary hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] sm:h-11 sm:w-11"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-current">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Next */}
            <button
              onClick={next}
              className="flex h-9 w-9 items-center justify-center text-gold-warm/50 transition-colors hover:text-gold-light"
              aria-label="Next track"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
              </svg>
            </button>
          </div>

          {/* Time display — hidden on small mobile */}
          <div className="hidden font-[family-name:var(--font-body)] text-xs tabular-nums text-gold-warm/35 sm:block">
            {formatTime(currentTime)}&ensp;/&ensp;{formatTime(duration)}
          </div>

          {/* Spacer to push volume right on desktop */}
          <div className="hidden flex-1 md:block" />

          {/* Volume — desktop only */}
          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => setVolume(volume > 0 ? 0 : 0.7)}
              className="text-gold-warm/40 transition-colors hover:text-gold-light"
              aria-label={volume > 0 ? "Mute" : "Unmute"}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                {volume === 0 ? (
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                ) : volume < 0.5 ? (
                  <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z" />
                ) : (
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                )}
              </svg>
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="volume-slider h-1 w-20 cursor-pointer appearance-none rounded-full bg-gold-primary/20"
              aria-label="Volume"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
