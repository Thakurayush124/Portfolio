/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
      colors: {
        'mac-bg': '#f0f0f0',
        'mac-blue': '#0969da',
        'mac-window': 'rgba(255, 255, 255, 0.8)',
      },
      backdropBlur: {
        'mac': '20px',
      },
      boxShadow: {
        'mac': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        'mac-hover': '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
};