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
    },
  },
  plugins: [],
  darkMode: 'class',
} satisfies Config
