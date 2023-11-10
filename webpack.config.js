const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = env => {
    const isDev = Boolean(env.development);
    const sourceMap = isDev;

    return {
        entry: "./src/App.tsx",
        mode: isDev ? "development" : "production",
        devtool: sourceMap ? "inline-source-map" : false,
        target: ["web", "es5"],
        output: {
            filename: "[name].[fullhash].js",
            path: path.join(__dirname, "build"),
            publicPath: "/",
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                favicon: "./src/favicon.ico",
            }),
            new MiniCssExtractPlugin(),
        ],
        ...(isDev
            ? null
            : {
                performance: {
                    hints: false,
                    maxEntrypointSize: 512000,
                    maxAssetSize: 512000,
                },
            }),
        optimization: {
            minimizer: [new CssMinimizerPlugin()],
        },

        resolve: {
            extensions: [".ts", ".tsx", ".js"],
            alias: {
                "@components": path.resolve(__dirname, "src/components/ui/"),
                "@assets": path.resolve(__dirname, "src/assets/"),
                "@api": path.resolve(__dirname, "src/components/api/"),
                "@core": path.resolve(__dirname, "src/components/core/"),
                "@views": path.resolve(__dirname, "src/components/views/"),
                "@modules": path.resolve(__dirname, "src/components/modules/"),
                "@model": path.resolve(__dirname, "src/model/"),
                "@store": path.resolve(__dirname, "src/store/"),
                "@styles": path.resolve(__dirname, "src/styles/"),
                "@public": path.resolve(__dirname, "public/"),
                "@utils": path.resolve(__dirname, "src/utils/"),
            },
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    enforce: "pre",
                    use: ["source-map-loader"],
                },
                {
                    test: /\.(js|ts|tsx)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "babel-loader",
                        },
                    ],
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 1,
                                sourceMap,
                                modules: {
                                    auto: resPath => Boolean(resPath.includes(".module.")),
                                    localIdentName: isDev
                                        ? "[name]__[local]___[hash:base64:5]"
                                        : "[hash:base64:8]",
                                },
                            },
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                sourceMap,
                            },
                        },
                    ],
                },
                {
                    test: /\.(gif|png|jpe?g)$/i,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "./img/[name].[ext]",
                            },
                        },
                    ],
                },
                {
                    test: /\.(ico)$/i,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "./[name].[ext]",
                            },
                        },
                    ],
                },
                {
                    test: /\.svg$/,
                    use: ["@svgr/webpack"],
                },
            ],
        },
        devServer: {
            historyApiFallback: true,
        },
    };
};
