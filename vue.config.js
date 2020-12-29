/* eslint-disable */
const path = require('path')
const tsConfig = require('./tsconfig.json')
const dotEnv = require('dotenv')
const resolve = dir => path.join(__dirname, dir)
const fs = require('fs')
const { getWebpackProxyConfig, getWebpackAliasByTsConfig } = require('@souche-vue3/frame-base')

const linkModule = '@souche-f2e/statistics-next'
const moduleRealPath = fs.realpathSync(`./node_modules/${linkModule}`);

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  css: {
    extract: false
  },
  configureWebpack: {
    resolve: {
      alias: getWebpackAliasByTsConfig(tsConfig)
    }
  },
  chainWebpack(config) {
    config.module.rule('eslint')
      .exclude
      .add(moduleRealPath);
    // 代理到mock server
    if (process.env.VUE_APP_ENV === 'mock') {
      const envConfig = dotEnv.config({
        path: resolve(`.env.${process.env.VUE_APP_ENV}`)
      })
      config.devServer
      .proxy(getWebpackProxyConfig(envConfig))
    }
  },
}
