var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  //入口
  entry: './src/index.js',
  //输出
  output: {
    filename: 'bundle-[hash].js',	
  // __dirname指当前文件所在目录
    path: path.resolve(__dirname, 'dist')
},
  devServer:{
	contentBase:path.resolve(__dirname,'dist'),
	compress:true,
	port:9000
  },
  plugins: [
    new HtmlwebpackPlugin({
      title:'webpack-demos',
      fifename:'index.html'
    }),
    new OpenBrowserPlugin({
      url:'http://localhost:9000'
    })	  
  ],
  module:{
    loaders: [
      {
	test:/\.(jpg|png|jpeg)$/,
	loaders: [
		'file-loader',
		'image-webpack-loader'
	]
      },
      {
        test:/\.scss$/,
        loaders:[
               'style-loader',
       	       'css-loader',
	       'sass-loader',
	       'autoprefixer-loader'
        ]
      }
    ]
  }	
};
