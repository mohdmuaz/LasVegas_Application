/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  
}
module.exports = {
  theme: {
    extend: {
      fontSize: {
        responsive: 'clamp(0.875rem, 2.5vw, 1.25rem)',
      },
    },
  },
};


