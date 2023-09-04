const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const {dependencies} = require('../package.json');


module.exports = {
    entry: './src/index',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                },
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'admin',
            library: { type: 'var', name: 'admin' },
            filename: 'remoteEntry.js',
            exposes: {
                './AdminComponent': './src/App'
            },
            shared: {
                ...dependencies,
                react: {
                    singleton: true,
                    version: '0',
                    requiredVersion: false,
                },
                'react-dom': {
                    requiredVersion: false,
                    singleton: true,
                    version: '0',
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};