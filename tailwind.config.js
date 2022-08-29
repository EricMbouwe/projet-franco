/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        corbel: "'corbel-regular', sans-serif;",
        caviarDreams: "'corbel-regular', sans-serif;"
      },
      colors: {
        blue: {
          dark: '#00c2cb',
          cyan: '#231f20'
        },
        gray: {
          base: '#8e8c98'
        }
      }
    },
  },
  plugins: [],
}
