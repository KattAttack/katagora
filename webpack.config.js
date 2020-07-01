var path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
	template: "./src/index.html",
	filename: "./index.html",
});

module.exports = (env) => {
	return {
		entry: [
			"babel-polyfill",
			path.resolve(__dirname, "./js/app.js"),
			path.resolve(__dirname, "./js/mobile/app.js"),
		],
		output: {
			path: path.resolve(__dirname, "./dist"),
			filename: "bundle.js",
		},
		resolve: {
			extensions: [".js", ".jsx"],
		},
		module: {
			rules: [
				{
					test: /.jsx?$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env", "@babel/preset-react"],
							plugins: [
								"@babel/plugin-proposal-class-properties",
								"@babel/plugin-syntax-dynamic-import",
							],
						},
					},
				},
				{
					test: /\.scss$/,
					use: ["style-loader", "css-loader", "sass-loader"],
				},
				{
					test: /\.md$/,
					use: [
						{
							loader: "html-loader",
						},
						{
							loader: "markdown-loader",
							options: {
								/* your options here */
							},
						},
					],
				},
				{
					test: /\.(gif|svg|jpg|png)$/,
					loader: "file-loader",
				},
			],
		},
		plugins: [
			htmlWebpackPlugin,
			new webpack.DefinePlugin({
				HOST:
					env.PRODUCTION === "true"
						? JSON.stringify("https://www.katagora.com/")
						: JSON.stringify("https://localhost:4567/"),
			}),
		],
	};
};
