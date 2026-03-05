import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e63946',
          light: '#ef5462',
          dark: '#c42d39',
        },
        accent: {
          DEFAULT: '#ff6b35',
          light: '#ff8a5c',
          dark: '#e55a28',
        },
        dark: {
          DEFAULT: '#0d0d0d',
          light: '#1a1a1a',
          lighter: '#2a2a2a',
        },
        light: {
          DEFAULT: '#f1f1f1',
          dark: '#e5e5e5',
          darker: '#d4d4d4',
        },
        muted: {
          DEFAULT: '#6b7280',
          light: '#9ca3af',
        },
      },
      fontFamily: {
        display: ['var(--font-oswald)', 'Impact', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'hero-zoom': 'heroZoom 20s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        heroZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(230, 57, 70, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(230, 57, 70, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
