import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--trv-primary)',
        background: 'var(--trv-bg)',
        foreground: 'var(--trv-fg)',
        'zacchera-primary': '#3ed2a7',
        'zacchera-secondary': '#ffb09f',
        'zacchera-form-bg': '#F6F1EA',
        'zacchera-hover-primary': '#380100',
        'zacchera-hover-secondary': '#FB4627'
      },
      borderRadius: {
        'zacchera-container': '50px',
        'zacchera-small': '2px'
      },
      fontFamily: {
        'zacchera-heading': ['Abril Fatface', 'serif'],
        'zacchera-body': ['Montserrat', 'sans-serif']
      },
      letterSpacing: {
        'zacchera': '0.1em'
      }
    }
  },
  plugins: []
};

export default config;
