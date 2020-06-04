// 数据响应式

function defineReactive(obj,key,value){
    Object.defineProperty(obj,key,{
        get(){
            return value
        },
        set(newvalue){
            if(value !== newvalue){
                value = newvalue
            }
        }
    })
}