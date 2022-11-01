/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "jetbrains": ["JetBrains Mono","monospace"],
        "roboto": ["Roboto Condensed","sans-serif"],
        "trispace": ["Trispace", "sans-serif"],
        "barlow": ["Barlow Condensed", "sans-serif"]
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'light-1': '#00887A',
        'light-2': '#FFCCBC',
        'light-3': '#FFFFFF',
        'light-4': '#D3E3FC',
        'light-5': '#77A6F7',
        'dark-1': '#0B0C10',
        'dark-2': '#1F2833',
        'dark-3': '#C5C6C7',
        'dark-4': '#66FCF1',
        'dark-5': '#45A29E'
      }
    },

  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
}
