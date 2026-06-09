import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Infinity, Share2, ArrowRight, Gift, Sparkles, Percent } from 'lucide-react';
import { NAIL_IMAGES } from '../assets/nailImages';

interface PromosViewProps {
  setActiveTab: (tab: any) => void;
}

export const PromosView: React.FC<PromosViewProps> = ({ setActiveTab }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.5 }} className="pb-28 px-4 md:px-12 pt-24 max-w-5xl mx-auto space-y-8 md:space-y-12">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-wider mx-auto">
          <Gift className="w-3.5 h-3.5" /> Beneficios Exclusivos
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-white font-extrabold tracking-tight">Promociones & Club VIP</h2>
        <p className="font-sans text-[14px] md:text-base text-stone-400 max-w-lg mx-auto leading-relaxed">
          Paquetes selectos con visuales internos originales, sin imágenes antiguas ni links externos.
        </p>
      </div>

      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="relative w-full rounded-[2.5rem] overflow-hidden glass-card group border-white/10 bg-gradient-to-t from-stone-900 to-black shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
        <img src={NAIL_IMAGES.promo} alt="Especial de Lujo" className="w-full h-[22rem] md:h-96 object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-95" />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-20 flex flex-col items-start gap-3 md:gap-4">
          <div className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span className="font-sans font-extrabold text-[10px] uppercase tracking-wider text-white leading-none font-mono">Club Premiere</span>
          </div>
          <div className="space-y-1 md:space-y-2">
            <h3 className="font-serif text-3xl md:text-5xl text-white font-extrabold leading-none tracking-tight">Especial de Bienvenida</h3>
            <p className="font-sans text-[14px] md:text-base text-stone-300 max-w-xl leading-relaxed">
              Recibe un <strong className="text-white font-extrabold font-serif text-lg">20% OFF de regalo</strong> para tu primera sesión en cualquier set nuevo de uñas premium.
            </p>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-2.5 md:gap-3.5 mt-2">
            <button onClick={() => setActiveTab('agenda')} className="btn-primary font-bold text-xs uppercase tracking-wider h-12 px-8 rounded-xl cursor-pointer">Agendar con 20% OFF</button>
            <button onClick={() => setActiveTab('gallery')} className="glass-card text-white hover:text-stone-300 border-white/5 font-bold text-xs uppercase tracking-wider h-12 px-8 rounded-xl cursor-pointer hover:border-white/20 transition-all bg-white/[0.02]">Explorar Diseños</button>
          </div>
        </div>
      </motion.section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="glass-card rounded-[2rem] p-6 flex flex-col gap-5 relative overflow-hidden group border-white/5 bg-stone-950 hover:border-white/20 transition-all duration-300 cursor-pointer shadow-lg">
          <div className="flex gap-4 md:gap-5">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shrink-0 shadow-xl border border-white/5 relative">
              <span className="absolute top-1.5 left-1.5 bg-white text-black font-sans font-bold text-[8px] tracking-widest px-1.5 py-0.5 rounded-full z-10 flex items-center gap-0.5"><Percent className="w-2 h-2" /> HOT</span>
              <img src={NAIL_IMAGES.combo} alt="Combo Glow premium" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95" />
            </div>
            <div className="flex-1 flex flex-col justify-center space-y-1">
              <span className="font-sans font-extrabold text-[9px] uppercase tracking-widest text-stone-400 font-mono">Combo Estelar</span>
              <h4 className="font-serif font-bold text-lg text-white leading-tight">Combo Glow: Manicure + Pedicura</h4>
              <p className="font-sans text-xs text-stone-400 line-clamp-2 leading-relaxed">Manicura rusa permanente junto con pedicura spa hidratante por solo <strong className="text-white font-serif">$40.000</strong>.</p>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-1">
            <div className="flex items-center gap-1.5 text-stone-500"><Calendar className="w-3.5 h-3.5" /><span className="font-sans text-[11px] font-medium">Cupos Limitados</span></div>
            <button onClick={() => setActiveTab('agenda')} className="text-stone-300 hover:text-white font-bold text-xs hover:scale-105 active:scale-95 transition-transform flex items-center gap-1 cursor-pointer">Reservar Combo <ArrowRight className="w-3.5 h-3.5" /></button>
          </div>
        </motion.article>

        <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="glass-card rounded-[2rem] p-6 flex flex-col gap-5 relative overflow-hidden group border-white/5 bg-stone-950 hover:border-white/20 transition-all duration-300 cursor-pointer shadow-lg">
          <div className="flex gap-4 md:gap-5">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shrink-0 shadow-xl bg-white/[0.03] border border-white/5 flex items-center justify-center relative">
              <Sparkles className="w-8 h-8 text-white animate-pulse" />
            </div>
            <div className="flex-1 flex flex-col justify-center space-y-1">
              <span className="font-sans font-extrabold text-[9px] uppercase tracking-widest text-stone-400 font-mono">Club Amigas</span>
              <h4 className="font-serif font-bold text-lg text-white leading-tight">Trae a tu amiga</h4>
              <p className="font-sans text-xs text-stone-400 line-clamp-2 leading-relaxed">Recomiéndanos y ambas reciben un <strong className="text-white">15% de descuento directo</strong> en esmaltados o baño de gel.</p>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-1">
            <div className="flex items-center gap-1.5 text-stone-500"><Infinity className="w-3.5 h-3.5" /><span className="font-sans text-[11px] font-medium">Beneficio VIP Permanente</span></div>
            <button onClick={() => setActiveTab('loyalty')} className="text-stone-300 hover:text-white font-bold text-xs hover:scale-105 active:scale-95 transition-transform flex items-center gap-1 cursor-pointer">Compartir Beneficio <Share2 className="w-3.5 h-3.5" /></button>
          </div>
        </motion.article>
      </section>
    </motion.div>
  );
};
