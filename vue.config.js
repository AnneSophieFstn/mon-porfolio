module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/mon-portfolio/" : "/",
  transpileDependencies: ["vuetify"],
  outputDir: "dist"
};
