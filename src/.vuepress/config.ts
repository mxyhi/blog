import { defineUserConfig } from 'vuepress';
import theme from './theme.js';
import { gitPlugin } from '@vuepress/plugin-git';
import { shikiPlugin } from "@vuepress/plugin-shiki";

export default defineUserConfig({
  base: '/blog/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'm blog',
      description: 'mxy 博客',
    },
  },

  plugins: [
    gitPlugin({
      contributors: true,
      createdTime: true,
      updatedTime: true,
    }),
    // shikiPlugin({
    //   // 你的选项
    //   theme: "one-dark-pro",
    // }),
  ],
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
