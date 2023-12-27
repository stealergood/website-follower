/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "navlight": "#7B66FF",
        "navdark": "#5FBDFF",
      },
      width: {
        "200": "60rem",
      },
      height: {
        "86": "21rem"
      },
      blur: {
        "vsm": "1px",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light", "dark"
    ],
  },
}

