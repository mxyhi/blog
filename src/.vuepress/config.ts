import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "mxy",
      description: "mxy的博客",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
