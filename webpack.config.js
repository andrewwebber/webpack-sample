module.exports = {
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ["style", "css"]
    }, {
      test: /\.jsx$/,
      loaders: ["babel"]
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    },{
      test: /\.sass$/,
      // Passing indentedSyntax query param to node-sass
      loader: "style!css!sass?indentedSyntax"
    }]
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    alias: {},
    extensions: ['', '.jsx', '.js']
  },
  entry: "./src/app.jsx",
  output: {
    path: "./build",
    filename: "app.js"
  }
}
