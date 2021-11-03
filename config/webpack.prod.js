const config = require('./config');
if (!config.IS_PRODUCTION) console.warn('Waring: using webpack prod config not in production env');

const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const JsMinimizerPlugin = require('terser-webpack-plugin');

const htmlWebpackPluginConfig = {
	favicon: common.paths.htmlWebpackPluginFavicon,
	template: common.paths.htmlWebpackPluginTemplate,
	minify: {
		collapseWhitespace: true,
		removeComments: true,
		removeRedundantAttributes: true,
		removeScriptTypeAttributes: true,
		removeStyleLinkTypeAttributes: true,
		useShortDoctype: true,
	},
};

const htmlWebpackPlugins = [];
for (const chunkName in common.webpack.entry) {
	htmlWebpackPlugins.push(
		new HtmlWebpackPlugin({
			chunks: [`${chunkName}`],
			filename: `${chunkName}/index.html`,

			...htmlWebpackPluginConfig,
		}),
	);
}

module.exports = {
	mode: 'production',
	// use of es5 is needed as the webpack runtime is not transpiled by babel
	target: common.webpack.target,
	devtool: config.IS_DEBUG ? 'source-map' : false,

	context: common.webpack.context,
	entry: common.webpack.entry,
	output: common.webpack.output,
	resolve: common.webpack.resolve,
	cache: common.webpack.cache,

	module: { rules: common.webpack.module.rules },

	plugins: [...common.webpack.plugins, ...htmlWebpackPlugins],

	optimization: {
		minimizer: [new JsMinimizerPlugin({ extractComments: false, terserOptions: { toplevel: true, compress: { passes: 10 } } }), new CssMinimizerPlugin()],
	},

	devServer: config.IS_DEBUG ? common.webpack.devServer : undefined,
};
