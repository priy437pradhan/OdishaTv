/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'custom': '2fr 7fr 3fr',
      },
    },
  },
  plugins: [],
}


