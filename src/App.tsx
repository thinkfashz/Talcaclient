import React, { useState, useEffect } from 'react';
import { Home, Sparkles, Image as ImageIcon, Gift, Calendar, Award, Crown, Loader2, MessageCircle } from 'lucide-react';
import { HomeView } from './views/HomeView';
import { GalleryView } from './views/GalleryView';
import { CustomizerView } from './views/CustomizerView';
import { PromosView } from './views/PromosView';
import { AgendaView } from './views/AgendaView';
import { FidelidadView } from './views/FidelidadView';
import { TabType } from './types';
import { AnimatePresence, motion } from 'motion/react';
import { DHARYNAILS_LOGO } from './assets/nailImages';

const WHATSAPP_LINK = 'https://wa.me/56962493456?text=Hola%20Dharynails%2C%20quiero%20consultar%20por%20una%20hora%20disponible';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
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
            exit={{ opacity: 0, scale: 1.02, transition: { duration: 0.28, ease: 'easeOut' } }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
          >
            <div className="absolute top-[25%] left-[10%] w-[80%] h-[280px] bg-primary/10 rounded-full blur-[110px] pointer-events-none" />
            <div className="flex flex-col items-center max-w-sm px-6 text-center space-y-5">
              <motion.img
                src={DHARYNAILS_LOGO}
                alt="Logo Dharynails recreado"
                initial={{ scale: 0.86, opacity: 0 }}
                animate={{ scale: [0.86, 1.05, 1], opacity: 1 }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
                className="w-20 h-20 rounded-full border border-white/10 shadow-[0_0_30px_rgba(255,71,126,0.22)]"
              />
              <div className="space-y-2">
                <h2 className="font-serif text-3xl font-black tracking-[0.25em] text-white">DHARY<span className="text-stone-400 font-light italic ml-1">NAILS</span></h2>
                <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-stone-400 font-bold">Cargando experiencia premium</p>
              </div>
              <div className="w-48 h-[2px] bg-stone-950 rounded-full overflow-hidden relative border border-white/5">
                <motion.div initial={{ left: '-100%' }} animate={{ left: '100%' }} transition={{ repeat: Infinity, duration: 0.85, ease: 'easeInOut' }} className="absolute top-0 bottom-0 w-2/3 bg-gradient-to-r from-transparent via-primary to-transparent" />
              </div>
              <span className="font-sans text-[10px] uppercase tracking-wider text-stone-500 font-extrabold flex items-center gap-1.5"><Loader2 className="w-3.5 h-3.5 animate-spin" /> Visual estable</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen relative font-sans text-white overflow-x-hidden bg-black">
        <div className="absolute top-[10%] left-[-20%] w-[80%] h-[500px] bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-[160px] pointer-events-none -z-10" />
        <div className="absolute bottom-[20%] right-[-20%] w-[80%] h-[500px] bg-gradient-to-bl from-white/3 to-transparent rounded-full blur-[160px] pointer-events-none -z-10" />

        <header className="fixed top-0 w-full z-50 glass-panel !rounded-none !border-x-0 !border-t-0 flex items-center justify-between px-5 h-[72px] transition-all duration-300">
          <div className="w-12 flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white" />
            <span className="w-2.5 h-2.5 rounded-full bg-stone-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-stone-700" />
          </div>

          <button className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer pb-1 bg-transparent" onClick={() => setActiveTab('home')}>
            <img src={DHARYNAILS_LOGO} alt="Logo Dharynails recreado" className="w-7 h-7 rounded-full border border-white/15 object-cover mb-0.5" />
            <h1 className="font-serif text-[18px] md:text-2xl font-black tracking-[0.25em] leading-none">
              <span className="text-white">DHARY</span>
              <span className="text-stone-400 font-light italic ml-1">NAILS</span>
            </h1>
          </button>

          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shadow-[0_0_12px_rgba(37,211,102,0.16)]" aria-label="WhatsApp Dharynails">
            <MessageCircle className="w-5 h-5" />
          </a>
        </header>

        <main className="relative z-10 w-full pt-4">
          <AnimatePresence mode="wait">{renderView()}</AnimatePresence>
        </main>

        <nav className="fixed bottom-0 w-full z-50 glass-panel !rounded-b-none !border-x-0 !border-b-0 md:hidden bg-black/95 shadow-[0_-10px_35px_rgba(0,0,0,0.8)]">
          <div className="flex justify-around items-center px-0.5 pt-3 pb-5 max-w-[420px] mx-auto">
            {navItems.map(({ id, icon: Icon, label }) => {
              const isActive = activeTab === id;
              return (
                <button key={id} onClick={() => setActiveTab(id)} className={`flex flex-col items-center justify-center w-[4rem] transition-colors duration-300 active:scale-90 relative cursor-pointer group ${isActive ? 'text-white' : 'text-stone-500 hover:text-white'}`}>
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
              <button key={id} onClick={() => setActiveTab(id)} title={label} className={`p-3 rounded-xl transition-all duration-300 relative cursor-pointer group ${isActive ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.25)] scale-110' : 'text-stone-500 hover:text-white hover:bg-white/5'}`}>
                <Icon className="w-5 h-5" />
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
