const express = require('express')

const app = express()

// 导入vue
const Vue = require('vue')

// 导入渲染器
const { createRenderer } = require('vue-server-renderer')
// 获取可以渲染vue实例的渲染器
const renderer = createRenderer()

app.get('/', async (req,res)=>{
    const vm = new Vue({
        data() {
            return {
                name: '小明大名'
            }
        },
        template:'<div>{{name}}</div>'
    })
    try{
        // 渲染html字符串
        const html = await renderer.renderToString(vm)
        res.send(html)
    } catch(error){
        res.status(500).send('服务端错误')
    }
})

// 端口
app.listen(3000)