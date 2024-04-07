/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        barlow: ["var(--font-barlow)"],
        roboto: ["var(--font-roboto)"],
      },
      backgroundImage: {
        moon: "url('../public/moon.png')",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        text: "#fafafa",
        background: "#050505",
        primary: "#66a923",
        secondary: "#082b2b",
        accent: "#b280e5",
      },
      screens: {
        "3xl": "1840px",
        "4xl": "2100px",
      },
      fontWeight: {
        normal: 400,
        bold: 700,
      },
      animation: {
        "slide-in-right": "slide-in-right 1s ease-out forwards",
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require("@tailwindcss/typography"), require("tailwind-scrollbar")],
};
