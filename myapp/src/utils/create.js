import Vue from 'vue';


export default function create(component,props){
    // 方案一：使用vue.exend()
    const Ctor = Vue.extend(component)
    // 创建组件实例
    const comp = new Ctor({propsData:props})

    comp.$mount()
    document.body.appendChild(comp.$el)

    // 清除dom
    comp.remove = () =>{
        document.body.removeChild(comp.$el)
        comp.$destroy()
    }

    // // 方案二：借鸡生蛋思想
    // const vm = new Vue({
    //     render(h){
    //         // 组件配置对象
    //         return h(component,{props})
    //     }
    // }).$mount()
    // // 手动追加dom元素
    // document.body.appendChild(vm.$el)

    // const comp = vm.$children[0]

    // // 清除dom
    // comp.remove = () =>{
    //     document.body.removeChild(vm.$el)
    //     comp.$destroy()
    // }
    return comp
}