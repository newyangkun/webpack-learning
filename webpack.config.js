// webpack 配置文件默认遵循 CommonJs 规范
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')


module.exports = {
  // mode: 'production',
  mode: 'production', // 默认为 production
  entry: './src/index.js',
  output: {
    // path 必须是绝对路径
    // path: path.resolve('./dist/'),
    path: path.resolve(__dirname, './dist/'),
    // path: path.join(__dirname, './dist/'),
    filename: 'bundle.js'
  },
  devServer: {
    open: true,
    hot: true,
    port: 3200,
    static: path.resolve(__dirname, 'public')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ]
}
