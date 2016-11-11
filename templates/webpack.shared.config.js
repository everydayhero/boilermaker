const { DefinePlugin } = require('webpack')
const DotenvPlugin = require('webpack-dotenv-plugin')

module.exports = {
  plugins: [
    new DefinePlugin({
      'process.env.BASE_PATH': `'${process.env.BASE_PATH || ''}'`
    }),
    new DotenvPlugin({
      sample: './.env.sample',
      path: `./${process.env.ENV_FILE}`
    })
  ]
}
