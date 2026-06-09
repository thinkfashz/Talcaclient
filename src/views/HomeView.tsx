import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Star, ArrowRight, MessageCircle, Verified, Heart, Clock, Award, Instagram, Flame, Sparkles, Check, Gift, X, Sliders } from 'lucide-react';

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
    image: 'https://images.unsplash.com/photo-1604654894610-df4906b1100f?q=80&w=800&auto=format&fit=crop',
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
    description: 'La revolución de las acrílicas. Tips biocompatibles de gel completo adheridos con resina de curado LED, otorgando ligereza celestial, resistencia superior y cero maltrato al lecho ungueal.',
    image: 'https://images.unsplash.com/photo-1632345031435-8797b2d58045?q=80&w=800&auto=format&fit=crop',
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
    description: 'Ideal para uñas quebradizas o delgadas. Capa estructural de gel fortificado nivelador que acompaña el crecimiento natural, previniendo escamaciones, roturas e imperfecciones visuales.',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop',
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
    description: 'La experiencia absoluta de relajación estética en Dharynails. Disfruta un esmaltado permanente en tus manos junto a una pedicura profunda con tina de sales marinas y aroma silvestre.',
    image: 'https://images.unsplash.com/photo-1519415391321-df9e5c40db15?q=80&w=800&auto=format&fit=crop',
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
  const [isDetailModalOpen, setIsDetailModalOpen] = useState<boolean>(false);

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
      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="absolute inset-0 bg-pattern -z-10 rounded-[2.5rem] opacity-30"></div>
        
        <div className="flex-1 space-y-5 md:space-y-7 z-10 w-full pt-2">
          {/* Status Pills */}
          <div className="flex flex-wrap gap-2.5 mb-1">
            <span className="glass-card px-3.5 py-1.5 rounded-full text-[10px] md:text-xs text-stone-300 font-bold flex items-center gap-1.5 shrink-0 shadow-[0_2px_12px_rgba(255,255,255,0.05)]">
              <Star className="w-3.5 h-3.5 fill-current text-white" /> 4.9 (29 Calificaciones)
            </span>
            <a 
              href="https://www.instagram.com/dharynails" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card px-3.5 py-1.5 rounded-full text-[10px] md:text-xs text-white font-bold flex items-center gap-1.5 shrink-0 hover:scale-105 active:scale-95 transition-transform shadow-[0_2px_12px_rgba(255,255,255,0.05)]"
            >
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
            Especialistas certificados en manicure de alta costura, acrílicas esculpidas y diseños artísticos personalizados. Vive una experiencia premium de relajación y estilo en Talca con nuestra comunidad de más de <strong>19,000 seguidoras</strong> en Instagram.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-3 w-full">
            <button 
              onClick={() => setActiveTab('agenda')}
              className="btn-primary font-bold h-14 px-8 rounded-2xl flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:opacity-95 text-[15px] md:text-base cursor-pointer transform hover:-translate-y-0.5 transition-all"
            >
              Agendar Experiencia <ArrowRight className="w-5 h-5" />
            </button>
            
            <div className="flex gap-3 w-full sm:w-auto">
              <a 
                href="https://wa.me/56912345678?text=Hola%20Dharynails,%20me%20gustar%C3%ADa%20consultar%20por%20una%20hora%20disponible" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card font-bold h-14 px-5 rounded-2xl flex items-center justify-center gap-2 text-[#25D366] border-[#25D366]/20 bg-[#25D366]/5 w-full sm:w-auto flex-1 text-[15px] md:text-base cursor-pointer hover:bg-[#25D366]/10 transform hover:-translate-y-0.5 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" /> WhatsApp Directo
              </a>
              <a 
                href="https://www.instagram.com/dharynails" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card font-bold h-14 w-14 rounded-2xl flex items-center justify-center text-white bg-white/5 border-white/10 shrink-0 cursor-pointer hover:bg-white/10 transform hover:-translate-y-0.5 transition-all shadow-[0_4px_15px_rgba(255,255,255,0.05)]"
                title="Instagram Personal"
              >
                <Instagram className="w-5.5 h-5.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Hero Visual Block */}
        <div className="flex-1 w-full relative mt-4 lg:mt-0">
          <div className="relative w-full aspect-square sm:aspect-[4/3] md:aspect-[4/5] rounded-[2.5rem] overflow-hidden glass-card p-2 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop"
              alt="Experiencia Premium Dharynails"
              className="w-full h-full rounded-[2rem] object-cover filter brightness-[1.05]"
              referrerPolicy="no-referrer"
            />
            {/* Elegant Floating Badge inspirated by Nail Studio screen */}
            <div className="absolute bottom-5 left-5 glass-card p-4 rounded-3xl flex items-center gap-3.5 shadow-2xl bg-black/80 border-white/20">
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

      {/* Trust Grid */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: <Heart className="w-7 h-7 text-white" />, title: "+19k Fans", subtitle: "Instagram activos" },
          { icon: <Star className="w-7 h-7 text-white fill-current" />, title: "Calificación 4.9", subtitle: "Opiniones Google" },
          { icon: <Clock className="w-7 h-7 text-white" />, title: "Agenda Flexible", subtitle: "Lun-Sáb 10:00 - 19:00" },
          { icon: <Award className="w-7 h-7 text-white" />, title: "Elite Staff", subtitle: "Manicuristas Master" },
        ].map((item, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            key={i} 
            className="glass-card rounded-2xl md:rounded-3xl p-5 flex flex-col justify-center items-center text-center gap-2 hover:border-white/20 transition-all cursor-default relative overflow-hidden group hover:shadow-[0_8px_25px_rgba(255,255,255,0.05)]"
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/40 transition-all duration-500" />
            <div className="p-2.5 rounded-2xl bg-white/5 border border-white/5 mb-1 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="font-sans font-bold text-[16px] md:text-lg text-white leading-tight">{item.title}</h3>
            <p className="font-sans text-[10px] md:text-xs uppercase tracking-wider text-stone-400 font-medium">{item.subtitle}</p>
          </motion.div>
        ))}
      </section>

      {/* NEW: Menu and Interactive Products Section */}
      <section className="space-y-8 md:space-y-10">
        <div className="text-center space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-[10px] md:text-xs font-bold uppercase tracking-wider mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-stone-300 animate-pulse" /> Carta de Servicios VIP
          </div>
          <h3 className="font-serif text-3xl md:text-5xl text-white font-extrabold tracking-tight">Menú de Experiencias & Productos</h3>
          <p className="font-sans text-sm md:text-base text-stone-400 max-w-xl mx-auto px-2">
            Presentamos nuestro catálogo de alta sintonía. Selecciona tu producto base preferido, personaliza sus opciones y resérvalo de inmediato.
          </p>
        </div>

        {/* Categories/Products Grid Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PRODUCTS_SERVICES_DATA.map((product) => {
            const isSelected = selectedProduct.id === product.id;
            return (
              <motion.div
                key={product.id}
                onClick={() => {
                  setSelectedProduct(product);
                  setSelectedOptionIndex(0);
                  setIsDetailModalOpen(true);
                }}
                className={`glass-card rounded-[2rem] p-5 cursor-pointer flex gap-4 md:gap-5 border transition-all duration-300 relative overflow-hidden group ${
                  isSelected 
                    ? 'border-white bg-white/[0.05] shadow-[0_12px_30px_rgba(255,255,255,0.08)]' 
                    : 'border-white/5 bg-stone-950 hover:bg-white/[0.02] hover:border-white/25'
                }`}
              >
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden shrink-0 shadow-lg border border-white/5 relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  {isSelected && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[1px]">
                      <span className="bg-white text-black p-1.5 rounded-full shadow-lg">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="flex-1 flex flex-col justify-between py-0.5">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#dfb24c]/90 font-extrabold">{product.category}</span>
                      <span className="font-sans text-[10px] text-stone-400 font-mono flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {product.duration}
                      </span>
                    </div>
                    <h4 className="font-serif font-bold text-base md:text-lg text-white leading-tight group-hover:text-stone-200 transition-colors">
                      {product.name}
                    </h4>
                    <p className="font-sans text-xs text-stone-400 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/5 pt-2 mt-2">
                    <span className="font-sans text-[10px] text-stone-500 font-bold uppercase tracking-wider">Inversión Desde</span>
                    <span className="font-serif text-lg font-bold text-white">${product.basePrice.toLocaleString('es-CL')}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Live Configurator Area & Bookings Trigger */}
        <AnimatePresence mode="wait">
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-[2.5rem] p-6 md:p-8 border-white/10 bg-gradient-to-tr from-stone-950 via-neutral-900 to-black relative overflow-hidden shadow-2xl"
            >
              {/* Radial decor lamp glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] rounded-full blur-[80px] pointer-events-none" />

              <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
                
                {/* Customizer Option Choices */}
                <div className="flex-1 space-y-4 w-full">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-stone-400 font-extrabold">Configurando Producto</span>
                    <h4 className="font-serif text-xl md:text-2xl text-white font-extrabold">{selectedProduct.name}</h4>
                    <p className="font-sans text-[13px] text-stone-300 leading-relaxed max-w-2xl">{selectedProduct.description}</p>
                  </div>

                  <div className="space-y-2.5">
                    <p className="font-sans text-xs font-bold text-[#dfb24c] uppercase tracking-widest">{selectedProduct.optionsLabel}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                      {selectedProduct.options.map((opt, index) => {
                        const isOptSelected = selectedOptionIndex === index;
                        return (
                          <button
                            key={index}
                            onClick={() => setSelectedOptionIndex(index)}
                            className={`p-3 rounded-xl border font-sans text-xs text-left transition-all duration-200 cursor-pointer flex flex-col justify-between gap-1.5 ${
                              isOptSelected
                                ? 'bg-white text-black border-transparent shadow-[0_4px_14px_rgba(255,255,255,0.15)]'
                                : 'bg-black/30 border-white/5 text-stone-300 hover:border-white/25 hover:text-white'
                            }`}
                          >
                            <span className="font-bold leading-snug">{opt.name}</span>
                            <span className={`text-[10px] font-mono font-extrabold ${isOptSelected ? 'text-stone-800' : 'text-stone-400'}`}>
                              {opt.extraPrice === 0 ? 'Sin recargo' : `+$${opt.extraPrice.toLocaleString('es-CL')}`}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Vertical Separator for Large Screens */}
                <div className="hidden lg:block w-px h-28 bg-white/10 shrink-0 self-center" />

                {/* Price Display and Call to Actions (WhatsApp & Schedule) */}
                <div className="w-full lg:w-80 shrink-0 flex flex-col justify-center bg-black/40 p-5 rounded-2xl border border-white/5 space-y-4 shadow-inner">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-stone-400 font-bold block mb-0.5">Total Estimado</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-serif text-3xl font-extrabold text-white">${calculateTotal().toLocaleString('es-CL')}</span>
                      <span className="font-sans text-[10px] text-stone-500 uppercase font-bold font-mono">Chp</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    {/* Direct WhatsApp Button */}
                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-black bg-white hover:bg-stone-200 font-extrabold text-xs uppercase tracking-wider h-11 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_14px_rgba(255,255,255,0.1)] transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" /> WhatsApp Directo
                    </a>

                    {/* Schedule Calendar Trigger Button */}
                    <button
                      onClick={() => setActiveTab('agenda')}
                      className="glass-card text-white hover:text-stone-200 border-white/10 font-bold text-xs uppercase tracking-wider h-11 rounded-xl flex items-center justify-center gap-2 cursor-pointer hover:bg-white/10 transition-all bg-white/[0.01]"
                    >
                      <Clock className="w-4 h-4" /> Programar en Agenda
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Featured Service Sneak Peek (Nail room style) */}
      <motion.section 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass-card rounded-[2.5rem] overflow-hidden group flex flex-col md:flex-row border-white/10 bg-gradient-to-b from-stone-900 to-black"
      >
        <div className="w-full md:w-2/5 aspect-[4/3] md:aspect-auto relative overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1604654894610-df4906b1100f?q=80&w=800&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
            alt="Artistic Manicure Permanente"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="p-8 md:p-14 flex flex-col justify-center md:w-3/5 space-y-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white font-sans font-extrabold text-[10px] md:text-xs uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 fill-current animate-bounce" /> Servicio Más Solicitado
            </span>
          </div>
          
          <h3 className="font-serif text-3xl md:text-4xl text-white font-bold">Manicure Rusa Permanente</h3>
          
          <p className="font-sans text-[14px] md:text-base text-stone-300 leading-relaxed">
            Nuestra especialidad insignia. Esmaltado impecable y duradero que resiste hasta 4 semanas. Cuidado profundo de la cutícula mediante técnica de torno ruso, logrando un acabado limpio y saludable.
          </p>
          
          <div className="flex wrap items-center gap-5 pt-2">
            <button 
              onClick={() => setActiveTab('agenda')}
              className="btn-primary h-13 px-8 rounded-2xl font-bold text-[14px] md:text-sm shadow-md cursor-pointer hover:brightness-105"
            >
              Consultar Agenda
            </button>
            <div className="flex flex-col">
              <span className="text-xs text-stone-400 uppercase tracking-wider font-extrabold leading-none mb-1">Inversión Premium</span>
              <span className="font-serif text-2xl font-extrabold text-white">$22.000</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Interactive Detail Modal / Dialog */}
      <AnimatePresence>
        {isDetailModalOpen && selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDetailModalOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full max-w-4xl bg-stone-900 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row focus:outline-none max-h-[92vh]"
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 aspect-video md:aspect-auto md:min-h-[500px] relative overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                {/* Floating Tag */}
                <div className="absolute top-5 left-5 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="font-sans font-extrabold text-[10px] uppercase tracking-widest text-[#dfb24c]">EXCLUSIVO DHARYNAILS</span>
                </div>
                
                {/* Duration Tag */}
                <div className="absolute bottom-5 left-5 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/5 flex items-center gap-1.5 text-stone-300">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="font-sans text-xs font-bold">{selectedProduct.duration} de Atención Atenta</span>
                </div>
              </div>

              {/* Content Panel */}
              <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between space-y-6 overflow-y-auto max-h-[50vh] md:max-h-[600px]">
                
                {/* Upper Details */}
                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#dfb24c] font-black">{selectedProduct.category}</span>
                      <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-white tracking-tight mt-0.5">{selectedProduct.name}</h3>
                    </div>
                    <button
                      onClick={() => setIsDetailModalOpen(false)}
                      className="p-2 rounded-full bg-white/5 border border-white/10 text-stone-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                      title="Cerrar detalles"
                    >
                      <X className="w-4.5 h-4.5" />
                    </button>
                  </div>

                  <p className="font-sans text-xs md:text-sm text-stone-300 leading-relaxed">
                    {selectedProduct.description}
                  </p>

                  {/* High Quality Bullet Perks for absolute luxury vibe */}
                  <div className="pt-3 space-y-2 border-t border-white/5">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-stone-400 font-extrabold block">Atención Biosegura & Premium:</span>
                    <ul className="grid grid-cols-1 gap-1.5 text-stone-400 text-xs">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#dfb24c] shrink-0" />
                        <span>Instrumental esterilizado en autoclave clínico ubre-virus</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#dfb24c] shrink-0" />
                        <span>Esmaltados sin componentes nocivos e inocuos</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#dfb24c] shrink-0" />
                        <span>Servicio complementario de café express o infusión silvestre</span>
                      </li>
                    </ul>
                  </div>

                  {/* Interactive Options list inside the modal */}
                  <div className="pt-3 border-t border-white/5 space-y-2">
                    <p className="font-sans text-xs font-bold text-[#dfb24c] uppercase tracking-widest flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-[#dfb24c]" />
                      <span>{selectedProduct.optionsLabel}</span>
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedProduct.options.map((opt, index) => {
                        const isOptSelected = selectedOptionIndex === index;
                        return (
                          <div
                            key={index}
                            onClick={() => setSelectedOptionIndex(index)}
                            className={`p-3 rounded-xl border font-sans text-xs transition-all duration-200 cursor-pointer flex justify-between items-center ${
                              isOptSelected
                                ? 'bg-white text-black border-transparent shadow-lg font-bold'
                                : 'bg-black/40 border-white/5 text-stone-300 hover:border-white/20'
                            }`}
                          >
                            <span className="leading-snug">{opt.name}</span>
                            <span className={`text-[10px] font-mono font-extrabold shrink-0 ml-2 ${isOptSelected ? 'text-stone-800' : 'text-stone-400'}`}>
                              {opt.extraPrice === 0 ? 'Sin recargo' : `+$${opt.extraPrice.toLocaleString('es-CL')}`}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Lower Action bar & Final Calculations */}
                <div className="pt-4 border-t border-white/10 space-y-4">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-stone-400 font-bold block mb-0.5">Total Estimado</span>
                      <span className="font-serif text-3xl font-extrabold text-white">${calculateTotal().toLocaleString('es-CL')}</span>
                    </div>
                    <span className="font-sans text-[10px] text-stone-400 uppercase font-bold bg-white/5 px-2.5 py-1 rounded">
                      CLP Estimado
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {/* Schedule Calendar Trigger Button */}
                    <button
                      onClick={() => {
                        setIsDetailModalOpen(false);
                        setActiveTab('agenda');
                      }}
                      className="glass-card text-white hover:text-stone-200 border-white/10 font-bold text-xs uppercase tracking-wider h-11 rounded-xl flex items-center justify-center gap-2 cursor-pointer hover:bg-white/10 transition-all bg-white/[0.01]"
                    >
                      <Clock className="w-4 h-4" /> Reservar en Agenda
                    </button>

                    {/* Direct WhatsApp Button */}
                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-black bg-white hover:bg-stone-200 font-extrabold text-xs uppercase tracking-wider h-11 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all text-center"
                    >
                      <MessageCircle className="w-4 h-4 fill-current text-black" /> Pedir WhatsApp
                    </a>
                  </div>

                  {/* Quick link to 3D simulator / designer */}
                  <button
                    onClick={() => {
                      setIsDetailModalOpen(false);
                      setActiveTab('customize');
                    }}
                    className="w-full text-center text-[11px] text-[#dfb24c] hover:text-white transition-colors underline cursor-pointer font-sans"
                  >
                    ¿Quieres simular colores y brillos en 3D? Abre el Simulador de Uñas
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
