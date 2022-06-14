const path =  require('path');
const HtmlWebpackPugin = require('html-webpack-plugin');
// const autoprefixer = require('autoprefixer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDev = process.env.NODE_ENV === 'development';
console.log({isDev})
const setFileName = (file) => {
   return file + '.html'
}
const index = "index"
const config = {
    entry:'./main.jsx',
    output:{
        path:path.resolve(__dirname,'dist'),
        // publicPath:'dist/'
    },
    // mode:'development',
    // devserver:{
    //    //指定服务器自动打包哪个文件夹下的文件
    //    contentBase: './dist',
    //    //默认publicPath:'/'，输出文件，即bundle.js文件存于服务器的根目录中，此处也可更改存储路径
    //    publicPath:'/',
    //    "port": 3000
    // },
    plugins:[
        new HtmlWebpackPugin({
            template:'./public/index.html',
            filename:setFileName(index)
        }),
        new MiniCssExtractPlugin({
            filename: isDev ? '[name].css' : 'css/[name].[hash].css',
            chunkFilename: isDev ? '[id].css' : 'css/[id].[hash].css',
        }),
        // new Autoprefixer({})

    ],
    module:{
        rules:[
            { test: /\.js|jsx$/, exclude: /node_modules/, use: 'babel-loader' },
            { test:/\.css$/,
            exclude: /node_modules/,
            use:[
                // 'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader:"css-loader",
                    // 设施独一无二的名字
                    options:{
                        modules:true,
                        // localIdentName:'[name]__[local]__[hash:base64:5]'
                    }
                },
                // post-css 类似css中的babel库 兼容问题
                // {
                //     loader: 'postcss-loader',
                //     options: {
                //       postcssOptions: {
                //         plugins: [
                //           autoprefixer(["last 2 version", "> 1%", "not ie < 11"]),
                //           pxtorem({
                //             rootValue: 16,
                //             unitPrecision: 5,
                //             propList: ["font", "font-size", "line-height", "letter-spacing", "width", "height", "margin", "padding"],
                //             selectorBlackList: [],
                //             replace: true,
                //             mediaQuery: false,
                //             minPixelValue: 0,
                //             exclude: /node_modules/i
                //           })
                //         ]
                //       }
                //     }
                // }
            ]},
            // {
            //     test: /\.(png|svg|gif|jpe?g)$/,
            //     type: 'asset'
            // },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/,
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 3*1024,
                            name:"assets/[name].[hash:8].[ext]"
                         }
                    }
                ]
            },
            // {
            //     test: /\.(png|jpg|gif)$/,
            //     use: [
            //       {
            //         loader: 'file-loader',
            //         options: {

            //         }
            //       }
            //     ]
            //   }
        ]
    },
    resolve: {
        //省略后缀名
        extensions: ['*', '.js', '.jsx', '.json'],
        // 配置路径别名
        alias: {
            '@assets': path.resolve('./src/assets'),
            '@views': path.resolve('./src/views'),
            '@utils': path.resolve('./src/utils'),
            '@component': path.resolve('./src/component')
        },
    }
}

if (isDev) {
    config.devServer = {
        port: '8080',
        // host:'http://localhost:',
        // host: '0.0.0.0', // 设置值：0.0.0.0的好处，可以通过localhost访问，也可以通过127.0.0.1访问，还可以通过本机的ip进行访问
        overlay: {
            errors: true // 如果在webpack编译的过程中有任何的错误直接输出到页面上
        }
    }
    config.mode = 'development'
} else {
    config.mode = 'production'
}


module.exports = {
    ...config
}