const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const { outputConfig, copyPluginPatterns, definePluginOpts,entryConfig, devServer } = require("./env.config");

module.exports = (env, options) => 
{
    return {
        mode: options.mode,
        entry: entryConfig,
        devServer,
        // Dev only
        // Target must be set to web for hmr to work with .browserlist
        // https://github.com/webpack/webpack-dev-server/issues/2758#issuecomment-710086019
        target: "web",
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    include: path.resolve(__dirname, 'src'),
                    use: "babel-loader",
                  },
                  {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"],
                  },
                  {
                    test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
                    use: ["url-loader"],
                  },
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    include: path.resolve(__dirname, 'src'),
                    use: [{loader: 'ts-loader', options: {onlyCompileBundledFiles: true}}],
                },
                {
                    test: /\.scss$/,
                    use: [
                        // We're in dev and want HMR, SCSS is handled in JS
                        // In production, we want our css as files
                        "style-loader",
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        ["postcss-preset-env"],
                                    ],
                                },
                            },
                        },
                        "sass-loader"
                    ],
                },
                {
                    test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                    type: "javascript/auto",
                    loader: "file-loader",
                    options: {
                        publicPath: "../",
                        name: "[path][name].[ext]",
                        context: path.resolve(__dirname, "src/assets"),
                        emitFile: false,
                    },
                },
                {
                    test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                    type: "javascript/auto",
                    exclude: /images/,
                    loader: "file-loader",
                    options: {
                        publicPath: "../",
                        context: path.resolve(__dirname, "src/assets"),
                        name: "[path][name].[ext]",
                        emitFile: false,
                    },
                },
            ],
        },
        resolve: { 
            extensions: [".tsx", ".ts", ".js"], 
            alias: {
                "cesium": path.resolve("node_modules/cesium")
            },
            fallback: { "https": false, "zlib": false, "http": false, "url": false },
        },
        output: {
            filename: "js/[name].bundle.js",
            path: path.resolve(__dirname, outputConfig.destPath),
            publicPath: "",
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                inject: true,
                minify: false
            }),
            new CopyPlugin(copyPluginPatterns),
            new webpack.DefinePlugin(definePluginOpts)
        ]
    };
};