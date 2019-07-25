var path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
	template: "./src/index.html",
	filename: "./index.html"
});

module.exports = env => {
	return {
		entry: path.resolve(__dirname, "./js/app.js"),
		output: {
			path: path.resolve(__dirname, "./dist"),
			filename: "bundle.js"
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env", "@babel/preset-react"],
							plugins: ["@babel/plugin-proposal-class-properties"]
						}
					}
				},
				{
					test: /\.scss$/,
					use: ["style-loader", "css-loader", "sass-loader"]
				},
				{
					test: /\.md$/,
					use: [
						{
							loader: "html-loader"
						},
						{
							loader: "markdown-loader",
							options: {
								/* your options here */
							}
						}
					]
				}
			]
		},
		plugins: [
			htmlWebpackPlugin,
			new webpack.DefinePlugin({ PRODUCTION: env.PRODUCTION === "true" })
		]
	};
};
