/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
    purge: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'pattern' : 'url(./images/pattern-bg.png)'
      },
      colors: {
        'VeryDarkGray': 'hsl(0, 0%, 17%)',
        'DarkGray': 'hsl(0, 0%, 59%)',
      },
      height: {
        'mapHeight': 'calc(100vh-208px)'
      }
    },
  },
  plugins: [],
}
