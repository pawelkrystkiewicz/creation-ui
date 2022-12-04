const path = require('path')

/** @type {import('tailwindcss').Config} */
const config = require(path.join(__dirname, '..', '..', 'tailwind.config'))

module.exports = {
  ...config,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
}
