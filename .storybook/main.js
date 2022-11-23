const stories = require('../stories.paths.json')
module.exports = {
  stories,
  addons: [
    '@storybook/addon-a11y',
    // '@storybook/addon-actions',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    'storybook-dark-mode',
    // '@storybook/addon-viewport',
    'storybook-addon-outline',
    {
      name: 'storybook-addon-sass-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
    previewMdx2: true,
  },
  // docsPage: {
  //   docs: 'automatic',
  // },
}
