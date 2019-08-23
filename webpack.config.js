const path = require("path");

const exp = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|build)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};

if (process.env.NODE_ENV !== "production") {
  exp.externals = {
    react: "commonjs react",
    "prop-types": "commonjs prop-types",
  };
} else {
  exp.devtool = "#source-map";
}

module.exports = exp;