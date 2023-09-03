const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require('path');

const conf = merge(commonConfig, {
    mode: 'development',
    output: {
        publicPath: `http://localhost:3001/`,
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3001,
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    },
    devtool: 'source-map',
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
    // optimization: {
    //     runtimeChunk: 'single'
    // }
});
console.log(conf);
module.exports = conf;