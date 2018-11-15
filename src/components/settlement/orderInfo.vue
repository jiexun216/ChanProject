<template>
   <div class="orderInfo">
             <p>{{$t(orderinfo)}}</p>
             <div class="orderInfoImg" >
                 <ul class="orderimg" >
                     <li v-for="(item, index) in goodsList" :key="index"><img :src="item.goodsCoverImg" alt=""></li>
                     <li><img src="../../assets/img/49.png" @click="orderMore">
                      <div class="overlayerorderinfo" @touchmove.prevent v-if="orderTextStatus">
                            <div class="orders">
                                <div class="orderstop">
                                     <span>{{$t(ordergoodslist)}}（共{{orderData.totalQuantity}}件）</span>
                                     <span  class="closeorder" @click="closeorder">
                                         <i class="orderInfoimg orderInfoimgs"></i>
                                     </span>
                                </div>
                                <div class="ordergoods" v-for="(item, index) in goodsList" :key="index">
                                     <img :src="item.goodsCoverImg" alt="" style="width:3rem;height:100%;margin-right:0.2rem"> 
                                     <div class="ordergoodright">
                                         <p class="orderrightone">{{item.name}}</p>
                                         <p class="orderrighttwo">{{item.skuInfo}}</p>
                                         <div class="orderprice">
                                             <span class="orderpricecolor">￥{{item.goodsPrice}}</span>
                                             <span>x{{item.goodsQuantity}}</span>
                                         </div>
                                     </div>  
                                </div>
                            </div>
                      </div>
                     </li>
                 </ul>
             </div>
             <div class="deliveryinfo">
                 <span class="deliveryone">{{$t(orderdily)}}</span>
                 <span>{{orderData.shippingInformation}}</span>
             </div>
             <div class="deliveryinfo">
                  <span class="deliveryone">{{$t(orderinfopay)}}</span>
                  <div class="payInforight">
                       <span>{{$t(ordertal)}} <span class="payInfocolor">￥{{orderAmount/100}}</span></span>
                       <span>共{{orderData.totalQuantity}}件</span>
                  </div>
             </div>
             <div class="deliveryinfo note">
                  <span class="deliveryone">{{$t(orderbz)}}</span>
                  <div class="payInforight">
                       <input type="text" v-model="remark" :placeholder="$t(enterxq)">
                  </div>
             </div>
        </div>    
</template>

<script>
import Vue from 'vue'
import { Toast } from 'vant'
Vue.use(Toast)
    export default {
          data () {
              return {
                  orderTextStatus: false,
                  remark: '',
                  enterxq: 'common.placeholder.enterxq',
                  orderinfo: 'common.orderinfo',
                  ordergoodslist: 'common.ordergoodslist',
                  orderdily: 'common.orderdily',
                  orderinfopay: 'common.orderinfopay',
                  ordertal: 'common.ordertal',
                  orderbz: 'common.orderbz'
              }
          },
          // 监听
          watch: {
              'remark': function() {
                  this.$emit('getRemark',this.remark);
              }
          },
          props: {
              orderData: {},
              goodsList: Array,
              orderAmount: Number
          },
          methods: {
              orderMore() {
                  this.orderTextStatus = true
              },
              closeorder () {
                  this.orderTextStatus = false;
              }

          }
    }
</script>

<style>
.orderInfo{
    margin: 0.4rem;
    border: 1px solid #fff;
    box-shadow: 0px 0px 10px 5px #fafafa;
    font-size: 0.4rem;
    padding: 0.4rem;
    height: 6rem;
}
.orderInfoImg{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.orderimg {
    display: flex;
    justify-content: space-between;
    align-content: center;
}
.orderimg li{
   margin:0.2rem 0 0.2rem;
}
.orderimg li img{
    width:1.2rem;
    border-radius: 0.1rem;
}
.deliveryinfo{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.8rem;
}
.deliveryone{
    font-weight: bold;
    font-size: 0.4rem;
}
.payInfocolor{
     color: #f00;
 }
 .note{
     height: 1.2rem;
     border-top:1px solid #ccc;
 }
 .note input{
     color: #ccc;
 }

.overlayerorderinfo{
  position:fixed;
  left:0;
  top:0;
  width:100%;
  height:100%;
  z-index:10;
  background: rgba(0, 0, 0, 0.3)
}
.orders {
    position: absolute;
    bottom: 50px;
    background: #fff;
    height: 10rem;
    width: 100%;
    border-radius: 0.3rem 0.3rem 0rem 0rem; 
}
.orderstop{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.4rem;
    font-size: 0.4rem;
}
.ordertopimg{
    width: 0.8rem;
}
.ordergoods{
    margin: 0.4rem;
    border-bottom: 1px solid #ccc;
    display: flex;
    /* justify-content: space-between; */
    padding-bottom: 0.3rem;
}
.orderrightone{
    font-size: 0.4rem;
    font-weight: bold;
}
.orderrighttwo{
    color: #ccc;
    font-size: 0.3rem;
    line-height: 0.8rem;
}
.orderprice{
    margin-top:0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.orderpricecolor{
    color: #f00;
    font-size: 0.4rem;
}
.orderimg li img{
    width: 0.8rem;
}
.orderInfoimg{
   display: inline-block;
   width: 0.7rem;
   height:0.7rem;
   background-size: cover;
   margin-left: 0.2rem;
}
.orderInfoimgs{
    background: url(../../assets/img/39.png) no-repeat center center;
}
.payInforight input{
    color: #000;
    font-size: 0.3rem;
    width:100%;
    margin-right:0.2rem;
}
</style>
