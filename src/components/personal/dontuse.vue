<template>
    <div>
        <div class="orderdetop">
            <router-link to="/">
                <i class="back backs"></i>     
            </router-link>
            <span >{{MyCoupons}}</span>
            <span class="myorder">
                <i class="back backcoups"></i>
            </span>
        </div>
        <div class="usecoupons">
             <div class="useitembg useitembgs">
                <span>{{DontUse}}</span>
             </div>
             <div class="useitembg">
                 <span>{{beenUsed}}</span>
             </div>
             <div>
                 <span>{{expired}}</span>
             </div>
        </div>
        <div class="couponsitem">
             <div class="couponitem">
                  <div class="couponmon">
                    <img src="../../assets/img/27.png"  class="couponimgs">
                    <span class="couponmoney">
                        ￥79
                    </span>
                  </div>
                  <div class="couponman">
                      <p class="couponmanp">满110-60元</p>
                      <p class="couponmantime">2018.04.05-2018.05.05</p>
                  </div>
             </div>
             <div class="couponright">
                   <p>{{useThe}}</p>
             </div>
        </div>
    </div>
</template>

<script>
  export default {
       data () {
           return {
              MyCoupons: '我的优惠券',
              DontUse: '未使用',
              beenUsed: '已使用',
              expired: '已过期',
              useThe: '去使用'
           }
       },
       methods: {
           
       }
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
 .backcoups{
     background: url(../../assets/img/49.png) no-repeat center center;
 }
 .myorder {
     margin-right: 0.4rem;
 }
 .usecoupons {
     display: flex;
     justify-content: center;
     align-items: center;
 }
 .useitem {
     font-weight: bold;
 }
 .useitembg {
     margin: 0.4rem;
 }
 .useitembgs {
     color: #f00;
 }
 .couponsitem {
     border-radius: 0.1rem;
     box-shadow: 0 0 0.5rem #ccc;
     margin: 0.4rem;
     display:flex;
     justify-content: flex-start;
 }
 .couponitem{
     border-right: 1px dotted #ccc;
     width: 80%;
     border-radius: 0rem 0.4rem 0.4rem 0rem;
     display: flex;
     justify-content: space-around;
     align-items: center;
 }
 .couponmon{
   position: relative;
 }
 .couponimgs{
    margin:0.2rem 0.3rem;
    margin-left: 0.4rem;
    width: 100%;
 }
 .couponmoney{
     font-size: 0.7rem;
     position: absolute;
     top: 25%;
     left: 26%;
     color: #fff;
 }
 .couponmanp{
     font-weight: bold;
     line-height: 0.6rem;
 }
 .couponmantime{
     color: #ccc;
     font-size: 0.3rem;
 }
 .couponright{
     width: 19%;
     border-left: 1px solid #ccc;
     border-radius: 0.4rem 0rem 0rem 0.4rem;
     color: #f00;
     font-size: 0.4rem;
     display: flex;
     justify-content: center;
     align-items: center;
 }
 .couponman{
     margin-left: 0.3rem;
 }
</style>
