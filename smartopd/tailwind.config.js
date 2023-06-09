/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: { brandFont: ["Inter", "sans-serif"] },

    extend: {
      backgroundColor: {
        "main-bg": "#FF0065",
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      // backgroundImage: {
      //   "hero-pattern": "url('/smartopd/src/images/imageBackround.png')",
      // },
    },
  },
  plugins: [],
};
