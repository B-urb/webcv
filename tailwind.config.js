/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "barlow": ["var(--font-barlow)"],
        "roboto": ["var(--font-roboto)"]

      },
      backgroundImage: {
        'moon': "url('../public/moon.png')",
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
