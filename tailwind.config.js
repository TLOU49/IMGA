/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
      extend: {
        screens:{
          xs: "320px",
          sm: "375px",
          sml: "500px",
          md: "667px",
          mdl: "768px",
          lg: "960px",
          lgl: "1024px",
          xl: "1280px",
        },
        colors:{
          iga_blue: "rgb(33 135 171)",
          // text_blue: "#0f3c4c",
          text_blue: "rgb(15 60 76)",
          activeBg: "#e9f5f9",
          filterBG: "#E9F5F9"
          // rgb(15 60 76)
        },
        fontFamily:{
          bodyFont:['Poppins', 'sans-serif']
        },
      },
   
  },
  plugins: [],
}

