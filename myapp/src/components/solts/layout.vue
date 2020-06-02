<template>
    <div>
        <div>
            <!-- 具名插槽 -->
            <slot name="header"></slot>
        </div>
        <div class="body">
            <!-- 匿名插槽 -->
            <slot></slot>
        </div>
        <div>
            <!-- 作用域插槽 -->
            <slot name="footer" :fc="footerContent"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                remark: [
                    '好好学习，天天向上',
                    '学习永远不晚',
                    '学习知识要善于思考,思考,再思考',
                    '学习的敌人是自己的满足,要认真学习一点东西,必须从不自满开始',
                    '构成我们学习最大障碍的是已知的东西,而不是未知的东西',
                    '在今天和明天之间,有一段很长的时间;趁你还有精神的时候,学习迅速办事',
                    '三人行必有我师焉；择其善者而从之，其不善者而改之'
                ]
            }
        },
        computed: {
            footerContent() {
                for(var key of this.remark){
                    console.log(key);
                }
                return key;
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>