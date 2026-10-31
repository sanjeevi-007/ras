import React from 'react';

/**
 * MirrorPhoto Component
 * Purpose: An intimate close-up mirror selfie moment showing the warmth,
 * smiles, and candid chemistry between Sanjeevi and Rasgulla.
 */
const MirrorPhoto: React.FC = () => {
  return (
    <section
      id="mirror"
      data-section="mirror-photo"
      className="min-h-[70vh] flex flex-col items-center justify-center relative px-6 py-24 text-center border-b border-dark-warm/50"
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <span className="text-xs tracking-widest uppercase text-champagne font-semibold">
          Reflections Of Us
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-ivory">
          Mirror Photo
        </h2>
        <div className="w-full max-w-sm mx-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-champagne/30 bg-dark-warm/40 relative flex items-center justify-center">
          <img
            src="/images/us-mirror.jpg"
            alt="Mirror selfie of Sanjeevi and Rasgulla"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="font-handwritten text-2xl text-blush">
          Just us, laughing in our own little world.
        </p>
      </div>
    </section>
  );
};

export default MirrorPhoto;
