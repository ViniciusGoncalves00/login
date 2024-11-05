const path = require("path");

module.exports = {
    entry: {
        login_application: ["./src/index.js"],
    },
    devtool: "inline-source-map",
    output: {
        filename: "./src/bundle-[name].js", // output bundle file name
        path: path.resolve(__dirname), // path to our Django static directory
    },
    mode: "development",
    devServer: {
        static: {
            directory: path.resolve(__dirname, "static"),
        },
        port: 3000,
        open: true,
        compress: true,
        historyApiFallback: true,
        watchFiles: [path.resolve(__dirname, "**/*.html")],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, "common"),
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".js"],
    },
};