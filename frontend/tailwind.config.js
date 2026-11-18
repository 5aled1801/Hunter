/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        charcoal: {
          900: '#0F1115',
          800: '#161920',
          700: '#1E232B',
          600: '#2A303C',
          500: '#3D4556',
        },
        accent: {
          gold: '#E5A93C',
          blue: '#3B82F6',
          green: '#10B981',
          red: '#EF4444',
        }
      }
    },
  },
  plugins: [],
}
