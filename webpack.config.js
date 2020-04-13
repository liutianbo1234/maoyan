module.exports = {
module: {
    loaders: [
      
            { 
              test: /\.less$/, 
              exclude: /node_modules/, 
              loader: ExtractTextPlugin.extract({
                fallback:'style-loader', 
                use:'css-loader?modules&localIdentName=[local]-[hash:base64:8]!resolve-url-loader!postcss-loader!less-loader'
              })
            },
           
          ]
  }
  }