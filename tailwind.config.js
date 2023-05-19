/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '375px',
        sm: '600px',
        md: '900px',
        lg: '1200px',
        xl: '1536px',
      },
      colors: {
        'app-yellow': '#f9d57f',
        'app-sky-blue': '#f0f4fb',
        'app-green': '#56771c',
        'app-gray': '#dcdcdc',
        'app-yellow-light': '#ffecbf',
        'app-gray-dark': '#868686',
      },
    },
  },
  plugins: [],
};
