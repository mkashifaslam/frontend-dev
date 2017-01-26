module.exports = {
	entry: './app',
	output: {
		path: './build',
		filename: 'bundle.js'
	},
	 resolve: {
    	extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  	},
	module: {
		loaders: [
			{
				test: /\.ts$/, 
				loader: 'ts-loader', 
				exclude: /node_modules/
			}
		]
	},
	devServer : {
		port: 3000,
		contentBase: './build',
		inline: true
	}
}