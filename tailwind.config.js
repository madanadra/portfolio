/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'one': '#fdfefe',
      "two": "#7b7d7d",
      'three': "#17202a",
    },
    fontFamily: {
      'main': 'Noto Sans, sans-serif',
    },
    extend: {},
  },
  plugins: [],
  important: true,
}
