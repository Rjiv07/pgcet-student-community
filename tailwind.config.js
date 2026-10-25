/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#172B3A',
          ivory: '#F7F4ED',
          teal: '#2F7770',
          terracotta: '#C87559',
          sage: '#DCE4E2',
          graphite: '#333C43',
          muted: '#69757B',
        },
      },
      fontFamily: {
        display: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
};