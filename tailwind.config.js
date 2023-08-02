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

        'rating-orange': 'hsl(25, 97%, 53%)',
        'rating-white': 'hsl(0, 0%, 100%)',
        'rating-very-dark-blue': 'hsl(216, 12%, 8%)',
        'rating-light-gray': 'hsl(217, 12%, 63%)',
        'rating-medium-gray': 'hsl(216, 12%, 54%)',
        'rating-dark-blue': 'hsl(213, 19%, 18%)',


        'newsletter-tomato': 'hsl(4, 100%, 67%)',
        'newsletter-dark-slate-gray': 'hsl(234, 29%, 20%)',
        'newsletter-charcoal-gray': 'hsl(235, 18%, 26%)',
        'newsletter-gray': 'hsl(231, 7%, 60%)',
        'newsletter-white': 'hsl(0, 0%, 100%)',

        'count-gray-blue': 'hsl(237, 18%, 59%)',
        'count-soft-red': 'hsl(345, 95%, 68%)',
        'count-white': 'hsl(0, 0%, 100%)',
        'count-dark-desaturated-blue': 'hsl(236, 21%, 26%)',
        'count-very-dark-blue': 'hsl(235, 16%, 14%)',
        'count-black': 'hsl(234, 17%, 12%)',
      },
      fontSize: {
        'xs': '0.6rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}