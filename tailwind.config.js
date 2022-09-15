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
        "trispace": ["Trispace", "sans-serif"]
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'light-1': '#D7DAE5',
        'light-2': '#B9CDDA',
        'light-3': '#A6D8D4',
        'light-4': '#8EAF9D',
        'light-5': '#6B7D7D',
        'dark-1': '#000000ff',
        'dark-2': '#19647eff',
        'dark-3': '#50c5b7ff',
        'dark-4': '#948392ff',
        'dark-5': '#c7f2a7ff'
      }
    },

  },
  plugins: [require('@tailwindcss/typography')],
}
