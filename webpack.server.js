const path = require('path');

module.exports = {
    //inform we are building a bundle for nodeJS and not client.
    target:'node',    
    // tell webpack the root file of the app
    entry:'./src/index.js',
    //where to put the output file where to load bundle file
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    // tell webpack to run on every file it runs through
    // rules 1. Run babel only for js using regex
    module:{
        rules:[
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options:{
                    presets:[
                        'react',
                        'stage-0',
                        ['env', {targets:{ browsers: ['last 2 versions']}}]
                    ]
                }
            }
        ]
    }

}