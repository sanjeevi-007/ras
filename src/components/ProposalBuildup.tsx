import React from 'react';

/**
 * ProposalBuildup Component
 * Purpose: An emotionally charged suspense and anticipation buildup,
 * slowing down the pace, syncing heartbeats, and setting up the question.
 */
const ProposalBuildup: React.FC = () => {
  return (
    <section
      id="buildup"
      data-section="proposal-buildup"
      className="min-h-[70vh] flex flex-col items-center justify-center relative px-6 py-24 text-center border-b border-dark-warm/50"
    >
      <div className="max-w-xl mx-auto space-y-6">
        <span className="text-xs tracking-widest uppercase text-champagne font-semibold animate-pulse">
          Listen Closely
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-ivory">
          There's Just One Thing Left…
        </h2>
        <p className="text-muted-text font-serif italic text-lg leading-relaxed">
          Through all the laughter, the talks, and every shared dream,
          my heart has only ever arrived at one question.
        </p>
      </div>
    </section>
  );
};

export default ProposalBuildup;
