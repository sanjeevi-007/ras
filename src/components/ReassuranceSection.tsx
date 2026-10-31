import React from 'react';

/**
 * ReassuranceSection Component
 * Purpose: A grounding and deeply calming reassurance section that provides
 * emotional safety, unwavering support, and unconditional warmth.
 */
const ReassuranceSection: React.FC = () => {
  return (
    <section
      id="reassurance"
      data-section="reassurance-section"
      className="min-h-[70vh] flex flex-col items-center justify-center relative px-6 py-24 text-center border-b border-dark-warm/50"
    >
      <div className="max-w-xl mx-auto space-y-6">
        <span className="text-xs tracking-widest uppercase text-dusty-rose font-semibold">
          Safe Harbor
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-ivory">
          You Are Always Safe Here
        </h2>
        <p className="text-muted-text font-serif italic text-lg leading-relaxed">
          On easy days, on hard days, and on every quiet day in between—I am here.
        </p>
      </div>
    </section>
  );
};

export default ReassuranceSection;
