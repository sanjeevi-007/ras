import React from 'react';

/**
 * FutureSection Component
 * Purpose: A visionary daydream of future adventures, cozy evenings, travels,
 * and quiet mornings shared side-by-side.
 */
const FutureSection: React.FC = () => {
  return (
    <section
      id="future"
      data-section="future-section"
      className="min-h-[70vh] flex flex-col items-center justify-center relative px-6 py-24 text-center border-b border-dark-warm/50"
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <span className="text-xs tracking-widest uppercase text-dusty-rose font-semibold">
          Tomorrow & Beyond
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-ivory">
          Our Future
        </h2>
        <p className="text-lg text-ivory/80 font-serif leading-relaxed">
          All the sunsets we haven't seen yet, the coffee we haven't shared yet, and the memories waiting to be made.
        </p>
      </div>
    </section>
  );
};

export default FutureSection;
