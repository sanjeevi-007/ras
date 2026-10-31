import React from 'react';
import { memories } from '../data/memories';

/**
 * MemoryTimeline Component
 * Purpose: A timeline chronicling key milestones: 'We met', 'We talked',
 * 'We laughed', 'We became us', leading up to 'you became home.'
 */
const MemoryTimeline: React.FC = () => {
  return (
    <section
      id="timeline"
      data-section="memory-timeline"
      className="min-h-[70vh] flex flex-col items-center justify-center relative px-6 py-24 text-center border-b border-dark-warm/50"
    >
      <div className="max-w-2xl mx-auto space-y-8">
        <span className="text-xs tracking-widest uppercase text-dusty-rose font-semibold">
          Our Journey
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-ivory">
          Memory Timeline
        </h2>
        <div className="space-y-6 text-left pt-6">
          {memories.map((mem) => (
            <div
              key={mem.id}
              className="p-5 rounded-xl border border-dusty-rose/20 bg-dark-warm/30 relative pl-8 border-l-2 border-l-champagne"
            >
              <h3 className="font-serif text-xl text-champagne-light">{mem.label}</h3>
              <p className="mt-1 text-ivory/80 text-sm font-sans">{mem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoryTimeline;
