import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Heart, Sparkles } from 'lucide-react';
import { GalleryItem } from '../types';

const GALLERY_DATA: GalleryItem[] = [
  {
    id: '1',
    title: 'Perla Francesa Moderna',
    category: 'Minimalista • Lujo',
    tag: 'Minimalista',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '2',
    title: 'Flora Pastel',
    category: 'Floral • Primavera',
    tag: 'Floral',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '3',
    title: 'Oro Rosa Geométrico',
    category: 'Geométrico • Brilloso',
    tag: 'Geométrico',
    image: 'https://images.unsplash.com/photo-1610992015732-2449b76344cc?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '4',
    title: 'Malla Carmesí Dulce',
    category: 'Luxe • San Valentín',
    tag: 'Luxe',
    image: 'https://images.unsplash.com/photo-1604654894610-df4906b1100f?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '5',
    title: 'Mármol Blush',
    category: 'Abstracto • Cristalino',
    tag: 'Abstracto',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '6',
    title: 'Escarcha Esmeralda',
    category: 'Estacional • Invierno',
    tag: 'Estacional',
    image: 'https://images.unsplash.com/photo-1629731221741-cb19cd1a40bc?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '7',
    title: 'Lámina de Oro Minimalista',
    category: 'Minimalista • Lujo',
    tag: 'Luxe',
    image: 'https://images.unsplash.com/photo-1632345031435-8797b2d58045?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '8',
    title: 'Ombré Atardecer',
    category: 'Abstracto • Degradado',
    tag: 'Abstracto',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=600'
  }
];

const FILTERS = ['Todos', 'Floral', 'Geométrico', 'Estacional', 'Minimalista', 'Luxe', 'Abstracto'];

interface GalleryViewProps {
  setActiveTab: (tab: any) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ setActiveTab }) => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filteredData = GALLERY_DATA.filter(item => {
    return activeFilter === 'Todos' || item.tag === activeFilter || item.category.includes(activeFilter);
  });

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pb-28 px-4 md:px-12 pt-24 max-w-7xl mx-auto"
    >
      <div className="mb-6 md:mb-10 text-center mt-2 md:mt-4 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-wider mx-auto">
          <Sparkles className="w-3.5 h-3.5" /> Book de Diseños Exclusivos
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-2 font-bold tracking-tight">Galería de Inspiración</h2>
        <p className="font-sans text-sm md:text-base text-stone-400 max-w-xl mx-auto px-2">
          Explora la colección de trabajos recientes en Dharynails. Guarda tus favoritos para agendar o recrear con nuestro personal master.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="mb-6 md:mb-10 overflow-x-auto hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
        <div className="flex space-x-2.5 md:space-x-3 w-max pb-3">
          {FILTERS.map(filter => (
            <button
               key={filter}
               onClick={() => setActiveFilter(filter)}
               className={`px-5 py-2.5 rounded-full font-sans text-[10px] md:text-xs uppercase tracking-wider font-bold transition-all duration-300 cursor-pointer border ${
                 activeFilter === filter 
                   ? 'bg-white text-black border-white shadow-[0_4px_14px_rgba(255,255,255,0.15)]' 
                   : 'glass-card border-white/5 text-stone-400 hover:text-white hover:border-white/20'
               }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredData.map((item, i) => (
          <motion.div 
            layout
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            key={item.id} 
            className="break-inside-avoid group relative rounded-3xl overflow-hidden glass-card transition-all duration-500 hover:-translate-y-1 hover:border-white/20 mb-6 bg-black/80 shadow-lg border-white/5"
          >
            <div className="relative w-full overflow-hidden rounded-t-3xl">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <button 
                  onClick={() => setActiveTab('agenda')}
                  className="w-full py-3 rounded-xl bg-white text-black font-sans font-bold text-xs md:text-sm flex items-center justify-center space-x-2 hover:bg-stone-200 transition-all cursor-pointer shadow-[0_4px_15px_rgba(255,255,255,0.15)]"
                >
                  <span>Pedir Este Diseño</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-5 bg-gradient-to-b from-transparent to-black/30">
              <h3 className="font-serif text-lg font-bold text-white mb-1">{item.title}</h3>
              <div className="flex justify-between items-center">
                <span className="font-sans text-xs text-stone-400 font-medium">{item.category}</span>
                <button className="w-8 h-8 rounded-xl flex items-center justify-center text-white bg-white/10 hover:bg-white/20 hover:scale-110 active:scale-95 transition-all cursor-pointer">
                  <Heart className="w-4 h-4 fill-current text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
