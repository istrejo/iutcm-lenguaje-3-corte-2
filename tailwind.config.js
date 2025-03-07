/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  darkMode: "selector",
  plugins: [require("tailwindcss-primeui")],
};
