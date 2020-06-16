// 声明store类
// eslint-disable-next-line no-unused-vars
let Vue
class Store{
    constructor(options){
        this._vm = new Vue({
            data:{
                $$state:options.state
            },
        })
        // 保存mutations
        this._mutations = options.mutations
        this._actions = options.actions



        // 锁死 commit，dispatch的this指向
        const store = this
        const {commit,dispatch} = store;
        this.commit = function boundCommit(type,payload){
            commit.call(store,type,payload)
        }
        this.dispatch = function boundDispatch(type,payload){
            dispatch.call(store,type,payload)
        }
    }
    // 存取器变为只读
    get state(){
        return this._vm._data.$$state
    }

    set state(v){
        console.error('不可修改  replaceState');
    }

    // 修改状态  commit
    commit(type,payload){
        // 1.获取mutation   payload载荷   
        const entry = this._mutations[type]
        if(entry){
            entry(this.state,payload)
        }else{
            console.error('没有这个mutation');
            return
        }
    }


    // dispatch 执行异步操作
    dispatch(type,payload){
        const entry = this._actions[type]
        if(!entry){
            console.error("没有这个action");
            return
        }
        entry(this,payload)
    }
    
    getters(){

    }
}


// 实现install方法
 function install(_Vue){
    Vue = _Vue

    Vue.mixin({
        beforeCreate() {
            if(this.$options.store){
                Vue.prototype.$store = this.$options.store
            }
        },
    })
 }








// 导出一个对象
export default {Store,install}