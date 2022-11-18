export default {
  directories: {
    out: 'build',
    packages: 'packages',
    abs: '../',
    externals: './rollup/externals.json',
  },
  dependencies: {
    common: [
      '@creation-ui/core',
      'autoprefixer',
      'clsx',
      'postcss-loader',
      'postcss',
      'react-datepicker',
      'react-dom',
      'react',
      'sass',
      'tailwindcss',
    ],
    table: [
      '@creation-ui/button',
      '@creation-ui/select',
      '@tanstack/match-sorter-utils',
      '@tanstack/react-table',
    ],
    autocomplete: ['@headlessui/react', 'lodash'],
    select: ['@headlessui/react'],
    modal: ['@headlessui/react'],
    'number-input': ['@creation-ui/input'],
    popover: ['@headlessui/react'],
  },
}
