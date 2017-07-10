<template>
<div class="order-top">
  <ul>
    <li v-for='item in items' @click='selectTab(item.index)' :class="{selectTab:item.isSelect}"><span>{{item.tabinfo}}</span></li>
  </ul>
</div>
</template>

<script>
export default {
  data() {
    var data = {
      items: [{
          tabinfo: '进行中',
          index: 0,
          isSelect: true
        },
        {
          tabinfo: '已完成',
          index: 1,
          isSelect: false
        },
        {
          tabinfo: '待评价',
          index: 2,
          isSelect: false
        },
        {
          tabinfo: '已取消',
          index: 3,
          isSelect: false
        }
      ]
    };
    return data;
  },
  methods: {
    //点击tab时触发事件
    selectTab(numofindex) {
      this.items.forEach((item, index) => {
        if (index == numofindex) {
          item.isSelect = true;
        } else {
          item.isSelect = false;
        }
      });
      this.$emit('tabindexchange', numofindex);
    }
  }
}
</script>

<style lang="css">
.order-top {
  height: 45px;
  color: #8495ba;
  background-color: #2a3852;
  margin-bottom: 9px;
  }
  .order-top ul {
  list-style: none;
  width: 100%;
  height: 100%;
}
.order-top li {
  text-align: center;
  padding-top: 13px;
  padding-bottom: 3px;
  width: 25%;
  float: left;
}
.order-top .selectTab {
  color: #498fe0;
  border-bottom: 2px solid #498fe0;
}
.order-top span {
  font-size: 16px;
  line-height: 16px;
}
.order-top .selectTab {
  color: #498fe0;
  border-bottom: 2px solid #498fe0;
}
</style>
