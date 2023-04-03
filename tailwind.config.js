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

        'news-soft-orange': 'hsl(35, 77%, 62%)',
        'news-soft-red': 'hsl(5, 85%, 63%)',
        'news-off-white': 'hsl(36, 100%, 99%)',
        'news-grayish-blue': 'hsl(233, 8%, 79%)',
        'news-dark-grayish-blue': 'hsl(236, 13%, 42%)',
        'news-dark-blue': 'hsl(240, 100%, 5%)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}