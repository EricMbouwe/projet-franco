/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        corbel: "'corbel-regular', sans-serif;",
        caviarDreams: "'corbel-regular', sans-serif;",
        popins: "'Poppins', sans-serif;",
      },
      colors: {
        blue: {
          dark: "#005c90",
          cyan: "#231f20",
        },
        gray: {
          // base: "#8e8c98",
          base: "#475569",
          light: "#f9fafb",
        },
      },
    },
  },
  plugins: [],
};
