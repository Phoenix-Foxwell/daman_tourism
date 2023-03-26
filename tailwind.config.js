/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
        'xs': '475px',
        '2xs': '375px',
      },
    },
  },
  plugins: [],
}
