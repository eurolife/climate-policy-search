module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // common
      white: '#FFF',
      black: '#000',
      lightgrey: '#ccc',
      grey: '#999',
      red: '#ff0000',
      // brand
      blue: '#0e74b1',
      darkblue: '#0d0475',
      lightblue: '#3d9ccf',
      brown: '#4e2f1a',
      lightbrown: '#e0af74',
    },
    container: {
      center: true,
      padding: {
        default: '1rem',
      },
    },
    extend: {
      dropShadow: {
        'dark': '1px 1px 0 rgba(0, 0, 0, 0.9)',
      },
      fontFamily: {
        'base': ['"Lato"'],
        'heading': ['"Patua One"']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
