const path = require('path');
const webpack = require('webpack');

const DIST_DIR = path.join(__dirname, '/client');

module.exports = {
  mode: 'development',

  output: {
    path: DIST_DIR,
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
  plugins: [new webpack.ProgressPlugin()],

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: [path.resolve(__dirname, 'src')],
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    }],
  },
};
