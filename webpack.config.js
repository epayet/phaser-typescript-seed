var path = require('path');
var webpack = require('webpack');

// Phaser webpack config
var phaserModule = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
var pixi = path.join(phaserModule, 'build/custom/pixi.js');
var p2 = path.join(phaserModule, 'build/custom/p2.js');

module.exports = {
    entry: {
        app: "./src/index.ts",
        vendor: "./src/vendor.ts",
        html: "./src/index.html"
    },

    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/dist"
    },

    devtool: "source-map",

    module: {
        loaders: [
            { test: /\.ts$/, loader: "ts-loader" },
            { test: /pixi\.js/, loader: 'expose?PIXI' },
            { test: /phaser-split\.js$/, loader: 'expose?Phaser' },
            { test: /p2\.js/, loader: 'expose?p2' },
            {
                test: /\.(jpe?g|png|gif|svg|html)$/i,
                loader: 'file?name=[name].[ext]'
            }
        ],

        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    resolve: {
        extensions: ["", ".ts", ".js"],
        alias: {
            'phaser': phaser,
            'pixi': pixi,
            'p2': p2
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(
            'vendor',
            'vendor.bundle.js'
        )
    ]
};