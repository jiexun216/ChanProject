<template>
   <div class="usecoupons">
             <div class="usecoup" @click="usecoupon">
                 <div class="usecoupii">
                     <i class="wxpayimg wxpayimgfour"></i>
                     <p>可用优惠券</p> 
                 </div>
                   <i class="wxpayimg wxpayimgfive" ></i> 
             </div>
            
             <div class="overlayer" @touchmove.prevent v-if="couponsheader" >
                   <div class="coupons">
                        <div class="couponstop" >
                            <span>可用优惠券</span>
                            <i class="wxpayimg wxpayimgsix" @click="couponsclose"></i>
                        </div>
                        <van-radio-group v-model="radio" @change="couponChange">
                        <div class="couponscon" v-for="(item, index) in couponList" :key="index">
                            <div class="couponsmons">
                                <div class="couponsmon">
                                   <i class="couponimg couponimgs"></i>
                                    <span class="conmoney"> ￥{{item.preferentialAmount}}</span>  
                                </div>  
                            </div> 
                            <div class="couprice">
                                    <h4>满{{item.condition}}元</h4>
                                    <p class="coupricep">{{item.startDate}}-{{item.endDate}}</p>
                            </div>   
                            <van-radio :name="item.memberCouponId"></van-radio>
                        </div>
                        </van-radio-group>
                       
                    </div> 
             </div>
        </div>    
</template>

<script>
    export default {
        data () {
            return {
                couponsheader: false,
                check: true,
                 radio: '1'
            }
        },
        props: {
            couponList: Array,
        },
        methods: {
             usecoupon () {
             this.couponsheader = true
         },
            couponsclose () {
             this.couponsheader = false
         },
         couponChange (memberCouponId) {
             this.$emit('getCoupon', memberCouponId)
         }
        }
    }
</script>

<style>
.usecoupons{
    margin: 0.4rem;
    border: 1px solid #fff;
    box-shadow: 0px 0px 10px 5px #fafafa;
    font-size: 0.4rem;
    padding: 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.usecoup{
    width: 100%;
    display: flex;
    justify-content:space-between;
    align-items: center;
}
.usecoupii{
    display: flex;
    align-items: center;
}
.usecoup p{
    margin-left: 0.3rem;
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
.coupons{
    position: absolute;
    bottom: 50px;
    background: #fff;
    width: 100%;
    border-radius: 0.3rem 0.3rem 0rem 0rem; 
}
.couponstop{
    margin: 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.couponscon{
    margin: 0.4rem;
    box-shadow: 0px 0px 10px 5px #fafafa;
    display: flex;
    justify-content:space-around;
    align-items: center;
    position: relative;
}
.couponimg{
   display: inline-block;
   width: 2.5rem;
   height:2.5rem;
   background-size: cover;
   margin-left: 0.2rem;
}
.couponimgs{
    background: url(../../assets/img/27.png) no-repeat center center;
}
.couponsmons{
    position: relative; 
}
.conmoney{
   position: absolute;
   top: 0;
   right: 0;
   left: 0;
   bottom: 0;
   margin: auto;    
   display: flex;
   justify-content: center;
   align-items: center;
   color: #fff;
   font-size: 0.6rem;
   padding: 0.2rem;
}
.coupricep{
    color: #ccc;
    font-size: 0.3rem;
}
</style>
