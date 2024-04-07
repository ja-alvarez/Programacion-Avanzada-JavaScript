const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        app: [
          //  "@babel/polyfill", 
            "./src/app/index.js"
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './assets/js/app.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: './assets/css/app.bunble.css'
        }),

    //    new CopyWebpackPlugin({
    //        patterns: [
    //            {from: "./src/assets/img", to: "assets/img/"}
    //        ]
    //    })
    ]
};