/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#e8f1f8',
          100: '#d1e3f1',
          200: '#a3c7e3',
          300: '#75abd5',
          400: '#6a9bc7',
          500: '#5c8db9',
          600: '#51779e',
          700: '#3f5f7d',
          800: '#2d475c',
          900: '#1b2f3b',
          950: '#0f3d66', // Primary dark blue
        },
        gold: {
          50: '#fcf9ec',
          100: '#f9f2cc',
          200: '#f2e399',
          300: '#e9ce5d',
          400: '#e3be31',
          500: '#d4af37', // Primary gold
          600: '#b38c22',
          700: '#95691c',
          800: '#7c521e',
          900: '#6a441e',
          950: '#3d230e',
        },
        neutral: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#9a9a9a',
          600: '#818181',
          700: '#6a6a6a',
          800: '#5a5a5a',
          900: '#4e4e4e',
          950: '#282828',
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'wave-pattern': "url('/src/assets/wave-pattern.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'input': '0 2px 6px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};