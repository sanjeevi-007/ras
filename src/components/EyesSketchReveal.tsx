import React from 'react';

/**
 * EyesSketchReveal Component
 * Purpose: An artistic interactive showcase of the pencil sketch of Rasgulla's eyes,
 * celebrating her gaze and the way she sees the world.
 */
const EyesSketchReveal: React.FC = () => {
  return (
    <section
      id="eyes"
      data-section="eyes-sketch-reveal"
      className="min-h-[70vh] flex flex-col items-center justify-center relative px-6 py-24 text-center border-b border-dark-warm/50"
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <span className="text-xs tracking-widest uppercase text-champagne font-semibold">
          Art & Soul
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-ivory">
          Eyes Sketch Reveal
        </h2>
        <div className="w-full max-w-md mx-auto aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border border-dusty-rose/20 bg-dark-warm/40 relative flex items-center justify-center">
          <img
            src="/images/eyes-sketch.jpg"
            alt="Pencil sketch of Rasgulla's eyes"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="font-handwritten text-2xl text-blush">
          The eyes I could gaze into forever.
        </p>
      </div>
    </section>
  );
};

export default EyesSketchReveal;
