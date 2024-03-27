/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'text': {
        default: '#e5ebf3',
        50: '#eef2f7',
        100: '#dce4ef',
        200: '#b9c9df',
        300: '#96afcf',
        400: '#7394bf',
        500: '#5079af',
        600: '#40618c',
        700: '#304969',
        800: '#203046',
        900: '#101823',
        950: '#080c11',
      },
      'background': {
        default: '#0b1017',
        50: '#eef2f7',
        100: '#dde4ee',
        200: '#bac9de',
        300: '#98aecd',
        400: '#7593bd',
        500: '#5378ac',
        600: '#42608a',
        700: '#324867',
        800: '#213045',
        900: '#111822',
        950: '#080c11',
      },
      'primary': {
        default: '#a6b5d5',
        50: '#eef1f7',
        100: '#dce2ef',
        200: '#bac5de',
        300: '#97a8ce',
        400: '#748cbe',
        500: '#526fad',
        600: '#41598b',
        700: '#314268',
        800: '#212c45',
        900: '#101623',
        950: '#080b11',
      },
      'secondary': {
        default: '#5e3169',
        50: '#f5eef7',
        100: '#ebdcef',
        200: '#d7bade',
        300: '#c397ce',
        400: '#af74be',
        500: '#9b52ad',
        600: '#7c418b',
        700: '#5d3168',
        800: '#3e2145',
        900: '#1f1023',
        950: '#100811',
      },
      'accent': {
        default: '#b8699f',
        50: '#f7eef4',
        100: '#efdce9',
        200: '#debad3',
        300: '#ce97bd',
        400: '#be74a6',
        500: '#ad5290',
        600: '#8b4173',
        700: '#683157',
        800: '#45213a',
        900: '#23101d',
        950: '#11080e',
      },
      'transparent': 'transparent',
     },
     fontSize: {
      sm: '0.750rem',
      base: '1rem',
      xl: '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': '4.210rem',
    },
    fontFamily: {
      heading: 'Poppins',
      body: 'Poppins',
    },
    fontWeight: {
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      bold: '700',
      extraBold: '1000',
    },
    extend: {},
  },
  plugins: [],
}

