/* eslint-disable no-undef */
import { join } from "path";
import MiniCssExtractPlugin, { loader as _loader } from "mini-css-extract-plugin";
const devMode = process.env.NODE_ENV !== "production";
export const entry = "./src/index.js";
export const mode = "development";
export const output = {
  filename: "./main.js",
  chunkFilename: "[name].bundle.js"
};
export const devServer = {
  contentBase: join(__dirname, "dist"),
  compress: true,
  port: 9000,
  watchContentBase: true,
  progress: true
};
export const plugins = [
  new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css"
  })
];
export const module = {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: "babel-loader"
      }
    },
    {
      test: /\.css$/,
      use: [
        devMode ? "style-loader" : _loader,
        {
          loader: "css-loader",
          options: {
            modules: true
          }
        }
      ]
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: ["file-loader"]
    }
  ]
};