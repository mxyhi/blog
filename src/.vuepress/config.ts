import { defineUserConfig } from 'vuepress';
import theme from './theme.js';
import { gitPlugin } from '@vuepress/plugin-git';

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
  ],
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
