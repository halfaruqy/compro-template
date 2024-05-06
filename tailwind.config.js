/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        'primary': {
          50: '#fffdea',
          100: '#fff8c5',
          200: '#fff185',
          300: '#ffe246',
          400: '#ffd11b',
          500: '#ffb000',
          600: '#e28600',
          700: '#bb5d02',
          800: '#984808',
          900: '#7c3b0b',
          950: '#481d00',
        },
        'secondary': {
          50: '#e8f3ff',
          100: '#d5e9ff',
          200: '#b3d4ff',
          300: '#86b5ff',
          400: '#5687ff',
          500: '#305aff',
          600: '#0c27ff',
          700: '#031dff',
          800: '#061ecd',
          900: '#10259f',
          950: '#050a30',
        },
      }
    },
    screens: {
      // => @media (min-width: ... px) { ... }
      xs: "375px",
      base: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
};
