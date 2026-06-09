import React, { useState, useEffect } from 'react';
import { Home, Sparkles, Image as ImageIcon, Gift, Calendar, Award, Crown, Loader2 } from 'lucide-react';
import { HomeView } from './views/HomeView';
import { GalleryView } from './views/GalleryView';
import { CustomizerView } from './views/CustomizerView';
import { PromosView } from './views/PromosView';
import { AgendaView } from './views/AgendaView';
import { FidelidadView } from './views/FidelidadView';
import { TabType } from './types';
import { AnimatePresence, motion } from 'motion/react';
import { BRAND_AVATAR } from './assets/nailImages';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  const renderView = () => {
    switch (activeTab) {
      case 'home': return <HomeView key="home" setActiveTab={setActiveTab} />;
      case 'gallery': return <GalleryView key="gallery" setActiveTab={setActiveTab} />;
      case 'customize': return <CustomizerView key="customize" />;
      case 'promos': return <PromosView key="promos" setActiveTab={setActiveTab} />;
      case 'agenda': return <AgendaView key="agenda" setActiveTab={setActiveTab} />;
      case 'loyalty': return <FidelidadView key="loyalty" setActiveTab={setActiveTab} />;
      default: return <HomeView key="home" setActiveTab={setActiveTab} />;
    }
  };

  const navItems = [
    { id: 'home', icon: Home, label: 'Inicio' },
    { id: 'agenda', icon: Calendar, label: 'Agenda' },
    { id: 'loyalty', icon: Award, label: 'Fidelidad' },
    { id: 'promos', icon: Gift, label: 'Ofertas' },
    { id: 'customize', icon: Sparkles, label: 'Crea' },
    { id: 'gallery', icon: ImageIcon, label: 'Galería' },
  ] as const;

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loading-screen"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04, transition: { duration: 0.35, ease: 'easeOut' } }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
          >
            <div className="absolute top-[25%] left-[10%] w-[80%] h-[280px] bg-primary/10 rounded-full blur-[110px] pointer-events-none" />
            <div className="flex flex-col items-center max-w-sm px-6 text-center space-y-6">
              <motion.div
                initial={{ scale: 0.86, opacity: 0 }}
                animate={{ scale: [0.86, 1.08, 1], opacity: 1 }}
                transition={{ duration: 0.85, ease: 'easeOut' }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl animate-pulse" />
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-stone-950 border border-white/10 relative shadow-[0_0_30px_rgba(255,71,126,0.22)]">
                  <Crown className="w-10 h-10 text-white animate-pulse" />
                </div>
              </motion.div>

              <div className="space-y-2">
                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.55 }}
                  className="font-serif text-3xl font-black tracking-[0.25em] text-white"
                >
                  DHARY<span className="text-stone-400 font-light italic ml-1">NAILS</span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.62 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                  className="font-mono text-[9px] tracking-[0.3em] uppercase text-stone-400 font-bold"
                >
                  Cargando experiencia premium
                </motion.p>
              </div>

              <div className="w-48 h-[2px] bg-stone-950 rounded-full overflow-hidden relative border border-white/5">
                <motion.div 
                  initial={{ left: '-100%' }}
                  animate={{ left: '100%' }}
                  transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
                  className="absolute top-0 bottom-0 w-2/3 bg-gradient-to-r from-transparent via-primary to-transparent"
                />
              </div>

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.45 }}
                transition={{ delay: 0.35, duration: 0.45 }}
                className="font-sans text-[10px] uppercase tracking-wider text-stone-500 font-extrabold flex items-center gap-1.5"
              >
                <Loader2 className="w-3.5 h-3.5 animate-spin" /> Imágenes internas listas
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen relative font-sans text-white overflow-x-hidden bg-black">
        <div className="absolute top-[10%] left-[-20%] w-[80%] h-[500px] bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-[160px] pointer-events-none -z-10" />
        <div className="absolute bottom-[20%] right-[-20%] w-[80%] h-[500px] bg-gradient-to-bl from-white/3 to-transparent rounded-full blur-[160px] pointer-events-none -z-10" />

        <header className="fixed top-0 w-full z-50 glass-panel !rounded-none !border-x-0 !border-t-0 flex items-center justify-between px-6 h-[72px] transition-all duration-300">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5 mr-3">
              <span className="w-2.5 h-2.5 rounded-full bg-white relative" />
              <span className="w-2.5 h-2.5 rounded-full bg-stone-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-stone-700" />
            </div>
          </div>
          
          <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer pb-1" onClick={() => setActiveTab('home')}>
            <Crown className="w-4.5 h-4.5 text-white animate-pulse" />
            <h1 className="font-serif text-[18px] md:text-2xl font-black tracking-[0.25em] leading-none mt-1">
              <span className="text-white">DHARY</span>
              <span className="text-stone-400 font-light italic ml-1">NAILS</span>
            </h1>
          </div>
          
          <button className="w-9 h-9 rounded-full overflow-hidden border border-white/20 hover:border-white transition-all active:scale-95 cursor-pointer flex items-center justify-center bg-black/60 shadow-[0_0_12px_rgba(255,255,255,0.15)]" onClick={() => setActiveTab('home')}>
            <img 
              src={BRAND_AVATAR} 
              alt="Dharynails Avatar" 
              className="w-full h-full object-cover"
            />
          </button>
        </header>

        <main className="relative z-10 w-full pt-4">
          <AnimatePresence mode="wait">
            {renderView()}
          </AnimatePresence>
        </main>

        <nav className="fixed bottom-0 w-full z-50 glass-panel !rounded-b-none !border-x-0 !border-b-0 md:hidden bg-black/95 shadow-[0_-10px_35px_rgba(0,0,0,0.8)]">
          <div className="flex justify-around items-center px-0.5 pt-3 pb-5 max-w-[420px] mx-auto">
            {navItems.map(({ id, icon: Icon, label }) => {
              const isActive = activeTab === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex flex-col items-center justify-center w-[4rem] transition-colors duration-300 active:scale-90 relative cursor-pointer group ${
                    isActive ? 'text-white' : 'text-stone-500 hover:text-white'
                  }`}
                >
                  <Icon className={`w-4.5 h-4.5 mb-1 transition-transform ${isActive ? 'scale-110 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]' : 'text-stone-500'}`} />
                  <span className={`font-sans text-[8px] uppercase font-extrabold tracking-wider leading-none ${isActive ? 'text-white' : 'text-stone-500'}`}>{label}</span>
                  {isActive && <div className="absolute -bottom-2 w-1 h-1 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />}
                </button>
              );
            })}
          </div>
        </nav>

        <div className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-5.5 z-50 p-4 rounded-[2rem] glass-card bg-black/90 shadow-[0_4px_30px_rgba(255,255,255,0.05)] select-none border-white/10">
          {navItems.map(({ id, icon: Icon, label }) => {
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                title={label}
                className={`p-3 rounded-xl transition-all duration-300 relative cursor-pointer group ${
                  isActive ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.25)] scale-110' : 'text-stone-500 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-5 h-5" />
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
