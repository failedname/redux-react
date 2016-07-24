module.exports={
  entry: './src/app.js',
  output: {
    path: __dirname,
    filename: 'index.js',
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: ['babel-loader'],
      query: {
        presets: [ 'react','es2015'],
        plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],

      }
    }]
  }
}
