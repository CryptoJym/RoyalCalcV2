import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        royal: {
          gold: '#D4AF37',
          black: '#111111',
        },
        brand_white: '#FFFFFF',
        neutral: {
          platinum_gray: '#CCCCCC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Roboto', 'Open Sans', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('@tailwindcss/typography'),
  ],
};

export default config; 