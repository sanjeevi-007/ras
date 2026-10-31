import React from 'react';

/**
 * FlowersPhoto Component
 * Purpose: Full showcase of the couple together holding vibrant flowers,
 * capturing a radiant milestone moment and shared happiness.
 */
const FlowersPhoto: React.FC = () => {
  return (
    <section
      id="flowers"
      data-section="flowers-photo"
      className="min-h-[70vh] flex flex-col items-center justify-center relative px-6 py-24 text-center border-b border-dark-warm/50"
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <span className="text-xs tracking-widest uppercase text-dusty-rose font-semibold">
          Memories In Bloom
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-ivory">
          Flowers Photo
        </h2>
        <div className="w-full max-w-sm mx-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-dusty-rose/30 bg-dark-warm/40 relative flex items-center justify-center">
          <img
            src="/images/us-flowers.jpg"
            alt="Sanjeevi and Rasgulla with flowers"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="font-handwritten text-2xl text-blush">
          Even the prettiest blossoms pale beside you.
        </p>
      </div>
    </section>
  );
};

export default FlowersPhoto;
