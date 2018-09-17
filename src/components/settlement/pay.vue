<template >
     <div class="payment">
             <p>支付方式</p>
             <div class="wxpay">
                 <div class="wxpaycen">
                     <i class="wxpayimg wxpayimgs"></i>
                 <div class="wxpayright">
                    <h3>微信支付</h3>
                    <p>推荐已在微信中绑定银行卡的用户使用</p>
                 </div>
                 </div>
                 <div>
                    <van-checkbox v-model="checked"></van-checkbox>
                 </div>
             </div>
             <div class="wxpay">
                 <div class="wxpaycen">
                    <i class="wxpayimg wxpayimgtwo"></i>
                                    <div class="wxpayright">
                                        <h3>支付宝支付</h3>
                                        <p>安全快捷，可支持银行卡支付</p>
                                    </div>
                 </div>
                 <div>
                    <van-checkbox></van-checkbox>
                 </div>
             </div>
              <div class="wxpay">
                  <div class="wxpaycen">
                                 <i class="wxpayimg wxpayimgthr"></i>
                                    <div class="wxpayright">
                                        <h3>Visa</h3>
                                        <p>支持国际支付</p>                                    
                                    </div>
                  </div>
                <div>
                    <van-checkbox></van-checkbox>
                 </div>
             </div>
        </div>    
</template>

<script>
  import Vue from "vue"
import { NavBar, Toast } from 'vant'
import { Checkbox, CheckboxGroup } from 'vant';
import { SubmitBar } from 'vant';
Vue.use(SubmitBar);
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(NavBar)
export default{
     data () {
        return {
           checked: true,
           check: true,
           
        }
     },
     methods: {
         onClickLeft () {
             this.$router.push("/Cargoods")
         },
         onClickRight () {
             Toast("aaa")
         },
         usetouchmove () {
             Toast("jaosd ahsd")
         },
        
         onSubmit () {

         }
     }

}  
</script>

<style>
.payment{
    margin: 0.4rem;
    border: 1px solid #fff;
    box-shadow: 0px 0px 10px 5px #fafafa;
    font-size: 0.4rem;
    padding: 0.4rem;
}
.wxpay{
    height: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.wxpaycen{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.wxpayimg{
    display: inline-block;
   width: 0.8rem;
   height: 0.8rem;
   background-size: cover;
   margin-left: 0.2rem;
}
.wxpayimgs{
    background: url(../../assets/img/31.png) no-repeat center center;
}
.wxpayimgtwo{
    background: url(../../assets/img/30.png) no-repeat center center;
}
.wxpayimgthr{
    background: url(../../assets/img/29.png) no-repeat center center;
}
.wxpayimgfour{
    background: url(../../assets/img/28.png) no-repeat center center;
}
.wxpayimgfive{
    background: url(../../assets/img/49.png) no-repeat center center;
}
.wxpayimgsix{
    background: url(../../assets/img/39.png) no-repeat center center;
}
.wxpayright{
    margin-left: 0.3rem;
}
.wxpayright p{
    font-size: 0.2rem;
    color: #ccc;
}
.van-checkbox__icon--checked .van-icon{
    background: #f00;
    border: 1px solid #f00;
    margin-right: 0.3rem;
}
.van-checkbox__icon--checked .van-icon{
    margin: 0;
}
</style>
