import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Star, ArrowRight, MessageCircle, Verified, Heart, Clock, Award, Instagram, Sparkles, Check, Sliders } from 'lucide-react';
import { NAIL_IMAGES } from '../assets/nailImages';

interface HomeViewProps {
  setActiveTab: (tab: any) => void;
}

interface ProductService {
  id: string;
  name: string;
  category: string;
  basePrice: number;
  duration: string;
  description: string;
  image: string;
  optionsLabel: string;
  options: { name: string; extraPrice: number }[];
}

const PRODUCTS_SERVICES_DATA: ProductService[] = [
  {
    id: 'permanent',
    name: 'Manicura Permanente Rusa',
    category: 'Esmaltados Premium',
    basePrice: 22000,
    duration: '1h 30m',
    description: 'Nuestra especialidad insignia. Limpieza profunda ultrasónica de cutículas con torno ruso y nivelación de base de gel premium para un acabado impecable de alta durabilidad.',
    image: NAIL_IMAGES.permanent,
    optionsLabel: 'Selecciona el acabado o brillo del esmalte:',
    options: [
      { name: 'Brillo High-Gloss Ultra Glossy', extraPrice: 0 },
      { name: 'Efecto Velvet Terciopelo Elegante', extraPrice: 2000 },
      { name: 'Efecto Aurora Tornasol Studio', extraPrice: 3500 }
    ]
  },
  {
    id: 'softgel',
    name: 'Set de Soft Gel / Press On Lujo',
    category: 'Sistemas Esculpidos',
    basePrice: 28000,
    duration: '2h 00m',
    description: 'Tips biocompatibles de gel completo adheridos con resina de curado LED. Ligereza, resistencia y una terminación visual premium.',
    image: NAIL_IMAGES.softgel,
    optionsLabel: 'Elige la longitud del set de uñas:',
    options: [
      { name: 'Largo Corto / Diario', extraPrice: 0 },
      { name: 'Largo Mediano Estilizado', extraPrice: 3000 },
      { name: 'Largo Máximo XL / Punta de Forma', extraPrice: 6000 }
    ]
  },
  {
    id: 'kapping',
    name: 'Kapping Gel de Nivelación',
    category: 'Tratamientos & Fuerza',
    basePrice: 25000,
    duration: '1h 45m',
    description: 'Ideal para uñas quebradizas o delgadas. Capa estructural de gel fortificado que acompaña el crecimiento natural.',
    image: NAIL_IMAGES.kapping,
    optionsLabel: 'Elige el tipo de bálsamo fortalecedor:',
    options: [
      { name: 'Bálsamo Base de Calcio Orgánico', extraPrice: 0 },
      { name: 'Fusión de Queratina e Hilos de Vidrio', extraPrice: 3000 },
      { name: 'Baño de Proteína de Seda Premium', extraPrice: 4500 }
    ]
  },
  {
    id: 'combo_glow',
    name: 'Combo Glow: Manos & Pies Spa',
    category: 'Mimos y Packs VIP',
    basePrice: 40000,
    duration: '2h 30m',
    description: 'Experiencia completa de manicure y pedicure spa para elevar relajación, cuidado y estilo en una sola reserva.',
    image: NAIL_IMAGES.combo,
    optionsLabel: 'Selecciona tu tipo de hidratación Spa:',
    options: [
      { name: 'Hidratación Clásica de Fresas Silvestres', extraPrice: 0 },
      { name: 'Exfoliación de Arándanos y Sales de Mar', extraPrice: 4000 },
      { name: 'Tratamiento Intenso de Parafina Caliente', extraPrice: 6000 }
    ]
  }
];

export const HomeView: React.FC<HomeViewProps> = ({ setActiveTab }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductService>(PRODUCTS_SERVICES_DATA[0]);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(0);

  const calculateTotal = () => {
    const extra = selectedProduct.options[selectedOptionIndex]?.extraPrice || 0;
    return selectedProduct.basePrice + extra;
  };

  const generateWhatsAppLink = () => {
    const total = calculateTotal();
    const activeOption = selectedProduct.options[selectedOptionIndex];
    const text = `Hola Dharynails! Quiero agendar la siguiente experiencia personalizada desde tu portal:%0A%0A*Producto:* ${selectedProduct.name}%0A*Categoría:* ${selectedProduct.category}%0A*Opción Elegida:* ${activeOption?.name}%0A*Duración Estimada:* ${selectedProduct.duration}%0A*Inversión Total:* $${total.toLocaleString('es-CL')}%0A%0A¿Tienen disponibilidad de agenda para estos días?`;
    return `https://wa.me/56912345678?text=${text}`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5 }}
      className="pb-28 px-4 md:px-12 pt-24 max-w-6xl mx-auto space-y-12 md:space-y-16"
    >
      <section className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="absolute inset-0 bg-pattern -z-10 rounded-[2.5rem] opacity-30" />
        
        <div className="flex-1 space-y-5 md:space-y-7 z-10 w-full pt-2">
          <div className="flex flex-wrap gap-2.5 mb-1">
            <span className="glass-card px-3.5 py-1.5 rounded-full text-[10px] md:text-xs text-stone-300 font-bold flex items-center gap-1.5 shrink-0 shadow-[0_2px_12px_rgba(255,255,255,0.05)]">
              <Star className="w-3.5 h-3.5 fill-current text-white" /> 4.9 (29 Calificaciones)
            </span>
            <a href="https://www.instagram.com/dharynails" target="_blank" rel="noopener noreferrer" className="glass-card px-3.5 py-1.5 rounded-full text-[10px] md:text-xs text-white font-bold flex items-center gap-1.5 shrink-0 hover:scale-105 active:scale-95 transition-transform shadow-[0_2px_12px_rgba(255,255,255,0.05)]">
              <Instagram className="w-3.5 h-3.5" /> @dharynails +19k Followers
            </a>
            <span className="glass-card px-3.5 py-1.5 rounded-full text-[10px] md:text-xs text-stone-400 font-bold flex items-center gap-1.5 shrink-0">
              <MapPin className="w-3.5 h-3.5" /> Talca, Chile
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-extrabold leading-[1.08] tracking-tight">
            Arte de lujo para tus manos en <span className="gradient-text italic font-normal">Dharynails</span>
          </h2>
          
          <p className="font-sans text-[15px] md:text-lg text-stone-300 max-w-xl leading-relaxed">
            Especialistas certificados en manicure de alta costura, acrílicas esculpidas y diseños artísticos personalizados. Todas las imágenes de esta demo ahora son internas y estables para Cloudflare Pages.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-3 w-full">
            <button onClick={() => setActiveTab('agenda')} className="btn-primary font-bold h-14 px-8 rounded-2xl flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:opacity-95 text-[15px] md:text-base cursor-pointer transform hover:-translate-y-0.5 transition-all">
              Agendar Experiencia <ArrowRight className="w-5 h-5" />
            </button>
            
            <div className="flex gap-3 w-full sm:w-auto">
              <a href="https://wa.me/56912345678?text=Hola%20Dharynails,%20me%20gustar%C3%ADa%20consultar%20por%20una%20hora%20disponible" target="_blank" rel="noopener noreferrer" className="glass-card font-bold h-14 px-5 rounded-2xl flex items-center justify-center gap-2 text-[#25D366] border-[#25D366]/20 bg-[#25D366]/5 w-full sm:w-auto flex-1 text-[15px] md:text-base cursor-pointer hover:bg-[#25D366]/10 transform hover:-translate-y-0.5 transition-all">
                <MessageCircle className="w-5 h-5 fill-current" /> WhatsApp Directo
              </a>
              <a href="https://www.instagram.com/dharynails" target="_blank" rel="noopener noreferrer" className="glass-card font-bold h-14 w-14 rounded-2xl flex items-center justify-center text-white bg-white/5 border-white/10 shrink-0 cursor-pointer hover:bg-white/10 transform hover:-translate-y-0.5 transition-all shadow-[0_4px_15px_rgba(255,255,255,0.05)]" title="Instagram">
                <Instagram className="w-5.5 h-5.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full relative mt-4 lg:mt-0">
          <div className="relative w-full aspect-square sm:aspect-[4/3] md:aspect-[4/5] rounded-[2.5rem] overflow-hidden glass-card p-2 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
            <img src={NAIL_IMAGES.hero} alt="Experiencia Premium Dharynails" className="w-full h-full rounded-[2rem] object-cover filter brightness-[1.05]" />
            <div className="absolute bottom-5 left-5 right-5 glass-card p-4 rounded-3xl flex items-center gap-3.5 shadow-2xl bg-black/80 border-white/20">
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-stone-400 to-white flex items-center justify-center text-black font-bold text-sm shadow-[0_0_12px_rgba(255,255,255,0.2)]">
                <Verified className="w-5 h-5" />
              </div>
              <div>
                <p className="font-sans text-[9px] uppercase tracking-widest text-stone-400 font-extrabold">Dharynails</p>
                <p className="font-sans text-sm font-bold text-white leading-tight">Estudio Verificado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: <Heart className="w-7 h-7 text-white" />, title: '+19k Fans', subtitle: 'Instagram activos' },
          { icon: <Star className="w-7 h-7 text-white fill-current" />, title: 'Calificación 4.9', subtitle: 'Opiniones Google' },
          { icon: <Clock className="w-7 h-7 text-white" />, title: 'Agenda Flexible', subtitle: 'Lun-Sáb 10:00 - 19:00' },
          { icon: <Award className="w-7 h-7 text-white" />, title: 'Elite Staff', subtitle: 'Manicuristas Master' },
        ].map((item, i) => (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }} key={i} className="glass-card rounded-2xl md:rounded-3xl p-5 flex flex-col justify-center items-center text-center gap-2 hover:border-white/20 transition-all cursor-default relative overflow-hidden group hover:shadow-[0_8px_25px_rgba(255,255,255,0.05)]">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/40 transition-all duration-500" />
            <div className="p-2.5 rounded-2xl bg-white/5 border border-white/5 mb-1 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
            <h3 className="font-sans font-extrabold text-lg md:text-xl text-white tracking-tight">{item.title}</h3>
            <p className="font-mono text-[9px] uppercase tracking-widest text-stone-500 font-bold">{item.subtitle}</p>
          </motion.div>
        ))}
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-stone-500 font-bold">Productos y Servicios</span>
            <h3 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-1">Reserva desde el catálogo</h3>
          </div>
          <button onClick={() => setActiveTab('gallery')} className="hidden sm:flex glass-card text-white rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider hover:bg-white/5">Galería</button>
        </div>

        <div className="grid gap-5">
          {PRODUCTS_SERVICES_DATA.map((product) => {
            const isSelected = selectedProduct.id === product.id;
            return (
              <motion.button
                key={product.id}
                onClick={() => { setSelectedProduct(product); setSelectedOptionIndex(0); }}
                className={`text-left w-full glass-card rounded-[2rem] p-4 md:p-6 transition-all duration-300 border ${isSelected ? 'border-primary/40 bg-primary-container/20' : 'border-white/5 bg-black/60 hover:border-white/20'}`}
              >
                <div className="grid grid-cols-[96px_1fr] md:grid-cols-[120px_1fr] gap-4 items-center">
                  <img src={product.image} alt={product.name} className="w-24 h-24 md:w-28 md:h-28 rounded-2xl object-cover border border-white/10 shadow-xl" />
                  <div className="min-w-0">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-tertiary font-extrabold truncate">{product.category}</span>
                      <span className="flex items-center gap-1 text-stone-400 text-xs shrink-0"><Clock className="w-4 h-4" /> {product.duration}</span>
                    </div>
                    <h4 className="font-serif text-xl md:text-2xl font-bold text-white leading-tight mt-2">{product.name}</h4>
                    <p className="font-sans text-sm text-stone-400 line-clamp-2 mt-2">{product.description}</p>
                    <div className="border-t border-white/5 mt-4 pt-4 flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-stone-500 font-bold">Inversión desde</span>
                      <span className="font-serif text-2xl font-bold text-white">${product.basePrice.toLocaleString('es-CL')}</span>
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </section>

      <section className="glass-card rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 border-white/5 bg-black/80 shadow-xl">
        <div className="flex items-center justify-between gap-4 mb-5">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-stone-500 font-bold">Configurando producto</span>
            <h3 className="font-serif text-2xl md:text-4xl text-white font-extrabold mt-2">{selectedProduct.name}</h3>
          </div>
          <Sliders className="w-6 h-6 text-stone-500" />
        </div>

        <p className="font-sans text-sm md:text-base text-stone-300 leading-relaxed mb-6">{selectedProduct.description}</p>

        <h4 className="font-sans text-[12px] md:text-sm uppercase tracking-[0.2em] text-tertiary font-extrabold mb-3">{selectedProduct.optionsLabel}</h4>
        <div className="space-y-3">
          {selectedProduct.options.map((option, i) => {
            const isActive = selectedOptionIndex === i;
            return (
              <button key={i} onClick={() => setSelectedOptionIndex(i)} className={`w-full p-4 rounded-2xl border transition-all text-left flex items-center justify-between ${isActive ? 'bg-white text-black border-white shadow-[0_0_18px_rgba(255,255,255,0.16)]' : 'bg-white/[0.03] border-white/10 text-stone-300 hover:border-white/20'}`}>
                <div>
                  <span className="font-sans font-bold text-sm md:text-base block">{option.name}</span>
                  <span className="font-mono text-[11px] font-bold opacity-70">{option.extraPrice === 0 ? 'Sin recargo' : `+$${option.extraPrice.toLocaleString('es-CL')}`}</span>
                </div>
                {isActive && <Check className="w-5 h-5" />}
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold">Total estimado</span>
            <div className="font-serif text-3xl font-extrabold text-white">${calculateTotal().toLocaleString('es-CL')}</div>
          </div>
          <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-primary rounded-2xl h-14 px-6 flex items-center justify-center gap-2 font-bold">
            Reservar por WhatsApp <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </motion.div>
  );
};
