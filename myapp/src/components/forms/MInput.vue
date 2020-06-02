<template>
    <div>
        <input :type="type" :value="value" @input="onInput">
    </div>
</template>

<script>
    import emitter from '@/mixins/emitter';
    export default {
        mixins:[emitter],//混入
       props: {
           value: {
               type: String,
               default: '',
           },
           type:{
               type:String,
               default:"text"
           }
       },
       methods: {
           onInput(e) {
                this.$emit('input',e.target.value)
                //数据变化，提交给他父亲做校验    
                // this.$parent.$emit('validate')
                this.dispatch('MFormItem','validate')
           }
           
       },
    }
</script>

<style lang="scss" scoped>

</style>