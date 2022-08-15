module.exports = {
    mode: 'jit',
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
        'light1': '#8cb369ff',
        'light-2': '#59d2feff',
        'light-3': '#05668dff',
        'light-4': '#c0a9b0ff',
        'light-5': '#2c363fff',
        'dark-2': '#468189',
        'dark-3': '#77aca2',
        'dark-4': '#83781b',
        'dark-5': '#7b5e7b'
      }
    },

  },
  plugins: [require('@tailwindcss/typography')],
}
