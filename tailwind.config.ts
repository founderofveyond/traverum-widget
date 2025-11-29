import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--trv-primary)',
        background: 'var(--trv-bg)',
        foreground: 'var(--trv-fg)',
        // Background colors - using CSS variables for dynamic theming
        'zacchera-bg': 'var(--trv-bg)',
        'zacchera-bg-light': 'var(--trv-bg-light)',
        'zacchera-bg-beige': '#f6f1ea',
        'zacchera-bg-tan': '#d3b298',
        'zacchera-bg-blue': '#206093',
        'zacchera-bg-dark': '#23282d',
        'zacchera-bg-burgundy': '#380100',
        // Text colors - using CSS variables for dynamic theming
        'zacchera-text-white': '#ffffff',
        'zacchera-text-beige': '#f6f1ea',
        'zacchera-text-light-gray': '#d8d5d5',
        'zacchera-text-tan': 'var(--trv-text-tan)',
        'zacchera-text-blue': '#206093',
        'zacchera-text-gray': 'var(--trv-text-gray)',
        'zacchera-text-dark-gray': 'var(--trv-text-dark-gray)',
        'zacchera-text-darker-gray': 'var(--trv-text-darker-gray)',
        'zacchera-text-indigo': '#181b31',
        'zacchera-text-burgundy': '#380100',
        'zacchera-text-black': '#000000',
        // Border colors - using CSS variables for dynamic theming
        'zacchera-border-white': '#ffffff',
        'zacchera-border-beige': '#f6f1ea',
        'zacchera-border-light': 'var(--trv-border-light)',
        'zacchera-border-gray': '#cccccc',
        // Primary/secondary for buttons - using CSS variables for dynamic theming
        'zacchera-primary': 'var(--trv-primary)',
        'zacchera-primary-hover': 'var(--trv-primary-hover)',
        'zacchera-secondary': 'var(--trv-secondary)',
        'zacchera-secondary-hover': 'var(--trv-secondary-hover)',
        // Form background - using CSS variables for dynamic theming
        'zacchera-form-bg': 'var(--trv-form-bg)',
        // Legacy support
        'zacchera-hover-primary': 'var(--trv-primary-hover)',
        'zacchera-hover-secondary': 'var(--trv-secondary-hover)'
      },
      borderRadius: {
        'zacchera-container': 'var(--trv-container-radius)',
        'zacchera-small': 'var(--trv-small-radius)'
      },
      fontFamily: {
        'zacchera-body': ['var(--trv-font-body)', 'sans-serif'],
        'zacchera-heading': ['var(--trv-font-heading)', 'serif']
      },
      fontSize: {
        'zacchera-base': ['var(--trv-base-font-size)', { lineHeight: 'var(--trv-base-line-height)' }]
      },
      fontWeight: {
        'zacchera-light': '300',
        'zacchera-bold': '700'
      },
      letterSpacing: {
        'zacchera': '0.1em'
      },
      height: {
        '50': 'var(--trv-card-image-height)'
      }
    }
  },
  plugins: []
};

export default config;
