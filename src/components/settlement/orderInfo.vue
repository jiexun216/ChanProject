<template>
   <div class="orderInfo">
             <p>订单信息</p>
             <div class="orderInfoImg">
                 <ul class="orderimg" @click="orderMore">
                     <li><img src="../../assets/img/order.png" alt=""></li>
                     <li><img src="../../assets/img/order.png" alt=""></li>
                     <li><img src="../../assets/img/order.png" alt=""></li>
                     <li><img src="../../assets/img/49.png">
                      <div class="overlayer" @touchmove.prevent v-if="orderInfo">
                            <div class="orders">
                                <div class="orderstop">
                                     <span>商品清单（共2件）</span>
                                     <span  class="closeorder">
                                         <i class="orderInfoimg orderInfoimgs" @click="closeorder"></i>
                                     </span>
                                </div>
                                <div class="ordergoods">
                                     <img src="../../assets/img/order.png" alt="" style="width:3rem;height:3rem;margin-right:0.2rem"> 
                                     <div class="ordergoodright">
                                         <p class="orderrightone">商品类白的第一项商品，至二个上皮青柠的那</p>
                                         <p class="orderrighttwo">中型 套装型</p>
                                         <div class="orderprice">
                                             <span class="orderpricecolor">￥111</span>
                                             <span>x12</span>
                                         </div>
                                     </div>  
                                </div>
                                 <div class="ordergoods">
                                     <img src="../../assets/img/order.png" alt="" style="width:3rem;height:3rem;margin-right:0.2rem"> 
                                     <div class="ordergoodright">
                                         <p class="orderrightone">商品类白的第一项商品，至二个上皮青柠的那</p>
                                         <p class="orderrighttwo">中型 套装型</p>
                                         <div class="orderprice">
                                             <span class="orderpricecolor">￥111</span>
                                             <span>x12</span>
                                         </div>
                                     </div>  
                                </div>
                            </div>
                      </div>
                     </li>
                 </ul>
             </div>
             <div class="deliveryinfo">
                 <span class="deliveryone">发货信息</span>
                 <span>杭州亚太一号仓</span>
             </div>
             <div class="deliveryinfo">
                  <span class="deliveryone">支付信息</span>
                  <div class="payInforight">
                       <span>总结 <span class="payInfocolor">￥990.00</span></span>
                       <span>共6件</span>
                  </div>
             </div>
             <div class="deliveryinfo note">
                  <span class="deliveryone">备注</span>
                  <div class="payInforight">
                       <input type="text" placeholder="输入您的特殊需求">
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
                  orderInfo: false
              }
          },
          methods: {
              orderMore() {
                  this.orderInfo = true
              },
              closeorder () {
                  this.orderInfo = false
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
.orderimg li{
    float: left;
    margin-left: 0.2rem;
    margin-top: 0.2rem;
    
}
.orderimg li img{
    width: 1.2rem;
    border-radius: 0.1rem;
}
.deliveryinfo{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.2rem;
    height: 1rem;
}
.deliveryone{
    font-weight: bold;
    font-size: 0.45rem;
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

.overlayer{
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
    font-size: 0.45rem;
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
    font-size: 0.45rem;
    font-weight: bold;
}
.orderrighttwo{
    color: #ccc;
    font-size: 0.35rem;
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
    font-size: 0.5rem;
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
</style>
