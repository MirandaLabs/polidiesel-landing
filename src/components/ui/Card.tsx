import React from 'react';
import { motion } from 'framer-motion';
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}
export function Card({
  children,
  className = '',
  hoverEffect = true
}: CardProps) {
  return (
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
        once: true,
        margin: '-50px'
      }}
      whileHover={
      hoverEffect ?
      {
        y: -5,
        borderColor: 'rgba(0, 212, 255, 0.3)'
      } :
      {}
      }
      className={`
        bg-polidiesel-gunmetal/50 backdrop-blur-sm 
        border border-white/5 
        p-6 md:p-8 
        transition-colors duration-300
        ${className}
      `}>

      {children}
    </motion.div>);

}