module.exports = {
  content: ['./**/*.vue'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      primary: ['Roboto Mono'],
    },
    screens: {
      md: { max: '910px' },
      sm: { max: '575px' },
    },
    colors: {
      current: 'currentColor',
      grey: '#F1F1F1',
      white: '#FEFEFE',
      black: '#121212',
      darkgrey: '#1f1f1f',
      accent: '#EC9FD6',
    },
    extend: {
      width: {
        192: '48rem',
        lg: '56rem',
      },
      keyframes: {
        bounceIn: {
          '0%': { transform: 'scale(0.3)' },
          '50%': { transform: 'scale(1.05)' },
          '90%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        bounceIn: 'bounceIn 0.5s ease-in-out',
      },
      backgroundSize: {
        130: '130%',
      },
    },
  },
};
