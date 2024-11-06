require("./common/style/css_plugin.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./*.html"],
  theme: {
    extend: {
      dropShadow: {
        "custom-shadow": "4px 4px 4px rgb(0 0 0 / 0.1)"
      },
      fontFamily:
      {
        montserrat: ["Montserrat"],
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("./common/style.css"),
],
}