const path = require('path');
const nodeExternals = require('webpack-node-externals');  // see example https://github.com/js-accounts/graphql/blob/master/packages/graphql-api/webpack.config.js

module.exports = {
    entry: './src/index.js',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['env', {
                                targets: {
                                    node: 'current'
                                }
                            }]
                        ]
                    }
                }
            }
        ]
    },
    stats: {
        colors: true
    }
};
