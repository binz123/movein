<template>
<div class="detail-container">
  <p class="rating-topbar">取车司机</p>
  <div class="rating-detail">
    <div>
      <span>服 务 态 度：</span>
      <ul>
        <li><a href="javascript:;">1</a></li>
        <li><a href="javascript:;">2</a></li>
        <li><a href="javascript:;">3</a></li>
        <li><a href="javascript:;">4</a></li>
        <li><a href="javascript:;">5</a></li>
      </ul>
    </div>
    <div>
      <span>服务及时性：</span>
      <ul>
        <li><a href="javascript:;">1</a></li>
        <li><a href="javascript:;">2</a></li>
        <li><a href="javascript:;">3</a></li>
        <li><a href="javascript:;">4</a></li>
        <li><a href="javascript:;">5</a></li>
      </ul>
    </div>
    <textarea class="comment" placeholder="说说您对取车司机的印象"></textarea>
  </div>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounthed: function() {
    console.log(this.$route.params.type);
  }
}
</script>

<style lang="css">
.detail-container{
  margin-bottom: 10px;
}
.rating-container .pickcar-rate {
  margin-bottom: 10px;
}
.rating-topbar {
  padding-left: 16px;
  padding-top: 11px;
  padding-bottom: 10px;
  background-color: #3e4965;
  font-size: 15px;
}
.rating-container .rating-detail {
  background-color: #232f47;
}
.rating-container ul {
  list-style: none;
  display: inline;
}
.rating-container ul li {
  display: inline-block;
  background-image: url("../../assets/imgs/star_unrated.svg");
  width: 16px;
  height: 15px;
  margin-right: 17px;
}
.rating-container ul a {
  color: transparent;
}
.rating-container textarea {
  height: 45px;
  margin: 16px;
  background-color: #232f47;
  border-radius: 3px;
  border-color: #3e4965;
  width: 90%;
  padding-top: 5px;
  padding-left: 5px;
  color: white;
}
.rating-container .rating-detail div {
  padding-left: 16px;
  font-size: 14px;
  padding-top: 16px;
}
</style>
