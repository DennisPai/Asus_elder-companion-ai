import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './docs/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0f766e', dark: '#0d5d57' },
        accent: { DEFAULT: '#f59e0b', dark: '#d97706' },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'Noto Sans TC', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
