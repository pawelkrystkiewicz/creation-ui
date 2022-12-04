/** @type {import('next').NextConfig} */
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  reactStrictMode: true,
  swcMinify: true,
  // module: {
  //   rules: [{ test: /\.css$/, use: 'raw-loader' }],
  // },
})

module.exports = withNextra()
