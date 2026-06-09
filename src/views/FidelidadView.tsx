import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crown, Gift, Award, Share2, Users, Search, QrCode, ClipboardList, Check, Sparkles, Star, TrendingUp, Phone, ChevronRight } from 'lucide-react';

interface ClientVIP {
  name: string;
  phone: string;
  points: number;
  maxPoints: number;
  tier: string;
  savingPercent: number; // For discount progress as she passes certain levels
  history: string[];
}

const PRESET_VIP_CLIENTS: ClientVIP[] = [
  {
    name: 'Verónica Espinoza',
    phone: '+56948293029',
    points: 450,
    maxPoints: 500,
    tier: 'Platino Estrella',
    savingPercent: 20, // 20% tier discount unlocked
    history: ['Agendamiento Mar 15: +100 pts', 'Esmaltado Permanente Abr 10: +150 pts', 'Traer una amiga May 04: +200 pts']
  },
  {
    name: 'Camila Toledo',
    phone: '+56988492049',
    points: 240,
    maxPoints: 500,
    tier: 'Oro Elegancia',
    savingPercent: 15, // 15% tier discount
    history: ['Agendamiento Abr 12: +100 pts', 'Review en Google MyBusiness: +140 pts']
  },
  {
    name: 'María José Rojas',
    phone: '+56933221100',
    points: 100,
    maxPoints: 500,
    tier: 'Plata Inicial',
    savingPercent: 10, // 10% tier discount
    history: ['Primera visita Jun 01: +100 pts']
  }
];

const PAST_WINNERS = [
  { name: 'Marta Sanhueza', gift: 'Esmaltado Semipermanente Gratis', date: 'Hace 2 días', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4l8qfE0KJlJ5zFE3mi1Ng45Sb-HytAlO7fXpC14yWx0i8gJ16OHoE79MwvoU67nTJuF_FZpOvcLChmbMh8Q3Q1v1Knz0qgR2vLbDuuhcsg-mTi2EdPffZv7rydNBowSOwMg0omo57yrmo30Xpld3xdoxqf-81ttqKdits0O0EXl9Dim-KKx1S0c3BQy5zVND9A0wZRkANbbIoXPz_G3EwFaGGMmZLaYLrpLqhDTHP0HfblRIF2vsgWwdh-cm8geS876qFG77DYw' },
  { name: 'Sofía Riquelme', gift: 'Nivelación en Gel Sólido + Alargamiento', date: 'Hace 4 días', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSmGFdfkpItVfYm2UaVw7G6QozRVbs3q3Urt6_f-34rLuYCVBG3Acrm7TZIcPZ2SCDoCwPoOtGryN-qGTDMM9B0HcOn055nYTgK0tSPEh4dakRTiWEmScAX60pUT0U7qml2ljaYdOgzC2cCRK6DW_I-8MZKJxpaTC31LO9fj6gb9f0Sh9Bv_Umgg8SuWBnf3E4sFrdHXdw905odYd23WGXDly5FaLgj3XmuLGEKb_u9j7sUlmn1A4ivv8WtCzzeJpWWC_JWAPkGA' },
  { name: 'Carla Pinilla', gift: 'Set de Cristales Swarovski Premium gratis', date: 'Ayer', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKOTj7BOXtLjXKJRA3PygLTVY_tzQBg_jJfVG5EvIJhwxQnOCTZd38cXMHslMkRsyHmoMDac8zz36U25tVt0AimCJOGfANd0IQQ5fC91M4K_IEoZMVi5pYpPaJEP165UGiTM7Qy1WvsUct9Oa0Jd5EVAjzo8549XuElc4msJby5jnneNYjzk3bcGeqw1wz1HXs3-ZsqHatIUblE-7rkYYUIFtQ1OBKhGP0h5oHIU_PVbyzg6WtPS9SiBB33FHBeB-QqD9IxV3z2Q' },
  { name: 'Isidora Castro', gift: 'Retiro de Material y Spa de Exfoliación', date: 'Hace 1 semana', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsUFF15T43nA44pKo3-88sNaDqvoAZ8VRoQVxKyiHyE4el0Ny4NNnyUK0JMdIPAVHGoc746AKH2mTrbJxpg_yb3otYwOCVzsaUyzPBMwAMkKZUqX5yHUCOGlzV8SPciftwpHTd0m-GUZtz3_HbkkJB7DV8cD79qvDUw-TK-Y8xf9dMXtu-9ysb5A4hNd_6_B4GuxoyOTkzPpAYRbs5jU40Rs8w8EhbYIO4006vU8uk_duHF2IRHtTwD8gKcwYmEs2u_0ch_BYpPQ' }
];

const EARNING_METHODS = [
  { title: 'Asistir a Citas Esculpidas', desc: 'Cada set nuevo de uñas acrílicas te otorga 100 puntos automáticamente.', score: '+100 pts' },
  { title: 'Escribir Reseña en Google', desc: 'Evalúa tu experiencia premium en Google My Business 5 estrellas y adjunta foto.', score: '+140 pts' },
  { title: 'Publicar story en Instagram', desc: 'Etiqueta @dharynails mostrando tus nuevas uñas de lujo.', score: '+80 pts' },
  { title: 'Referir Amigas al Estudio', desc: 'Cuando tu amiga agende su primera cita, ambas ganan puntos extras.', score: '+200 pts' }
];

export const FidelidadView: React.FC<{ setActiveTab: (tab: any) => void }> = ({ setActiveTab }) => {
  const [searchInput, setSearchInput] = useState('');
  const [currentClient, setCurrentClient] = useState<ClientVIP>(PRESET_VIP_CLIENTS[0]);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanNum = searchInput.trim();
    if (!cleanNum) return;

    // Search for phone or name
    const found = PRESET_VIP_CLIENTS.find(
      c => c.phone.includes(cleanNum) || c.name.toLowerCase().includes(cleanNum.toLowerCase())
    );

    if (found) {
      setCurrentClient(found);
    } else {
      // Simulate creating a mock visitor client for safety & fun
      const newMock: ClientVIP = {
        name: cleanNum.match(/^\+?[0-9]/) ? 'Invitado VIP' : cleanNum,
        phone: cleanNum.match(/^\+?[0-9]/) ? cleanNum : '+56900000000',
        points: 50,
        maxPoints: 500,
        tier: 'Miembro VIP Bronce',
        savingPercent: 5,
        history: ['Portal Iniciado Hoy: +50 pts']
      };
      setCurrentClient(newMock);
    }
  };

  const handleShareReferral = () => {
    const textMsg = `¡Hola! Te recomiendo Dharynails, el mejor estudio de uñas en Talca. Agenda con un 15% OFF en tu primera visita usando mi link, ¡y yo también gano puntos! 🖤 Unámonos al Club Privé: `;
    const linkUrl = window.location.origin;
    if (navigator.share) {
      navigator.share({
        title: 'Club Dharynails Privé',
        text: textMsg,
        url: linkUrl
      });
    } else {
      navigator.clipboard.writeText(`${textMsg}${linkUrl}`);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const progressPercent = Math.min(100, Math.round((currentClient.points / currentClient.maxPoints) * 100));

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5 }}
      className="pb-28 px-4 md:px-12 pt-24 max-w-6xl mx-auto space-y-12"
    >
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-wider">
          <Crown className="w-3.5 h-3.5 text-white" /> Club Privé de Fidelización
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-white font-extrabold tracking-tight">Elegancia & Recompensas</h2>
        <p className="font-sans text-sm md:text-base text-stone-400 max-w-2xl mx-auto leading-relaxed">
          Diseñamos un sistema exclusivo para nuestras clientas frecuentes en Talca. Gana puntos asistiendo a tus citas de manicure, subiendo de categoría y canjeando beneficios de alta gama.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Interactive Loyalty card & Progress (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Card lookup form */}
          <section className="glass-card rounded-[2rem] p-6 bg-black/80 border-white/10 shadow-xl space-y-4">
            <h3 className="font-serif text-lg text-white font-bold flex items-center gap-2">
              <Search className="w-4.5 h-4.5 text-stone-400" />
              <span>Consulte su Tarjeta Club Privé</span>
            </h3>
            
            <form onSubmit={handleSearch} className="flex gap-2.5">
              <input
                type="text"
                placeholder="Ingrese su nombre o número (+569...)"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="flex-1 h-12 bg-white/5 border border-white/10 rounded-xl px-4 font-sans text-sm focus:border-white focus:bg-white/10 transition-all text-white placeholder-stone-500 outline-none"
              />
              <button
                type="submit"
                className="h-12 px-6 rounded-xl bg-white text-black font-sans font-bold text-xs uppercase tracking-wider hover:bg-stone-200 transition-colors cursor-pointer shrink-0"
              >
                Buscar
              </button>
            </form>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-xs text-stone-500 flex items-center">Perfiles VIP Demo:</span>
              {PRESET_VIP_CLIENTS.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => {
                    setCurrentClient(c);
                    setSearchInput('');
                  }}
                  className={`px-3 py-1 rounded-lg text-[11px] font-sans font-medium border ${
                    currentClient.name === c.name 
                      ? 'bg-white text-black border-white' 
                      : 'bg-white/5 text-stone-300 border-white/5 hover:border-white/20'
                  }`}
                >
                  {c.name.split(' ')[0]} ({c.points} pts)
                </button>
              ))}
            </div>
          </section>

          {/* Interactive Live Progress Widget style Card */}
          <section className="bg-gradient-to-br from-stone-900 to-black rounded-[2.5rem] p-8 border border-white/10 shadow-2xl relative overflow-hidden space-y-8">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Crown className="w-48 h-48 text-white" />
            </div>

            {/* Loyalty brand layout */}
            <div className="flex justify-between items-start">
              <div>
                <span className="bg-white/10 border border-white/20 text-white font-mono text-[9px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-full">
                  {currentClient.tier}
                </span>
                <h4 className="font-serif text-2xl font-bold text-white mt-2 leading-none">{currentClient.name}</h4>
                <p className="font-mono text-xs text-stone-500 mt-1">{currentClient.phone}</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-stone-500 uppercase tracking-widest font-extrabold block">Puntos Acumulados</span>
                <span className="font-serif text-4xl font-extrabold text-white leading-none block">{currentClient.points}</span>
              </div>
            </div>

            {/* Circular or Line style progress gauge representing tiers */}
            <div className="space-y-3.5">
              <div className="flex justify-between items-baseline text-xs">
                <span className="text-stone-400 font-sans">Meta del Próximo Esmaltado de Regalo:</span>
                <span className="text-white font-extrabold font-mono">{currentClient.points} / {currentClient.maxPoints} Pts</span>
              </div>
              
              <div className="w-full h-3 bg-white/5 border border-white/10 rounded-full overflow-hidden relative p-0.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.8 }}
                  className="h-full rounded-full bg-gradient-to-r from-stone-500 via-stone-200 to-white shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                />
              </div>

              <div className="flex justify-between text-[11px] text-stone-500">
                <span>0 pts (Membresía)</span>
                <span>{progressPercent}% Completado</span>
                <span>500 pts (Cortesía Absoluta)</span>
              </div>
            </div>

            {/* Dynamic benefits unlocked based on benchmarks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/5 pt-6">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Star className="w-4 h-4 text-white" />
                  <span className="font-sans text-xs font-bold text-white">Descuento de Nivel</span>
                </div>
                <p className="font-serif text-[18px] font-bold text-white">{currentClient.savingPercent}% OFF</p>
                <p className="text-[10px] text-stone-400 mt-0.5">Aplicado en tu próximo set acrílico</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <TrendingUp className="w-4 h-4 text-white" />
                  <span className="font-sans text-xs font-bold text-white">Pruebas Superadas</span>
                </div>
                <p className="font-serif text-[18px] font-bold text-white">
                  {currentClient.points >= 400 ? '4 de 4 Escalas' : currentClient.points >= 200 ? '2 de 4 Escalas' : '1 de 4 Escalas'}
                </p>
                <p className="text-[10px] text-stone-400 mt-0.5">Cada nivel desbloquea mejores mimos</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <Gift className="w-4 h-4 text-white" />
                    <span className="font-sans text-xs font-bold text-white">Canje Libre</span>
                  </div>
                  <p className="text-[10px] text-stone-400">
                    {currentClient.points >= 500 ? '¡Listo para solicitar!' : `Faltan ${500 - currentClient.points} pts para premio`}
                  </p>
                </div>
                {currentClient.points >= 500 ? (
                  <button
                    onClick={() => {
                      const text = `Hola! Tengo ${currentClient.points} puntos acumulados en mi tarjeta Club Privé de Dharynails y me gustaría canjear mi beneficio de cortesía.`;
                      window.open(`https://wa.me/56912345678?text=${encodeURIComponent(text)}`, '_blank');
                    }}
                    className="mt-2 py-1.5 rounded-lg bg-white text-black text-[10px] font-bold uppercase transition-transform hover:scale-103 cursor-pointer text-center"
                  >
                    Canjear en WhatsApp
                  </button>
                ) : (
                  <span className="text-[10px] text-stone-500 italic mt-1.5 font-sans">Bloqueado temporalmente</span>
                )}
              </div>
            </div>

            {/* Point Logs (pruebas pasadas) */}
            <div className="space-y-3">
              <h5 className="font-serif text-sm font-bold text-white">Historial de Puntos & Pruebas</h5>
              <div className="space-y-1.5">
                {currentClient.history.map((log, index) => (
                  <div key={index} className="flex items-center justify-between text-xs py-2 px-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="text-stone-300 font-sans">{log}</span>
                    <span className="text-white font-bold ml-2">✓</span>
                  </div>
                ))}
              </div>
            </div>

          </section>

          {/* How to accumulate points */}
          <section className="glass-card rounded-[2rem] p-6 bg-black/80 border-white/10 shadow-xl">
            <h3 className="font-serif text-xl text-white font-bold mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-white" />
              <span>Cómo superar Pruebas para ganar Puntos</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {EARNING_METHODS.map((method, index) => (
                <div key={index} className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-start gap-3 hover:border-white/15 transition-all">
                  <div className="h-6 w-6 rounded-full bg-white text-black font-sans font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline gap-2">
                      <h4 className="font-serif font-bold text-sm text-white">{method.title}</h4>
                      <span className="font-mono text-xs font-bold text-white">{method.score}</span>
                    </div>
                    <p className="font-sans text-xs text-stone-400 mt-1 leading-relaxed">{method.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Column: Past winners stories & Invite friend section (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Circular/Timeline examples of client rewards (how many clients won) */}
          <section className="glass-card rounded-[2.5rem] p-6 bg-black/80 border-white/10 shadow-xl space-y-4">
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase font-extrabold text-stone-400 tracking-wider">Historial VIP</span>
              <h3 className="font-serif text-xl text-white font-bold flex items-center gap-2">
                <Users className="w-5 h-5 text-white" />
                <span>+480 Clientas Premiadas</span>
              </h3>
              <p className="font-sans text-xs text-stone-400">
                Últimos canjes de premios, diseños esculpidos y productos libres en nuestro salón:
              </p>
            </div>

            <div className="space-y-3.5 pt-2">
              {PAST_WINNERS.map((winner, idx) => (
                <div key={idx} className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5 group hover:border-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-white/15 relative shrink-0">
                    <img src={winner.avatar} alt={winner.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-sans font-bold text-xs text-white truncate">{winner.name}</h4>
                      <span className="text-[9px] text-stone-500 font-sans tracking-wide shrink-0">{winner.date}</span>
                    </div>
                    <p className="font-serif text-xs text-stone-300 mt-0.5 truncate flex items-center gap-1">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-white shrink-0" /> {winner.gift}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center">
              <p className="font-sans text-[11px] text-stone-500 leading-relaxed">
                ¡Tú puedes ser la próxima premiada! Acumula tus puntos de manera automática asociando tu teléfono móvil al agendar cada cita.
              </p>
            </div>
          </section>

          {/* Referral Club Card (Trae a tu amiga 15% OFF) */}
          <section className="glass-card rounded-[2.5rem] p-6 border-white/20 bg-gradient-to-tr from-stone-950 via-[#121212] to-black shadow-2xl relative overflow-hidden space-y-4">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Share2 className="w-32 h-32 text-stone-200" />
            </div>

            <div className="space-y-1.5 relative">
              <span className="text-[10px] uppercase font-extrabold text-[#a3a3a3] tracking-widest block">Beneficio de Referidos</span>
              <h4 className="font-serif text-xl font-extrabold text-white">Club Amigas: 15% Descuento Especial</h4>
              <p className="font-sans text-xs text-stone-400 leading-relaxed">
                Recomienda a una persona. Cuando ella asista a su primer diseño, **ambas recibirán un 15% de descuento** en cualquier servicio del catálogo.
              </p>
            </div>

            <div className="pt-2.5">
              <button
                type="button"
                onClick={handleShareReferral}
                className="btn-primary w-full h-12 rounded-xl flex items-center justify-center gap-2 font-bold font-sans text-xs uppercase tracking-wider cursor-pointer"
              >
                <span>{copiedLink ? '¡Enlace Copiado!' : 'Compartir con mi Amiga'}</span>
                <Share2 className="w-4 h-4" />
              </button>
              
              <p className="text-center font-sans text-[10px] text-stone-500 mt-2">
                Comparte vía WhatsApp o copia el enlace. El descuento se aplica automáticamente.
              </p>
            </div>
          </section>

        </div>

      </div>
    </motion.div>
  );
};
