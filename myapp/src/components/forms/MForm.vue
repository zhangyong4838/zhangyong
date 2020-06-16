<template>
    <div>
      <slot></slot>  
    </div>
</template>

<script>
    export default {
        name:'MForm',
        componentName:'MForm',
        props: {
            model: {
                type: Object,
                required:true
            },
            rules:Object
        },
        provide(){
            return{
                form:this
            }
        },
        created(){
            this.fields = []
            this.$on('kkb.form.addField',item =>{
                this.fields.push(item)
            })
        },
        methods: {
            validate(cb) {
                // 整体校验
                // const tasks = this.$children.filter(item => item.prop).map(item => item.validate())
                const tasks = this.fields.map(item => item.validate())
                Promise.all(tasks)
                    .then(()=>{
                        cb(true)
                    })
                    .catch(()=>{
                        cb(false)
                    })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>