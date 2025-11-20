/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index-new.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vip-pink': '#E85C7B',
        'vip-pink-hover': '#D64868',
        'vip-pink-light': '#FFF5F7',
        'burgundy': '#8B2635',
        'burgundy-dark': '#6B1D28',
        'gold': '#D4AF37',
        'gold-light': '#E8C977',
        'gold-dark': '#B8962D',
        'vip-teal': '#2F5F61',
        'vip-teal-light': '#E8F4F4',
        'vip-teal-dark': '#1E3D3E',
        'sage-green': '#A8B5A4',
        'cream': '#FAF7F2',
        'warm-brown': '#8B7355',
      },
      fontFamily: {
        'heading': ['Fraunces', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': '120px',
        'price': '80px',
        'section': '60px',
        'component': '32px',
      },
    },
  },
  plugins: [],
}
