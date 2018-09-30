const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: { path: __dirname, filename: 'bundle.js' },
    watch: true,
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
};