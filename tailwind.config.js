/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./site/**/*.{js,ts,jsx,tsx}', './site/pages/*.{js,ts,jsx,tsx}'],
  theme: {},
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
