<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <!--组件通信 -->
    <!-- <communication></communication> -->
    <!-- 表单 -->
    <FormExample></FormExample>
  </div>
</template>

<script>
// import communication from '@/components/communication'
import FormExample from '@/components/form';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    // communication,
    FormExample
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
