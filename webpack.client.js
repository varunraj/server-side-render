const path = require('path');

module.exports = {
    
    // tell webpack the root file of the app
    entry:'./src/client/client.js',
    //where to put the output file where to load bundle file
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
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