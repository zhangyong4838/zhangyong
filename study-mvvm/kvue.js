// 数据响应式
function defineReactive(obj,key,value){
    // 递归处理
    observe(value)

    //创建一个dep实例
    
    const dep = new Dep()


    Object.defineProperty(obj,key,{
        get(){

            // 依赖收集
            Dep.target && dep.addDep(Dep.target)
            
            return value
        },
        set(newvalue){
            if(value !== newvalue){
                observe(newvalue)
                value = newvalue

                dep.notify()
            }
        }
    })
}
// 属性拦截
function observe(obj){
    if(typeof obj !== 'object' || obj === null){
        return
    }
    // 创建observe实例
    new Observer(obj)
}


// 代理data中的数据
function proxy(vm){
    console.log(vm);
    Object.keys(vm.$data).forEach(key=>{
        Object.defineProperty(vm,key,{
            get(){
                return vm.$data[key]
            },
            set(val){
                vm.$data[key] = val
            }
        })
    })
}

// kvue
// 响应式操作
class KVue{
    constructor(options){
        // 保存选项
        this.$options = options
        this.$data = options.data

        // 响应化处理
        observe(this.$data)
        // 代理 把vue的实例传进去
        proxy(this)
        new Compiler('#app',this)
    }
}


// 数据响应化

class Observer{
    constructor(value){
        this.value = value
        this.walk(value)
    }

    // 遍历对象做响应式
    walk (obj) {
        Object.keys(obj).forEach(key=>{
            defineReactive(obj,key,obj[key])
        })
    }
}


// Compiler: 解析模板，找到依赖，并和拦截的属性关联起来
class Compiler{
    constructor(el,vm){
        this.$vm = vm;
        this.$el = document.querySelector(el)

        // 执行编译
        this.compile(this.$el)
    }
    compile(el){
        el.childNodes.forEach(node=>{
            if(node.nodeType == '1'){
                // console.log(node.nodeName);
                this.compileElement(node)
            }else if(this.isInter(node)){
                // console.log(node.textContent);
                this.compileText(node)
            }
            if(node.childNodes){
                this.compile(node)
            }
        })
    }

    //解析绑定表达式
    compileText(node){
        // node.textContent = this.$vm[RegExp.$1]
        this.update(node,RegExp.$1,'text')
    }

    // 编译元素节点
    compileElement(node){
        // 处理k- 或者@ 开头的属性
        const attrs = node.attributes
        Array.from(attrs).forEach(attr=>{
            const attrName = attr.name
            const exp = attr.value
            if(attrName.indexOf('k-') === 0){
                const dir = attrName.substring(2)
                this[dir] && this[dir](node,exp)
            }
            // 事件处理
            if(attrName.indexOf('@') === 0){
                const mesd = attrName.substring(1)
                console.log(mesd)
            }
        })
    }
    text(node,exp){
        // node.textContent = this.$vm[exp]
        this.update(node,exp,'text')
    }
    html(node,exp){
        // node.innerHTML = this.$vm[exp]
        this.update(node,exp,'html')
    }
    model(node,exp){
        // node.value = this.$vm[exp]
        this.update(node,exp,'model')
        
    }

    // dir 指令名称
    update(node,exp,dir){
        const fn = this[dir + 'Updater']
        fn && fn(node,this.$vm[exp])

        // 创建watcher实例
        new Watcher(this.$vm,exp,val=>{
            fn && fn(node,val)
        })
    }

    textUpdater(node,val){
        node.textContent = val
    }

    htmlUpdater(node,val){
        node.innerHTML = val
    }
    modelUpdater(node,val){
        console.log(node.value)
        node.addEventListener('input',function(){
            this.$vm[val] = node.val
        })
    }
    isInter(node){
        return node.nodeType == 3 && /\{\{(.+)\}\}/.test(node.textContent)
    }
}


class Watcher{
    constructor(vm,key,updateFn){
        this.vm = vm;
        this.key = key;
        this.updateFn = updateFn;

        Dep.target = this
        vm[key]
        Dep.target = null
    }

    

    update(){
        this.updateFn.call(this.vm,this.vm[this.key])
    }
}


class Dep{
    constructor(){
        this.deps = []
    }
    addDep(watcher){
        this.deps.push(watcher)
    }
    notify(){
        this.deps.forEach(dep=>dep.update())
    }
}