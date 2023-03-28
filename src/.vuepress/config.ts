import { defineUserConfig } from 'vuepress';
import theme from './theme.js';
import { gitPlugin } from '@vuepress/plugin-git';

export default defineUserConfig({
  base: '/blog/',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'm blog',
      description: 'mxy的博客',
    },
  },
  plugins: [
    gitPlugin({
      // 配置项
    }),
  ],
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
