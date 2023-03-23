/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: '"Hanken Grotesk", sans-serif',
      },
      colors: {
        'light-slate-blue': 'hsl(252, 100%, 67%)',
        'light-royal-blue': 'hsl(241, 81%, 54%)',
        'violet-blue': 'hsla(256, 72%, 46%, 1)',
        'persian-blue': 'hsla(241, 72%, 46%, 0)',
        'pale-blue': 'hsl(221, 100%, 96%)',
        'light-lavender': 'hsl(241, 100%, 89%)',
        'dark-gray-blue': 'hsl(224, 30%, 27%)',
        'overlay-bg': '#d5e1ef',
        'title': '#1f3149',
        'bodytext': '#4c5e77',
      },
      boxShadow: {
        'custom': '0 20px 50px -18px rgba(100, 100, 100, 0.2)',
      }
    },
  },
  plugins: [],
}
