import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    "./**/*.{html, js, ts, vue}", 
  ],
  viewer: false,
  darkMode: 'class',
  
  theme: {
    fontFamily: {
      'display': ['Roboto', 'sans-serif'],
      'body': ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        verde: {
          DEFAULT: 'rgba(40, 233, 140, 1)',
          100: 'rgba(40, 233, 140, .1)',
          200: 'rgba(40, 233, 140, .2)',
          300: 'rgba(40, 233, 140, .3)',
          400: 'rgba(40, 233, 140, .4)',
          500: 'rgba(40, 233, 140, .5)',
          600: 'rgba(40, 233, 140, .6)',
          700: 'rgba(40, 233, 140, .7)',
          800: 'rgba(40, 233, 140, .8)',
          900: 'rgba(40, 233, 140, .9)',
        },
        secondary: {
          DEFAULT: 'rgba(242, 174, 193, 1)',
          100: 'rgba(242, 174, 193, .1)',
          200: 'rgba(242, 174, 193, .2)',
          300: 'rgba(242, 174, 193, .3)',
          400: 'rgba(242, 174, 193, .4)',
          500: 'rgba(242, 174, 193, .5)',
          600: 'rgba(242, 174, 193, .6)',
          700: 'rgba(242, 174, 193, .7)',
          800: 'rgba(242, 174, 193, .8)',
          900: 'rgba(242, 174, 193, .9)',
        },
        black: {
          
          DEFAULT: 'rgba(31, 31, 31, 1)',
          100: 'rgba(9, 3, 2, .1)',
          200: 'rgba(9, 3, 2, .2)',
          300: 'rgba(9, 3, 2, .3)',
          400: 'rgba(9, 3, 2, .4)',
          500: 'rgba(9, 3, 2, .5)',
          600: 'rgba(9, 3, 2, .6)',
          700: 'rgba(9, 3, 2, .7)',
          800: 'rgba(9, 3, 2, .8)',
          900: 'rgba(9, 3, 2, .9)',
        }
      }
    }
  },
  plugins: []

}