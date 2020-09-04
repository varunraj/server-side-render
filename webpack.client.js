const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base')


const config = {
    
    // tell webpack the root file of the app
    entry:'./src/client/client.js',
    //where to put the output file where to load bundle file
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }

}

module.exports = merge (baseConfig,config);