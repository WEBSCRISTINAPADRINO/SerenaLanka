/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tropical-green': '#2E7D32',
        'elephant-gray': '#424242',
        'golden-sand': '#F5DEB3',
        'ocean-blue': '#1976D2',
        'sunset-orange': '#FF5722',
        'lotus-pink': '#E91E63',
        'spice-red': '#D32F2F',
        'coconut-white': '#FFFFFF'
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'lato': ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
} 