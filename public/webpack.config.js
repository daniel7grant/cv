const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
			test: /\.s?css$/,
			use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
		}, {
			test: /\.hbs$/,
			use: 'handlebars-loader'
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'hu.html',
			minify: true,
			title: 'Gergely Dániel',
			template: './src/templates/index.hbs',
			templateParameters: content.hu
		}),
		new HtmlWebpackPlugin({
			filename: 'en.html',
			minify: true,
			title: 'Gergely Dániel',
			template: './src/templates/index.hbs',
			templateParameters: content.en
		}),
		new MiniCssExtractPlugin({
			filename: 'theme.css'
		})
	]
};
