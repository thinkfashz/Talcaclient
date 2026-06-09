import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NailSimulatorProps {
  color: string;
  shapeId: string;
  selectedExtras: string[];
}

const NAILS = [
  { x: 78, y: 150, r: -18, s: 0.82, delay: 0 },
  { x: 138, y: 108, r: -8, s: 0.95, delay: 0.06 },
  { x: 200, y: 92, r: 0, s: 1.04, delay: 0.12 },
  { x: 262, y: 108, r: 8, s: 0.95, delay: 0.18 },
  { x: 322, y: 150, r: 18, s: 0.82, delay: 0.24 },
];

export const NailSimulator: React.FC<NailSimulatorProps> = ({ color, shapeId, selectedExtras }) => {
  const hasExtra = (id: string) => selectedExtras.includes(id);

  const nailPath = () => {
    switch (shapeId) {
      case 'square':
        return 'M -24 62 L -24 -44 Q -24 -52 -16 -52 L 16 -52 Q 24 -52 24 -44 L 24 62 Q 24 72 0 72 Q -24 72 -24 62 Z';
      case 'coffin':
        return 'M -26 62 C -24 30 -18 -38 -12 -52 L 12 -52 C 18 -38 24 30 26 62 Q 24 72 0 72 Q -24 72 -26 62 Z';
      case 'stiletto':
        return 'M -24 62 C -22 25 -12 -36 0 -70 C 12 -36 22 25 24 62 Q 22 72 0 72 Q -22 72 -24 62 Z';
      case 'oval':
        return 'M -26 62 C -28 20 -18 -56 0 -58 C 18 -56 28 20 26 62 Q 24 72 0 72 Q -24 72 -26 62 Z';
      case 'almond':
      default:
        return 'M -25 62 C -26 18 -14 -62 0 -66 C 14 -62 26 18 25 62 Q 23 72 0 72 Q -23 72 -25 62 Z';
    }
  };

  return (
    <div className="relative w-full aspect-[4/5] bg-black rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex items-center justify-center p-2">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(255,71,126,0.20),transparent_30%),radial-gradient(circle_at_10%_90%,rgba(252,213,206,0.10),transparent_30%)]" />
      <svg viewBox="0 0 400 500" className="relative w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="skinPro" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f6c8ad" />
            <stop offset="0.48" stopColor="#e7aa86" />
            <stop offset="1" stopColor="#ba7654" />
          </linearGradient>
          <radialGradient id="palmGlow" cx="50%" cy="42%" r="62%">
            <stop offset="0" stopColor="#ffd6bd" stopOpacity="0.92" />
            <stop offset="1" stopColor="#d28d68" stopOpacity="0.88" />
          </radialGradient>
          <linearGradient id="acrylic" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.72" />
            <stop offset="0.18" stopColor={color} stopOpacity="0.96" />
            <stop offset="0.68" stopColor={color} stopOpacity="0.78" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="gloss" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.90" />
            <stop offset="0.48" stopColor="#ffffff" stopOpacity="0.12" />
            <stop offset="1" stopColor="#000000" stopOpacity="0.22" />
          </linearGradient>
          <linearGradient id="chrome" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="0.18" stopColor="#111111" stopOpacity="0.35" />
            <stop offset="0.38" stopColor="#f8f8f8" stopOpacity="0.85" />
            <stop offset="0.62" stopColor="#000000" stopOpacity="0.32" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0.82" />
          </linearGradient>
          <filter id="softShadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="18" stdDeviation="14" floodColor="#000" floodOpacity="0.42" />
          </filter>
          <filter id="shineBlur" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        <motion.g
          initial={{ y: 22, scale: 0.96, opacity: 0 }}
          animate={{ y: [10, 0, 4], scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          filter="url(#softShadow)"
        >
          <motion.ellipse
            cx="200"
            cy="390"
            rx="118"
            ry="72"
            fill="url(#palmGlow)"
            animate={{ ry: [72, 76, 72], rx: [118, 121, 118] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
          />

          {NAILS.map((n, i) => (
            <motion.g
              key={i}
              transform={`translate(${n.x} ${n.y}) rotate(${n.r}) scale(${n.s})`}
              initial={{ y: 30, opacity: 0, rotate: n.r - 4 }}
              animate={{ y: [8, 0, 4], opacity: 1, rotate: [n.r - 1.5, n.r, n.r + 0.8, n.r] }}
              transition={{ duration: 1.2, delay: n.delay, ease: 'easeOut' }}
            >
              <rect x="-36" y="30" width="72" height="180" rx="36" fill="url(#skinPro)" />
              <ellipse cx="0" cy="64" rx="28" ry="14" fill="#8b5c48" opacity="0.18" />
              <motion.path
                d={nailPath()}
                fill="url(#acrylic)"
                stroke="rgba(255,255,255,0.34)"
                strokeWidth="1.2"
                animate={{ d: nailPath() }}
                transition={{ type: 'spring', stiffness: 130, damping: 18 }}
              />
              <path d={nailPath()} fill="url(#gloss)" opacity="0.42" pointerEvents="none" />
              {hasExtra('mirror') && <path d={nailPath()} fill="url(#chrome)" opacity="0.54" style={{ mixBlendMode: 'screen' }} pointerEvents="none" />}
              <path d="M -9 34 C -13 -10 -9 -38 1 -52" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity="0.38" filter="url(#shineBlur)" />
              <path d="M -9 34 C -13 -10 -9 -38 1 -52" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" opacity="0.72" />

              <AnimatePresence>
                {hasExtra('crystals') && (
                  <motion.g initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                    {[-13, 0, 13].map((x, ix) => <circle key={ix} cx={x} cy="52" r={ix === 1 ? 3.5 : 2.7} fill="#fff" opacity="0.92" />)}
                  </motion.g>
                )}
                {hasExtra('glitter') && (
                  <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    {[-15, -4, 8, 18].map((x, ix) => <circle key={ix} cx={x} cy={-22 + ix * 20} r="2.2" fill="#fff" opacity="0.85" />)}
                  </motion.g>
                )}
                {hasExtra('floral') && (
                  <motion.g initial={{ opacity: 0, pathLength: 0 }} animate={{ opacity: 1, pathLength: 1 }} exit={{ opacity: 0 }}>
                    <path d="M -8 45 C 4 16 7 -16 13 -45" stroke="#fff" strokeWidth="2" fill="none" opacity="0.82" />
                    <ellipse cx="5" cy="5" rx="7" ry="3" fill="#fff" transform="rotate(-25 5 5)" opacity="0.82" />
                    <ellipse cx="11" cy="-18" rx="7" ry="3" fill="#fff" transform="rotate(24 11 -18)" opacity="0.82" />
                  </motion.g>
                )}
              </AnimatePresence>
            </motion.g>
          ))}
        </motion.g>
      </svg>

      <div className="absolute left-4 right-4 bottom-4 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/10 px-4 py-3 flex items-center justify-between gap-3">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-stone-500 font-extrabold">Motor de diseño</p>
          <p className="font-sans text-sm font-bold text-white">Acrílico en vivo · {shapeId}</p>
        </div>
        <span className="w-9 h-9 rounded-full border border-white/20 shadow-[0_0_18px_rgba(255,255,255,0.16)]" style={{ background: color }} />
      </div>
    </div>
  );
};
