<template>
    <div>
        <KInput v-model="model.username"></KInput>
    </div>
</template>

<script>
    import KInput from '@/components/form/KInput.vue'
    export default {
        components:{
           KInput,
        } 
    }
</script>

<style lang="scss" scoped>

</style>