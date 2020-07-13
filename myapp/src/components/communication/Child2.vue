<template>
    <div>
        <h3>chlid2</h3>
        <p>{{$attrs.foo}}</p>
        <Grandson v-bind="$attrs" v-on="$listeners"></Grandson>
        <button @click="sendToChild1">给child1发消息</button>
    </div>
</template>

<script>
    import Grandson from '@/components/communication/Grandson.vue'
    export default {
        components:{
            Grandson,
        },
        methods: {
            sendToChild1(){
                this.$parent.$emit("event-from-child2", "some msg from child2");
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>