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
      }
    },
  },
  plugins: [],
}
