/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "white-to-transparent-r":
          "linear-gradient(to right, white 50%, transparent 100%)",
        "white-to-transparent-l":
          "linear-gradient(to left, white 50%, transparent 100%)",
        "dark-to-transparent-r":
          "linear-gradient(to right, #10172a 50%, transparent 100%)",
        "dark-to-transparent-l":
          "linear-gradient(to left, #10172a 50%, transparent 100%)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
