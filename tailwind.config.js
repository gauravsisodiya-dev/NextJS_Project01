/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens: {
      'sm': '540px',
      // => @media (min-width: 540px) { ... }

      'md': '720px',
      // => @media (min-width: 720px) { ... }

      'lg': '960px',
      // => @media (min-width: 960px) { ... }

      'xl': '1140px',
      // => @media (min-width: 1140px) { ... }

      '2xl': '1320px',
      // => @media (min-width: 1320px) { ... }
    },

  },
  plugins: [],
};
