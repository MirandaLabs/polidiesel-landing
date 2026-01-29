import React from 'react';
import { Button } from './ui/Button';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-polidiesel-black pt-20 pb-10 border-t border-white/10 relative">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main CTA Section */}
        <div className="bg-polidiesel-gunmetal rounded-2xl p-8 md:p-12 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 mb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              AGILIDADE NO ATENDIMENTO
            </h2>
            <p className="text-polidiesel-silver">
              Não perca tempo. Fale diretamente com nossa equipe técnica.
            </p>
          </div>
          <div className="relative z-10 w-full md:w-auto">
            <Button
              variant="whatsapp"
              size="lg"
              className="w-full md:w-auto"
              icon={<MessageCircle className="w-5 h-5" />}
              onClick={() =>
              window.open('https://wa.me/5571999999999', '_blank')
              }>

              Falar no WhatsApp Agora
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold text-white font-tech mb-6 tracking-wider">
              POLIDIESEL
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Centro de engenharia e retífica de motores diesel. Referência em
              tecnologia e precisão na Bahia.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 hover:text-polidiesel-neon transition-colors cursor-pointer">
                <Phone className="w-5 h-5 shrink-0" />
                <span>(71) 3333-3333</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 hover:text-polidiesel-neon transition-colors cursor-pointer">
                <Mail className="w-5 h-5 shrink-0" />
                <span>contato@polidiesel.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 shrink-0" />
                <span>BR-324, Km 618 - Salvador, BA</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Horário
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Clock className="w-5 h-5 shrink-0" />
                <div>
                  <span className="block text-white">Segunda a Sexta</span>
                  <span className="text-sm">08:00 - 18:00</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Clock className="w-5 h-5 shrink-0" />
                <div>
                  <span className="block text-white">Sábado</span>
                  <span className="text-sm">08:00 - 12:00</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Map Placeholder */}
          <div className="h-40 bg-polidiesel-gunmetal rounded border border-white/10 flex items-center justify-center relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity" />
            <span className="relative z-10 text-white font-bold flex items-center gap-2">
              <MapPin className="w-4 h-4 text-polidiesel-neon" /> Ver no Mapa
            </span>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>
            © {new Date().getFullYear()} Polidiesel Retífica e Injeção. Todos
            os direitos reservados.
          </p>
          <p>Design Industrial & Performance</p>
        </div>
      </div>
    </footer>);

}