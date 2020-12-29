/* eslint-disable */

const dotEnv = require('dotenv')
const path = require('path')
const tsConfig = require('./tsconfig.json')
const { getViteAliasFromTsconfig, getViteProxyConfig } = require('@souche-vue3/frame-base')

const resolve = dir => path.join(__dirname, dir)

module.exports =  (mode) => {
  const envConfig = dotEnv.config({
    path: resolve(`.env.${mode}`)
  })

  const config = {
    alias: getViteAliasFromTsconfig(tsConfig),
    define: {
      'process.env': {
        ...envConfig.parsed
      }
    },
    optimizeDeps: {
      exclude: ['dotenv']
    }
  }
  // 代理到mock server
  if (mode === 'mock') {
    config.proxy = getViteProxyConfig(envConfig)
  }

  return config
}
