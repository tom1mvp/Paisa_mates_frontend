/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'paisa-brown': {
          light: '#5D3A2E',
          DEFAULT: '#3D1D13',
          dark: '#21100B',
        },
        'paisa-green': {
          light: '#5A7A32',
          DEFAULT: '#3E5622',
          dark: '#243314',
        },
        'paisa-cream': {
          light: '#E5D8BC',
          DEFAULT: '#D9C59A',
          dark: '#B8A06D',
        },
      },
      fontFamily: {
        'paisa-title': ['"Archivo Black"', 'sans-serif'],
        'paisa-body': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}