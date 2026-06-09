import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const COLORS = [
  { id: 'rose', hex: '#e83f6f', name: 'Rose Signature' },
  { id: 'nude', hex: '#eac7cd', name: 'Nude Blush' },
  { id: 'gold', hex: '#d4af37', name: 'Golden VIP' },
  { id: 'lavender', hex: '#b392f0', name: 'Lavanda Pro' },
  { id: 'green', hex: '#4bb543', name: 'Verde Spa' },
  { id: 'blue', hex: '#1da1f2', name: 'Blue Glass' },
  { id: 'orange', hex: '#ff8c00', name: 'Sunset Glow' },
];

const SHAPES = [
  { id: 'almond', name: 'Almendra' },
  { id: 'square', name: 'Cuadrada' },
  { id: 'round', name: 'Redonda' },
  { id: 'coffin', name: 'Coffin' },
  { id: 'stiletto', name: 'Stiletto' },
];

const EXTRAS = [
  { id: 'gloss', name: 'Brillo acrílico glossy', price: 0 },
  { id: 'chrome', name: 'Efecto chrome / espejo', price: 3000 },
  { id: 'crystals', name: 'Cristales premium', price: 5000 },
  { id: 'floral', name: 'Detalle floral fino', price: 4000 },
];

export const CustomizerView: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [customColor, setCustomColor] = useState('#e83f6f');
  const [selectedShape, setSelectedShape] = useState(SHAPES[0]);
  const [selectedExtra, setSelectedExtra] = useState(EXTRAS[0]);

  const activeColor = selectedColor.id === 'custom' ? customColor : selectedColor.hex;
  const total = 25000 + selectedExtra.price;

  const generateWhatsAppLink = () => {
    const text = `Hola Dharynails! Quiero reservar este diseño personalizado:%0A%0A*Color:* ${selectedColor.name}%0A*Color HEX:* ${activeColor}%0A*Forma:* ${selectedShape.name}%0A*Acabado:* ${selectedExtra.name}%0A*Total estimado:* $${total.toLocaleString('es-CL')}%0A%0A¿Tienen disponibilidad?`;
    return `https://wa.me/56962493456?text=${text}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="pb-40 px-4 md:px-12 pt-24 max-w-5xl mx-auto grid md:grid-cols-[1fr_0.95fr] gap-6 lg:gap-10"
    >
      <section className="space-y-5">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-wider font-mono">
            <Sparkles className="w-3.5 h-3.5" /> Motor de diseño live
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-white font-extrabold tracking-tight">Crea tu diseño</h2>
          <p className="font-sans text-sm md:text-base text-stone-400 leading-relaxed">
            Paleta arriba, mano blanca responsive y uñas que cambian en vivo. Ideal para que la clienta elija color, forma y acabado antes de reservar.
          </p>
        </div>

        <div className="rounded-[2rem] p-4 md:p-5 bg-white/[0.03] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.65)] overflow-hidden">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-stone-500 font-extrabold">Color activo</p>
              <h3 className="font-serif text-2xl font-bold text-white">{selectedColor.name}</h3>
            </div>
            <span className="w-12 h-12 rounded-full border border-white/20 shadow-[0_0_24px_rgba(255,255,255,0.12)]" style={{ background: activeColor }} />
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2.5 mb-4">
            {COLORS.map((color) => (
              <button
                key={color.id}
                onClick={() => setSelectedColor(color)}
                className={`h-12 rounded-2xl border-2 transition-all active:scale-95 ${selectedColor.id === color.id ? 'border-white scale-105' : 'border-white/10'}`}
                style={{ background: color.hex }}
                title={color.name}
              />
            ))}
            <label className={`relative h-12 rounded-2xl border-2 overflow-hidden cursor-pointer ${selectedColor.id === 'custom' ? 'border-white scale-105' : 'border-white/10'}`}>
              <input
                type="color"
                value={customColor}
                onChange={(e) => {
                  setCustomColor(e.target.value);
                  setSelectedColor({ id: 'custom', hex: e.target.value, name: `Color libre ${e.target.value.toUpperCase()}` });
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="w-full h-full" style={{ background: 'conic-gradient(red, yellow, lime, cyan, blue, magenta, red)' }} />
              <span className="absolute inset-0 flex items-center justify-center bg-black/20 text-[9px] font-mono font-black uppercase text-white">Libre</span>
            </label>
          </div>

          <div className="relative w-full aspect-[1/1] max-h-[430px] rounded-[1.7rem] bg-black overflow-hidden border border-white/10 flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,63,111,.18),transparent_35%),radial-gradient(circle_at_0%_100%,rgba(255,255,255,.08),transparent_35%)]" />
            <motion.svg
              viewBox="0 0 360 420"
              className="relative w-full h-full max-w-[360px] mx-auto"
              initial={{ y: 26, opacity: 0, scale: 0.96 }}
              animate={{ y: [8, 0, 4], opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="whiteFinger" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#ffffff" />
                  <stop offset="0.55" stopColor="#f3eee8" />
                  <stop offset="1" stopColor="#d9d1c8" />
                </linearGradient>
                <linearGradient id="acrylicLive" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#ffffff" stopOpacity="0.85" />
                  <stop offset="0.2" stopColor={activeColor} stopOpacity="0.98" />
                  <stop offset="0.72" stopColor={activeColor} stopOpacity="0.80" />
                  <stop offset="1" stopColor="#ffffff" stopOpacity="0.55" />
                </linearGradient>
                <filter id="softHandShadow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="20" stdDeviation="16" floodColor="#000" floodOpacity="0.52" />
                </filter>
              </defs>

              <motion.g filter="url(#softHandShadow)" animate={{ y: [0, -4, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
                <ellipse cx="180" cy="330" rx="116" ry="70" fill="url(#whiteFinger)" />
                {[
                  { x: 78, y: 150, r: -18, h: 168, w: 48 },
                  { x: 130, y: 112, r: -8, h: 205, w: 54 },
                  { x: 180, y: 92, r: 0, h: 220, w: 58 },
                  { x: 232, y: 112, r: 8, h: 205, w: 54 },
                  { x: 282, y: 150, r: 18, h: 168, w: 48 },
                ].map((finger, i) => (
                  <motion.g
                    key={i}
                    transform={`translate(${finger.x} ${finger.y}) rotate(${finger.r})`}
                    initial={{ y: 26, opacity: 0 }}
                    animate={{ y: [8, 0, 3], opacity: 1 }}
                    transition={{ duration: 0.9, delay: i * 0.07, ease: 'easeOut' }}
                  >
                    <rect x={-finger.w / 2} y="22" width={finger.w} height={finger.h} rx={finger.w / 2} fill="url(#whiteFinger)" />
                    <motion.path
                      d={shapePath(selectedShape.id)}
                      fill="url(#acrylicLive)"
                      stroke="rgba(255,255,255,.55)"
                      strokeWidth="1.5"
                      animate={{ d: shapePath(selectedShape.id) }}
                      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                    />
                    <path d="M-8 18 C-11 -14 -8 -38 2 -50" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity="0.38" />
                    <path d="M-8 18 C-11 -14 -8 -38 2 -50" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" opacity="0.82" />
                    {selectedExtra.id === 'chrome' && <path d={shapePath(selectedShape.id)} fill="url(#acrylicLive)" opacity="0.45" style={{ mixBlendMode: 'screen' }} />}
                    {selectedExtra.id === 'crystals' && <g fill="#fff" opacity="0.92"><circle cx="-10" cy="36" r="3"/><circle cx="0" cy="44" r="3.8"/><circle cx="10" cy="36" r="3"/></g>}
                    {selectedExtra.id === 'floral' && <g stroke="#fff" strokeWidth="1.8" fill="none" opacity="0.86"><path d="M-8 46 C3 18 8 -13 12 -42"/><ellipse cx="4" cy="2" rx="6" ry="3" fill="#fff" transform="rotate(-25 4 2)"/></g>}
                  </motion.g>
                ))}
              </motion.g>
            </motion.svg>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div className="glass-card rounded-[2rem] p-5 border-white/5 bg-black/70">
          <h3 className="font-serif text-2xl font-bold text-white mb-2">Configura tu reserva</h3>
          <p className="font-sans text-sm text-stone-400">Todo cabe en pantalla pequeña: forma, acabado, precio estimado y botón directo a WhatsApp.</p>
        </div>

        <div className="space-y-3">
          <h4 className="font-serif text-lg font-bold text-white">1. Forma</h4>
          <div className="grid grid-cols-2 gap-3">
            {SHAPES.map(shape => (
              <button key={shape.id} onClick={() => setSelectedShape(shape)} className={`rounded-2xl p-4 text-left border transition-all ${selectedShape.id === shape.id ? 'bg-white text-black border-white' : 'glass-card border-white/5 text-white'}`}>
                <span className="font-bold text-sm block">{shape.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-serif text-lg font-bold text-white">2. Acabado</h4>
          <div className="space-y-3">
            {EXTRAS.map(extra => (
              <button key={extra.id} onClick={() => setSelectedExtra(extra)} className={`w-full rounded-2xl p-4 text-left border flex items-center justify-between ${selectedExtra.id === extra.id ? 'bg-white text-black border-white' : 'glass-card border-white/5 text-white'}`}>
                <div>
                  <span className="font-bold text-sm block">{extra.name}</span>
                  <span className="font-mono text-[11px] opacity-70">{extra.price === 0 ? 'Sin recargo' : `+$${extra.price.toLocaleString('es-CL')}`}</span>
                </div>
                {selectedExtra.id === extra.id && <CheckCircle2 className="w-5 h-5" />}
              </button>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-[2rem] p-5 bg-white/[0.03] border-white/10">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500 font-extrabold">Resumen</p>
          <h4 className="font-serif text-3xl font-extrabold text-white mt-1">${total.toLocaleString('es-CL')}</h4>
          <p className="text-sm text-stone-400 mt-2">{selectedColor.name} · {selectedShape.name} · {selectedExtra.name}</p>
          <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-primary rounded-2xl h-14 px-6 mt-5 flex items-center justify-center gap-2 font-bold">
            Reservar este diseño <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </motion.div>
  );
};

function shapePath(shapeId: string) {
  switch (shapeId) {
    case 'square':
      return 'M -22 50 L -22 -42 Q -22 -50 -14 -50 L 14 -50 Q 22 -50 22 -42 L 22 50 Q 22 58 0 58 Q -22 58 -22 50 Z';
    case 'round':
      return 'M -24 50 C -26 10 -17 -48 0 -50 C 17 -48 26 10 24 50 Q 22 58 0 58 Q -22 58 -24 50 Z';
    case 'coffin':
      return 'M -25 50 C -22 15 -17 -32 -10 -50 L 10 -50 C 17 -32 22 15 25 50 Q 22 58 0 58 Q -22 58 -25 50 Z';
    case 'stiletto':
      return 'M -23 50 C -20 20 -10 -28 0 -66 C 10 -28 20 20 23 50 Q 20 58 0 58 Q -20 58 -23 50 Z';
    case 'almond':
    default:
      return 'M -24 50 C -25 12 -13 -56 0 -62 C 13 -56 25 12 24 50 Q 22 58 0 58 Q -22 58 -24 50 Z';
  }
}
