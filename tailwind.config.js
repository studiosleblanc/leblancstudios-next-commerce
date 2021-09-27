module.exports = {
  future: {
    // purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  mode: 'jit',
  darkMode: 'class',
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: ['dark'],
      // safelist: {
      //   standard: ['outline-none'],
      // },
    },
  },
  theme: {
    extend: {
      // fontFamily: {
      //   massimo: '"Massimo Display"',
      // },
      maxWidth: {
        '8xl': '1920px',
      },

      colors: {
        primary: '#ffffff',
        'primary-2': '#f1f3f5',
        secondary: '#000000',
        'secondary-2': '#111',
        'text-base': '#000000',
        'text-primary': '#000000',
        'text-secondary': '#fff',
        hover: 'rgba(0, 0, 0, 0.075)',
        'hover-1': 'rgba(0, 0, 0, 0.15)',
        'hover-2': 'rgba(0, 0, 0, 0.25)',
        'accent-0': '#000',
        'accent-1': '#111111',
        'accent-2': '#333333',
        'accent-3': '#444444',
        'accent-4': '#666666',
        'accent-5': '#888888',
        'accent-6': '#999999',
        'accent-7': '#eaeaea',
        'accent-8': '#fafafa',
        'accent-9': '#fff',
        violet: 'var(--violet)',
        'violet-light': 'var(--violet-light)',
        'violet-dark': 'var(--violet-dark)',
        pink: 'var(--pink)',
        'pink-light': 'var(--pink-light)',
        cyan: 'var(--cyan)',
        blue: 'var(--blue)',
        green: 'var(--green)',
        red: 'var(--red)',

        // LBS Colors
        aqua: '#A0DFC5',
        lbsGray: '#C4C4C4',
        lbsGreen: '#14FF00',
        // LBS Dark Colors
        lbsDarkGray: '#292929',
      },
      textColor: {
        base: 'var(--text-base)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      },
      boxShadow: {
        'outline-normal': '0 0 0 2px var(--accent-2)',
        magical:
          'rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px',
      },
      lineHeight: {
        'extra-loose': '2.2',
      },
      scale: {
        120: '1.2',
      },
      animations: {
        roll: 'roll 3s ease-in-out infinite',
        intimo: 'intimo 10s linear infinite',
      },
      keyframes: {
        roll: {
          '0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
          '50%': { transform: 'translateX(20rem) rotate(385deg)' },
        },
        intimo: {
          '0%': { transform: 'rotate(0)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
}
