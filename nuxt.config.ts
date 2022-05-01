import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  head: {
    title: "nuxt-typescript-starter",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "steam games search",
        name: "for find games on steam",
        content: "Nuxt.js TypeScript Project",
      },
    ],
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
    rollupOptions: {
      external: [/^node:.*/],
    },
  },

  compilerOptions: {
    runtimeCompiler: true,
  },

  buildModules: ["@pinia/nuxt"],
  css: ["@/assets/css/main.css"],
  // plugins: ["~/plugins/VueSlider.client.js"],
});
