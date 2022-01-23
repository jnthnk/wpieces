const { gray, amber, indigo } = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  theme: {
    screens: {
      xs: '400px',
      sm: '600px',
      md: '800px',
      lg: '1000px',
      xl: '1200px',
      '2xl': '1400px'
    },
    colors: {
      gray,
      black: '#000',
      white: '#fff',
      primary: indigo,
      secondary: amber
    },
    fontFamily: {
      sans: ['"Open Sans"', ...fontFamily.sans],
      serif: [...fontFamily.serif]
    },
    extend: {}
  },
  plugins: []
}
