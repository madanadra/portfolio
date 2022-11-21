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
      'two': '#7b7d7d',
      'three': '#17202a',
      'react': '#61dafb',
      'next': '#000000',
      'tailwind': '#06b6d4',
    },
    fontFamily: {
      'main': 'Noto Sans, sans-serif',
    },
    extend: {},
  },
  plugins: [],
  important: true,
}
