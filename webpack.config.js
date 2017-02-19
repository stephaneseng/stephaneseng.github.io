var path = require("path");

module.exports = {
    entry: "./js/index.js",
    output: {
        path: path.resolve(__dirname, "js"),
        publicPath: "js",
        filename: "webpack.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.common.js"
        }
    }
};
