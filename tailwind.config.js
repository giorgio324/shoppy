/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        tiltPrism: 'Tilt Prism',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(16rem, 1fr))',
      },
    },
  },
  plugins: [],
};
