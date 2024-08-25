/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    debugScreens: {
      position:['top','right']
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
