import React, { useState, useEffect } from 'react';
import { Home, Sparkles, Image as ImageIcon, Gift, Menu, User, Calendar, Award, Crown, Loader2 } from 'lucide-react';
import { HomeView } from './views/HomeView';
import { GalleryView } from './views/GalleryView';
import { CustomizerView } from './views/CustomizerView';
import { PromosView } from './views/PromosView';
import { AgendaView } from './views/AgendaView';
import { FidelidadView } from './views/FidelidadView';
import { TabType } from './types';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Elegant luxury delay to show the custom brand introduction
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
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
            exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.5, ease: 'easeOut' } }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
          >
            {/* Elegant Luxury Background lines & blurs inside loading screen */}
            <div className="absolute top-[30%] left-[20%] w-[60%] h-[300px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[30%] right-[20%] w-[60%] h-[300px] bg-stone-800/[0.1] rounded-full blur-[100px] pointer-events-none" />

            <div className="flex flex-col items-center max-w-sm px-6 text-center space-y-6">
              {/* Spinning Crown brand mark */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="relative"
              >
                <div className="absolute inset-0 bg-white/25 rounded-full blur-2xl animate-pulse" />
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-stone-900 border border-white/10 relative shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                  <Crown className="w-10 h-10 text-white animate-pulse" />
                </div>
              </motion.div>

              {/* Title & subtitle */}
              <div className="space-y-2">
                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="font-serif text-3xl font-black tracking-[0.25em] text-white"
                >
                  DHARY<span className="text-stone-400 font-light italic ml-1">NAILS</span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="font-mono text-[9px] tracking-[0.3em] uppercase text-stone-400 font-bold"
                >
                  Alta Manicura & Spa de Lujo
                </motion.p>
              </div>

              {/* Loading progress bar */}
              <div className="w-48 h-[2px] bg-stone-950 rounded-full overflow-hidden relative border border-white/5">
                <motion.div 
                  initial={{ left: '-100%' }}
                  animate={{ left: '100%' }}
                  transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
                  className="absolute top-0 bottom-0 w-2/3 bg-gradient-to-r from-transparent via-white to-transparent"
                />
              </div>

              {/* Loader info */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="font-sans text-[10px] uppercase tracking-wider text-stone-500 font-extrabold flex items-center gap-1.5"
              >
                <Loader2 className="w-3.5 h-3.5 animate-spin" /> Cargando Experiencia Estética...
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen relative font-sans text-white overflow-x-hidden bg-black">
      {/* Absolute Ambient Luxury Blur Spots */}
      <div className="absolute top-[10%] left-[-20%] w-[80%] h-[500px] bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-[160px] pointer-events-none -z-10 animate-pulse duration-10000" />
      <div className="absolute bottom-[20%] right-[-20%] w-[80%] h-[500px] bg-gradient-to-bl from-white/3 to-transparent rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-[15%] w-[400px] h-[400px] bg-gradient-to-r from-stone-800/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Top Navbar */}
      <header className="fixed top-0 w-full z-50 glass-panel !rounded-none !border-x-0 !border-t-0 flex items-center justify-between px-6 h-[72px] transition-all duration-300">
        <div className="flex items-center gap-2">
          {/* Decorative monochrome dots */}
          <div className="flex gap-1.5 mr-3">
            <span className="w-2.5 h-2.5 rounded-full bg-white opacity-80 animate-ping absolute" />
            <span className="w-2.5 h-2.5 rounded-full bg-white relative" />
            <span className="w-2.5 h-2.5 rounded-full bg-stone-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-stone-700" />
          </div>
        </div>
        
        {/* Logo anterior con coronita arriba, bien bonito y bien preciso */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer pb-1" onClick={() => setActiveTab('home')}>
          <Crown className="w-4.5 h-4.5 text-white animate-pulse" />
          <h1 className="font-serif text-[18px] md:text-2xl font-black tracking-[0.25em] leading-none mt-1">
            <span className="text-white">DHARY</span>
            <span className="text-stone-400 font-light italic ml-1">NAILS</span>
          </h1>
        </div>
        

      </header>

      {/* Main Content Area */}
      <main className="relative z-10 w-full pt-4">
        <AnimatePresence mode="wait">
          {renderView()}
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
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
                {isActive && (
                  <div className="absolute -bottom-2 w-1 h-1 rounded-full bg-white shadow-[0_0_8px_#ffffff]"></div>
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Desktop Sidebar Fallback (Aesthetic glass desk) */}
      <div className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-5.5 z-50 p-4 rounded-[2rem] glass-card bg-black/90 shadow-[0_4px_30px_rgba(255,255,255,0.05)] select-none border-white/10">
        <div className="flex flex-col gap-1.5 items-center mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-white opacity-80" />
          <span className="w-1.5 h-1.5 rounded-full bg-stone-500" />
          <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
        </div>
        {navItems.map(({ id, icon: Icon, label }) => {
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              title={label}
              className={`p-3 rounded-xl transition-all duration-300 relative cursor-pointer group ${
                isActive 
                  ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.25)] scale-110' 
                  : 'text-stone-500 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className="w-5 h-5" />
              {/* Tooltip */}
              <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-black border border-white/10 text-white font-sans text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 duration-250 pointer-events-none whitespace-nowrap shadow-xl">
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
    </>
  );
}
