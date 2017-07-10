<template>
<div class="order-container">
  <myordertopbar v-on:tabindexchange='changeTabIndex'></myordertopbar>
  <myorderdetail v-bind:selecttabnum='selectIndex'></myorderdetail>
</div>
</template>

<script>
import myordertopbar from './myordertopbar.vue'
import myorderdetail from './myorderdetail.vue'
export default {
  data() {
    return {
      selectIndex: 1,
    };
  },
  methods: {
    changeTabIndex(index) {
      this.selectIndex = index;
    }
  },
  components: {
    myordertopbar,
    myorderdetail
  }
}
</script>

<style lang="css">
</style>
