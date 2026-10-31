import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface Metric {
  id: string;
  label: string;
  value: number; // 0 to 100 for visual bar
  displayValue: string;
  commentary: string;
  color: string;
}

const initialMetrics: Metric[] = [
  {
    id: 'sweetness',
    label: 'Sweetness',
    value: 100,
    displayValue: '100%',
    commentary: 'Clinically proven to dissolve any stressful day in seconds.',
    color: 'from-champagne to-champagne-light',
  },
  {
    id: 'cuteness',
    label: 'Cuteness',
    value: 100,
    displayValue: 'illegal',
    commentary: 'Exceeds permissible limits. Authorities have not been notified.',
    color: 'from-dusty-rose to-blush',
  },
  {
    id: 'annoying',
    label: 'Annoying me',
    value: 32,
    displayValue: 'occasionally',
    commentary: 'Mostly just sending reels or pretending not to hear me.',
    color: 'from-warm-brown to-dusty-rose',
  },
  {
    id: 'smile',
    label: 'Making me smile',
    value: 100,
    displayValue: 'dangerously high',
    commentary: 'Causes involuntary grins at phone screens in public places.',
    color: 'from-champagne via-blush to-champagne',
  },
  {
    id: 'attention',
    label: 'Stealing my attention',
    value: 100,
    displayValue: '24/7',
    commentary: 'Zero competition. My thoughts default to you automatically.',
    color: 'from-burgundy via-dusty-rose to-champagne',
  },
  {
    id: 'heart',
    label: 'Place in my heart',
    value: 100,
    displayValue: 'permanently occupied',
    commentary: 'Lease expired; ownership transferred forever.',
    color: 'from-champagne to-dusty-rose',
  },
];

export default function RasgullaSection() {
  const [activeMetric, setActiveMetric] = useState<string | null>(null);
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="rasgulla"
      data-section="rasgulla"
      className="relative min-h-screen py-28 px-6 sm:px-12 lg:px-20 select-none overflow-hidden border-b border-dark-warm/40 bg-gradient-to-b from-dark-bg via-dark-warm/30 to-dark-bg"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/3 right-1/4 w-[450px] h-[450px] rounded-full pointer-events-none opacity-20 bg-[radial-gradient(circle,rgba(212,175,55,0.25)_0%,rgba(107,45,62,0.15)_50%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-champagne text-xs uppercase tracking-widest font-mono"
          >
            <Activity size={15} />
            <span>Empirical Field Notes</span>
            <Activity size={15} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory tracking-tight"
          >
            Important scientific research
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-handwritten text-2xl sm:text-3xl text-dusty-rose"
          >
            Why is she called Rasgulla?
          </motion.p>
        </div>

        {/* Research Laboratory Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl border border-champagne/30 bg-dark-warm/60 backdrop-blur-xl shadow-2xl p-7 sm:p-12 space-y-10 overflow-hidden"
        >
          {/* Top metadata badge row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-champagne/15 pb-6">
            <div className="flex items-center gap-4">
              {/* Elegant CSS/SVG Animated Rasgulla Icon Badge */}
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-champagne/20 via-dusty-rose/15 to-transparent border border-champagne/40 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.25)]">
                <svg
                  viewBox="0 0 40 40"
                  className="w-9 h-9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Subtle syrup halo */}
                  <circle cx="20" cy="20" r="16" fill="url(#syrupGrad)" opacity="0.4" />
                  {/* Luminescent sweet sphere */}
                  <circle cx="20" cy="20" r="12" fill="url(#rasgullaGrad)" />
                  {/* Surface shimmer highlights */}
                  <ellipse cx="16" cy="15" rx="4" ry="2" fill="#FAF7F2" opacity="0.6" />
                  <circle cx="23" cy="22" r="1.5" fill="#FAF7F2" opacity="0.4" />
                  <defs>
                    <radialGradient id="rasgullaGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17 17) rotate(45) scale(15)">
                      <stop stopColor="#FAF7F2" />
                      <stop offset="0.65" stopColor="#F5E6CC" />
                      <stop offset="1" stopColor="#D4AF37" />
                    </radialGradient>
                    <radialGradient id="syrupGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 20) rotate(90) scale(16)">
                      <stop stopColor="#D4AF37" stopOpacity="0.8" />
                      <stop offset="1" stopColor="#1A1210" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>

                {/* Subtle pulse ring */}
                {!prefersReduced && (
                  <motion.div
                    animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-0 rounded-2xl border border-champagne/50"
                  />
                )}
              </div>

              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-ivory font-medium">
                  Subject: Rasgulla
                </h3>
                <p className="font-mono text-xs text-muted-text tracking-wide">
                  Laboratory ID: SANJEEVI-007 // Status: Incurable
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne/10 border border-champagne/30 text-champagne text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
              <span>100% Peer Reviewed</span>
            </div>
          </div>

          {/* Metrics Analysis Grid */}
          <div className="space-y-6">
            {initialMetrics.map((metric) => {
              const isActive = activeMetric === metric.id;

              return (
                <div
                  key={metric.id}
                  onMouseEnter={() => setActiveMetric(metric.id)}
                  onMouseLeave={() => setActiveMetric(null)}
                  onClick={() => setActiveMetric(isActive ? null : metric.id)}
                  className={`group p-4 rounded-2xl transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-dark-bg/70 border border-champagne/50 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
                      : 'hover:bg-dark-bg/40 border border-transparent'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveMetric(isActive ? null : metric.id);
                    }
                  }}
                  aria-label={`${metric.label}: ${metric.displayValue}`}
                >
                  {/* Label & Value */}
                  <div className="flex items-center justify-between text-sm sm:text-base font-serif mb-2">
                    <span className="text-ivory font-medium flex items-center gap-2">
                      {metric.label}
                      {isActive && <Heart size={12} className="text-dusty-rose fill-dusty-rose" />}
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-champagne font-semibold tracking-wider">
                      {metric.displayValue}
                    </span>
                  </div>

                  {/* Meter Progress Bar */}
                  <div className="h-2.5 w-full bg-dark-bg/80 rounded-full overflow-hidden p-0.5 border border-dark-warm">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.value}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: prefersReduced ? 0.2 : 1.2,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`h-full rounded-full bg-gradient-to-r ${metric.color} shadow-[0_0_10px_rgba(212,175,55,0.4)]`}
                    />
                  </div>

                  {/* Commentary Note (Hover or Active) */}
                  <p
                    className={`mt-2.5 text-xs sm:text-sm font-sans transition-all duration-200 ${
                      isActive
                        ? 'text-ivory/90 opacity-100 italic'
                        : 'text-muted-text/75 opacity-70 group-hover:opacity-100 group-hover:text-muted-text'
                    }`}
                  >
                    ↳ {metric.commentary}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Research Conclusion Block */}
          <div className="pt-6 border-t border-champagne/15 text-center space-y-3 bg-dark-bg/50 p-6 sm:p-8 rounded-2xl border border-dark-warm">
            <span className="font-mono text-xs uppercase tracking-widest text-champagne font-semibold">
              Final Official Findings
            </span>
            <p className="font-serif text-xl sm:text-2xl text-ivory">
              Conclusion: one Rasgulla is enough.
            </p>
            <p className="font-handwritten text-2xl sm:text-3xl text-dusty-rose">
              Unfortunately, I already got attached.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
