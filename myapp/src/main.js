import Vue from 'vue'
import App from './App.vue'
import create from '@/utils/create';
import Notice from '@/components/Notice.vue';

// import router from './router'
import router from './krouter'

// import store from './store'
import store from './kstore'

Vue.config.productionTip = false;

// class Bus{
//   constructor(){
//     this.cb = {}
//   }
//   $on(name,fn){
//     this.cb[name] = this.cb[name] || []
//     this.cb[name].push(fn)
//   }
//   $emit(name,args){
//     if(this.cb[name]){
//       this.cb[name].forEach(item=>item(args))
//     }
//   }
// }
// Vue.prototype.$bus = new Bus()

Vue.prototype.$notice = function(props){
    return create(Notice,props)
}

// 事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
