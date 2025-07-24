/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#FF8A00',
        dark: '#1f2b3b',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        code: ['Source Code Pro', 'monospace'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
