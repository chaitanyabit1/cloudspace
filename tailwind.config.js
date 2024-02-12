/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      fontFamily: {
        Kodchasan: ["Kodchasan", "sans-serif"],
        inter: ["inter", "sans-serif"],
        jost: ["jost", "sans-serif"]
     },
     colors: {
      primary: "#1B1B1B",
      secondary: "#4361EE",
      graytext: "#454545",
      extralight:"#FEEEE7",
      lightbg:"#F2F5FD"
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
      },
    },
    },
  },
  plugins: [],
}