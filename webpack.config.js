module.exports = {
	entry: './main.js',
	output: {
		path:'./',
		filename:'index.js'
	},
	devServer: {
		inline: true,
		port: 3333
	},
	module: {
		loaders: [
			{
				//Which file type to run specific transofmation on
				test: /\.js$/,
				//Directory to be included or excluded from being transformed
				exclude: /node_modules/,
				//Specific loaders we want to run
				loader: 'babel',
				query: {
					presets: ['es2015','react']
				}
			}
		]
	}
}	
