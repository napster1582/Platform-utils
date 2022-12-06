const path = require('path');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Oswald', 'sans-serif'],
      body: ['Poppins', 'sans-serif'],
    },
    container: {
      padding: '3.5rem',
    },
    extend: {
      colors: {
        success: {
          ...colors.green,
        },
        warning: {
          ...colors.orange,
        },
        primary: {
          50: '#E6F7FF',
          100: '#CDEFFE',
          200: '#95DDFE',
          300: '#63CCFD',
          400: '#30BCFC',
          500: '#03A9F4',
          600: '#0287C5',
          700: '#026492',
          800: '#014260',
          900: '#012332',
        },
        secondary: {
          50: '#F1F1FE',
          100: '#DEDFFC',
          200: '#C2C3FA',
          300: '#A1A3F7',
          400: '#8183F4',
          500: '#6366F1',
          600: '#2326EB',
          700: '#1114BB',
          800: '#0B0D7E',
          900: '#05063D',
        },
        danger: {
          50: '#FDECF1',
          100: '#FCD9E3',
          200: '#F9B4C6',
          300: '#F589A6',
          400: '#F2638A',
          500: '#EF3D6D',
          600: '#DD1248',
          700: '#A50E36',
          800: '#710925',
          900: '#390512',
        },
        dark: {
          50: '#E8E8E8',
          100: '#D1D1D1',
          200: '#A1A1A1',
          300: '#737373',
          400: '#454545',
          500: '#161616',
          600: '#121212',
          700: '#0D0D0D',
          800: '#080808',
          900: '#050505',
        },
        blueLight: {
          50: '#ECF9FE',
          100: '#D9F2FC',
          200: '#AEE4F9',
          300: '#88D7F6',
          400: '#5EC9F3',
          500: '#35BAF0',
          600: '#10A1DA',
          700: '#0C7BA6',
          800: '#08516D',
          900: '#042A39',
        },
      },
    },
  },
  plugins: [require(path.resolve(__dirname, 'src/theme/tailwind/utilities'))],
};
