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
      },
    },
  },
  plugins: [],
};
