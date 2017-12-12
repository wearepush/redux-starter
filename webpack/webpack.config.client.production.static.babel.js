import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';;
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';
import getBaseConfig from './webpack.config';
import getBaseProdConfig from './webpack.config.client.production.babel';

const baseConfig = getBaseProdConfig;

const config = {
  output: {
    path: getBaseConfig.path,
    publicPath: '/',
    filename: getBaseConfig.filename
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'index.html',
      template: path.resolve(__dirname, '..', 'static', 'template.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        removeAttributeQuotes: true,
        collapseBooleanAttributes: true
      },
      publicPath: '/'
    }),

    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    })
  ]
};

export default merge(baseConfig, config);
