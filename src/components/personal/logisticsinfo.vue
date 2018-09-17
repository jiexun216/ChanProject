<template>
    <div>
        <div class="orderdetop">
            <router-link to="/">
                <i class="back backs"></i>     
            </router-link>
            <span >{{myorder}}</span>
            <span class="myorder">{{orderStatus}}</span>
        </div>
        <div class="orderheader ">
             <div class="orderusercar">
                   <i class="back car"></i>
                   <span >{{sf}}</span>
                   <span>3134431343584313</span>
             </div>
              <div class="produmoney produmoneys">
                <p><span class="produtop">{{PayAmount}}</span> 
                   <span>共1件，总计￥100</span></p>
            </div>
             <div class="produmoney produmoneys">
                <p><span class="produtop">{{PayAmount}}</span> 
                   <span>共1件，总计￥100</span></p>
            </div>
             <div class="produmoney produmoneys">
                <p><span class="produtop">{{PayAmount}}</span> 
                   <span>共1件，总计￥100</span></p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
        data () {
            return {
                myorder: '我的订单',
                orderStatus: '订单状态',
                sf: '顺丰速递',
                PayAmount: '支付金额'
            }
        }

  }    
</script>

<style>

</style>
