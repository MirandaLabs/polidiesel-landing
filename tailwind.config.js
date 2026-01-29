
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        polidiesel: {
          black: "#050505", // Deepest black
          gunmetal: "#1a1a1a", // Surface color
          silver: "#c0c0c0", // Text/Accents
          neon: "#00d4ff", // Primary Accent (Cyan/Blue)
          "neon-hover": "#40e0ff",
          warning: "#f0e130", // Secondary Accent (Industrial Yellow)
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        tech: ['Rajdhani', 'sans-serif'],
      },
      backgroundImage: {
        'metallic-gradient': 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 50%, #2a2a2a 100%)',
        'mesh-pattern': 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shine': 'shine 3s linear infinite',
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        }
      }
    },
  },
  plugins: [],
}
