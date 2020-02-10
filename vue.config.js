const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = ["js", "css"];
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const isProduction = process.env.NODE_ENV === "production";
const isTest = process.env.NODE_ENV === "test";
const isAnalyze = process.env.BUILD_TYPE === "analyze";
const path = require("path");

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          "primary-color": "#F23030",
          "link-color": "#F23030",
          "border-radius-base": "2px"
        },
        javascriptEnabled: true
      }
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "" : "",
  productionSourceMap: process.env.NODE_ENV === "production" ? false : true,
  configureWebpack: config => {
    // config.externals = {
    //   'vue': 'Vue',
    //   'element-ui': 'ELEMENT',
    //   'axios': 'axios',
    //   'vue-router': 'VueRouter',
    //   'dayjs': 'dayjs',
    //   'sortablejs': 'Sortable',
    //   'nprogress': 'Nprogress',
    //   'quill': 'quill',
    //   'lodash': '_',
    //   'vue-quill-editor': 'VueQuillEditor',
    //   'vuex': 'Vuex',
    // }

    if (isProduction || isTest) {
      config.plugins.push(
        new CompressionWebpackPlugin({
          algorithm: "gzip",
          test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
          threshold: 10240,
          minRatio: 0.8
        })
      );
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_console: true,
              //移除console
              pure_funcs: ["console.log"]
            }
          }
        })
      );
    }
    if (isAnalyze) {
      config.plugins.push(new BundleAnalyzerPlugin());
    }
  }
};