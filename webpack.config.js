var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry:'./app/src/main.js',
	output:{
		path: path.resolve(__dirname,'./app/dist'), //输出位置
		filename: "bundle.js", //输入文件
		publicPath:"xuni" //指定资源引用的目录
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				include:[
					path.resolve(__dirname,'app')
				],
				exclude:[
					path.resolve(__dirname,'node-modules')
				],
				loader:"babel-loader",
				options:{
					presets:["env","react"]
				}
			},
			{
				test:/\.(css|less)$/,
				include:[
					path.resolve(__dirname,'app')
				],
				exclude:[
					path.resolve(__dirname,'node-modules')
				],
				use:['style-loader','css-loader',{
				    loader: 'postcss-loader',
				    options: {
				        config: {
				            path: './' //postcss.config.js文件所在的目录
				        }
				    }
				},'less-loader']
			},
			{
				test:/\.(sass|scss)$/,
				include:[
					path.resolve(__dirname,'app')
				],
				exclude:[
					path.resolve(__dirname,'node-modules')
				],
				use:['style-loader','css-loader','sass-loader']
			},
			{ 
				test: /\.jpg$/, 
				loader: "file-loader" 
			},
      		{ 
      			test: /\.png$/, 
      			loader: "url-loader?mimetype=image/png" 
      		},
			{
				test:/\.html$/,
				include:[
					path.resolve(__dirname,'app')
				],
				exclude:[
					path.resolve(__dirname,'node-modules')
				],
				use:[
					{
			           loader: "html-loader",
			           options: { minimize: true }
			        }
				]
			}
		]
	},
    devServer: {
        contentBase: './app', //指定服务器的目录
        port: 8080   //指定端口
    },
	plugins: [
		new HtmlWebpackPlugin({
			title:'React_moves', //html标题
			filename:'index.html' //输出html文件名
		})
	],
	watch:true
}