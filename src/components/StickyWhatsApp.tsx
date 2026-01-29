import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
export function StickyWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/5571999999999" // Placeholder number
      target="_blank"
      rel="noopener noreferrer"
      initial={{
        scale: 0,
        opacity: 0
      }}
      animate={{
        scale: 1,
        opacity: 1
      }}
      transition={{
        delay: 1,
        type: 'spring'
      }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:bg-[#128C7E] transition-colors group cursor-pointer"
      aria-label="Falar no WhatsApp">

      <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping opacity-20" />
      <MessageCircle className="w-8 h-8 text-white fill-current" />
    </motion.a>);

}