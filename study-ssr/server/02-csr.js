const express = require('express')

const app = express()

// 静态文件服务
const publicPath = require('path').resolve(__dirname,'../public')
app.use(express.static(publicPath,{index:false}))

app.get('/',function(req,res){
    const html = `
        <div id="app">
        <h1>{{title}}</h1>
        <p>{{content}}</p>
        </div>
        <script src="vue.js"></script>
        <script>
            new Vue({
            el:'#app',
            data:{
                title:'NBA', 
                content:'复赛了'
            }
            })
        </script>
    `
    res.send(html)
})
app.listen(3000)