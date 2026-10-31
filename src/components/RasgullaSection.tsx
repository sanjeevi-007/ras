import React from 'react';

/**
 * RasgullaSection Component
 * Purpose: A whimsical, heartwarming ode to why she is nicknamed 'Rasgulla'—
 * sweet, soft-hearted, precious, and meltingly dear.
 */
const RasgullaSection: React.FC = () => {
  return (
    <section
      id="rasgulla"
      data-section="rasgulla-section"
      className="min-h-[70vh] flex flex-col items-center justify-center relative px-6 py-24 text-center border-b border-dark-warm/50"
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <span className="text-4xl">🍬</span>
        <h2 className="text-3xl md:text-5xl font-serif text-ivory">
          Why My "Rasgulla"?
        </h2>
        <p className="text-lg md:text-xl text-ivory/80 font-serif leading-relaxed">
          Because life with you is sweet, gentle, and utterly impossible not to smile about.
        </p>
      </div>
    </section>
  );
};

export default RasgullaSection;
