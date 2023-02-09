const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  // 代理跨域
  devServer: {
    open: true,
    port: 8090,
    host: 'localhost',
    proxy: {
      // '/api': {
      //   target: 'http://localhost:9000',
      //   pathRewrite: { '^/api': '' },
      // },
      '/api': {
        target: 'http://hn216.api.yesapi.cn',
        // pathRewrite: { '^/hn216-api': '' },
      }
    }
  },
})
