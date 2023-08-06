const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8082
    },
    plugins: [
        // exposing the entry point
        new ModuleFederationPlugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartShow': './src/index'
            }
        }),
        // this will inject the script files in the html
        // eg <script src='' />
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}