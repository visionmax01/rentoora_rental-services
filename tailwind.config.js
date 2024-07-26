/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rampart: ["Rampart One", "cursive"],
      },
      colors: {
        brand: {
          light: '#2B6995',
          lightGrow: "#3F83B4",
          lightdark: "#357BAD",
          DEFAULT: '#ffffff',
          dark: '#0056b3',
          input: '#F3F1FF',
          Colorpurple: '#774FB8',
          bodyColor: '#C9CBEA',
          navbg: '#4B4444',
        },
        secondary: {
          light: '#FFBB3A',
          DEFAULT: '#FF9800',
          dark: '#FF7200',
        },
      },
      boxShadow: {
        'custom-hover': '0 0 25px 5px white',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
    },
  },
  plugins: [],
}
