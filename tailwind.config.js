/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0AC26F',
        secondary: '#C5FCE3',
        black: "#1A1B25",
        metal: "#253237",
        white: "#FFFFFF",
        smokedWhite: "#F1EDEE",
        ucbackground: '#D9D9D9',
        ucBlue: '#3993DD'
      }
    },
  },
  plugins: [],
}

