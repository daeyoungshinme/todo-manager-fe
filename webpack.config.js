const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const getPath = pathDir => path.resolve(__dirname, pathDir);

module.exports = (_env, argv) => {
  //arvs.mode 는 webpack.dev.config.js와 webpack.prov.config.js 로 나누었을 때 사용
  //   const isProd = argv.mode === "production";
  //   const isDev = !isProd;
  const isProd = process.env.NODE_ENV === 'production';
  const isDev = !isProd;
  console.log(process.env.NODE_ENV);

  return {
    // mode: "development",
    target: 'web',
    devtool: isDev && 'eval-cheap-module-source-map',
    devServer: {
      static: {
        directory: getPath('assets'),
      },
      port: 9000,
      hot: true,
      liveReload: false,
      compress: true,
      historyApiFallback: true,
      open: true,
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
      },
    },
    entry: {
      main: './src/index.js',
    },
    output: {
      path: getPath('dist'),
      filename: 'assets/js/[name].[contenthash:8].js',
      publicPath: '/',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.css'],
      alias: {
        '@css': getPath('src/css'),
        '@components': getPath('src/components'),
        // "@contexts": getPath("src/contexts/"),
        // "@hooks": getPath("src/hooks/"),
        '@pages': getPath('src/pages/'),
      },
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false,
            },
          },
        },
        {
          test: /\.css$/,
          use: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new webpack.EnvironmentPlugin({}),
      new MiniCssExtractPlugin({
        filename: 'assets/css/[name].[contenthash:8].css',
        chunkFilename: 'assets/css/[name].[contetnhash:8].chunk.css',
      }),
      new HtmlWebpackPlugin({ template: getPath('assets/index.html') }),
      new CleanWebpackPlugin({}),
      //   new CleanWebpackPlugin({
      //     // dry 기본 값: false
      //     dry: true,
      //     // verbose 기본 값: false
      //     verbose: true,
      //     // cleanOnceBeforeBuildPatterns 기본 값: ['**/*']
      //     cleanOnceBeforeBuildPatterns: [
      //       "**/*",
      //       // build 폴더 안의 모든 것을 지우도록 설정
      //       path.join(process.cwd(), "dist/**/*"),
      //     ],
      //   }),
    ],
  };
};
