let webpack = require('webpack');
let path = require('path');

module.exports = {



    entry: {
        'index': './src/index.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },

    //where to use the loader
    module: {
        rules: [ //multiple rules // inside reate diffrent 
            { //babel use garera es6 .7 es5 broser garna sagelo hunxa 
                //use babel on which files
                test: /\.js$/, //regex start with// end-> $
                exclude: /node_modules/,
                use: 'babel-loader'

            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/"
    }

}