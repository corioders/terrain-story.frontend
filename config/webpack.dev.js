const config = require('./config');
if (config.IS_PRODUCTION) console.warn('Waring: using webpack dev config in production env');

const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPluginConfig = {
	favicon: common.paths.htmlWebpackPluginFavicon,
	template: common.paths.htmlWebpackPluginTemplate,
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
	mode: 'development',
	target: common.webpack.target,
	devtool: config.IS_FAST ? 'eval-cheap-module-source-map' : 'source-map',

	context: common.webpack.context,
	entry: common.webpack.entry,
	output: common.webpack.output,
	resolve: common.webpack.resolve,
	cache: common.webpack.cache,

	module: { rules: common.webpack.module.rules },

	plugins: [...common.webpack.plugins, ...htmlWebpackPlugins],

	optimization: {
		runtimeChunk: 'single',
		splitChunks: config.IS_FAST ? false : undefined,
	},

	devServer: common.webpack.devServer,
};
