/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          900: '#07130D',
          800: '#0D2417',
          700: '#0F3820',
        }
      }
    },
  },
  plugins: [],
}
