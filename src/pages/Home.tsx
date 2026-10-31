import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Cinematic Opening
import OpeningScene from '../components/OpeningScene';

// Narrative Story Sections
import HeroSection from '../components/HeroSection';
import EyesSketchReveal from '../components/EyesSketchReveal';
import FlowersPhoto from '../components/FlowersPhoto';
import MirrorPhoto from '../components/MirrorPhoto';
import ThingsILove from '../components/ThingsILove';
import RasgullaSection from '../components/RasgullaSection';
import ReassuranceSection from '../components/ReassuranceSection';
import ChooseYouInteraction from '../components/ChooseYouInteraction';
import FutureSection from '../components/FutureSection';
import PromisesSection from '../components/PromisesSection';
import MemoryTimeline from '../components/MemoryTimeline';
import LoveLetter from '../components/LoveLetter';
import ProposalBuildup from '../components/ProposalBuildup';
import ProposalScene from '../components/ProposalScene';
import YesExperience from '../components/YesExperience';
import FinalMessage from '../components/FinalMessage';

// Global Overlays
import FloatingParticles from '../components/FloatingParticles';
import CursorGlow from '../components/CursorGlow';
import MusicToggle from '../components/MusicToggle';
import ProgressIndicator from '../components/ProgressIndicator';
import EasterEgg from '../components/EasterEgg';

export default function Home() {
  const [hasOpened, setHasOpened] = useState<boolean>(false);

  // Lock body scroll until user clicks "Open it ♡" in OpeningScene
  useEffect(() => {
    if (!hasOpened) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [hasOpened]);

  return (
    <div className="relative min-h-screen bg-dark-bg text-ivory film-grain selection:bg-blush selection:text-dark-bg">
      {/* Persistent Atmosphere Overlays (Rendered continuously) */}
      <FloatingParticles />
      <CursorGlow />
      <MusicToggle />
      <EasterEgg />

      {/* Cinematic Opening Modal / Screen */}
      <AnimatePresence>
        {!hasOpened && (
          <OpeningScene onComplete={() => setHasOpened(true)} />
        )}
      </AnimatePresence>

      {/* Main Story Flow - Unlocked after Opening */}
      {hasOpened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative z-10"
        >
          {/* Story Progress Indicator */}
          <ProgressIndicator />

          {/* Sequential Narrative */}
          <main>
            <HeroSection />
            <EyesSketchReveal />
            <FlowersPhoto />
            <MirrorPhoto />
            <ThingsILove />
            <RasgullaSection />
            <ReassuranceSection />
            <ChooseYouInteraction />
            <FutureSection />
            <PromisesSection />
            <MemoryTimeline />
            <LoveLetter />
            <ProposalBuildup />
            <ProposalScene />
            <YesExperience />
            <FinalMessage />
          </main>
        </motion.div>
      )}
    </div>
  );
}
