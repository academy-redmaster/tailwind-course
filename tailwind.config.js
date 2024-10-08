/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    debugScreens: {
      position: ["top", "right"]
    }
  },
  // corePlugins: {preflight: false},
  plugins: [require("tailwindcss-debug-screens")]
};
