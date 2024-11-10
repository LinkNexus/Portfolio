/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./assets/**/*.{js,jsx,ts,tsx}",
    "./templates/**/*.html.twig",
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './@/components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'theme-primary': '#8750f7',
        'theme-primary-1': '#2400ff',
        'theme-primary-2': '#9b8dff',
        'theme-primary-3': '#4654f9',
        'theme-accent-1': '#0f0715',
        'theme-secondary': '#2a1454',
        'theme-black-2': '#050709',
        'theme-accent-2': '#140c1c',
        'theme-white': '#ffffff',
        'body': '#dddddd'
      }
    },
  },
  plugins: [],
}

