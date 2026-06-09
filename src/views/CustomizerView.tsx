import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Square, Circle, Sparkles, Gem, Flower2 } from 'lucide-react';
import { NailSimulator } from '../components/NailSimulator';

const COLORS = [
  { id: 'obsidian', hex: '#000000', name: 'Negro Obsidiana' },
  { id: 'cream', hex: '#FDFBF7', name: 'Blanco Crema' },
  { id: 'ash', hex: '#a3a3a3', name: 'Gris Ceniza / Plata' },
  { id: 'nude', hex: '#e5c9b7', name: 'Nude Elegante' },
  { id: 'graphite', hex: '#262626', name: 'Grafito Premium' },
];

const SHAPES = [
  { id: 'almond', name: 'Almendra', component: <div className="w-5 h-8 border-2 border-current rounded-t-[50%] rounded-b" /> },
  { id: 'square', name: 'Cuadrada', component: <div className="w-5 h-8 border-2 border-current rounded-t-sm rounded-b-sm" /> },
  { id: 'coffin', name: 'Coffin', component: <div className="w-5 h-8 border-2 border-current rounded-b-sm" style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)' }} /> },
  { id: 'stiletto', name: 'Stiletto', component: <div className="w-5 h-8 border-2 border-current rounded-b-sm" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }} /> },
  { id: 'oval', name: 'Ovalada', component: <div className="w-5 h-8 border-2 border-current rounded-[50%]" /> },
];

const EXTRAS = [
  { id: 'crystals', name: 'Cristales', price: 15, icon: <Gem className="w-5 h-5 text-white" /> },
  { id: 'glitter', name: 'Glitter Destellos', price: 10, icon: <Sparkles className="w-5 h-5 text-white" /> },
  { id: 'mirror', name: 'Efecto Espejo', price: 20, icon: <Circle className="w-5 h-5 text-white" fill="url(#mirrorGrad2)" /> },
  { id: 'floral', name: 'Follaje Floral', price: 25, icon: <Flower2 className="w-5 h-5 text-white" /> },
];

export const CustomizerView: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [selectedShape, setSelectedShape] = useState(SHAPES[0]);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  
  const basePrice = 25;
  const extrasTotal = selectedExtras.reduce((sum, extraId) => {
    const extra = EXTRAS.find(e => e.id === extraId);
    return sum + (extra?.price || 0);
  }, 0);
  const total = basePrice + extrasTotal;

  const toggleExtra = (id: string) => {
    setSelectedExtras(prev => 
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };

  const generateWhatsAppLink = () => {
    const shapeText = selectedShape.name;
    const colorText = selectedColor.name;
    const extrasNames = selectedExtras.length > 0 
      ? selectedExtras.map(id => EXTRAS.find(e => e.id === id)?.name).join(', ') 
      : 'Esmaltado plano';
    
    const text = `Hola! He personalizado mi diseño en el visualizador interactivo de Dharynails.%0A%0A*Esmaltado Base:* ${colorText}%0A*Forma Elegida:* ${shapeText}%0A*Detalles Añadidos:* ${extrasNames}%0A*Precio Estimado:* $${total}.000%0A%0A¿Tienen disponibilidad de hora para realizarlo?`;
    return `https://wa.me/56912345678?text=${text}`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="pb-40 px-4 md:px-12 pt-24 max-w-5xl mx-auto flex flex-col md:flex-row gap-8 lg:gap-12"
    >
      <svg width="0" height="0">
        <defs>
          <linearGradient id="mirrorGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#888888" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#222222" />
          </linearGradient>
        </defs>
      </svg>

      {/* Left Column: Visual Preview */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-wider font-mono">
            <Sparkles className="w-3.5 h-3.5" /> Simulador Vectorial Activo
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-white font-extrabold tracking-tight">Crea tu Estilo</h2>
          <p className="font-sans text-sm md:text-base text-stone-400">
            Experimenta en tiempo real con tonos infinitos, siluetas estilizadas y acabados de alta gama.
          </p>
        </div>
        
        <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] aspect-[4/5] bg-black/40 flex items-center justify-center border border-white/5">
          {/* Interactive Dynamic 3D/Vector Simulation Engine */}
          <NailSimulator 
            color={selectedColor.hex}
            shapeId={selectedShape.id}
            selectedExtras={selectedExtras}
          />

          {/* Floater indicator badge */}
          <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full border border-white/20" style={{ backgroundColor: selectedColor.hex }} />
            <span className="font-mono text-[10px] font-bold text-white uppercase tracking-wider">{selectedColor.name}</span>
          </div>

          <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl text-[10px] font-bold text-white uppercase tracking-wider">
            Forma: {selectedShape.name}
          </div>
        </div>
      </div>

      {/* Right Column: Controls */}
      <div className="w-full md:w-1/2 flex flex-col gap-8">
        
        {/* Colors */}
        <section className="space-y-3.5">
          <div className="flex justify-between items-center">
            <h3 className="font-serif text-lg font-bold text-white">1. Tono de Esmaltado</h3>
            <span className="font-sans text-xs uppercase tracking-wider font-extrabold text-white">{selectedColor.name}</span>
          </div>
          <div className="flex gap-3 md:gap-4 overflow-x-auto hide-scrollbar pb-2 items-center">
            {COLORS.map(color => {
              const isSelected = selectedColor.id === color.id;
              return (
                <button 
                  key={color.id}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  className={`relative flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full p-1 border-2 transition-all active:scale-95 cursor-pointer ${
                    isSelected ? 'border-white scale-105' : 'border-transparent hover:border-white/20'
                  }`}
                >
                  <div 
                    className="w-full h-full rounded-full shadow-inner border border-white/10" 
                    style={{ backgroundColor: color.hex }} 
                  />
                  {isSelected && (
                    <span className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 text-black shadow-md">
                      <CheckCircle2 className="w-4 h-4 fill-current text-white" />
                    </span>
                  )}
                </button>
              );
            })}

            {/* Custom real-time continuous color picker */}
            <div className={`relative flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full p-1 border-2 transition-all flex items-center justify-center cursor-pointer bg-stone-900 group ${
              selectedColor.id === 'custom' ? 'border-white scale-105 shadow-[0_0_10px_rgba(255,255,255,0.2)]' : 'border-dashed border-stone-600 hover:border-stone-400'
            }`}>
              <input 
                type="color"
                value={selectedColor.id === 'custom' ? selectedColor.hex : '#dfb24c'}
                onChange={(e) => {
                  const hex = e.target.value;
                  setSelectedColor({ id: 'custom', hex: hex, name: `Tono Libre (${hex.toUpperCase()})` });
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div 
                className="w-full h-full rounded-full border border-white/10"
                style={{
                  background: selectedColor.id === 'custom' 
                    ? selectedColor.hex 
                    : 'conic-gradient(from 0deg, red, yellow, lime, aqua, blue, magenta, red)'
                }}
              />
              {selectedColor.id === 'custom' ? (
                <span className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 text-black shadow-md z-20">
                  <CheckCircle2 className="w-4 h-4 fill-current text-white" />
                </span>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-white pointer-events-none text-[8px] font-mono font-bold leading-none bg-black/20 group-hover:bg-transparent transition-colors rounded-full uppercase tracking-tighter">
                  Libre
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Shape */}
        <section className="space-y-3.5">
          <div className="flex justify-between items-center">
            <h3 className="font-serif text-lg font-bold text-white">2. Silueta & Forma</h3>
            <span className="font-sans text-xs uppercase tracking-wider font-extrabold text-stone-400">{selectedShape.name}</span>
          </div>
          <div className="grid grid-cols-5 gap-2.5">
            {SHAPES.map(shape => {
              const isSelected = selectedShape.id === shape.id;
              return (
                <button 
                  key={shape.id}
                  type="button"
                  onClick={() => setSelectedShape(shape)}
                  className={`flex flex-col items-center justify-center py-4 rounded-2xl transition-all duration-300 active:scale-95 cursor-pointer border ${
                    isSelected 
                      ? 'bg-white/10 border-white text-white shadow-md' 
                      : 'glass-card border-white/5 text-stone-400 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <div className="mb-2 scale-110">{shape.component}</div>
                  <span className="font-sans text-[10px] uppercase tracking-wider font-extrabold">{shape.name}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Embellishments */}
        <section className="space-y-3.5">
          <div className="flex justify-between items-center">
            <h3 className="font-serif text-lg font-bold text-white">3. Efectos & Cristales</h3>
            <span className="font-sans text-[10px] uppercase tracking-wider font-extrabold text-stone-500">Múltiple</span>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {EXTRAS.map(extra => {
              const isSelected = selectedExtras.includes(extra.id);
              return (
                <div 
                  key={extra.id}
                  onClick={() => toggleExtra(extra.id)}
                  className={`rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-2.5 relative overflow-hidden group cursor-pointer transition-all duration-300 border ${
                    isSelected ? 'border-white bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]' : 'glass-card border-white/5 hover:border-white/20 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="absolute top-3 right-3">
                    {isSelected ? (
                      <CheckCircle2 className="text-white w-4 h-4 fill-current text-black" />
                    ) : (
                      <Square className="text-stone-500 w-4 h-4 opacity-40 group-hover:opacity-75" />
                    )}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-black/40 flex items-center justify-center mb-1">
                    {extra.icon}
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-sans font-bold text-xs md:text-sm text-white leading-tight block">{extra.name}</span>
                    <span className="font-sans text-[11px] font-bold text-stone-400 block">+${extra.price}.000 Chp</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Floating Action Bar */}
      <div className="fixed bottom-[74px] md:bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-24px)] md:w-full max-w-4xl z-40 glass-card shadow-[0_15px_50px_rgba(0,0,0,0.95)] rounded-3xl p-4 md:p-5 flex items-center justify-between border-white/10 bg-black/95">
        <div>
          <p className="font-sans text-[9px] uppercase tracking-widest font-extrabold text-stone-400 mb-1">Presupuesto Estimado</p>
          <div className="flex items-baseline gap-1">
            <span className="font-serif font-extrabold text-2xl md:text-3xl text-white">${total}.000</span>
            <span className="font-sans text-[10px] text-stone-500 uppercase font-bold">Chp</span>
          </div>
        </div>
        <a 
          href={generateWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex items-center gap-2 px-6 md:px-10 h-12 md:h-14 rounded-2xl text-black bg-white font-sans font-extrabold text-xs md:text-sm shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:bg-stone-200 transition-all text-center uppercase tracking-wider cursor-pointer"
        >
          <span>Agendar Diseño Personalizado</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};
