/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        primary_yellow:"#ffcb05",
        primary_blue:"#2a75bb",
        primary_dark:"#153542"
      }
    },
  },
  plugins: [],
}
