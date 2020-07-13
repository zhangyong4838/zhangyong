<template>
    <div>
        <h3>chlid1</h3>
        <p>{{msg}}</p>
    </div>
</template>

<script>
    export default {
        props:{
            msg:{
                type:String,
                default:''
            } 
        },
        mounted(){
            this.$parent.$on('event-from-child2',msg=>{
                console.log('Child1',msg)
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>