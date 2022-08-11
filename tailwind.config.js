/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Teko", "serif"]
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        header: ["Bungee Outline", "sans-serif"]
      },
      colors: {
        meat: "#AE847E"
      }
    },
  },
  plugins: [],
};
