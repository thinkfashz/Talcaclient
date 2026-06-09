import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, Clock, ArrowRight, User, Phone, Mail, FileText, Sparkles } from 'lucide-react';

interface AgendaViewProps {
  setActiveTab: (tab: any) => void;
}

export const AgendaView: React.FC<AgendaViewProps> = ({ setActiveTab }) => {
  const [selectedDate, setSelectedDate] = useState<number | null>(15);
  const [selectedTime, setSelectedTime] = useState<string | null>('12:30');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [clientNotes, setClientNotes] = useState<string>('');

  const dates = [
    { day: 'Lun', date: 15 },
    { day: 'Mar', date: 16 },
    { day: 'Mié', date: 17 },
    { day: 'Jue', date: 18 },
    { day: 'Vie', date: 19 },
    { day: 'Sáb', date: 20 },
  ];

  const times = [
    '10:00', '11:00', '12:30', '14:00', '15:30', '17:00', '18:00'
  ];

  const services = [
    { id: 1, name: 'Manicure Permanente', price: '$22.000', duration: '1h 30m' },
    { id: 2, name: 'Acrílicas (Set Nuevo)', price: '$35.000', duration: '2h 15m' },
    { id: 3, name: 'Combo Glow (Mani+Pedi)', price: '$40.000', duration: '2h 30m' },
    { id: 4, name: 'Baño de Acrílico', price: '$28.000', duration: '1h 45m' },
    { id: 5, name: 'Diseño Personalizado', price: '$15.000+', duration: '1h 00m' },
    { id: 6, name: 'Retiro de Material', price: '$10.000', duration: '45m' },
  ];

  const [selectedService, setSelectedService] = useState<number>(1);

  const generateWhatsAppLink = () => {
    const serviceName = services.find(s => s.id === selectedService)?.name || '';
    const dateText = selectedDate ? `Junio ${selectedDate}` : 'Por definir';
    const timeText = selectedTime || 'Por definir';
    const namePart = clientName ? `*Cliente:* ${clientName}%0A` : '';
    const phonePart = clientPhone ? `*Teléfono:* ${clientPhone}%0A` : '';
    const notesPart = clientNotes ? `*Notas:* ${clientNotes}%0A` : '';
    
    const text = `Hola! Quiero reservar una cita en Dharynails.%0A%0A${namePart}${phonePart}*Servicio:* ${serviceName}%0A*Fecha:* ${dateText}%0A*Hora:* ${timeText}%0A${notesPart}%0A¿Tienen disponibilidad?`;
    return `https://wa.me/56912345678?text=${text}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5 }}
      className="pb-28 px-4 md:px-12 pt-24 max-w-5xl mx-auto space-y-8"
    >
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-wider font-mono">
          <Sparkles className="w-3.5 h-3.5" /> Agenda en Línea 24/7
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-white font-extrabold tracking-tight">Agenda tu Cita Premium</h2>
        <p className="font-sans text-[14px] md:text-base text-stone-400 max-w-lg mx-auto leading-relaxed">
          Diseña tu propio momento de relajación y cuidado. Elige el servicio que deseas, el día y la hora más conveniente.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Form & Selection (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <section className="glass-card rounded-[2rem] p-6 border-white/5 bg-stone-950 shadow-xl">
            <h3 className="font-serif text-xl text-white font-bold mb-4 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
              <span>1. Elige un Servicio</span>
            </h3>
            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1 hide-scrollbar">
              {services.map((srv) => {
                const isSelected = selectedService === srv.id;
                return (
                  <div 
                    key={srv.id}
                    onClick={() => setSelectedService(srv.id)}
                    className={`p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer flex justify-between items-center ${
                      isSelected 
                        ? 'border-white bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]' 
                        : 'border-white/5 bg-white/[0.02] hover:bg-white/5'
                    }`}
                  >
                    <div className="space-y-1">
                      <h4 className={`font-sans font-bold text-sm md:text-base ${isSelected ? 'text-white' : 'text-stone-300'}`}>
                        {srv.name}
                      </h4>
                      <p className="font-sans text-xs text-stone-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-stone-500" /> {srv.duration} de atención
                      </p>
                    </div>
                    <div className="text-right">
                      <span className={`font-serif text-lg font-bold block ${isSelected ? 'text-white' : 'text-stone-400'}`}>
                        {srv.price}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="glass-card rounded-[2rem] p-6 border-white/5 bg-stone-950 shadow-xl">
            <h3 className="font-serif text-xl text-white font-bold mb-4 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-stone-500" />
              <span>2. Datos de Contacto</span>
            </h3>
            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-stone-500" />
                <input 
                  type="text" 
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Tu nombre completo" 
                  className="w-full h-12 bg-black/40 border border-white/5 rounded-xl pl-12 pr-4 font-sans text-sm focus:border-white/40 focus:bg-stone-900 transition-all text-white placeholder-stone-500 outline-none"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-stone-500" />
                  <input 
                    type="tel" 
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="Teléfono móvil +569..." 
                    className="w-full h-12 bg-black/40 border border-white/5 rounded-xl pl-12 pr-4 font-sans text-sm focus:border-white/40 focus:bg-stone-900 transition-all text-white placeholder-stone-500 outline-none"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-stone-500" />
                  <input 
                    type="email" 
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="Correo electrónico (opcional)" 
                    className="w-full h-12 bg-black/40 border border-white/5 rounded-xl pl-12 pr-4 font-sans text-sm focus:border-white/40 focus:bg-stone-900 transition-all text-white placeholder-stone-500 outline-none"
                  />
                </div>
              </div>
              <div className="relative">
                <FileText className="absolute left-4 top-3.5 w-4.5 h-4.5 text-stone-500" />
                <textarea 
                  value={clientNotes}
                  onChange={(e) => setClientNotes(e.target.value)}
                  placeholder="Instrucciones especiales para tu diseño o retiro de material..." 
                  className="w-full h-24 bg-black/40 border border-white/5 rounded-xl pl-12 pr-4 pt-3 font-sans text-sm focus:border-white/40 focus:bg-stone-900 transition-all text-white placeholder-stone-500 outline-none resize-none"
                ></textarea>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Date, Time & Confirm (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <section className="glass-card rounded-[2rem] p-6 border-white/5 bg-stone-950 shadow-xl">
            <h3 className="font-serif text-xl text-white font-bold mb-4 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-stone-500" />
              <span>3. Bloque de Fecha</span>
            </h3>
            
            <p className="text-xs text-stone-400 mb-3 uppercase tracking-wider font-extrabold font-mono">Selecciona el Día (Junio 2026)</p>
            
            {/* Horizontal Date Picker */}
            <div className="flex gap-2.5 overflow-x-auto hide-scrollbar pb-1">
              {dates.map((d) => {
                const isSelected = selectedDate === d.date;
                return (
                  <button
                    key={d.date}
                    type="button"
                    onClick={() => setSelectedDate(d.date)}
                    className={`flex-shrink-0 w-14 h-20 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all active:scale-95 cursor-pointer border ${
                      isSelected 
                        ? 'bg-white text-black border-transparent shadow-[0_0_15px_rgba(255,255,255,0.15)]' 
                        : 'glass-card border-white/5 text-stone-400 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    <span className="font-sans text-[10px] uppercase tracking-wider font-extrabold opacity-80">{d.day}</span>
                    <span className="font-sans text-lg font-bold">{d.date}</span>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="glass-card rounded-[2rem] p-6 border-white/5 bg-stone-950 shadow-xl">
            <h3 className="font-serif text-xl text-white font-bold mb-4 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-stone-400" />
              <span>4. Elige la Hora</span>
            </h3>
            
            <div className="grid grid-cols-3 gap-2.5">
              {times.map((t) => {
                const isSelected = selectedTime === t;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedTime(t)}
                    className={`py-3 rounded-xl font-sans text-xs font-bold transition-all active:scale-95 cursor-pointer border ${
                      isSelected
                        ? 'bg-white text-black border-transparent shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                        : 'glass-card border-white/5 text-stone-300 hover:border-white/30'
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Action Trigger Card */}
          <div className="glass-card rounded-[2.5rem] p-6 border-white/10 bg-gradient-to-tr from-stone-900 via-zinc-950 to-black shadow-2xl relative overflow-hidden space-y-4">
            <div className="space-y-1">
              <h4 className="text-xs uppercase font-extrabold text-stone-400 tracking-widest font-mono">Resumen de Reserva</h4>
              <p className="font-serif text-lg font-bold text-white line-clamp-1">
                {services.find(s => s.id === selectedService)?.name}
              </p>
              <div className="flex justify-between items-center text-xs text-stone-400">
                <span>Fecha: {selectedDate ? `Junio ${selectedDate}` : 'No definido'} a las {selectedTime || 'No definidos'}</span>
                <span className="font-bold text-white">{services.find(s => s.id === selectedService)?.price}</span>
              </div>
            </div>

            <div className="pt-1.5">
              <a 
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-black bg-white hover:bg-stone-200 font-extrabold text-xs uppercase tracking-wider h-13 w-full rounded-2xl flex items-center justify-center gap-2.5 cursor-pointer transform hover:scale-[1.01] transition-all shadow-[0_4px_20px_rgba(255,255,255,0.1)]"
              >
                Confirmar en WhatsApp <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-center font-sans text-[10px] text-stone-500 mt-2.5 leading-relaxed">
                Revisaremos tu mensaje automáticamente al redirigirte para confirmar tu cupo final.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
