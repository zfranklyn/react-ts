'use strict'

module.exports = {
	entry: './src/app.ts',
	output: {
		filename: './dist/bundle.js',
	},

	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json'],
	},

	module: {
		loaders: [
			{ test: /\.tsx?$/, loader: 'ts-loader' },
		],
	},

}
