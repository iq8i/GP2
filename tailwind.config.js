/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensures Tailwind scans all components
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat Alternates", "sans-serif"],
      },
    },
  },
  plugins: [],
};
