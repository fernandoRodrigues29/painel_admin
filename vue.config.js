// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   publicPath: process.env.NODE_ENV === 'production'
//   ? '/admPage/'
//   : '/'
// })

//frontEndEstoqueVue
//local admPage

// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production'
//   ? '/admPage/' 
//   : '/'
// }

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/frontEndEstoqueVue/' 
  : '/'
}

