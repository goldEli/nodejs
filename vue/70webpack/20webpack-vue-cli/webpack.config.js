const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 最新的 vue-loader 中，VueLoaderPlugin 插件的位置有所改变
const { VueLoaderPlugin } = require("vue-loader/dist/index");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/main.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
      filename: "index.html",
      title: "手搭 Vue 开发环境",
    }),
    // 添加 VueLoaderPlugin 插件
    new VueLoaderPlugin(),
  ],
  devServer: {
    // contentBase: path.resolve(__dirname, "./dist"),
    port: 8088,
    // publicPath: "/",
  },
};
