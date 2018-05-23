const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const content = require('./src/content.js');

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
			filename: 'hu.html',
			title: 'Gergely Dániel',
			template: './src/templates/index.hbs',
			templateParameters: content.hu
		}),
		new HtmlWebpackPlugin({
			filename: 'en.html',
			title: 'Gergely Dániel',
			template: './src/templates/index.hbs',
			templateParameters: content.en
		})
	]
};
