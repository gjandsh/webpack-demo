var path = require('path');

module.exports = {
  //入口
  entry: './src/index.js',
  //输出
  output: {
    filename: 'bundle.js',	
  // __dirname指当前文件所在目录
    path: path.resolve(__dirname, 'dist')
  }
};
