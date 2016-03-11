//Needed to separate css output file
var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
var path = require( 'path' );

module.exports = {

	/**
	 * Specify entry point for app
	 */
	entry: [ path.join( __dirname, 'app', 'validation.entry.js' ) ],

	/**
	 * Specify where builded files will be written
	 */
	output: {
		path: path.join( __dirname, 'dist' ),
		filename: 'validation.js'
	},

	/**
	 * Externals section need if you want to exclude some libs from output file
	 * I.e. I want to do: `var _ = require( 'underscore' ), but don't want to include this
	 * file in bundle. Then I add this dependency in this section, that talk webpack to search it
	 * in global scope. That mean that you should load this dependency (in this case underscore
	 * library) before you load bundled file
	 */
	externals: {
		'underscore'              : '_',
		'bluebird'                : 'Promise',
		'virtual-dom'             : 'virtualDom',
		'fastemitter-with-context': 'Fastemitter',
		'js-csp': 'csp'
	},

	module   : {
		/**
		 * Tell webpack what file to resolve
		 */
		resolve: {
			extensions: [ '', '.js', '.styl' ]
		},
		/**
		 * Tell webpack HOW load file
		 * I.e. I want then all my js files (exclude libs in node_modules)
		 * will be compiled by babel, and must tell webpack that he must use
		 * babel-loader for it
		 */
		loaders: [
			{
				test  : /\.js$/,
				exclude: [/hot/,/node_modules/,/babel/],
				loader: 'babel',
				query: {
					"presets": ['es2015', 'react'],
					"plugins": ["transform-runtime"]
				}
			},
			/*{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},*/
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /.styl$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
			}
		]
	},
	plugins: [
		//specify name of output css file
		new ExtractTextPlugin( 'validation.css' )
	],

	/**
	 * Some settings for stylus
	 */
	stylus: {
		/**
		 * Load variables from common
		 * Right now this is don't work by bug in stylus
		 * Hope this bug fixed in next minor version
		 */
		//import: path.join( process.cwd(), 'common', 'styles', 'base', 'variables.styl' )
	}
};