var path = require("path");
module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    "router": "./router"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath : "/dist/",
    filename: "[name].bundle.js",
    library: "Personnel"
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3001,
    contentBase: path.resolve(__dirname, "examples"),
    historyApiFallback: true
  }
};
