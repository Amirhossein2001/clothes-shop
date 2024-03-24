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
      spacing: {
        100: "18%",
        1000: "1000px",
      },
      borderRadius: {
        "3xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
