module.exports = {
    entry: './src/js/client.js',
    output: {
        filename: 'bundle.js',
        path: 'dist'
    },
    module: {
        loaders: [
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel-loader',
              query: {
                presets: ['react', 'es2015', 'stage-0'],
                plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
              }
            }
        ]
    }
};
