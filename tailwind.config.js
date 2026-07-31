/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'deep-space': '#050914',
        'nd-blue': '#0C2340',
        'dome-gold': '#C99700',
        'metal-gold': '#AE9142',
        'irish-green': '#00843D',
        'platinum': '#E5E4E2',
        'silver': '#C0C0C0',
        'bronze': '#CD7F32'
      },
      fontFamily: {
        'space': ['Orbitron', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-bg': "url('index bg.jpg')",
        'engine-pattern': "linear-gradient(to right, rgba(5, 9, 20, 0.95), rgba(12, 35, 64, 0.9)), url('spacex-TV2gg2kZD1o-unsplash.jpg')",
        'engine-pattern-alt': "linear-gradient(to right, rgba(5, 9, 20, 0.9), rgba(12, 35, 64, 0.8)), url('index lower bg.jpg')",
        'leadership-hero': "linear-gradient(to bottom, rgba(5, 9, 20, 0.2), rgba(5, 9, 20, 1)), url('Image from iOS (1).jpg')",
        'sponsors-hero': "linear-gradient(to bottom, rgba(5, 9, 20, 0.2), rgba(5, 9, 20, 1)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
        'tech-pattern': "linear-gradient(to right, rgba(5, 9, 20, 0.95), rgba(12, 35, 64, 0.9)), url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
        'about-hero': "linear-gradient(to bottom, rgba(5, 9, 20, 0.6), rgba(5, 9, 20, 1)), url('2W8A4782.JPG')",
        'contact-hero': "linear-gradient(to bottom, rgba(5, 9, 20, 0.7), rgba(5, 9, 20, 1)), url('https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop')",
        'hero-pattern': "linear-gradient(to bottom, rgba(5, 9, 20, 0.7), rgba(5, 9, 20, 1)), url('IMG_1558.JPG')",
        'ndxp-hero': "linear-gradient(to bottom, rgba(5, 9, 20, 0.2), rgba(5, 9, 20, 1)), url('NDXP header bg.png')",
        'usli-hero': "linear-gradient(to bottom, rgba(5, 9, 20, 0.6), rgba(5, 9, 20, 1)), url('USLI main image.jpg')",
        'blueprint-pattern': "linear-gradient(to right, rgba(5, 9, 20, 0.95), rgba(12, 35, 64, 0.9)), url('https://www.transparenttextures.com/patterns/blueprint.png')",
        'outreach-hero': "linear-gradient(to bottom, rgba(5, 9, 20, 0.2), rgba(5, 9, 20, 1)), url('IMG_1063.jpeg')"
      }
    }
  },
  plugins: [],
}