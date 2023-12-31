/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./app/**/*.{jsx,tsx}", "./components/**/*.{jsx, tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mplusrounded1c: ["var(--font-mplusrounded1c)", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
