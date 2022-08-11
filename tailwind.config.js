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
        'light-2': '#136f63',
        'light-3': '#D72638',
        'light-4': '#9AD1D4',
        'light-5': '#102542',
        'dark-2': '#468189',
        'dark-3': '#77aca2',
        'dark-4': '#83781b',
        'dark-5': '#7b5e7b'
      }
    },

  },
  plugins: [require('@tailwindcss/typography')],
}
