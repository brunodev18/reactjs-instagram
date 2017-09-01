const path = require('path')

module.exports = {
    entry: path.join(__dirname, 'app/src/app.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'app/dist/')
    },
    module: {
        rules: [
            { 
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react']
                    }
                }
            }
        ]
    }
}