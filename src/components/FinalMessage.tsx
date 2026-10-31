import React from 'react';

/**
 * FinalMessage Component
 * Purpose: The concluding romantic statement, leaving Rasgulla with a warm,
 * lasting feeling of being unconditionally loved and cherished.
 */
const FinalMessage: React.FC = () => {
  return (
    <section
      id="final"
      data-section="final-message"
      className="min-h-[70vh] flex flex-col items-center justify-center relative px-6 py-24 text-center bg-dark-bg"
    >
      <div className="max-w-xl mx-auto space-y-6">
        <span className="text-xs tracking-widest uppercase text-champagne font-semibold">
          Endless
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-ivory">
          Forever & Always
        </h2>
        <p className="font-handwritten text-3xl md:text-4xl text-dusty-rose">
          I love you, Rasgulla.
        </p>
        <p className="text-xs text-muted-text font-mono pt-8">
          Crafted with love by Sanjeevi ♡
        </p>
      </div>
    </section>
  );
};

export default FinalMessage;
