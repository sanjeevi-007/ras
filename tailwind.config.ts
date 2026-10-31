import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F2',
        blush: '#F2E0D6',
        'dusty-rose': '#C9A9A6',
        burgundy: '#6B2D3E',
        'warm-brown': '#5C4033',
        champagne: '#D4AF37',
        'champagne-light': '#F5E6CC',
        paper: '#FDF8F0',
        'dark-bg': '#1A1210',
        'dark-warm': '#2A1F1A',
        'muted-text': '#8A7B72',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        cursive: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
};

export default config;
