<template>
    <div>
        <h2>组件通信</h2>
        <Child1 msg="some msg from parents" @some-msg="onSomeEvent"></Child1>
        <Child2 foo="foo" @some-msg="onSomeEvent"></Child2>
    </div>
</template>

<script>
    import Child1 from '@/components/Componentization/child1.vue';
    import Child2 from '@/components/Componentization/child2.vue';
    export default {
        name:'grandpa',
        provide(){
            return{
                bar:'bar',
                grandpa:this
            }
        },
        components: {
            Child1,
            Child2
        },
            methods: {
                onSomeEvent(msg) {
                console.log(msg);
                }
            },
            mounted () {
                this.$children[1].sendToChild1();
            },
            // 父子组件传值  1.父传子用子组件用props接收 ，子传父用 this.$emit('事件名称'，'要传递的内容')
    }
</script>

<style lang="scss" scoped>

</style>