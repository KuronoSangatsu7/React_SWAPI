/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: ["Teko", "serif"],
        },
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        extend: {
            fontFamily: {
                header: ["Bungee Outline", "sans-serif"],
            },
            colors: {
                meat: "#AE847E",
            },
            spacing: {
                128: "42rem",
            },
        },
    },
    plugins: [],
};
