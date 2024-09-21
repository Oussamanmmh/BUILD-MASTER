/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        "oswald": ["Oswald", "sans-serif"],
        "nunito": ["Nunito", "sans-serif"],
      },
      colors: {
         "primary":"#2dd4bf",
          "secondary":"#22d3ee",
          "light":"#6b7280",
         
         "textcolor":"#000000",
      },
    },
  },
  plugins: [],
}

