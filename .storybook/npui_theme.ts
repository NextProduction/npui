import { create } from "@storybook/theming";

export default create({
  base: 'light',
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Brand
  brandTitle: "NPUI",
  // brandTarget: "_blank",
  // brandImage: './npui.png',
  // brandUrl: "https://nextproduction.dev/npui",

  // Colors
  colorPrimary: '#3A10E5',
  colorSecondary: '#585C6D',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',

  // Text colors
  textColor: '#10162F',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barHoverColor: '#585C6D',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputTextColor: '#10162F',

  
});
