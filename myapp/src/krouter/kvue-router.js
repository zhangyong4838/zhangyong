// 引用传入Vue构造函数
// eslint-disable-next-line no-unused-vars
let Vue

// VueRouter 类
class VueRouter{
    constructor(options){
        // 保存 options
        this.$options = options
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
            let component = null;
            const {$options,current} = this.$router
            const route = $options.routes.find(route => route.path === current)
            if(route){
                component = route.component
            }
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