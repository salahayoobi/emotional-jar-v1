/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-color': 'pulseColor 2s infinite',
      },
      keyframes: {
        pulseColor: {
          '0%': { color: 'black' },
          '50%': { color: 'white' },
          '100%': { color: 'black' },
        },
      },
    },
  },
  plugins: [],
};
