/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#FFFFFF',
      'transparent': 'transparent',
      'red': '#ff5e5e',
      'green': '#3A9B94',
      'affair': {
        '50': '#f9f7fc',
        '100': '#f3edfa',
        '200': '#e6dbf3',
        '300': '#d4bee9',
        '400': '#bd98da',
        '500': '#9e6ec7',
        '600': '#834faa',
        '700': '#754497',
        '800': '#5a3573',
        '900': '#4e305f',
        '950': '#2e163c',
      },
      'mirage': {
        '50': '#f4f6fb',
        '100': '#e8ecf6',
        '200': '#cdd7ea',
        '300': '#a0b5d9',
        '400': '#6e8fc2',
        '500': '#4b71ac',
        '600': '#395890',
        '700': '#2f4775',
        '800': '#232b40',
        '900': '#182337',
        '950': '#151c2c',
      },
    }
  },
  plugins: [],
}

