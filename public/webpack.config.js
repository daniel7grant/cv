const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const content = require('./src/content.js');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.[hash].js'
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
		new CleanWebpackPlugin(['dist']),
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
		new HtmlWebpackPlugin({
			filename: '404.html',
			minify: true,
			title: 'Gergely Dániel',
			template: './src/templates/404.hbs',
			templateParameters: {name: 'I can\'t find it :('}
		}),
		new MiniCssExtractPlugin({
			filename: 'theme.[hash].css'
		})
	]
};
