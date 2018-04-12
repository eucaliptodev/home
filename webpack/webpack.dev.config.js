var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        path.join(__dirname, '../index.js')
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/..',
        historyApiFallback: true
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            }, {
                test: /\.(png|jpg)$/,
                use: 'url-loader'
            }, {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'    // where the fonts will go
                    }
                }]
            }]
    }
}
