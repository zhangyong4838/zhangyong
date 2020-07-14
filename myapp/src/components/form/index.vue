<template>
    <div>
        <KForm :model="model" :rules="rules" ref="form">
            <KFormItem label="用户名" prop="username">
                <KInput v-model="model.username"></KInput>
            </KFormItem>
            <KFormItem label="密码" prop="password">
                <KInput v-model="model.password"></KInput>
            </KFormItem>
            <KFormItem>
                <button @click="submitForm">提交登录</button>
            </KFormItem>
        </KForm>
    </div>
</template>

<script>
    import KInput from '@/components/form/KInput.vue'
    import KFormItem from '@/components/form/KFormItem.vue'
    import KForm from '@/components/form/KForm.vue'
    export default {
        data() {
            return {
                model: {
                    username:'xiaoming',
                    password:''
                },
                rules:{
                    username:[{required:true,message:'请输入用户名！'}],
                    password:[{required:true,message:'请输入密码！'}],
                }
            }
        },
        components:{
           KInput,
           KFormItem,
           KForm
        },
        methods: {
            submitForm() {
                this.$refs.form.validate(valid=>{
                    if (valid) {
                        alert("请求登录!");
                    } else {
                        alert("校验失败！");
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>