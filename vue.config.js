module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/githubAction' : '/',
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/mock': {
        target: 'https://staging.qq.com',
        // target: 'https://api.qq.com',
        pathRewrite: {
          '/mock': ''
        }
      },
    }
  },
};
