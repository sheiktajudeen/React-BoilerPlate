var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals:{
    jquery:'jQuery'
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename:'./public/bundle.js'
  },
  resolve: {
    alias: {
      Main: path.resolve('./app/components/Main.jsx'),
      applicationStyles: path.resolve('./app/styles/app.scss')
    },
    extensions: ['.js','.jsx']
  },
  module:{
    loaders:[{
      loader:'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0',
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/
    }]
  }
};
