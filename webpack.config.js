const path = require('path');
const webpack = require('webpack');

const DIST_DIR = path.join(__dirname, '/client');

module.exports = {
  mode: 'production',

  output: {
    path: DIST_DIR,
    filename: 'compressed.[name].js',
    // chunkFilename: '[id].[chunkhash].js',
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
  plugins: [
    new webpack.ProgressPlugin(),
  ],

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: [
        path.resolve(__dirname, '/node_modules/'),
      ],
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
