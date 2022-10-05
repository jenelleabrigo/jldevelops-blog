/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "l-pink": "#ffc7ba",
      "l-gray": "#d9d9d9",
      "d-gray": "#adadad",
    },
    fontFamily: {
      "cursive": "cursive",
    },
    extend: {
      fontSize: {
        16: "16px",
      },
      backgroundColor: {
        "main-bg": "#b66878",
        "secondary-bg": "#adadad",
      },
      backgroundImage: {
        "skyline": "url('/images/skyline.svg')",
        "gradient": "linear-gradient(to bottom, #93cdc9, #1c4144)",
      },
    },
  },
  plugins: [],
};
