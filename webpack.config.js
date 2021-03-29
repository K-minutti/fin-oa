const path = require("path");

module.exports = {
  entry: ["babel-polyfill", "./client/index.js"],
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
  },
  context: __dirname,
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};

// module.exports = {
//   mode: "development",
//   entry: "./client/index.js",
//   output: {
//     path: path.join(__dirname, "public"),
//     filename: "bundle.js",
//   },
//   devServer: {
//     contentBase: path.join(__dirname, "public"),
//     compress: false,
//     port: 8080,
//   },
//   devtool: "source-map",
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         use: ["babel-loader"],
//       },
//     ],
//   },
//   resolve: {
//     extensions: ["*", ".js", ".jsx"],
//   },
// };
