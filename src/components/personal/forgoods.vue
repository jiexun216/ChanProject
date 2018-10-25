<template>
    <div style="margin:0.4rem;">
        <div class="order">
            <div class="timer">
               <span v-html="time ()" class="time"></span>
               <div class="timerclick">
                   <span>{{distribution}}</span>
               </div>
            </div>
            <div class="orderpay">
                 <div class="standpay">
                     <i class="timericon standpayone"></i>
                     <span>{{WaitingShipping}}</span>
                     <p v-html="time()" style="color:#ccc"></p>
                 </div>
                 <div>
                     <div class="ordercontent">
                        <div class="orderstyle">
                            <img src="../../assets/img/order.png" alt="" style="width:3rem;margin:0.4rem;">
                        </div>
                        <div class="orderstyle orderstyles">
                             <p class="ordername">商品名称-商品名称-商品名称</p>
                             <div class="ordersize">
                                <span>中型 套装版</span>
                                 <span class="ordersizeright">省$1100</span>
                             </div>
                             <div class="ordersize">
                                <span class="ordersizenum">￥70</span>
                                 <span class="ordersizeright">x15</span>
                             </div>
                        </div>
                     </div>
                 </div>
            </div>
            <div class="total">
                <span>共1件,总计￥100</span>
                <div class="totalitem">
                    <span class="totalitemone">{{CheckLogistics}}</span>
                    <span class="totalitemtwo">{{ConfirmGoods}}</span>
                </div>
            </div>        
        </div> 
    </div>
</template>
<script>
    export default {
        data () {
          return {
              distribution: '配送在途',
              WaitingShipping: '[杭州市]你的订单已打包完毕，等待配送',
              CheckLogistics: '查看物流',
              ConfirmGoods: '确认收货',
              currentdate:'',
          }
        },
       created () {
           this.$getData('order/list').then(res =>{
              this.list  = res
           }).catch(err => {
               return err
           })
       },
       methods: {
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
       }
    }
</script>

<style>
.order{
    /* height: 5rem; */
    width: 100%;
    border-radius: 0.1rem;
    box-shadow: 0 0 0.5rem #ccc;
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
    font-size: 0.4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.orderstyle{
    display: inline-block;
}
.ordername {
    flex-wrap: wrap;
    font-size: 0.45rem;
}
.ordersize{
    color: #ccc;
    font-size: 0.3rem;
    display: flex;
    justify-content: space-between;
    line-height: 1rem;
}
.ordersizenum {
    color: #ff525a;
    font-size: 0.5rem;
}
.sizecolor{
    color: #ff525a;
    font-weight: bold;
    font-size: 0.45rem;
}
.total {
    font-size: 0.4rem;
    margin: 0.4rem;
    line-height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.totalitemone{
     padding:0.1rem 0.3rem;
     border: 1px solid #ccc;
     border-radius: 0.3rem;
     color: #ccc;
     font-size: 0.4rem;
}
.totalitemtwo{
      padding:0.1rem 0.3rem;
     border: 1px solid #ff525a;
     border-radius: 0.3rem;
     color: #ff525a;
     font-size: 0.4rem;
}
</style>
