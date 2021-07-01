const path = require("path");

module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ["../stories/*.stories.@(ts|tsx|js|jsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
  ],
};
