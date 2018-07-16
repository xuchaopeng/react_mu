var path = require('path');
var webpack = require('webpack');
var HtmlWebPackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
	mode:'development',
	entry:'./app/src/main.js',
	output:{
		path: path.resolve(__dirname,'./app/dist'),
		filename: "bundle.js",
		publicPath:"xuni"
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
				use:['style-loader','css-loader','less-loader']
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
	plugins: [
	    new ExtractTextPlugin('[name].css'),
        new webpack.optimize.SplitChunksPlugin({
        	chunks: "all",
            name: true
        }),
        new UglifyJSPlugin()
	],
	watch:true
}