const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  resolveLoader: {
    modules: [
      path.resolve(process.cwd(), 'node_modules'),
      path.resolve(__dirname, 'node_modules'),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'bundle'),
  },
  devServer: {
    static: {
      directory: path.join(process.cwd(), 'build'),
    },
    client: {
      progress: true,
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    historyApiFallback: true,
    open: true,
    hot: true,
    compress: true,
    port: 3000,
  },
};
