const ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

module.exports = {
    entry: [
        "./js/index.js"
    ],
    output: {
        path: path.resolve(__dirname, "./assets/"),
        publicPath: "assets",
        filename: "webpack.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        "sass-loader"
                    ]
                })
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {}
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "webpack.css"
        })
    ],
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.common.js"
        }
    }
};
