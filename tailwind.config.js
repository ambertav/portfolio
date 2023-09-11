/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      animation: {
        typewriter: 'typewriter 4s steps(11) forwards',
      },
    },
  },
  // ...
  plugins: [],
}
