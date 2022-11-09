/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'one': '#ffcb74',
      "two": "#111111",
      'three': '#f6f6f6',
      'four': "#2f2f2f",
      'five': "#707070",
      'six': "#151515",
    },
    fontFamily: {
      'main': 'Josefin Sans, sans-serif',
      'second': 'Poppins, sans-serif',
    },
    extend: {},
  },
  plugins: [],
  important: true,
}
