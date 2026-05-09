"use client";

import {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";

interface Track {
  title: string;
  artist: string;
  src: string;
}

interface MusicPlayerContextValue {
  tracks: Track[];
  currentTrackIndex: number;
  isPlaying: boolean;
  progress: number;
  duration: number;
  currentTime: number;
  volume: number;
  toggle: () => void;
  next: () => void;
  prev: () => void;
  seekTo: (fraction: number) => void;
  setVolume: (v: number) => void;
  selectTrack: (index: number) => void;
}

const TRACKS: Track[] = [
  {
    title: "Morning Queen Energy",
    artist: "Shift to Abundance",
    src: "/music/morning-queen-energy.mp3",
  },
  {
    title: "I'm So Happy",
    artist: "Higher Flow",
    src: "/music/im-so-happy.mp3",
  },
  {
    title: "Money Loves Me",
    artist: "ManifestMusic.Studio",
    src: "/music/money-loves-me.mp3",
  },
  {
    title: "Chakra Abundance",
    artist: "ManifestMusic.Studio",
    src: "/music/chakra-abundance.mp3",
  },
  {
    title: "Grateful",
    artist: "Affirmation Club",
    src: "/music/grateful.mp3",
  },
];

const MusicPlayerContext = createContext<MusicPlayerContextValue | null>(null);

export function useMusicPlayer() {
  const ctx = useContext(MusicPlayerContext);
  if (!ctx) throw new Error("useMusicPlayer must be within MusicPlayerProvider");
  return ctx;
}

export function MusicPlayerProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isPlayingRef = useRef(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolumeState] = useState(0.7);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    const audio = new Audio();
    audio.volume = 0.7;
    audio.preload = "metadata";
    audioRef.current = audio;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      if (audio.duration && isFinite(audio.duration)) {
        setProgress(audio.currentTime / audio.duration);
      }
    };
    const handleDurationChange = () => {
      if (isFinite(audio.duration)) setDuration(audio.duration);
    };
    const handleEnded = () => {
      isPlayingRef.current = true;
      setIsPlaying(true);
      setCurrentTrackIndex((prev) => (prev + 1) % TRACKS.length);
    };
    const handleError = () => {
      setIsPlaying(false);
      isPlayingRef.current = false;
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("durationchange", handleDurationChange);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    // Autoplay first track on page load
    audio.src = TRACKS[0].src;
    audio.play().then(() => {
      isPlayingRef.current = true;
      setIsPlaying(true);
    }).catch(() => {
      // Browser blocked autoplay — wait for first user interaction
      const resumeOnInteraction = () => {
        audio.play().then(() => {
          isPlayingRef.current = true;
          setIsPlaying(true);
        }).catch(() => {});
        document.removeEventListener("click", resumeOnInteraction);
        document.removeEventListener("touchstart", resumeOnInteraction);
      };
      document.addEventListener("click", resumeOnInteraction, { once: true });
      document.addEventListener("touchstart", resumeOnInteraction, { once: true });
    });

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("durationchange", handleDurationChange);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
      audio.pause();
      audio.src = "";
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const track = TRACKS[currentTrackIndex];
    if (!track) return;
    audio.src = track.src;
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);
    if (isPlayingRef.current) {
      audio.play().catch(() => {
        setIsPlaying(false);
        isPlayingRef.current = false;
      });
    }
  }, [currentTrackIndex]);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlayingRef.current) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {});
      setIsPlaying(true);
    }
  }, []);

  const next = useCallback(() => {
    isPlayingRef.current = true;
    setIsPlaying(true);
    setCurrentTrackIndex((prev) => (prev + 1) % TRACKS.length);
  }, []);

  const prev = useCallback(() => {
    const audio = audioRef.current;
    if (audio && audio.currentTime > 3) {
      audio.currentTime = 0;
      return;
    }
    isPlayingRef.current = true;
    setIsPlaying(true);
    setCurrentTrackIndex((prev) => (prev - 1 + TRACKS.length) % TRACKS.length);
  }, []);

  const seekTo = useCallback((fraction: number) => {
    const audio = audioRef.current;
    if (audio && audio.duration && isFinite(audio.duration)) {
      audio.currentTime = fraction * audio.duration;
    }
  }, []);

  const setVolume = useCallback((v: number) => {
    const audio = audioRef.current;
    if (audio) audio.volume = v;
    setVolumeState(v);
  }, []);

  const selectTrack = useCallback(
    (index: number) => {
      if (index === currentTrackIndex) {
        toggle();
        return;
      }
      isPlayingRef.current = true;
      setIsPlaying(true);
      setCurrentTrackIndex(index);
    },
    [currentTrackIndex, toggle]
  );

  return (
    <MusicPlayerContext.Provider
      value={{
        tracks: TRACKS,
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
        selectTrack,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
}
