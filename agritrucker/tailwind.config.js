// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", //
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "serif"], // Add a fallback font
        montserrat: ["Montserrat", "sans-serif"],
        playfair: ["Playfair Display", "sans-serif"],
        Roboto_condensed: ["Roboto Condensed", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/african_woman.jpg')",
      },
    }, // Customize your theme here
  },
  plugins: [],
};
