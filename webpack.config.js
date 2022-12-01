const path = require("path");
const webpack = require("webpack");
const pack = require("./package");

const isProductionMode = true;
const header = `
    🌊 ${pack.name} 🌊 - ${pack.description}
    Library By: ${pack.author}
    Version: v${pack.version}
    GitHub: ${pack.homepage}
    License: ${pack.license} 
`;

module.exports = {
    /* "0-Config" 🤔 */
    entry: {
        Fluid: './src/fluid.js'
    },
    output: {
        library: 'Fluid',
        libraryTarget: 'umd',
        filename: isProductionMode ? 'fluid.min.js' : 'fluid.js',
        path: path.join(__dirname, "lib")
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: header
        })
    ],
    devtool: isProductionMode ? "none" : "inline-source-map",
    mode: isProductionMode ? 'production' : 'development',

    /* Loaders Configurations */
    module: {
        rules: [
            /* ES6 to ES5 */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" }
            },

            /* Dither Bundling */
            {
                test: /\.png$/,
                loader: 'url-loader'
            }
        ]
    },
    watch: true
};

