var bower_dir = __dirname + '/bower_components';
var autoprefixer = require('autoprefixer-core');
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  module: {
    noParse: [bower_dir + '/materialize/dist/js/materialize.js',bower_dir + '/jquery/dist/jquery.js'],
    loaders: [{
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    }, {
      test: /\.css$/,
      loader: 'style!css!postcss'
    }, {
      test: /\.jsx$/,
      loaders: ["babel"]
    }, {
      test: /\.js$/,
      loaders: ["babel"]
    }, {
      test: /\.less$/,
      loader: 'style!css!less!postcss'
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }, {
      test: /\.sass$/,
      // Passing indentedSyntax query param to node-sass
      loader: "style!css!sass?indentedSyntax!postcss"
    }, {
      test: /\.woff$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.woff2$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff2"
    }, {
      test: /\.ttf$/,
      loader: "url-loader?limit=10000&mimetype=application/octet-stream"
    }, {
      test: /\.eot$/,
      loader: "file-loader"
    }, {
      test: /\.svg$/,
      loader: "url-loader?limit=10000&mimetype=image/svg+xml"
    }]
  },
  postcss: [autoprefixer({
    browsers: ['last 2 version']
  })],
  resolve: {
    modulesDirectories: ['node_modules'],
    alias: {
      'materialize': bower_dir + '/materialize/dist/js/materialize.js',
      'materialize.scss': bower_dir + '/materialize/sass/materialize.scss',
      'jquery': bower_dir + '/jquery/dist/jquery.js',
    },
    extensions: ['', '.jsx', '.js', '.sass', '.scss']
  },
  entry: {
    app: process.env.NODE_ENV === 'production' ? ['./src/app.jsx'] : ['webpack/hot/dev-server','./src/app.jsx'],
    vendors: ['materialize', 'materialize.scss', 'jquery']
  },
  output: {
    // If in production mode we put the files into the dist folder instead
    path: process.env.NODE_ENV === 'production' ? './dist' : './build',
    filename: process.env.NODE_ENV === 'production' ? "app-[hash].js" : "app.js",
    publicPath: '/'
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: 'App',
    //   filename: 'index.html'
    // }),
    new webpack.ProvidePlugin({
      Materialize: "materialize",
      validate_field: "materialize",
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "root.jQuery": "jquery"
    }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')

  ]
};

module.exports = config;
