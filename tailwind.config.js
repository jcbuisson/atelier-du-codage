/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
   ],
   theme: {
      container: {
         center: true,
         padding: {
            DEFAULT: '2rem',
            sm: '1rem',
            md: "3rem",
            lg: '4rem',
            xl: '5rem',
            '2xl': '6.5rem'
         },
      },
      extend: {
         colors: {
            'light-shade': '#FFFCF5',
            'accent': '#242424',
            'primary': '#FF553E'
         }
      },
   },
   plugins: [],
}