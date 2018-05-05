const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Content = require('./content.js');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve('dist'),
		filename: 'bundle.js'
	},
	mode: 'development',
	module: {
		rules: [{
			test: /\.js$/,
			use: 'babel-loader'
		}, {
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader']
		}, {
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.hbs$/,
			use: 'handlebars-loader'
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Gergely Dániel',
			template: 'src/templates/index.hbs',
			templateParameters: Content
		})
	]
};
