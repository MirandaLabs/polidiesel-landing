import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/Button';
import { ChevronRight, Gauge } from 'lucide-react';
export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div
        style={{
          y
        }}
        className="absolute inset-0 z-0">

        <div className="absolute inset-0 bg-gradient-to-b from-polidiesel-black/70 via-polidiesel-black/50 to-polidiesel-black z-10" />
        {/* Abstract industrial background - using CSS pattern to avoid external image dependency issues */}
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=2560&auto=format&fit=crop')] bg-cover bg-center" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-8 text-center md:text-left">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}
          className="max-w-4xl">

          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-polidiesel-neon/30 rounded-full bg-polidiesel-neon/10 backdrop-blur-md">
            <Gauge className="w-4 h-4 text-polidiesel-neon" />
            <span className="text-sm font-tech tracking-widest text-polidiesel-neon uppercase">
              Referência em Injeção Diesel
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
            ENGENHARIA DE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-polidiesel-neon to-white">
              PRECISÃO
            </span>
          </h1>

          <p className="text-lg md:text-xl text-polidiesel-silver max-w-2xl mb-10 leading-relaxed font-light">
            Especialistas em Common Rail, Retífica e Injeção. Instalações
            espaçosas e equipamentos de medição de alta precisão na Bahia.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" icon={<ChevronRight className="w-5 h-5" />}>
              Agendar Diagnóstico
            </Button>
            <Button variant="outline" size="lg">
              Conhecer a Estrutura
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{
          opacity
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">

        <span className="text-xs font-tech tracking-[0.2em] text-polidiesel-silver/50 uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-polidiesel-neon to-transparent" />
      </motion.div>
    </section>);

}