const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'main.js',
      path: path.resolve(__dirname, './dist')
   },
   mode: 'development',
   plugins: [
      new CleanWebpackPlugin()
   ],
   devServer: {
      open: true,
      port: 8888,
      hot: true,
      writeToDisk: true,
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/env']
               }
            },
            exclude: /node_modules/,
         }
      ]
   },
};