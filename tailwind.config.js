/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      'sm': '320px',

      'mdi':'500px',
      
      'md': '828px',
  
      'lg': '1024px',
  
      'xl': '1170px',
  
      '2xl': '1536px',
    },
    extend: {
      fontFamily : {
        greatvibes: ["var(--font-greatvibes)"]
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit,minmax(15rem,1fr))"
      },
      backgroundImage: {
        'home_image' : "url('../public/assets/home.jpg')"
      }
    },
  },
  plugins: [],
}