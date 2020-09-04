const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base')
// below module is to improve buld time of server bundle.js
// it will skip webpack creating all node_module into the bundle
const webpackNodeExternals = require('webpack-node-externals')

const config  = {
    //inform we are building a bundle for nodeJS and not client.
    target:'node',    
    // tell webpack the root file of the app
    entry:'./src/index.js',
    //where to put the output file where to load bundle file
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals: [webpackNodeExternals()]
}
;
module.exports = merge(baseConfig,config);