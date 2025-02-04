import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // custom sizes/spacings
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1200px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        lg: '4rem',
      },
    },
    extend: {
      colors: {
        // add custom colors here
        p1c1: '#224E41',
        p1c2: '#377052',
        p1c3: '#59935e',
        p1c4: '#85b666',
        p1c5: '#bad86b',
        p1c6: '#f9f871',
        p1c7: '#395f53',
        p1c8: '#dcc624',

        p2c1: '#224E41',
        p2c2: '#99b0a8',
        p2c3: '#667c74',
        p2c4: '#294862',
        p2c5: '#5b7995',

        bg1: '#f0fcf7',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
        title: 'var(--font-title)',
        dirt: 'var(--font-dirt)',
        bubbles: 'var(--font-bubbles)',
      },
      animation: {
        randomButton: 'animateRandomButton 2s reverse infinite',
        'left-movement': 'left-movement 1s linear infinite',
      },
      keyframes: {
        animateRandomButton: {
          '0%': { 'background-position': '200% 0, 0 0' },
          '100%': { 'background-position': '-100% 0, 0 0' },
        },
        'left-movement': {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
} satisfies Config
