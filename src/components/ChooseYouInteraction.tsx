import React from 'react';

/**
 * ChooseYouInteraction Component
 * Purpose: An interactive choice mechanic where every path, button, or choice
 * invariably leads to choosing Rasgulla, every single day.
 */
const ChooseYouInteraction: React.FC = () => {
  return (
    <section
      id="choose"
      data-section="choose-you-interaction"
      className="min-h-[70vh] flex flex-col items-center justify-center relative px-6 py-24 text-center border-b border-dark-warm/50"
    >
      <div className="max-w-xl mx-auto space-y-6">
        <span className="text-xs tracking-widest uppercase text-champagne font-semibold">
          No Hesitation
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-ivory">
          I Choose You
        </h2>
        <p className="text-lg text-ivory/80 font-serif">
          In every universe, across every timeline, in every single moment.
        </p>
        <div className="pt-4 flex justify-center gap-4">
          <button
            type="button"
            className="px-6 py-3 rounded-full border border-champagne text-champagne hover:bg-champagne hover:text-dark-bg font-serif transition-colors"
          >
            Always You
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChooseYouInteraction;
