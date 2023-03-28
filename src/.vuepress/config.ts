import { defineUserConfig } from 'vuepress';
import theme from './theme.js';

export default defineUserConfig({
  base: '/blog/',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'm blog',
      description: 'mxy的博客',
    },
  },
  plugins: [[]],
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
