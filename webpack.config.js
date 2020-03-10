var path = require('path')
var webpack = require('webpack')
const config = {
	entry : './src/index.ts',
	output : {
		path: path.resolve(__dirname,'lib'),
		filename: 'index.js',
		libraryTarget: 'umd'
	},
	mode: 'production',
	target: 'web',
	plugins: [],
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"]
	},
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
			test: /\.(js|ts)$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
						presets: ['@babel/preset-env', '@babel/preset-typescript'],
						plugins: ['@babel/plugin-proposal-object-rest-spread', "@babel/plugin-proposal-class-properties", "@babel/plugin-proposal-optional-chaining"]
					}
				}
			}
		]
	}
}
module.exports = config