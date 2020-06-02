<template>
    <div>
        <h3>grandson</h3>
        <!-- 非属性特性 -->
        <p>{{foo}}</p>
        <!-- 隔代传值 -->
        <!-- <p>{{bar}}</p> -->
         <p>{{baz}}</p> 
         <p>{{grand.$options.name}}</p>
        <button @click="$emit('some-msg','some msg to grandson')">给爷爷发消息</button> 
    </div>
</template>

<script>
    export default {
      // inject:['bar'],
      inject:{
        baz:'bar',
        grand:{
          from:'grandpa',
          default:''
        }
      },
      props: {
        foo: {
          type: String,
          default: ''
        },
      },
    }
</script>

<style lang="scss" scoped>

</style>