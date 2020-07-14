<template>
    <div>
        <form>
            <slot></slot>
        </form>
    </div>
</template>

<script>
    export default {
        name:"KForm",
        componentName:"KForm",
        provide(){
            return {
                form:this
            }
        },
        props: {
            model: {
                type: Object,
                required:true
            },
            rules:Object,
        },
        created(){
            this.fields = []
            this.$on('kkb.form.addFields',item=>{
                this.fields.push(item)
            })
        },
        methods: {
            validate(cb) {
                // const tasks = this.$children.filter(item=>item.prop).map(item=>item.validate())
                const tasks = this.fields.map(item=>item.validate())
                Promise.all(tasks)
                .then(()=>cb(true))
                .catch(()=>cb(false))
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>