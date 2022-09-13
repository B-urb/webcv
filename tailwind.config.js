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
        'light-1': '#8cb369ff',
        'light-2': '#59d2feff',
        'light-3': '#05668dff',
        'light-4': '#c0a9b0ff',
        'light-5': '#2c363fff',
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
