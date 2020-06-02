<template>
    <div>
       <label>{{label}}</label> 
       <slot></slot>
       <p class="error" v-if="error">{{error}}</p>
    </div>
</template>

<script>
    import Schma from 'async-validator';
    import emitter from '@/mixins/emitter'
    export default {
        componentName:'MFormItem',//内部组件
        mixins:[emitter],
        inject:['form'],
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
            this.$on('validate', ()=>{
                this.validate()
            });
            this.dispatch('MForm','kkb.form.addField',[this])
        },
        methods: {
            validate() {
                // 执行校验

                // 执行校验规则
                const rules = this.form.rules[this.prop];
                // 获取当前值
                const value = this.form.model[this.prop]
                // 创建校验器
                const schma = new Schma({
                    [this.prop]:rules
                }) 

                return schma.validate({
                    [this.prop]:value
                },error=>{
                    if(error){
                        this.error = error[0].message
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