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
          50: '#F1F3EA',
          100: '#D9E0D8',
          200: '#A8B5A5',
          300: '#9DBE64',
          400: '#7B8FA8',
          500: '#5B6B78',
          600: '#4A4F55',
          700: '#2D5F3F',
          800: '#0D2417',
          900: '#07130D',
        },
        minimal: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E0E0E0',
          300: '#A8B8A0',
          400: '#8B9B7E',
          500: '#9BA8A3',
          600: '#A8A8A8',
          700: '#707070',
          800: '#333333',
          900: '#1A1A1A',
        }
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
