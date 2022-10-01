const path = require('path')
// import '../lib/components/index.scss'
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  stories: [
    '../**/*stor(y|ies).@(js|ts|tsx|jsx|mdx)',
    '../**/*.stories.@(js|ts|tsx|jsx|mdx)',
    '../**/*.page.@(js|ts|tsx|jsx|mdx)',
    '../lib/**/*stor(y|ies).@(js|ts|tsx|jsx|mdx)',
    '../lib/**/*.stories.@(js|ts|tsx|jsx|mdx)',
    '../lib/**/*.page.@(js|ts|tsx|jsx|mdx)',
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
    // {
    //   name: '@storybook/addon-postcss',
    //   options: {
    //     postcssLoaderOptions: {
    //       implementation: require('postcss'),
    //     },
    //   },
    // },
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
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()]
    return config
  },
}
