/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B2341',
          red: '#CC1F2F',
          light: '#F3F5F9',
        },
      },
      boxShadow: {
        card: '0 10px 30px rgba(11, 35, 65, 0.08)',
      },
    },
  },
  plugins: [],
}

