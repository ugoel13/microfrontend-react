const htmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports ={
    devServer: {
        port: 8080,
    },
    mode: 'development',

    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                products: 'products@http://localhost:8081/remoteEntry.js',
                cart: 'cart@http://localhost:8082/remoteEntry.js',
            }
        }),
        new htmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
}