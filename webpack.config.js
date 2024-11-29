const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Импортируем плагин

module.exports = (env, options) => {
  let isProd = options.mode === 'production';

  return {
    target: isProd ? 'browserslist' : 'web',
    entry: './src/index.js',
    devtool: 'source-map',
    stats: 'errors-only',
    output: {
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: 'assets/[hash][ext][query]',
      clean: true,
    },

    devServer: {
      open: true,
      hot: true,
      watchFiles: path.join(__dirname, 'src')
    },

    module: {
      rules: [
        {test: /\.(html)$/, use: ['html-loader']},
        {
          test: /\.(s[ac]|c)ss$/i, // /\.(le|c)ss$/i если вы используете less
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ],
        }, // Добавляем загрузчики стилей
        {
          test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
          type: isProd ? 'asset/resource' : 'asset/inline',
        },
        {
          test: /\.(woff2?|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          }
        }
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css', // Формат имени файла
      }), // Добавляем в список плагинов
    ],
  };
}
