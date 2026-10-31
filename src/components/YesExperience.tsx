import React from 'react';

/**
 * YesExperience Component
 * Purpose: An ecstatic celebration experience triggered upon saying 'Yes',
 * featuring romantic confetti, joyful micro-interactions, and pure happiness.
 */
const YesExperience: React.FC = () => {
  return (
    <section
      id="yes"
      data-section="yes-experience"
      className="min-h-[70vh] flex flex-col items-center justify-center relative px-6 py-24 text-center border-b border-dark-warm/50"
    >
      <div className="max-w-xl mx-auto space-y-6">
        <span className="text-4xl animate-bounce">✨💖✨</span>
        <h2 className="text-3xl md:text-5xl font-serif text-ivory">
          She Said Yes!
        </h2>
        <p className="text-lg text-ivory/80 font-serif leading-relaxed">
          The happiest day, the brightest smile, and the beginning of forever.
        </p>
      </div>
    </section>
  );
};

export default YesExperience;
