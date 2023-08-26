const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
    mode: 'production',
    output: {
        publicPath: `http://${process.env.REMOTE_HOST ?? 'localhost:3001'}/`,
    },
});
