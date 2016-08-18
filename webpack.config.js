var webpack = require('webpack');
module.exports = {

  // Webpack starts here...
  entry: './src/index.js',

  // The bundle file is generated and moved to the build location...
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },

  module: {

    // Loaders handle file parsing...
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ],

    // Plugins modify the compiler...
    plugins: [
      new webpack.optimize.UglifyJsPlugin()
    ]
  }
};
