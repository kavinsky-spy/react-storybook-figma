module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", '@storybook/addon-a11y', '@storybook/addon-interactions'],
  "framework": {
    name: "@storybook/react-vite",
    options: {}
  },
  "core": {},
  "features": {
    "storyStoreV7": true,
    " interactionsDebugger": true
  },
  "staticDirs": ["../public"],
  viteFinal: (config, {
    configType
  }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/react-storybook-figma/';
    }
    return config;
  },
  docs: {
    docsPage: "automatic"
  }
};