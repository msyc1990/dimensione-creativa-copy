/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./index.html"
  ],
  theme: {
    extend: {
      textShadow: {
        linkedin: '2px 3px 9px rgba(255, 215, 38, 0.45);',
      },
    },
    colors: {
      gradient: {
        1: 'linear-gradient(180deg, rgba(1, 0, 20, 0.00) 0.96%, rgba(0, 97, 254, 0.20) 50%, rgba(0, 97, 254, 0.00) 100%);',
      },
      white: {
        content: '#fbfbfb',
        separator: '#c4c4c4',
      },
      black: {
        background: '#151515',
        text: '#100c08',
        footer: '#3c3c3b',
        author: '#242424',
        selected: '#202124',
        disabled: '#979797',
      },
      blue: {
        background: '#010014',
        'background-2': '#000b7a',
        footer: '#1d3afa',
        link: '#0700ff',
        border: '#2936b7',
        title: '#04008a',
        highlight: '#0c00de',
      },
      yellow: {
        base: '#ebc414',
        footer: '#fcdc04',
        hover: '#f9d430',
      },
      purple: {
        author: '#64045c',
        border: '#992b5a',
      },
      red: {
        border: '#ed474a',
        background: '#8b0103',
      },
      green: {
        background: '#04a405',
      },
      orange: {
        background: '#ec862f',
      },
      story: {
        1: '#f3eeff',
        2: '#d4e8ff',
        3: '#fffad1',
        4: '#ffe5d1',
        5: '#ddffd1',
        6: '#fbd1ff',
        7: '#e5d1ff',
        8: '#d1deff',
        9: '#ffd1f5',
        10: '#ffd1d4',
        11: '#a6e5ff',
        12: '#ffd8ab',
      },
      technology: {
        1: '#ed673d',
        2: '#ed5744',
        3: '#ed4f47',
      },
    },
    fontSize: {
      xsm: ['1.4rem', '2.4rem'],
      '2xsm': ['1.5rem', '2.2rem'],
      sm: ['1.6rem', '2.2rem'],
      '1.5sm': ['1.8rem', '2.5rem'],
      '2sm': ['2.0rem', '2.8rem'],
      '3sm': ['2.2rem', '2.7rem'],
      m: ['2.4rem', '2.8rem'],
      '2m': ['3rem', '4.5rem'],
      xm: ['3.2rem', '4.8rem'],
      '2xm': ['3.6rem', '4rem'],
      '3xm': ['4.6rem', '5rem'],
      xxm: '5.4rem',
      l: ['5.6rem', '7.6rem'],
      '2l': '6.8rem',
      xl: ['7.8rem', '8.4rem'],
      '2xl': '9rem',
      xxl: ['11rem', '14rem'],
    },
    fontFamily: {
      default: ['SF Pro Display', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    boxShadow: {
      button: '2px 3px 9px -1px rgba(255, 215, 38, 0.45);',
      youtube: '4px 7px 10px 0px rgba(200, 54, 57, 0.50);',
      linkedin: '2px 3px 9px -1px rgba(255, 215, 38, 0.45);',
    },
  },
  plugins: [],
}

