const path = require("path");

module.exports = {
  mode: "development",
  entry: "./js/App.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    static: path.resolve(__dirname, "dist"), // Utilisez la propriété 'static' au lieu de 'contentBase si le content base ne marche '
    open: true,
  },
};
