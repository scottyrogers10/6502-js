const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
	entry: ["./src/index.js"],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
		],
	},
	output: {
		chunkFilename: "chunks/[name]-[contenthash:4].js",
		filename: "[name].[contenthash:4].js",
		path: path.resolve(__dirname, "../dist"),
		publicPath: "/",
	},
	plugins: [
		new CleanWebpackPlugin(),
		new CopyPlugin({
			patterns: [{ from: "./public/assets/styles", to: "./assets/styles/" }],
		}),
		new HtmlWebpackPlugin({
			inject: true,
			template: "./public/index.html",
		}),
		new webpack.ProgressPlugin(),
	],
	optimization: {
		splitChunks: {
			cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/ } },
			chunks: "all",
			maxInitialRequests: Infinity,
			minSize: 0,
		},
	},
};
