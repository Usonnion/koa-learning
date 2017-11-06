const path = require('path'),
	webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
	devtool: 'eval-source-map',
	context: path.resolve(__dirname, '..'),
	entry: {
		bundle: [
      './client',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
    ],
		vender: [
			'react',
			'react-dom',
			'redux',
			'react-redux',
			'superagent'
		]
	},
	output: {
		path: path.resolve(__dirname, '../dist/client'),
		filename: '[name].js',
		chunkFilename: 'chunk.[name].js',
		publicPath: '/'
	},
	module: {
		loaders: [{
				test: /\.html$/,
				loader: 'html-loader?minimize=false'
			},
			{
        test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
        exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
        loader: 'babel-loader'//loader的名称（必须）
      }
		]
	},
	resolve: {extensions: ['.js']},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest'],
			filename: '[name].js'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)}),
		new HtmlWebpackPlugin({
			filename: '../views/dev/index.html',
			template: './views/tpl/index.tpl.html'
		}),
		new ProgressBarPlugin({summary: false})
	]
}
