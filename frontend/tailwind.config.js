/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        regular: ['Inter-Regular', 'sans-serif'],
        medium: ['Inter-Medium', 'sans-serif'],
        semibold: ['Inter-SemiBold', 'sans-serif'],
        bold2: ['Bebas Neue Regular'],
      },
    },
  },
  plugins: [],
}
