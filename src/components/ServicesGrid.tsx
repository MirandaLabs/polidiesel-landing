import React from 'react';
import { Card } from './ui/Card';
import { Cpu, Truck, ShieldCheck, ArrowUpRight } from 'lucide-react';
export function ServicesGrid() {
  return (
    <section className="py-24 bg-polidiesel-gunmetal relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            NOSSOS SERVIÇOS
          </h2>
          <p className="text-polidiesel-silver max-w-2xl mx-auto">
            Tecnologia de ponta para motores leves e pesados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          {/* Card 1: Main Service (Spans 2 columns on desktop) */}
          <Card className="md:col-span-2 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-8 h-8 text-polidiesel-neon" />
            </div>
            <div className="h-full flex flex-col justify-between relative z-10">
              <div className="p-3 w-fit rounded bg-polidiesel-black/50 border border-polidiesel-neon/30 text-polidiesel-neon mb-6">
                <Cpu className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Injeção Diesel & Common Rail
                </h3>
                <p className="text-polidiesel-silver text-lg">
                  Diagnóstico computadorizado de última geração. Bancadas de
                  teste eletrônicas para máxima precisão na calibração de bicos
                  e bombas.
                </p>
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-polidiesel-neon/5 rounded-full blur-3xl group-hover:bg-polidiesel-neon/10 transition-colors" />
          </Card>

          {/* Card 2: Heavy Duty */}
          <Card className="relative group">
            <div className="h-full flex flex-col justify-between">
              <div className="p-3 w-fit rounded bg-polidiesel-black/50 border border-white/10 text-white mb-6">
                <Truck className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Retífica de Motores
                </h3>
                <p className="text-polidiesel-silver">
                  Especialistas em linha leve (SUVs, Pickups) e Pesada
                  (Caminhões, Máquinas Agrícolas).
                </p>
              </div>
            </div>
          </Card>

          {/* Card 3: Integrity */}
          <Card className="relative group md:col-span-3 lg:col-span-1">
            <div className="h-full flex flex-col justify-between">
              <div className="p-3 w-fit rounded bg-polidiesel-black/50 border border-white/10 text-white mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Garantia & Transparência
                </h3>
                <p className="text-polidiesel-silver">
                  Serviço garantido e preço justo. Relatórios técnicos
                  detalhados antes de qualquer execução.
                </p>
              </div>
            </div>
          </Card>

          {/* Card 4: Extra Tech Filler (Visual) */}
          <Card className="md:col-span-2 flex items-center justify-center bg-polidiesel-black/30 border-dashed border-white/10">
            <div className="text-center">
              <span className="font-tech text-4xl md:text-6xl font-bold text-white/10 block">
                POLIDIESEL
              </span>
              <span className="font-mono text-sm text-polidiesel-neon tracking-[0.5em]">
                ENGINEERING CENTER
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>);

}