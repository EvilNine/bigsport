/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  },
  theme: {
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1100px',
      },
    },
  },
  plugins: [],
}

