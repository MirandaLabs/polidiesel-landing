import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Microscope, Scan } from 'lucide-react';
export function FacilitySection() {
  const features = [
  {
    icon: <Microscope className="w-6 h-6" />,
    text: 'Laboratório de Precisão'
  },
  {
    icon: <Scan className="w-6 h-6" />,
    text: 'Diagnóstico Digital'
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    text: 'Ambiente Controlado'
  }];

  return (
    <section className="py-24 bg-polidiesel-black relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ESTRUTURA QUE <br />
              <span className="text-polidiesel-neon">INSPIRA CONFIANÇA</span>
            </h2>

            <div className="h-1 w-20 bg-polidiesel-neon mb-8" />

            <p className="text-polidiesel-silver text-lg leading-relaxed mb-8">
              Um ambiente amplo, organizado e tecnológico que encanta quem
              visita. Ao contrário das oficinas tradicionais, nossa estrutura
              assemelha-se a um laboratório de engenharia. Aqui, a seriedade
              técnica é nossa prioridade absoluta.
            </p>

            <div className="space-y-4">
              {features.map((feature, idx) =>
              <div
                key={idx}
                className="flex items-center gap-4 text-white group">

                  <div className="p-2 rounded-full bg-polidiesel-gunmetal border border-polidiesel-neon/20 group-hover:border-polidiesel-neon/60 transition-colors text-polidiesel-neon">
                    {feature.icon}
                  </div>
                  <span className="font-tech text-xl uppercase tracking-wide">
                    {feature.text}
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="relative">

            <div className="absolute -inset-4 bg-polidiesel-neon/10 blur-2xl rounded-full" />
            <div className="relative aspect-square md:aspect-video rounded-sm overflow-hidden border border-white/10 bg-polidiesel-gunmetal">
              {/* Placeholder for high-tech facility image */}
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                alt="Laboratório de alta tecnologia"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />


              {/* Overlay UI Elements to make it look like a HUD */}
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-mono text-white/70">
                  REC LIVE
                </span>
              </div>
              <div className="absolute bottom-4 right-4 text-right">
                <div className="text-[10px] font-mono text-polidiesel-neon">
                  SYS.DIAGNOSTIC.V2
                </div>
                <div className="text-2xl font-mono text-white">98.4%</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}