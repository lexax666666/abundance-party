"use client";

import { useMusicPlayer } from "./MusicPlayerContext";

function Equalizer() {
  return (
    <div className="flex items-end gap-[3px] h-4">
      <span className="w-[3px] h-full origin-bottom rounded-full bg-gold-light animate-[eq-bar_0.8s_ease-in-out_infinite]" />
      <span
        className="w-[3px] h-full origin-bottom rounded-full bg-gold-light animate-[eq-bar_0.6s_ease-in-out_infinite]"
        style={{ animationDelay: "0.2s" }}
      />
      <span
        className="w-[3px] h-full origin-bottom rounded-full bg-gold-light animate-[eq-bar_0.9s_ease-in-out_infinite]"
        style={{ animationDelay: "0.4s" }}
      />
    </div>
  );
}

export default function MusicPlaylist() {
  const { tracks, currentTrackIndex, isPlaying, selectTrack } = useMusicPlayer();

  return (
    <section id="playlist" className="relative z-10 px-4 py-16 sm:py-24">
      {/* Radial glow behind section */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.04)_0%,_transparent_70%)]" />

      <div className="relative mx-auto max-w-2xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.5em] text-gold-warm/40">
            Pre-Party Vibes
          </p>
          <h2
            className="font-[family-name:var(--font-serif)] text-2xl tracking-[0.3em] text-gold-light sm:text-3xl"
            style={{
              textShadow: "0 0 30px rgba(255, 215, 0, 0.15)",
            }}
          >
            CURATED SOUNDS
          </h2>
          <p className="mt-4 font-[family-name:var(--font-script)] text-2xl text-gold-primary/60 sm:text-3xl">
            Set the frequency
          </p>
        </div>

        {/* Track list */}
        <div className="overflow-hidden rounded-xl border border-gold-primary/15 bg-cosmic-surface/30 backdrop-blur-sm">
          {tracks.map((track, index) => {
            const isCurrent = index === currentTrackIndex;
            const isCurrentPlaying = isCurrent && isPlaying;

            return (
              <button
                key={index}
                onClick={() => selectTrack(index)}
                className={`
                  group flex w-full items-center gap-4 px-5 py-5 text-left transition-all duration-300 sm:gap-5 sm:px-7
                  ${index !== 0 ? "border-t border-gold-primary/[0.08]" : ""}
                  ${
                    isCurrent
                      ? "bg-gold-primary/[0.06] shadow-[inset_3px_0_0_var(--color-gold-primary)]"
                      : "hover:bg-gold-primary/[0.03]"
                  }
                `}
                aria-label={`${isCurrentPlaying ? "Pause" : "Play"} ${track.title} by ${track.artist}`}
              >
                {/* Track number / equalizer */}
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center">
                  {isCurrentPlaying ? (
                    <Equalizer />
                  ) : (
                    <span
                      className={`
                      font-[family-name:var(--font-body)] text-lg tabular-nums transition-colors
                      ${isCurrent ? "text-gold-primary" : "text-gold-warm/20 group-hover:text-gold-warm/45"}
                    `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  )}
                </div>

                {/* Track info */}
                <div className="min-w-0 flex-1">
                  <p
                    className={`
                    truncate font-[family-name:var(--font-serif)] text-base transition-colors sm:text-lg
                    ${isCurrent ? "text-gold-light" : "text-gold-pale group-hover:text-gold-light"}
                  `}
                  >
                    {track.title}
                  </p>
                  <p className="truncate font-[family-name:var(--font-body)] text-sm font-light italic text-gold-warm/45">
                    {track.artist}
                  </p>
                </div>

                {/* Play/pause indicator */}
                <div
                  className={`
                  flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300
                  ${
                    isCurrent
                      ? "border-gold-primary/50 text-gold-light shadow-[0_0_12px_rgba(212,175,55,0.15)]"
                      : "border-gold-primary/12 text-gold-warm/25 group-hover:border-gold-primary/35 group-hover:text-gold-warm/60"
                  }
                `}
                >
                  {isCurrentPlaying ? (
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                      <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="ml-0.5 h-3.5 w-3.5 fill-current">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Decorative note */}
        <p className="mt-6 text-center font-[family-name:var(--font-body)] text-xs font-light tracking-wider text-gold-warm/25">
          tap to preview the vibe
        </p>
      </div>
    </section>
  );
}
