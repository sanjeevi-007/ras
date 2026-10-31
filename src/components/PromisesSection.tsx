import React from 'react';
import { promises } from '../data/promises';

/**
 * PromisesSection Component
 * Purpose: Meaningful, genuine, unpretentious promises etched in golden tones
 * expressing love through actions, patience, and mutual respect.
 */
const PromisesSection: React.FC = () => {
  return (
    <section
      id="promises"
      data-section="promises-section"
      className="min-h-[70vh] flex flex-col items-center justify-center relative px-6 py-24 text-center border-b border-dark-warm/50"
    >
      <div className="max-w-3xl mx-auto space-y-8">
        <span className="text-xs tracking-widest uppercase text-champagne font-semibold">
          Quiet Vows
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-ivory">
          Promises to You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left pt-4">
          {promises.map((promise, index) => (
            <div
              key={index}
              className="p-4 rounded-xl border border-dusty-rose/20 bg-dark-warm/30 flex items-center gap-3"
            >
              <span className="w-2 h-2 rounded-full bg-champagne flex-shrink-0" />
              <span className="text-ivory/90 font-serif text-base">{promise}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromisesSection;
