/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        open: 'openAnimation 0.3s forwards',
        close: 'closeAnimation 0.1s forwards',
      },
      keyframes: {
        openAnimation: {
          '0%': { left: '-300px' },
          '100%': { left: '0px' },
        },
        closeAnimation: {
          '0%': { left: '0px' },
          '100%': { left: '-300px' },
        },
      },
      // Add any custom colors, spacing, etc. here
      colors: {
        primary: '#008251',
      },
    },
  },
  plugins: [],
};
