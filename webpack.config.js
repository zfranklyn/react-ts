'use strict'

module.exports = {
	entry: __dirname + '/src/index.tsx',
	output: {
		filename: './dist/bundle.js',
	},

	resolve: {
		// extensions used to resolve modules, like "require('babel')"
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.webpack.js', '.web.js']
	},

	module: {
		loaders: [
			{ test: /\.tsx?$/, loader: ['babel-loader', 'ts-loader'] },
		],
	},

	devServer: {
		contentBase: './dist'
	}

}
