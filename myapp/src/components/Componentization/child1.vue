<template>
    <div @click="$emit('some-msg','msg form child1')">
        <h3>child1</h3>
        <p>{{msg}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            msg: {
                type: String,
                default: ''
            },
        },
        mounted () {
            // this.$bus.$on('some-child2',msg=>{
            //     console.log('child1:',msg);
                
            // })
            this.$parent.$on('some-child2',msg=>{
                console.log('child1:',msg);
            });
        },
    }
</script>

<style lang="scss" scoped>

</style>