// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          ...colors.indigo,
          500: '#6366f1' // Asegura contraste adecuado
        },
        success: {
          ...colors.green,
          500: '#22c55e' // Verde con buen contraste
        },
        warning: {
          ...colors.amber,
          500: '#f59e0b'
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        hc: { // Alto contraste
          background: '#000000',
          text: '#FFFF00',
          link: '#FFA500',
          focus: '#FFFFFF',
          dark: '#000080'
        }
      },
      fontFamily: {
        sans: [
          'Inter', 
          'system-ui', 
          '-apple-system', 
          'BlinkMacSystemFont', 
          '"Segoe UI"', 
          'Roboto', 
          '"Helvetica Neue"', 
          'Arial', 
          '"Noto Sans"', 
          'sans-serif'
        ],
        mono: [
          'Menlo', 
          'Monaco', 
          'Consolas', 
          '"Liberation Mono"', 
          '"Courier New"', 
          'monospace'
        ]
      },
      fontSize: {
        xs: '0.75rem',    // 12px
        sm: '0.875rem',   // 14px
        base: '1rem',     // 16px
        lg: '1.125rem',   // 18px
        xl: '1.25rem',    // 20px
        '2xl': '1.5rem',  // 24px
        '3xl': '1.875rem',// 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem',    // 48px
        '6xl': '3.75rem'  // 60px
      },
      spacing: {
        'px': '1px',
        '0.5': '0.125rem', // 2px
        '1': '0.25rem',    // 4px
        '1.5': '0.375rem', // 6px
        '2': '0.5rem',     // 8px
        '2.5': '0.625rem', // 10px
        '3': '0.75rem',    // 12px
        '3.5': '0.875rem', // 14px
        '4': '1rem',       // 16px
        '5': '1.25rem',    // 20px
        '6': '1.5rem',     // 24px
        '8': '2rem',       // 32px
        '10': '2.5rem',    // 40px
        '12': '3rem',      // 48px
        '16': '4rem',      // 64px
        '20': '5rem',      // 80px
      },
      outline: {
        primary: ['2px solid #0ea5e9', '2px']
      },
      ringWidth: {
        '3': '3px',
        'DEFAULT': '2px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')({
      className: 'prose',
      modifiers: ['sm', 'lg'],
      rtl: false,
      target: 'modern'
    }),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    function ({ addUtilities, addVariant }) {
      // Utilidades de accesibilidad mejoradas
      addUtilities({
        '.sr-only': {
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          'white-space': 'nowrap',
          'border-width': '0',
        },
        '.not-sr-only': {
          position: 'static',
          width: 'auto',
          height: 'auto',
          padding: '0',
          margin: '0',
          overflow: 'visible',
          clip: 'auto',
          'white-space': 'normal',
        },
        '.high-contrast': {
          'background-color': 'var(--hc-background) !important',
          'color': 'var(--hc-text) !important',
          '--tw-text-opacity': '1 !important',
        },
        '.focus-visible-outline': {
          'outline': '2px solid var(--color-primary-500) !important',
          'outline-offset': '2px !important',
          'border-radius': '0.125rem !important'
        },
        '.forced-colors-active': {
          '@media (forced-colors: active)': {
            'border': '1px solid transparent !important'
          }
        }
      })

      // Variantes para accesibilidad
      addVariant('high-contrast', '@media (prefers-contrast: more)')
      addVariant('motion-safe', '@media (prefers-reduced-motion: no-preference)')
      addVariant('motion-reduce', '@media (prefers-reduced-motion: reduce)')
    }
  ],
  future: {
    hoverOnlyWhenSupported: true,
    respectDefaultRingColorOpacity: true,
    disableColorOpacityUtilitiesByDefault: true,
  },
  corePlugins: {
    float: false,
    clear: false,
    accessibility: true,
    outline: true,
    ringColor: true
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['disabled', 'high-contrast'],
      textColor: ['disabled', 'high-contrast'],
      borderColor: ['disabled', 'focus-visible']
    }
  }
}