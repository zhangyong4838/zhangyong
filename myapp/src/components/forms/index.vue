<template>
    <div>
       <MForm :model="model" :rules="rules" ref="form">
            <MFormItem label="用户名" prop="userName">
                <MInput v-model="model.userName"></MInput> 
            </MFormItem>
            <MFormItem label="密码" prop="password">
                <MInput v-model="model.password"></MInput> 
            </MFormItem>
            <button @click="loginForm">登录</button> 
       </MForm>
    </div>
</template>

<script>
import MInput from '@/components/forms/MInput.vue';
import MFormItem from '@/components/forms/MFormItem.vue';
import MForm from '@/components/forms/MForm.vue';
    export default {
        components: {
            MInput,
            MFormItem,
            MForm
        },
        data() {
            return {
                model: {
                    userName:'xiaoming',
                    password:''
                },
                rules:{
                    userName:[
                        {required:true,message:'请输入用户名'}
                    ],
                    password:[
                        {required:true,message:'请输入密码'}
                    ]
                }
            }
        },
        methods: {
            loginForm() {
                this.$refs.form.validate(valid =>{
                    // if(valid){
                    //     console.log('请求登录');
                    // }else{
                    //     alert('登录失败')
                    // }
                    this.$notice({
                        title:'校验结果',
                        message:valid ? "请求登录" : "校验失败",
                        duration:2000
                    }).show()
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>