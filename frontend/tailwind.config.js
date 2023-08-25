// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,  
        padding: '2rem', 
        margin: '2rem', 
      },
      screens: {
        'smLg': {
          min: '450px',
          max: '640px',
        },
        'sm': '640px',   // Small screens
        'md': '768px',   // Medium screens
        'lg': '1024px',  // Large screens
        'xl': '1280px',  // Extra large screens
      },
      colors: {
        // Define your custom colors here
        steel: '#1773b0',
        blue: '#121212',
        yellow: '#ffe600',
        light: '#ffffff',
        green: '#77bf4a',
        lightText: '#ccc',
      },
      fontFamily: {
        // Define your custom font families here
        bodyFont: ['Poppins', 'sans-serif'],
        assistantFont: ['Assistant', 'sans-serif'],
        latoFont: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
