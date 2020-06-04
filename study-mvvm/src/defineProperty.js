// 数据响应式
function defineReactive(obj,key,value){
    // 递归处理
    observe(value)
    Object.defineProperty(obj,key,{
        get(){
            return value
        },
        set(newvalue){
            if(value !== newvalue){
                observe(newvalue)
                value = newvalue
                // 更新函数
                update()
            }
        }
    })
}
// 属性拦截
function observe(obj){
    if(typeof obj !== 'object' || obj === null){
        return
    }
    Object.keys(obj).forEach(key=>{
        defineReactive(obj,key,obj[key])
    })
}



function set(obj,key,value){
    defineReactive(obj,key,value)
}
const obj = {}
defineReactive(obj,'foo','foo')



function update(){
    applicationCache.innerText = obj.foo
}
obj.foo
obj.foo = 'fooooo'
set(obj,'dong','dong')



// 数组响应式？ 