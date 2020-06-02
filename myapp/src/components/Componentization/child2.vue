<template>
    <div>
       <h3>child2</h3>
       <!-- 非属性特性 -->
       <p>{{$attrs.foo}}</p>
       <!-- 属性展开:v-bind会把$attrs做属性展开，变成键值对形式 -->
       <grandson v-bind="$attrs" v-on="$listeners"></grandson>
       <button @click="sendToChild1">给child1发消息</button> 
    </div>
</template>

<script>
    import grandson from '@/components/Componentization/grandson.vue';
    export default {
        components: {
            grandson,
        },
        methods: {
                sendToChild1() {
                    // this.$bus.$emit('some-child2','some-child2-msg')
                    this.$parent.$emit('some-child2','some-child2-msg')
                }
        },  
    }
</script>

<style lang="scss" scoped>

</style>