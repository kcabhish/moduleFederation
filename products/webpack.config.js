
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081
    },
    plugins: [
        // exposing the entry point
        new ModuleFederationPlugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductsIndex': './src/bootstrap'
            },
            shared: {
                faker: {
                    // this setting is reuquired specially for react
                    singleton: true
                }
            }
        }),
        // this will inject the script files in the html
        // eg <script src='' />
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}
