// 引用传入Vue构造函数
// eslint-disable-next-line no-unused-vars
let Vue

// VueRouter 类
class VueRouter{
    constructor(options){
        // 保存 options
        this.$options = options


        //创建映射表缓存route 和 path 的关系
        this.routeMap = {}
        this.$options.routes.forEach(route => {
            this.routeMap[route.path] = route
        })


        // 创建响应式 current 保存当前的url
        // defineReactive 可以给一个对象指定一个属性
        Vue.util.defineReactive(this,'current','/')
        // 监听hashchange事件
        window.addEventListener('hashchange',this.onHashChange.bind(this))
    }
    onHashChange(){
        this.current = window.location.hash.slice(1)
    }
}

// 实现  install方法
VueRouter.install = function(_Vue){
    Vue = _Vue 
    // 1.挂载VueRouter实例
    // 拿到Vue根实例中的router实例
    // 用全局混入
    Vue.mixin({
        beforeCreate() {
            if(this.$options.router){
                Vue.prototype.$router = this.$options.router
            }
        },
    })
    //   2. 实现全局组件 router-view 和 router-link
    Vue.component('router-view',{
        render(h) {
            const {routeMap,current} = this.$router
            const component = routeMap[current] ? routeMap[current].component : null
            return h(component)
        },
    })
    Vue.component('router-link',{
        props: {
            to: {
                type: String,
                default: ''
            },
        },
        render(h) {
            return h('a',{attrs:{href:'#' + this.to}},this.$slots.default)
        },
    })
}


export default VueRouter;