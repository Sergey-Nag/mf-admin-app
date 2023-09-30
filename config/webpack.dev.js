const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require('path');

module.exports = merge(commonConfig, {
    mode: 'development',
    output: {
        publicPath: `http://localhost:3001/`,
    },
    devServer: {
        hot: true,
        static: {
            directory: path.join(__dirname, 'public'),
        },
        watchFiles: ['src/**'],
        port: 3001,
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        open: true,
    },
    devtool: 'source-map',
    optimization: {
        runtimeChunk: 'single'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: "[local]--[hash:base64:5]",
                            },
                        }
                    }
                ],
            },
        ]
    }
});