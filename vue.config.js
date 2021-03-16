module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV !== "development") {
      config.output.publicPath = "/activity/lottery/";
    }
    return {
      resolve: {
        extensions: [".js", ".json", ".vue"],
        alias: {
          vue$: "vue/dist/vue.esm.js"
        }
      }
    };
  }
};
