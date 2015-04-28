var autoprefixer = require('autoprefixer-core');

module.exports = {
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css!postcss'
    }, {
      test: /\.jsx$/,
      loaders: ["babel"]
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    },  {
      test: /\.sass$/,
      // Passing indentedSyntax query param to node-sass
      loader: "style!css!sass?indentedSyntax!postcss"
    },{ test: /\.woff$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
    { test: /\.woff2$/, loader: "url-loader?limit=10000&mimetype=application/font-woff2" },
{ test: /\.ttf$/,  loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
{ test: /\.eot$/,  loader: "file-loader" },
{ test: /\.svg$/,  loader: "url-loader?limit=10000&mimetype=image/svg+xml" }]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 version'] }) ],
  resolve: {
    modulesDirectories: ['node_modules'],
    alias: {},
    extensions: ['', '.jsx', '.js','.sass','.scss']
  },
  entry: "./src/app.jsx",
  output: {
    path: "./build",
    filename: "app.js",
    publicPath: '/build/'
  }
}
