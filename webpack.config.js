'use strict'

module.exports = {
	entry: __dirname + '/src/index.ts',
	output: {
		filename: './dist/bundle.js',
	},

	module: {
		loaders: [
			{ test: /\.tsx?$/, loader: 'ts-loader' },
		],
	},

}
