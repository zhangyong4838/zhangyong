<template>
    <div>
        <h2>插槽</h2>
        <layout>
            <!-- 匿名插槽 -->
            <template>匿名插槽</template>
            <!-- 具名插槽 -->
            <template v-slot:header>具名插槽</template>
            <!-- 作用域插槽 -->
            <template v-slot:footer="{fc}">{{fc}}</template>
        </layout>
    </div>
</template>

<script>
    import layout from '@/components/solts/layout.vue';
    export default {
       components: {
           layout,
       }, 
    }
</script>

<style lang="scss" scoped>

</style>