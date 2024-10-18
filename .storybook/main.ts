import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack"
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  features: {
    backgroundsStoryGlobals: true,
  },
  core: {
    disableWhatsNewNotifications: true
  },
  staticDirs: ['../public', '../assets'],
};
export default config;
