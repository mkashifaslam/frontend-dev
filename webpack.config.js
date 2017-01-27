module.exports = {
	entry: './app',
	output: {
		path: './build',
		filename: 'bundle.js'
	},
	 resolve: {
    	extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.ejs', '.css']
  	},
  	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.ts$/, 
				loader: 'ts-loader', 
				exclude: /node_modules/
			},
			 { 
			 	test: /\.css$/, 
			 	loader: "style-loader!css-loader" 
			 },
			{test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=/images/[name].[ext]"},
			 { test: /\.ejs$/, loader: 'ejs-loader?variable=data' },
		]
	},
	ejsLoader : {
	    variable    : 'data',
	    interpolate : /\{\{(.+?)\}\}/g,
	    evaluate    : /\[\[(.+?)\]\]/g
	},
	devServer : {
		port: 3000,
		contentBase: './build',
		inline: true
	}
}