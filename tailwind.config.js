/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "feature-bg": "url('/img/bg.png')",
      },
    },
  },
  plugins: [],
};
