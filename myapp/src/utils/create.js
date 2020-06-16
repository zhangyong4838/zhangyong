import Vue from 'vue'



export default function create(components,props){
    // 方法一

    const Cost = Vue.extend(components);

    const dom = new Cost({propsData:props})
    dom.$mount()
    document.body.appendChild(dom.$el)
    dom.remove = ()=>{
        document.body.removeChild(dom.$el)
        dom.$destroy()
    }
    // 方法二
    // let vm = new Vue({
    //     render(h){
    //         return h(components,{props})
    //     }
    // }).$mount()

    // document.body.appendChild(vm.$el)

    // const dom = vm.$children[0]

    // dom.remove = ()=>{
    //     document.body.removeChild(vm.$el)
    //     dom.$destroy()
    // }
    return dom
}