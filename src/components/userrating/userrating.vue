<template>
<div class="rating-container">
  <ratingdetail></ratingdetail>
  <ratingdetail></ratingdetail>
  <a href="#" class="weui-btn rating-comfirmBtn">确认</a>
</div>
</template>

<script>
import ratingdetail from "./ratingdetail"
export default {
  data() {
    return {};
  },
  components: {
    ratingdetail
  }
}
</script>

<style lang="css">
.rating-container {
  color: white;
  width: 100%;
}
.rating-container .rating-comfirmBtn {
  background-color: #108CF5;
  position: absolute;
  bottom: 8px;
  left: 8px;
  right: 8px;
}
</style>
