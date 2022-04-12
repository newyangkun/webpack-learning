// webpack 配置文件默认遵循 CommonJs 规范
const path = require('path')

module.exports = {
  // mode: 'production',
  mode: 'development', // 默认为 production
  entry: './src/index.js',
  output: {
    // path 必须是绝对路径
    // path: path.resolve('./dist/'),
    path: path.resolve(__dirname, './dist/'),
    // path: path.join(__dirname, './dist/'),
    filename: 'bundle.js'
  }
}
