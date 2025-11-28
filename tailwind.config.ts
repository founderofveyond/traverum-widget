import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--trv-primary)',
        background: 'var(--trv-bg)',
        foreground: 'var(--trv-fg)',
        // Background colors
        'zacchera-bg': '#ffffff',
        'zacchera-bg-light': '#fbfbfc',
        'zacchera-bg-beige': '#f6f1ea',
        'zacchera-bg-tan': '#d3b298',
        'zacchera-bg-blue': '#206093',
        'zacchera-bg-dark': '#23282d',
        'zacchera-bg-burgundy': '#380100',
        // Text colors
        'zacchera-text-white': '#ffffff',
        'zacchera-text-beige': '#f6f1ea',
        'zacchera-text-light-gray': '#d8d5d5',
        'zacchera-text-tan': '#d3b298',
        'zacchera-text-blue': '#206093',
        'zacchera-text-gray': '#444444',
        'zacchera-text-dark-gray': '#2d2d2d',
        'zacchera-text-darker-gray': '#222222',
        'zacchera-text-indigo': '#181b31',
        'zacchera-text-burgundy': '#380100',
        'zacchera-text-black': '#000000',
        // Border colors
        'zacchera-border-white': '#ffffff',
        'zacchera-border-beige': '#f6f1ea',
        'zacchera-border-light': '#eeeeee',
        'zacchera-border-gray': '#cccccc',
        // Primary/secondary for buttons
        'zacchera-primary': '#206093',
        'zacchera-primary-hover': '#380100',
        'zacchera-secondary': '#d3b298',
        'zacchera-secondary-hover': '#380100',
        // Form background
        'zacchera-form-bg': '#f6f1ea',
        // Legacy support
        'zacchera-hover-primary': '#380100',
        'zacchera-hover-secondary': '#380100'
      },
      borderRadius: {
        'zacchera-container': '12px',
        'zacchera-small': '2px'
      },
      fontFamily: {
        'zacchera-body': ['Overpass', 'sans-serif'],
        'zacchera-heading': ['New York', 'serif']
      },
      fontSize: {
        'zacchera-base': ['17.6px', { lineHeight: '26.4px' }]
      },
      fontWeight: {
        'zacchera-light': '300',
        'zacchera-bold': '700'
      },
      letterSpacing: {
        'zacchera': '0.1em'
      }
    }
  },
  plugins: []
};

export default config;
