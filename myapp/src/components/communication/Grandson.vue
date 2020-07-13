<template>
    <div>
        <h3>Grandson</h3>
        <p>{{foo}}</p>
        <p>{{baz}}</p>
        <p>{{grand.$options.name}}</p>
        <button @click="$emit('some-event', 'msg from grandson')">给爷爷发送消息</button>
    </div>
</template>

<script>
    export default {
        inject:{
            baz:'bar',
            grand:{
                from:'grandpa',
                default:''
            }
        },
        props:{
            foo:{
                type:String,
                default:''
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>