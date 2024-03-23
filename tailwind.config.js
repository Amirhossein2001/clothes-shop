/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      custom: ["iran", "sans"],
  
      /* 'custom' is the name you'll use in your class declarations */
    },
    extend: {
      screens: {
        sm: "300px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
