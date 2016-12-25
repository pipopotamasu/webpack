const path = require('path');
module.exports = {
  entry: {
    app: "./src/js/app.js"
  },

  output: {
    path: __dirname + '/public',
    filename: "js/[name].bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react','es2015']
        }
      }
    ]
  }
}
