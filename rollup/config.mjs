export default {
  directories: {
    out: 'build',
    packages: 'lib',
    abs: '../',
    externals: './rollup/externals.json',
  },
  dependencies: {
    common: [
      '@cui/core',
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
      '@cui/button',
      '@cui/select',
      '@tanstack/match-sorter-utils',
      '@tanstack/react-table',
    ],
    autocomplete: ['@headlessui/react', 'lodash'],
    select: ['@headlessui/react'],
    modal: ['@headlessui/react'],
    'number-input': ['@cui/input'],
    popover: ['@headlessui/react'],
  },
}
