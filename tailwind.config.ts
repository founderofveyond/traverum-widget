import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--trv-primary)',
        background: 'var(--trv-bg)',
        foreground: 'var(--trv-fg)'
      }
    }
  },
  plugins: []
};

export default config;
