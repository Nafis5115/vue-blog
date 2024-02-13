/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:[ 'Poppins', 'sans-serif']

      },
      colors:{
          primary:"#e53e3e"
      },
      height:{
        "400px":"400px"
      }
    },
  },
  plugins: [],
}

