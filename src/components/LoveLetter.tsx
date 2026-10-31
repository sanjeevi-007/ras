import React from 'react';

/**
 * LoveLetter Component
 * Purpose: An intimate, parchment-textured love letter written from the heart,
 * with handwritten accents and genuine emotion.
 */
const LoveLetter: React.FC = () => {
  return (
    <section
      id="letter"
      data-section="love-letter"
      className="min-h-[70vh] flex flex-col items-center justify-center relative px-6 py-24 text-center border-b border-dark-warm/50"
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <span className="text-xs tracking-widest uppercase text-dusty-rose font-semibold">
          From Me To You
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-ivory">
          A Letter For You
        </h2>
        <div className="paper-texture p-8 md:p-12 rounded-2xl text-dark-bg shadow-2xl text-left space-y-4 border border-warm-brown/20">
          <p className="font-handwritten text-2xl text-warm-brown">
            My dearest Rasgulla,
          </p>
          <p className="font-serif text-base text-dark-warm leading-relaxed">
            Words often fall short when I try to capture just how much light you bring into my life.
            Thank you for being you, for your kindness, your warmth, and the way you make every
            single day brighter.
          </p>
          <p className="font-handwritten text-xl text-right text-warm-brown pt-2">
            Yours always,<br />Sanjeevi
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoveLetter;
