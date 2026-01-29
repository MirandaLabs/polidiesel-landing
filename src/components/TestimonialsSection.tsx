import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
const testimonials = [
{
  name: 'Fabio Zenaide Maia',
  text: 'Serviço nota 10. Equipamentos de alta precisão e instalações espaçosas.',
  role: 'Cliente Verificado'
},
{
  name: 'Martinho Jambeiro',
  text: 'Empresa de excelência com larga experiência e profissionais capacitados.',
  role: 'Gestor de Frota'
},
{
  name: 'Marcos Rodrigues',
  text: 'Uma das melhores oficinas de retíficas que sem dúvidas existe na Bahia.',
  role: 'Cliente Verificado'
}];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-polidiesel-gunmetal overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">
              APROVADO POR QUEM
            </h2>
            <h2 className="text-4xl font-bold text-polidiesel-neon">
              ENTENDE DE MOTOR
            </h2>
          </div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) =>
            <Star
              key={i}
              className="w-6 h-6 text-polidiesel-warning fill-current" />

            )}
            <span className="ml-2 text-white font-mono">5.0/5.0</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) =>
          <motion.div
            key={idx}
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
              delay: idx * 0.1,
              duration: 0.5
            }}
            className="bg-polidiesel-black/40 p-8 border border-white/5 relative group hover:border-polidiesel-neon/30 transition-colors">

              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-polidiesel-neon/10 transition-colors" />
              <p className="text-polidiesel-silver mb-6 relative z-10 text-lg italic">
                "{t.text}"
              </p>
              <div>
                <h4 className="text-white font-bold font-tech text-lg uppercase">
                  {t.name}
                </h4>
                <span className="text-sm text-polidiesel-neon/80">
                  {t.role}
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}