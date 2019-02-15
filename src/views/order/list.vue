<template>
    <div>
    <div>
        <div class="lang-top">
           <router-link to="/index">
             <i class="icun lang"></i>
           </router-link>
           <p class="choose">{{$t(myorder)}}</p>
           <div>
               <p class="myorderhide">m</p>
           </div>    
       </div>
       <div class="all"> 
        <span v-for="val in statusList" :class="{'active-index':status===val.key}" :title="val.title" :key="val.key" @click="handleSwitchTab(val.key)">{{val.title}}</span>
       </div>
       <!-- <router-view></router-view> -->
       </div>
        <div class="order" v-for="(item, index) in listData" :key="'row' + index">
            <div class="timer">
               <span class="time">{{ item.orderInfo.orderTime }}</span>
               <div class="timerclick">
                   <!-- <i class="timericon timerimg"></i> -->
                   <!-- <span>24:48:07</span> -->
               </div>
            </div>
            <div class="orderpay" @click="$router.push({name: 'orderDetail', query: {id: item.orderInfo.id}})">
                 <div class="standpay">
                     <i class="timericon standpayone"></i>
                     <span>{{$t(ordernum)}}:{{ item.orderInfo.orderSn }}</span>
                     <p style="color:#ccc">{{ item.orderInfo.orderStatusName }}</p>
                 </div>
                 <div v-for="orderGoodsInfo in item.orderGoodsList" :key="orderGoodsInfo.id">
                     <div class="ordercontent">
                        <div class="orderstyle">
                            <img :src="orderGoodsInfo.goodsCoverImg" alt="" style="width:3rem;margin: 0 0.3rem;height:100%;">
                        </div>
                        <div class="orderstyle orderstyles">
                             <p class="ordername">{{orderGoodsInfo.goodsTitle}}</p>
                             <div class="ordersize">
                                <span>{{orderGoodsInfo.skuInfo}}</span>
                             </div>
                             <div class="ordersize">
                                <span class="ordersizenum">￥{{orderGoodsInfo.goodsPrice}}</span>
                                <span class="ordersizeright">x{{orderGoodsInfo.goodsQuantity}}</span>
                             </div>
                        </div>
                     </div>
                 </div>
            </div>
            <div class="total">
                <span>{{$t(ordertal)}} {{ item.orderInfo.goodsQuantityTotal }} {{$t(jian)}},{{$t(ordertal)}} ￥{{ item.orderInfo.orderAmount }}</span>
                <div class="totalitem" v-if="item.orderInfo.orderStatus == 'waitingPay'">
                    <span class="totalitemone" @click="closeOrder(item.orderInfo.id)">{{$t(cancellation)}}</span>
                    <span class="totalitemtwo" @click="$router.push({name:'payment', query: {id: item.orderInfo.id, price: item.orderInfo.orderAmount }})">{{$t(immepayment)}}</span>
                </div>
                <div class="totalitem" v-else-if="item.orderInfo.orderStatus == 'waitingSign'">
                    <span class="totalitemone">{{$t(looklog)}}</span>
                    <span class="totalitemtwo" @click="confirmOrder(item.orderInfo.id)">{{$t(receipt)}}</span>
                </div>
            </div>        
        </div> 
    </div>
</template>
<script>
import { Dialog } from 'vant';
import {getOrderList,cancelOrder,orderConfirm} from '@/api/order/index.js'
import { getMainData } from "@/api/index/index.js";
    export default {
        data () {
          return {
                 myorder: 'common.myorder',
                 ordernum: 'common.ordernum',
                 cancellation: 'common.cancellation',
                 immepayment: 'common.immepayment',
                 looklog: 'common.looklog',
                 receipt: 'common.receipt',
                 gong: 'common.gong',
                 jian: 'common.jian',
                 ordertal:'common.ordertal',
                statusList: [
                {
                    key: '',
                    title: this.$t("common.alls"),
                },
                {
                    key: 'waitingPay',
                    title: this.$t("common.waitingpay"),
                },
                {
                    key: 'waitingSign',
                    title: this.$t("common.waitinggoods"),
                },
                {
                    key: 'haveSigned',
                    title: this.$t("common.completeds"),
                },
            ], 
            currentdate:'',
            loading: false,
            status: '',
            page: 1,
            listData:[],
            total:0
          }
        },
        methods: {
           getData () {
               getOrderList(this.status,this.page).then(res => {
                   if (res.data.status == 99) {
                      this.$toast(res.data.message ? res.data.message :this.$t("common.failuredcaozuo"))
                      this.$router.push({name: res.data.data.url})
                    }
                    this.listData  = res.data.data.list
                    this.total = res.data.data.total
                }).catch(err => {
                    return err
                })
                
           },
           handleSwitchTab (key) {
                this.status = key
                this.page = 1
                this.listData = []
                this.total = 0
                this.$router.replace({ name: 'orderList', query: { status: this.status }}, () => {
                    this.getData()
                })
           },
           refreshData () {
            this.status = this.$route.query.status ? this.$route.query.status : ''
            this.page = 1
            this.listData = []
            this.total = 0
            this.getData()
           },
           // 取消订单
           closeOrder (id) {
        	Dialog.confirm({
			  title: this.$t("common.warmprompt "),
			  message: this.$t("common.cancelorder")
			}).then(() => {
              // on confirm
				cancelOrder(id).then((res) => {
                    console.log(res)
					if (res.data.status == 0) {
	                    this.$toast(this.$t("common.cancelsuccess"))
					} else {
						this.$toast(res.message ? res.message : this.$t("common.cancelerror"))
					}
	                this.refreshData()
				}).catch(() => {
					this.$toast(this.$t("common.cancelerror"))
				})
			}).catch(() => {
			});
        	
        },
        //立即支付
        payment (id) {
            
            this.$router.push("/cart/payment")
            
        },
        // 确认收货
        confirmOrder (id) {
        	Dialog.confirm({
			  title: this.$t("common.warmprompt"),
			  message: this.$t("common.irreversible")
			}).then(() => {
              // on confirm
				orderConfirm(id).then((res) => {
					if (res.data.status == 0) {
	                    this.$toast(this.$t("common.orderconfirm"))
					} else {
						this.$toast(res.message ? res.message : this.$t("common.orderfailure"))
					}
	                this.refreshData()
				}).catch(() => {
					this.$toast(this.$t("common.orderfailure"))
				})
			}).catch(() => {
			});
        	
		},
        time () {
            var date = new Date();
            var seperator1 = ".";
            var seperator2 = ":";
            var year = date.getFullYear();
            var month = date.getMonth() +1;
            var strDate = date.getDate();
            var hours = date.getHours();
            var minutes = date.getMinutes();
            if(month >=1 && month <=9) {
                month = "0" +month;
            };
            if(strDate >= 0 && strDate <= 9){
                strDate = "0" + strDate;
            };
            if(minutes >= 0 && minutes <=9){
                minutes = "0"+minutes;    
            };
            if(hours>= 0 && hours <=9){
                hours = "0"+ hours;    
            };
            var currentdate = year + month + seperator1 + strDate + " " + hours +seperator2 + minutes;
            return currentdate;
        },
       },
       created () {
        //    this.payment()
       },
       beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.refreshData()
        })
    },
       
    }
</script>

<style>
.active-index{
    color: #f00;
}
.lang-top{
    /* line-height:1rem; */
    display: flex;
    justify-content:space-between;
    align-items: center;
}
.icun{
  display:block;
  width: 1rem;
  height: 1rem;
  background-size: cover;
}
.lang{
    background: url(../../assets/img/42.png) no-repeat  center center;
}
.myorderhide{
    opacity: 0;
}
.all {
    margin: 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.3rem;
}
.order{
    margin: 0.3rem;
    border-radius: 0.1rem;
    box-shadow: 0 0 0.5rem #ccc;
    font-size: 0.3rem;
}
.timer{
    border-bottom:1px solid #ccc;
    display: flex;
    justify-content:space-between;
    align-items: center;
}
.time{
    font-size: 0.4rem;
    margin: 0.4rem;  
}
.timericon{
  display:inline-block;
  width: 0.7rem;
  height: 0.7rem;
  background-size: cover;
  vertical-align: middle;
  text-align: center;
  margin-bottom: 0.1rem;
}
.timerimg{
    background: url(../../assets/img/47.png) no-repeat center center;
}
.timerclick{
     font-size: 0.4rem;
     margin-right: 0.4rem;     
}
.timerclick span{
    color: #ff525a;
}
.standpayone{
      background: url(../../assets/img/14.png) no-repeat center center;
}
.standpay{
    margin: 0.4rem;
}
 .standpay span{
    font-size: 0.4rem;
} 
.standpay p{
    font-size: 0.3rem;
    width: 100%；
}
.orderitem {
    border-bottom: 1px solid #ccc;
}
.ordercontent {
    font-size: 0.3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.orderstyle{
    display: inline-block;
    /* margin-left: 0.2rem; */
}
.ordername {
    flex-wrap: wrap;
    font-size: 0.3rem;
    margin-right: 0.4rem;
}
.ordersize{
    color: #ccc;
    font-size: 0.3rem;
    display: flex;
    justify-content: space-between;
    line-height: 0.6rem;
    margin-right: 0.5rem;
}
.ordersizenum {
    color: #ff525a;
    font-size: 0.3rem;
}
.sizecolor{
    color: #ff525a;
    font-weight: bold;
    font-size: 0.3rem;
}
.total {
    font-size: 0.3rem;
    margin: 0.4rem;
    line-height: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.totalitemone{
     padding:0.1rem 0.3rem;
     border: 1px solid #ccc;
     border-radius: 0.3rem;
     color: #ccc;
     font-size: 0.2rem;
}
.totalitemtwo{
     padding:0.1rem 0.3rem;
     border: 1px solid #ff525a;
     border-radius: 0.3rem;
     color: #ff525a;
     font-size: 0.2rem;
}
</style>
