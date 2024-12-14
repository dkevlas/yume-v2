/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yume-deep' : '#151515',
        'yume-deep-bold' : '#000000 ',
        'yume-deep-muted' : '#262626',

        'yume-secondary': '#F84C3B',
        'yume-secondary-bold': '#E52F1D',
        'yume-secondary-muted': '#FF6F61',

        'yume-primary' : '#77DD77',
        'yume-primary-bold' : '#55BB55',
        'yume-primary-muted' : '#99E599',

        'yume-neutral' : '#DCDCDC',
        'yume-neutral-bold' : '#EFEFEF',
        'yume-neutral-muted' : '#BDBDBD',

        'yume-light' : '#f8f8f8',
        'yume-dark' : '#050505',
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

