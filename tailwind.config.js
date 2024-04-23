/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        lightBlack: "rgba(0, 0, 0, 0.5)"
      }
    },
  },
  plugins: [],
}