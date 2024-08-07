/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        index_bg: '#353535',
        container_bg: '#4D4D4D',
        azulito: '#4570DD',
      }
    },
  },
  plugins: [],
}