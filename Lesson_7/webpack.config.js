module.exports = {
  devtool: "source-map",
  watch: true,
  entry: {
    filename: "./src/app.js",
  },
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
