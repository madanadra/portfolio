/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'one': '#000000',
      "two": "#111111",
      'three': '#707070',
      'four': "#ffcb74",
      'five': "#eeeeee"
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
