/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust if you're using TypeScript
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),       // Form formatting
    require('@tailwindcss/typography'),  // Prose formatting
  ],
};
