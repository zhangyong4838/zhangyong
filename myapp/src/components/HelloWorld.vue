<template>
  <div class="hello">
    <p @click="$store.commit('add')">sync  {{$store.state.counter}}</p>
    <p @click="$store.dispatch('add')">async  {{$store.state.counter}}</p>
    <!-- 组件通信 -->
    <!-- <Componentization></Componentization> -->
    <!-- 插槽 -->
    <!-- <SlotExample></SlotExample> -->
    <!-- 表单 -->
    <!-- <FormExample></FormExample> -->
  </div>
</template>

<script>
// import Componentization from '@/components/Componentization';
// import SlotExample from '@/components/solts';
// import FormExample from '@/components/forms';


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    // Componentization,
    // SlotExample,
    // FormExample

  },
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
