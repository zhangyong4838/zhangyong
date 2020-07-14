<template>
    <div>
        <input :type="type" :value="value" @input="onInput">
    </div>
</template>

<script>
    import emitter from '@/mixins/emitter'
    export default {
        mixins:[emitter],
        props:{
            type:{
                type:String,
                default:'text'
            },
            value:{
                type:String,
                default:''
            }
        },
        methods: {
            onInput(e){
                this.$emit('input',e.target.value)
                // this.$parent.$emit('validate')
                this.dispatch('KFormItem','validate')
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>