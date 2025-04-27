/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0a0a0a",
        neon: "#00f5ff",
        cyber: "#00ffea",
        navy: "#0a0041"
      },
    },
  },
  plugins: [],
}
