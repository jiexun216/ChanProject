<template>
    <div>
        <div class="orderdetop">
            
            <i class="back backs" @click="$router.back(-1)"></i>     
            <span >{{$t(myorder)}}</span>
            <span class="myorder">{{$t(orderdetails)}}</span>
        </div>
        <div class="orderheader orderheaderbg">
             <div class="orderusername">
                  <span class="orderuserspan">{{receiverInfo.receiverName}}</span>
                  <span>{{receiverInfo.receiverMobile}}</span>
                  <p>{{receiverInfo.receiverAddress}}</p>
             </div>
        </div>
        <div class="orderheader" v-if="orderInfo.orderStatus >= 2">
             <div class="orderusercar">
                 <router-link to="/Logisticsinfo">
                   <i class="back car"></i>
                   <span>{{$t(loginfo)}}</span>
                 </router-link>
                   
             </div>
             <div class="ordering">
                 <p><span>{{$t(system)}}</span>{{$t(orderpay)}}</p>
                 <p>2018.8.30.18.43</p>
             </div>
        </div>
        <div>
            <div class="orderheader ">
                     <div class="ordercontent" v-for="(item, index) in goodsList" :key="index">
                        <div class="orderstyle">
                            <img :src="item.goodsCoverImg" alt="" style="width:3rem;margin:0.4rem;height:100%;" @click="goodData(item.goodsId)">
                        </div>
                        <div class="orderstyle orderstyles">
                             <p class="ordername">{{item.goodsName}}</p>
                             <div class="ordersize">
                                <span>{{item.skuInfo}}</span>
                                 
                             </div>
                             <div class="ordersize">
                                <span class="ordersizenum">￥{{item.goodsPrice}}</span>
                                 <span class="ordersizeright">x{{item.goodsQuantity}}</span>
                             </div>
                        </div>
                     </div>
              <div class="produmoney">
                <p><span class="produtop">{{$t(payment)}}</span> 
                   <span>共{{orderInfo.totalQuantity}}件，总计￥{{orderInfo.orderAmount}}</span></p>
              </div>
            <div class="produmoney">
                <p><span class="produtop">{{$t(note)}}</span> 
                   <span>{{orderInfo.remark}}</span></p>
            </div> 
            <div class="produmoney">
                <p><span class="produtop">{{$t(ordernum)}}</span> 
                   <span>{{orderInfo.orderSn}}</span></p>
            </div> 
            <div class="produmoney">
                <p><span class="produtop">{{$t(ordertime)}}</span> 
                   <span>{{orderInfo.orderTime}}</span></p>
            </div>  
            <div class="produmoney">
                <p><span class="produtop">{{$t(paymethod)}}</span> 
                   <span>{{orderInfo.payWay}}</span></p>
            </div>     
           </div>
            
            
        </div>
        <!-- <div class="orderfooter">
              <router-link to="/Orderdetails">
                 <span>{{$t(gopay)}}</span>
              </router-link>
        </div> -->
    </div>
</template>

<script>
import {getOrderInfo} from '@/api/order/index.js'
import { getGoodsInfo } from '@/api/goods/index.js'
  export default {
      data () {
          return {
            myorder: 'common.myorder',
            orderdetails: 'common.orderdetails',
            loginfo: 'common.loginfo',            
            system: 'common.system',
            orderpay: 'common.orderpay',
            payment: 'common.payment',
            note: 'common.note',
            ordernum: 'common.ordernum',
            ordertime: 'common.ordertime',
            paymethod: 'common.paymethod',
            gopay: 'common.gopay',
            loading: false,
            orderInfo: {
                orderStatus:0,
				orderAmount: 0.00,
				goodsAmount: 0.00,
                payExpiredTime: 0,
                totalQuantity:0,
                remark: '',
                orderSn:'',
                orderTime:'',
                payWay:''
			},
            receiverInfo: {
				receiverName: '',
				receiverMobile: '',
				receiverAddress: '',
			},
            dispatchInfo: {
				expressFee: 0.00,
			},
            goodsList: [],
          }
      },
      methods: {
          getData () {
              let id = this.$route.query.id
              this.loading = true
              getOrderInfo(id).then((res) => {
                 if (res.data.status == 99) {
                    this.$toast(res.data.message ? res.data.message : this.$t("common.failuredcaozuo"))
                    this.$router.push({name: res.data.data.url})
                  }
                  this.orderInfo = res.data.data.orderInfo
                  this.receiverInfo = res.data.data.receiverInfo
                  this.goodsList = res.data.data.goodsList  
              })
          },
          goodData (id) {
              getGoodsInfo(id).then((res) => {
                  if(res.data.status == 1){
                      this.$toast(res.data.message ? res.data.message :'')
                  }else{
                      this.$router.push({ name: 'goodsDetail', query: { goodsId: id }})
                  }
              })
          }
      },
      created () {
           this.getData()
       },
  }    

</script>

<style>
.orderdetop{
  font-size: 0.3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.back{
   display: inline-block;
   width: 0.7rem;
   height: 0.7rem;
   background-size: cover;
   margin-left: 0.2rem;
 }
 .backs {
   background: url(../../assets/img/42.png) no-repeat center center;
 }
 .myorder {
     color:#f00;
     margin-right: 0.4rem;
 }
 .orderheader{
    border-radius: 0.1rem;
    box-shadow: 0 0 0.5rem #ccc;
    margin: 0.4rem;
 }
 .orderheaderbg {
         background: url(../../assets/img/symbols-group-3.png) no-repeat bottom;
 }
 .orderusername{
     font-size: 0.4rem;
 }
.orderuserspan {
    margin: 0.4rem;
    display: inline-block;
}
.orderusername p {
    margin: 0.4rem;
    padding-bottom: 0.8rem;
}
.car {
       background: url(../../assets/img/14.png) no-repeat center center;
}
.orderusercar {
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: flex-start;
        align-items: center;
}
.orderusercar span {
        color: #ccc;
        margin-left: 0.3rem;
}
.ordering {
    margin: 0.4rem;
    font-size: 0.4rem;
    line-height: 1rem;
}
.ordercontent {
    font-size: 0.3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.orderstyle{
    display: inline-block;
}
.ordername {
    flex-wrap: wrap;
    font-size: 0.35rem;
    margin-right: 0.4rem;
}
.ordersize{
    color: #ccc;
    font-size: 0.3rem;
    display: flex;
    justify-content: space-between;
    line-height: 1rem;
    margin-right: 0.4rem;
}
.produorder{
    border-radius: 0.1rem;
    box-shadow: 0 0 0.5rem #ccc;
    margin: 0.4rem;
}
.produmoney{
    border-bottom: 1px solid #ccc;
    line-height: 1rem;
    margin-left:0.4rem;
    margin-right: 0.4rem;
    font-size: 0.3rem;
    margin-bottom: 0.2rem;
}
.produtop {
    color: #000;
    font-weight: bold;
    margin-right: 0.2rem;
}
.orderfooter{
    position: fixed;
    bottom: 0;
    background: #ff525a;
    width: 100%;
    text-align: center;
    font-size: 0.3rem;
    line-height: 1.3rem;
}
.orderfooter a{
    color: #fff;
}

</style>
