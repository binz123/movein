<template>
<div id="app">
  <router-view></router-view>
</div>
</template>

<script>
import Vue from 'vue'
import myorder from './components/myorders/myorder.vue'
export default {
  data() {
    return {}
  },
  components: {
    myorder,
  }
}
</script>

<style lang="css">
@import "assets/lib/dist/style/weui.min.css";
*{
  margin:0;
  padding:0;
  font-weight: 300;
}
html,body{
  height: 100%;
}
</style>
