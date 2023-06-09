/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'backlinear': "linear-gradient(45deg,#657783 0%,#0f2634 100%)",
        'backlinear2': "linear-gradient(45deg,#657783 0%,#A6D8BE 100%)",
        'backlinear3': "linear-gradient(45deg,#888e93 0%,#0f2634 100%)",
        'backlinear1': "linear-gradient(45deg,#73aeaa 0%,#A6D8BE 100%)",
        'backlinearimage': `url("/images/accountinglarge.jpg")`,
        'backkontaktimage': `url("/images/kontaktlarge.jpg")`
      },
      colors: {
        //main: "#A1CAC0",
        main: '#0f2634',
        //maindark: "#73aeaa",
        //mainlight: "#f2fefe",
        mainlight: "#afc4d1",
        //footertextcolor: "#515656",
        footertextcolor: "#ffffff",
        secondary: "#0f2634",
        tertiary: "#0f2634"
      },
      keyframes: {
        //carousel2: {
        //  '0%, 100%': { transform: 'rotate(-3deg)' },
        //  '50%': { transform: 'rotate(3deg)' },
        //}
      },
      animation: {
      //  carousel2: 'carousel2 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
