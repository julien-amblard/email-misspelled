module.exports = {
	presets: ['@babel/preset-env', '@babel/preset-typescript'],
	plugins: [
		'@babel/plugin-proposal-object-rest-spread', 
		'@babel/plugin-proposal-optional-chaining', 
		'@babel/plugin-proposal-class-properties'
	]
}