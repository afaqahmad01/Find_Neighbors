/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        burlyWood: "#deb887",
        word: "#33a49bb3",
        text: "#192655",
        blue: "#0000FF",
        brown: "#a52a2a",
        sideBarColor: "#D6C7AE"
      },

    },
    screens: {
      'sm': '270px',
      'md': '640px',
      'lg': '850px',
      'xl': '1080px',
      '2xl': '1384px',
    }
  },
  plugins: [],
}