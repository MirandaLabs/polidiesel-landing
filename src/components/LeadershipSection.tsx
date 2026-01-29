import React from 'react';
import { motion } from 'framer-motion';
export function LeadershipSection() {
  return (
    <section className="py-24 bg-polidiesel-black border-y border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ADMINISTRAÇÃO COMPROMETIDA <br />
              <span className="text-polidiesel-silver font-light">
                COM A QUALIDADE
              </span>
            </h2>

            <div className="w-24 h-1 bg-polidiesel-neon mx-auto mb-8" />

            <p className="text-xl text-polidiesel-silver/80 leading-relaxed font-light">
              "Sob gestão focada na satisfação do cliente e com mecânicos de
              competência comprovada. Entendemos que seu veículo é uma
              ferramenta de trabalho ou um bem valioso, por isso tratamos cada
              motor com rigor técnico absoluto."
            </p>
          </motion.div>
        </div>
      </div>
    </section>);

}