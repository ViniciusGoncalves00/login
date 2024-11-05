require("./common/style/css_plugin.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./*.html"],
  theme: {
    extend: {
      dropShadow: {
        "custom-shadow": "4px 4px 4px rgb(0 0 0 / 0.1)"
      },
      colors:
      {
        "custom-dark-gray-0": "#050505",
        "custom-dark-gray-1": "#101010",
        "custom-dark-gray-2": "#151515",
        "custom-dark-gray-3": "#202020",
        "custom-dark-gray-4": "#252525",
        "custom-dark-gray-5": "#303030",
        "custom-dark-gray-6": "#353535",
        "custom-dark-gray-7": "#404040",
        "custom-dark-gray-8": "#454545",
        "custom-dark-gray-9": "#505050",
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