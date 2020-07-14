// 广播：自上而下的派发事件，通知子元素
function bordercast(componentName,eventName,params){
    // 遍历所有的子元素，如果子元素的componentName和传入的name相同就派发事件
    this.$children.forEach(child=>{
        var name = child.$options.componentName

        if(name === componentName){
            child.$emit.apply(child,[eventName].concat(params))
        }else{
            bordercast.apply(child,[componentName,eventName].concat(params))
        }
    })
}

export default{
    methods: {
        // 冒泡查找componentName相同的组件并派发事件
        dispatch(componentName,eventName,params) {
            var parent = this.$parent || this.$root;
            var name = parent.$options.componentName;
            // 向上查找直到找到相同名称的组件
            while(parent && (!name || name !== componentName)){
                parent = parent.$parent;
                if(parent){
                    name = parent.$options.componentName
                }
            }
            // 如果找到就派发事件
            if(parent){
                parent.$emit.apply(parent,[eventName].concat(params))
            }
        },
        bordercast(componentName,eventName,params){
            bordercast.call(this,componentName,eventName,params)
        }
    },
}