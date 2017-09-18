'use strict'

const webpack = require('webpack');

module.exports = {
	entry: __dirname + '/src/index.tsx',
	output: {
		// https://stackoverflow.com/questions/41094833/how-to-make-webpack-typescript-react-webpack-dev-server-configuration-for-auto-b
		path: __dirname + '/dist',
		filename: 'bundle.js',
		publicPath: '/',
	},

	resolve: {
		// extensions used to resolve modules, like "require('babel')"
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.webpack.js', '.web.js']
	},

	module: {
		loaders: [
			{ test: /\.tsx?$/, 
				exclude: ['./node_modules'],
				loader: ['babel-loader', 'ts-loader'] },
			{ test: /\.scss$/,
				loader: ['style-loader', 'css-loader', 'sass-loader'] },
			{ test: /\.css$/,
				exclude: ['./node_modules'],
				loader: ['style-loader', 'css-loader'],
			},
			// https://github.com/palantir/blueprint/issues/123
			{	test: /\.(woff|woff2)$/,
			  use: {
			    loader: 'url-loader',
			    options: {
			      name: 'fonts/[hash].[ext]',
			      limit: 5000,
			      mimetype: 'application/font-woff'
			    }
			  }
			}, 
			{	test: /\.(ttf|eot|svg)$/,
			  use: {
			    loader: 'file-loader',
			    options: {
			      name: 'fonts/[hash].[ext]'
			    }
			  }
			}

		],
	},

	devServer: {
		contentBase: './dist',
		inline: true,
		hot: true,
		open: true,
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	]

}
