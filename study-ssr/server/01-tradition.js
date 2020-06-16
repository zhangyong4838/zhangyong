const express = require('express')
const app = express()


app.get('/',function(req,res){
    res.send(`
        <html>
            <div id="app">
                <h1>呵呵呵额呵呵呵</h1>
                <p class="demo">哈哈哈哈哈</p>
            </div>
        </html>
    `)
})
app.listen(3000,()=>{
    console.log('启动成功');
})