const path = require('path')

module.exports = {
  stories: [
    '../**/*stor(y|ies).@(js|ts|tsx|jsx|mdx)',
    '../**/*.stories.@(js|ts|tsx|jsx|mdx)',
    '../**/*.page.@(js|ts|tsx|jsx|mdx)',
    '../components/**/*stor(y|ies).@(js|ts|tsx|jsx|mdx)',
    '../components/**/*.stories.@(js|ts|tsx|jsx|mdx)',
    '../components/**/*.page.@(js|ts|tsx|jsx|mdx)',
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-dark-mode',
    'storybook-addon-turbo-build',
    'storybook-addon-outline',
    '@storybook/addon-viewport',
    {
      name: 'storybook-addon-next',
      options: {
        nextConfigPath: path.resolve(__dirname, '../next.config.js'),
      },
    },
    // {
    //   name: '@storybook/addon-postcss',
    //   options: {
    //     postcssLoaderOptions: {
    //       implementation: require('postcss'),
    //     },
    //   },
    // },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
}
