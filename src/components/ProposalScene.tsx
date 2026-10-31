import React from 'react';

/**
 * ProposalScene Component
 * Purpose: The climax of the website experience—asking the question with
 * interactive choices that celebrate love.
 */
const ProposalScene: React.FC = () => {
  return (
    <section
      id="proposal"
      data-section="proposal-scene"
      className="min-h-[70vh] flex flex-col items-center justify-center relative px-6 py-24 text-center border-b border-dark-warm/50"
    >
      <div className="max-w-xl mx-auto space-y-8">
        <span className="text-4xl">💍</span>
        <h2 className="text-4xl md:text-6xl font-serif text-gradient font-bold">
          Will You Be Mine Forever?
        </h2>
        <p className="text-lg text-ivory/80 font-serif">
          Will you continue this adventure with me, my Rasgulla?
        </p>
        <div className="pt-4 flex justify-center gap-6">
          <button
            type="button"
            className="px-8 py-3.5 rounded-full bg-champagne text-dark-bg font-serif font-semibold text-lg hover:bg-champagne-light shadow-lg transition-transform hover:scale-105"
          >
            Yes ♡
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProposalScene;
