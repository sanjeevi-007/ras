import { useRef, useState, useEffect } from 'react';
import { Music, Pause } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Clean up audio on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) {
      const audio = new Audio('/audio/background.mp3');
      audio.loop = true;
      audio.volume = 0.45;
      audio.addEventListener('ended', () => setIsPlaying(false));
      audio.addEventListener('pause', () => setIsPlaying(false));
      audio.addEventListener('play', () => setIsPlaying(true));
      audioRef.current = audio;
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // If file is missing or blocked, gracefully toggle UI state without crashing
          setIsPlaying((prev) => !prev);
        });
    }
  };

  return (
    <div
      data-section="music-toggle"
      className="fixed bottom-6 right-6 z-40"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <motion.button
        type="button"
        onClick={toggleMusic}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Toggle music"
        title={isPlaying ? 'Pause romantic melody' : 'Play romantic melody'}
        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 border shadow-lg focus:outline-none focus:ring-2 focus:ring-champagne/60 ${
          isPlaying
            ? 'bg-dark-warm/90 border-champagne text-champagne shadow-[0_0_15px_rgba(212,175,55,0.3)]'
            : 'bg-dark-bg/80 border-dusty-rose/30 text-ivory/80 hover:text-champagne-light hover:border-champagne/50'
        }`}
      >
        {isPlaying ? (
          <div className="flex items-center gap-1">
            <Pause size={17} strokeWidth={2.2} />
            <motion.span
              animate={{ scaleY: [0.6, 1.2, 0.6] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
              className="w-0.5 h-3 bg-champagne rounded-full hidden sm:inline-block"
              aria-hidden="true"
            />
          </div>
        ) : (
          <Music size={18} strokeWidth={1.8} />
        )}
      </motion.button>
    </div>
  );
}
