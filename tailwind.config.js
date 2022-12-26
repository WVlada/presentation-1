/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'backlinear': "linear-gradient(45deg,#73aeaa 0%,#A6D8BE 100%)",
     },
      colors: {
        main: "#A1CAC0",
        maindark: "#73aeaa",
        mainlight: "#f2fefe",
        footertextcolor: "#515656",
        secondary: "#138fc2",
        tertiary: "#2f60c3"
      },
    },
  },
  plugins: [],
};
