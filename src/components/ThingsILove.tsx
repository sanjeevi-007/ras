import React from 'react';
import { reasons } from '../data/reasons';

/**
 * ThingsILove Component
 * Purpose: An interactive showcase of all the reasons and little details
 * that make Rasgulla endlessly adorable and deeply cherished.
 */
const ThingsILove: React.FC = () => {
  return (
    <section
      id="things"
      data-section="things-i-love"
      className="min-h-[70vh] flex flex-col items-center justify-center relative px-6 py-24 text-center border-b border-dark-warm/50"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <span className="text-xs tracking-widest uppercase text-dusty-rose font-semibold">
          Countless Reasons
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-ivory">
          Things I Love
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
          {reasons.slice(0, 6).map((reason, index) => (
            <div
              key={index}
              className="p-5 rounded-xl border border-dusty-rose/20 bg-dark-warm/40 text-left hover:border-dusty-rose/40 transition-colors"
            >
              <span className="text-xs text-champagne font-mono">0{index + 1}</span>
              <p className="mt-2 text-ivory/90 font-serif text-base">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThingsILove;
