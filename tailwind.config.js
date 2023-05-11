/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'backlinear2': "linear-gradient(45deg,#657783 0%,#0f2634 100%)",
        'backlinear1': "linear-gradient(45deg,#657783 0%,#A6D8BE 100%)",
        'backlinear3': "linear-gradient(45deg,#888e93 0%,#0f2634 100%)",
        'backlinear': "linear-gradient(45deg,#73aeaa 0%,#A6D8BE 100%)",
        'backlinearimage2': `linear-gradient(45deg,#A6D8BEcf 0%, #73aeaacf 100%), url("/images/accountinglarge.jpg")`,
        'backlinearimage': `url("/images/accountinglarge.jpg")`,
        'backkontaktimage': `url("/images/kontaktlarge.jpg")`
      },
      colors: {
        main: "#A1CAC0",
        maindark: "#73aeaa",
        mainlight: "#f2fefe",
        footertextcolor: "#515656",
        secondary: "#138fc2",
        tertiary: "#2f60c3"
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
