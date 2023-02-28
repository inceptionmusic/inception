const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.bundle.js',
    publicPath: '/',
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  devServer: {
    hot: true,
    compress: true,
    host: '0.0.0.0',
    port: 80,
    historyApiFallback: {
      index: '/',
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    allowedHosts: 'all',
  },
  module: {
    rules: [
      // Load JavaScript
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // Load TypeScript
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      // Load CSS
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Load assets
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]',
        },
      },
      // Load fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
    new webpack.EnvironmentPlugin(process.env),
  ],
}
