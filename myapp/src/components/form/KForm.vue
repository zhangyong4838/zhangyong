<template>
    <div>
        <form>
            <slot></slot>
        </form>
    </div>
</template>

<script>
    export default {
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
            rules:{
                type:Object,
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>