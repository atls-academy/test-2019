import path from 'path'
import webpack from 'webpack'
import autoprefixer from 'autoprefixer'
import htmlTemplate from 'html-webpack-template'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'

export const mode = 'production'

export const optimization = {
  removeAvailableModules: false,
  removeEmptyChunks: false,
  splitChunks: {
    chunks: 'async',
    minSize: 30000,
    maxSize: 0,
    minChunks: 1,
    maxAsyncRequests: 5,
    maxInitialRequests: 3,
    name: true,
    cacheGroups: {
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true,
      },
    },
  },
  minimizer: [
    new TerserPlugin({
      terserOptions: {
        parse: {
          ecma: '8',
        },
        compress: {
          ecma: 5,
          warnings: false,
          comparisons: false,
          inline: 2,
        },
        mangle: {
          safari10: true,
        },
        output: {
          ecma: 5,
          comments: false,
          ascii_only: true,
        },
      },
      parallel: true,
      cache: true,
      sourceMap: false,
    }),
    new OptimizeCSSAssetsPlugin({}),
  ],
}

export const entry = ['@babel/polyfill', './src/index']

export const output = {
  path: path.join(__dirname, '../../dist'),
  filename: '[name].[hash].js',
  publicPath: '/',
}

export const module = {
  rules: [
    {
      test: /\.(js|ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          query: {
            babelrc: false,
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: '> 0.25%, not dead',
                  },
                  useBuiltIns: 'usage',
                  modules: false,
                },
              ],
              '@babel/preset-typescript',
              '@babel/preset-react',
            ],
            plugins: [
              'react-hot-loader/babel',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-syntax-dynamic-import',
            ],
          },
        },
      ],
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              autoprefixer({
                overrideBrowserslist: ['>2%', 'last 2 versions'],
              }),
            ],
          },
        },
      ],
    },
    {
      test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      use: [
        {
          loader: 'file-loader?name=[name].[ext]',
          options: {
            outputPath: 'assets',
          },
        },
      ],
    },
  ],
}

export const resolve = {
  extensions: ['.ts', '.tsx', '.js', '.json'],
}

export const plugins = [
  new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
  }),
  new HtmlWebpackPlugin({
    title: 'Atlantis United',
    inject: false,
    template: htmlTemplate,
    appMountId: 'app',
  }),
  new webpack.ProvidePlugin({
    fetch:
      'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
  }),
  new CopyWebpackPlugin([
    {
      from: path.join(__dirname, '..', '..', 'assets'),
      to: 'assets',
    },
  ]),
]
