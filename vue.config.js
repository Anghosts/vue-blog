const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  // 代理跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        pathRewrite: { '^/api': '' },
      }
    }
  },
})
