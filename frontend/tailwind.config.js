/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#0277C0",
      secondary: "#60ABF9",
      error: "#DEA01E",
      valid: "#34C191",
    },
    extend: {},
  },
  plugins: [],
});
