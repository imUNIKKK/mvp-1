/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#192e41',
        secondary: '#4a4a4a', // Dark grey
      },
    },
  },
  plugins: [],
};