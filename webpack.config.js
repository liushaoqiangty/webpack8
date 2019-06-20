const path = require('path');
module.exports = {
  mode: 'development',

  entry: {
    app: './app/app.js'
  },

  output: {
    path: path.resolve(__dirname + '/public')
  },

  module: {
    rules: [

      //url-loader: 处理图片路径
      {
        test: /\.(png|jpg|jpeg|gif)$/,

        use: [
          {
            loader: 'url-loader',
            //将1000B以内图片文件转换为base64
            options: {limit: 1000}
          }
        ]
      }

    ]
  }
}
