/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#6366f1", // indigo-500, the site's signature accent
          light: "#818cf8",
          dark: "#4f46e5",
        },
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, #80808011 1px, transparent 1px), linear-gradient(to bottom, #80808011 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "14px 24px",
      },
    },
  },
  plugins: [],
};
