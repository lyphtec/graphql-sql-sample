const path = require('path');
const fs = require('fs');

// from https://gist.github.com/icebob/a37de30311fbfd770eaf5027bf779f5c
const nodeModules = {};
fs.readdirSync('node_modules')
    .filter( (x) => {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach( (mod) => {
        nodeModules[mod] = 'commonjs ' + mod;
    });


module.exports = {
    entry: './src/index.js',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    externals: nodeModules,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
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