const path = require('path');
const webpack = require('webpack');
// merge takes in one configuration and another one and merges them both together to give us one
const merge = require("webpack-merge");

const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, '../src');

module.exports = env => {
    const { PLATFORM, VERSION } = env;
    return merge([
        {
            entry: ['@babel/polyfill', APP_DIR], 
            module: {
            rules: [
                {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
                },
                {
                test: /\.scss$/,
                use: [
                    PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    'sass-loader'
                  ]
                },
            ]
            },
            plugins: [
                new HtmlWebpackPlugin({ 
                    template: './src/index.html', 
                    filename: './index.html' 
                }),
                // The DefinePlugin allows you to create global constants which can be configured at compile time
                new webpack.DefinePlugin({ 
                    'process.env.VERSION': JSON.stringify(env.VERSION),
                    'process.env.PLATFORM': JSON.stringify(env.PLATFORM)
                }),
                new CopyWebpackPlugin([ { from: 'src/static' } ]), 
            ]
        }
    ])
}