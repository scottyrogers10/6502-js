const { merge } = require("webpack-merge");
const commonConfig = require("./common.js");

module.exports = merge(commonConfig, {
	devServer: {
		compress: true,
		contentBase: "./dist",
		historyApiFallback: true,
		port: 3000,
		publicPath: "http://localhost:3000/",
		watchContentBase: true,
	},
	devtool: "inline-source-map",
	mode: "development",
});
