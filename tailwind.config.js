/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FF2C3B",
        secondary: "#FF8A94",
        accent: "#FF5A5F",
        background: "#FFEBEE",
        dark: {
          100: "#D11A2A",
          200: "#9C1521",
        },
        light: {
          100: "#FFCDD2",
          200: "#FFEBEE",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
