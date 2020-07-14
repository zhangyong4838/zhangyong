<template>
    <div>
        <label>{{label}}</label>
        <slot></slot>
        <p class="error" v-if="error">{{error}}</p>
    </div>
</template>

<script>
    import Schema from 'async-validator';
    import emitter from '@/mixins/emitter'
    export default {
        name:'KFormItem',
        componetName:'KFormItem',
        inject:['form'],
        mixins:[emitter],
        props: {
            label: {
                type: String,
                default: ''
            },
            prop:{
                type:String,
                default:''
            }
        },
        data() {
            return {
                error: ''
            }
        },
        mounted () {
            this.$on('validate',()=>{this.validate()});
            // 派发事件通知KForm，新增一个KFormItem实例
            if(this.prop){
                this.dispatch('KForm','kkb.form.addFiled',[this])
            }
        },
        methods: {
            validate() {
                // 获取KFormItem对应的校验规则
                const rules = this.form.rules[this.prop]
                // 获取value值
                const value = this.form.model[this.prop]
                // 校验描述对象
                const descriptor = {[this.prop]:rules}
                // 创建校验器
                const schema = new Schema(descriptor)

                return schema.validate({[this.prop]:value},errors=>{
                    if(errors){
                        this.error = errors[0].message
                    }else{
                        this.error = ''
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>