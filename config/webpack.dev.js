const config = require('./config');
if (config.IS_PRODUCTION) console.warn('Waring: using webpack dev config in production env');

const path = require('path');

const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');


const htmlWebpackPlugins = [];
for (const appName of common.appsNames) {
	htmlWebpackPlugins.push(
		new HtmlWebpackPlugin({
			chunks: [`${appName}`],
			filename: `${appName}/index.html`,

      favicon: path.resolve(common.paths.apps, appName, 'public', 'favicon.ico'),
      template: path.resolve(common.paths.apps, appName, 'public', 'index.html')
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
