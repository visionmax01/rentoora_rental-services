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
        LogoText: ["Playwrite BE VLG", "cursive"],
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
        'custom-hover': '0 4px 10px 0 rgba(0, 0, 0, 0.25), 0 4px 20px 0 rgba(0, 0, 0, 0.15)',
      },
      backgroundImage: {
        'gradient-hover': 'linear-gradient(45deg, rgba(255, 0, 150, 0.3) 0%, rgba(0, 204, 255, 0.3) 50%, rgba(51, 102, 255, 0.3) 100%)',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
      backgroundImage: ['hover'],
    },
  },
  plugins: [],
}
