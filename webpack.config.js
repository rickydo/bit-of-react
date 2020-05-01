const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = () => {
  // call dotenv and it will return an Object with a parsed key 
  console.log("my path", path.join(__dirname));
  const env = dotenv.config({ path: `${path.join(__dirname)}/.env`}).parsed;
  
  // reduce it to a nice object, the same as before
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    plugins: [
      new webpack.DefinePlugin(envKeys),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html',
        favicon: './public/favicon.ico',
        title: 'My react testing app',
        manifest: './public/manifest.json'
      }),
    ],
    entry: {
      app: ['./src/index.js']
    },
    output: {
      filename: 'bundle.[hash].js',
      chunkFilename: '[name].[chunkhash].js',
    },
    devServer: {
      host: 'localhost',
      port: 3001,
      historyApiFallback: true,
      open: true,
    },
    devtool: 'cheap-module-source-map',
    node: {
      fs: 'empty',
      tls: 'empty',
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
              test: /\.jsx?$/,
              exclude: /node_modules/,
              resolve: {
                extensions: ['.js', '.jsx', '.json'],
              },
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: false,
                sourceMap: false,
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
          exclude: /node_modules/,
          use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
        }
      ]
    }
  };
}