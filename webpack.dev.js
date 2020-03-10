const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
	template: path.join(__dirname, "demo/index.html"),
	filename: "./index.html"
});
module.exports = {
	entry: path.join(__dirname, "demo/src/index.js"),
	output : {
		path: path.resolve(__dirname,'demo/dist')
	},
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(js|ts)$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-typescript'],
						plugins: ['@babel/plugin-proposal-object-rest-spread', "@babel/plugin-proposal-class-properties", "@babel/plugin-proposal-optional-chaining"]
					},
				},
				exclude: /node_modules/
			}
		]
	},
	plugins: [htmlWebpackPlugin],
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"]
	},
	devServer: {
		port: 8645,
		open: true
	}
}