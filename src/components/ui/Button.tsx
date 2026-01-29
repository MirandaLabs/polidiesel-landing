import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  icon?: React.ReactNode;
}
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading,
  icon,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
  'relative inline-flex items-center justify-center font-tech font-bold tracking-wider transition-all duration-300 overflow-hidden group';
  const variants = {
    primary:
    'bg-polidiesel-neon text-polidiesel-black hover:bg-polidiesel-neon-hover shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] border border-transparent',
    secondary:
    'bg-polidiesel-gunmetal text-white border border-white/10 hover:border-polidiesel-neon/50 hover:text-polidiesel-neon',
    outline:
    'bg-transparent text-polidiesel-silver border border-polidiesel-silver/30 hover:border-polidiesel-neon hover:text-polidiesel-neon',
    whatsapp:
    'bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg hover:shadow-xl'
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  return (
    <motion.button
      whileHover={{
        scale: 1.02
      }}
      whileTap={{
        scale: 0.98
      }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading}
      {...props}>

      {/* Metallic shine effect overlay for primary buttons */}
      {variant === 'primary' &&
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
      }

      <span className="relative z-20 flex items-center gap-2">
        {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
        {!isLoading && icon}
        {children}
      </span>
    </motion.button>);

}