<template>
<div class="order-list">
  <div v-for="(orderinfo,index) in orderlist" class="order-detail">
    <p class="orderno"><span>订单编号：</span><span>{{orderinfo.bookNo}}</span><span>{{orderinfo.showStatus}}</span></p>
    <div class="order-info">
      <p><span>预约时间：</span><span class="order-time">{{orderinfo.appointmentTime}}</span></p>
      <p><span>4S店：</span><span class="order-address">{{orderinfo.dealerAddress}}</span></p>
      <img class="detailenter" src="../../assets/imgs/DisclosureIndicator.svg" alt="">
      <p><span v-bind:class="getOrderTypeClass(orderinfo.driveStatus)">{{getOrderType(orderinfo.driveStatus)}}</span></p>
    </div>
    <p class="order-sum"><span>共{{orderinfo.count}}项保养</span>预计金额：<span>{{orderinfo.money|moneyFilter}}</span></p>
    <p class="info-bottom" v-show="selecttabnum != 0">
      <button class="order-commentbtn" v-show="selecttabnum == 2" @click="gotoRating(orderinfo)">评价</button>
      <button class="order-deletebtn" @click="deleteOrder(index)">删除</button>
    </p>
  </div>
</div>
</template>
<script>
import axios from "axios"
import staticdata from '../../util/staticdatas'
export default {
  data() {
    return {
      orderlist: ""
    }
  },
  //获取自身属性，可用于与父组件进行信息传递
  props: ['selecttabnum'],
  //文档元素渲染后初始化订单列表1
  mounted: function() {
    this.$nextTick(() => {
      this.loadOrderlist(this.selecttabnum);
    });
  },
  methods: {
    //加载订单列表
    loadOrderlist(index) {
      axios.get(staticdata.oaburl + '/getCustomerOrderInfo?customerId=200&&orderStatus=' + index)
        .then(res => {
          if (res.data.success == false) {
            console.log('获取数据失败，请重新获取');
            return;
          }
          this.orderlist = res.data.list;
        })
        .catch((err) => {
          console.log('获取数据失败' + err);
        });
    },
    getOrderTypeClass(index) {
      return "order-type" + index;
    },
    deleteOrder(numofindex) {
      this.orderlist.splice(numofindex, 1);
    },
    getOrderType(index) {
      let type = "";
      switch (index) {
        case 0:
          type = "取送车";
          break;
        case 1:
          type = "取车";
          break;
        case 2:
          type = "送车"
          break;
      }
      return type;
    },
    gotoRating(item) {
      this.$router.push({
        name: 'userrating',
        params: {
          type: item.driveStatus
        },
        query: {
          bookno: item.bookNo
        }
      })
    }
  },
  //过滤器
  filters: {
    moneyFilter(value) {
      return value.toFixed(2);
    }
  },
  //观察selecttabnum属性，若发生变化更新列表，重新发送请求
  watch: {
    selecttabnum(newIndex) {
      this.loadOrderlist(newIndex);
    }
  }
}
</script>

<style lang="css">

.order-list .order-detail {
  color: white;
  background-color: #2a3852;
  margin-bottom: 8px;
}
.order-list .order-detail .orderno {
  padding: 14px 16px 10px 16px;
  font-size: 12px;
}
.order-list .order-detail .orderno span:first-child,
.order-list .order-detail .orderno span:nth-child(2) {
  color: #8495ba;
}
.order-list .order-detail .orderno span:nth-child(3) {
  float: right;
  font-size: 14px;
}
.order-list .order-detail .order-info {
  background-color: #3e4965;
  padding: 16px;
  position: relative;
}
.order-list .order-detail .order-info img {
  position: absolute;
  top: 61px;
  right: 15px ;
}
.order-list .order-detail .order-info p {
  font-size: 12px;
}
.order-list .order-detail .order-info p span:first-child {
  float: left;
}
.order-list .order-detail .order-info p:first-child {
  font-size: 14px;
  margin-bottom: 8px;
}
.order-list .order-detail .order-info p:last-child {
  margin-top: 8px;
}
.order-list .order-detail .order-info .order-type0,
.order-list .order-detail .order-info .order-type1,
.order-list .order-detail .order-info .order-type2 {
  font-size: 10px;
  padding: 0 2px;
  border-radius: 3px;
  float: none !important;
}
.order-list .order-detail .order-info .order-type2 {
  background-color: #8c4ce8;
}
.order-list .order-detail .order-info .order-type1 {
  background-color: #f17833;
}
.order-list .order-detail .order-info .order-type0 {
  background-color: #58a900;
}
.order-list .order-detail .order-sum {
  padding: 9px 0;
  padding-right: 16px;
  text-align: right;
  font-size: 12px;
  border-bottom: 1px solid #3e4965;
}
.order-list .order-detail .order-sum span:first-child {
  margin-right: 8px;
}
.order-list .order-detail .order-sum span:last-child {
  font-size: 15px;
}
.order-list .order-detail .info-bottom {
  height: 43px;
}
.order-list .order-detail .info-bottom .order-deletebtn {
  float: right;
  margin: 8px 16px 8px 0;
  padding: 4px 25px;
  border: 1px solid #aabae4;
  border-radius: 3px;
  background-color: #2a3852;
  color: #aabae4;
}
.order-list .order-detail .info-bottom .order-commentbtn {
  float: right;
  margin: 8px 16px 8px 0;
  padding: 4px 25px;
  border: 1px solid #498fe0;
  border-radius: 3px;
  background-color: #2a3852;
  color: #498fe0;
}
</style>
