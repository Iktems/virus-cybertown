/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        'bleuclair': '#70C5DD',
        'vertclair': '#A7C878',
        'orange': '#EA8D58',
        'gris': '#9DA7AF',
        'rougefonce': '#2E1410',
        'bleufonce': '#0E223B',
        'vertfonce': '#212A16',
        'turquoisefonce': '#092D30',
      },
      fontFamily: {
        'acuminsemicond': ['font-family', 'acumin-pro-semi-condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}