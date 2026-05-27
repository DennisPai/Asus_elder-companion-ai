import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1e40af',
          'blue-light': '#2563eb',
          orange: '#ea580c',
          warm: '#fafaf9',
          gray: '#475569',
        },
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
