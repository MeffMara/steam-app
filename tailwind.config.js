module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    //'./nuxt.config.{js,ts}',
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        "primary-button": "#214B6B",
        "primary-button-hover": "#517998",
        "primary-card": "#17202D",
        "main-color": "#1B2837",
        "list-color": "#1A3A53",
      },
    },
    fontFamily: {
      display: ["Noto Sans", "sans-serif"],
      body: ["Noto Sans"],
    },
    plugins: [],
  },
};
