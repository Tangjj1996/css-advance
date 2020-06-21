const { resolve } = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const ROOT_DIR = resolve(__dirname, '../').replace(/\\/g, '/')

const buildFiles = {}
const buildHtml = []
const buildList = glob.sync(ROOT_DIR + '/!(node_modules|webpack)/index.js')

buildList.forEach(item => {
  const keyName = item.replace(ROOT_DIR, '').replace('index.js', '').replace(/\//g, '')
  buildFiles[keyName] = item
  buildHtml.push(new HtmlWebpackPlugin(
    {
      template: resolve(__dirname, `../${keyName}/index.html`),
      filename: `${keyName}.html`,
      chunks: keyName
    }
  ))
})

module.exports = {
  entry: buildFiles,
  output: {
    filename: '[name].[hash:6].js',
    chunkFilename: '[id].[chunkhash:6].bundle.js',
    path: resolve(__dirname, '../build')
  },
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              importLoaders: 2
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    ...buildHtml,
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:6].css'
    })
  ]
}
