/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'product-cream': 'hsl(30, 38%, 92%)',
        'product-dark-cyan': 'hsl(158, 36%, 37%)',
        'product-dark-blue': 'hsl(212, 21%, 14%)',
        'product-gray-blue': 'hsl(228, 12%, 48%)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}