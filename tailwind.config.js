/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4D04C3",
        secondary: "#4E06C2",
        "right-yellow": '#FFF500',
        "dark-yellow": '#E8900C',
        "light-gray": '#F2EEEE'
      }
    },
  },
  plugins: [],
}
