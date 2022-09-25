const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities, addComponents, e, config }) => {
  // Add your custom styles here
}, require('./tailwind.config.js'))
