import path from "node:path";

export default {
  output: {
    filename: "main.js",
  },
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader" }],
  },
  devServer: {
    hot: true,
    static: {
      directory: './dist',
      watch: true
    }
  }
};