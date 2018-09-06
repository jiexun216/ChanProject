<template>
    <div>
        <div class="orderdetop">
            <router-link to="/">
                <i class="back backs"></i>     
            </router-link>
            <span >我的订单</span>
            <span class="myorder">订单状态</span>
        </div>
        <div class="orderheader orderheaderbg">
             <div class="orderusername">
                  <span class="orderuserspan">秀才</span>
                  <span>15227186411</span>
                  <p>杭州市西湖区黄龙万科中心G12</p>
             </div>
        </div>
        <div class="orderheader ">
             <div class="orderusercar">
                 <router-link to="/Logisticsinfo">
                   <i class="back car"></i>
                   <span>物流信息</span>
                 </router-link>
                   
             </div>
             <div class="ordering">
                 <p><span>[系统]</span>你的订单已生产，请立即支付</p>
                 <p>2018.8.30.18.43</p>
             </div>
        </div>
        <div>
            <div class="orderheader ">
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
              <div class="produmoney">
                <p><span class="produtop">支付金额</span> 
                   <span>共1件，总计￥100</span></p>
            </div>
            <div class="produmoney">
                <p><span class="produtop">备注信息</span> 
                   <span>送我一只鹅，谢谢</span></p>
            </div>       
           </div>
            
            
        </div>
        <div class="orderfooter">
              <router-link to="/Orderdetails">
                 <span>如是待支付时，去支付</span>
              </router-link>
        </div>
    </div>
</template>

<script>
  export default {
      
  }    

</script>

<style>
.orderdetop{
  font-size: 0.4rem;
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
    font-size: 0.5rem;
    line-height: 1rem;
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
    font-size: 0.5rem;
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
    font-size: 0.5rem;
    line-height: 1.3rem;
}
.orderfooter a{
    color: #fff;
}

</style>
