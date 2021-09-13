const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'main.js',
      path: path.resolve(__dirname, './dist')
   },
   mode: 'production',
   plugins: [
      new CleanWebpackPlugin()
   ],
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
   }
};