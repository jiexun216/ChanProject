<template >
     <div class="payment">
             <p>{{$t(paystyle)}}</p>
             <van-radio-group v-model="radio" @change="payWayChange">
             <div class="wxpay">
                 <div class="wxpaycen">
                     <i class="wxpayimg wxpayimgs"></i>
                 <div class="wxpayright">
                    <h3>{{$t(wxpay)}}</h3>
                    <p>{{$t(tuiwx)}}</p>
                 </div>
                 </div>
                 <div>
                      <van-radio name="1"></van-radio>
                 </div>
             </div>
             <div class="wxpay">
                 <div class="wxpaycen">
                    <i class="wxpayimg wxpayimgtwo"></i>
                                    <div class="wxpayright">
                                        <h3>{{$t(alipay)}}</h3>
                                        <p>{{$t(tuialipay)}}</p>
                                    </div>
                 </div>
                 <div>
                    <van-radio name="2"></van-radio>
                 </div>
             </div>
              <div class="wxpay">
                  <div class="wxpaycen">
                                 <i class="wxpayimg wxpayimgthr"></i>
                                    <div class="wxpayright">
                                        <h3>Visa</h3>
                                        <p>{{$t(tuivisapay)}}</p>                                    
                                    </div>
                  </div>
                <div>
                    <van-radio name="3"></van-radio>
                 </div>
             </div>
             </van-radio-group>
        </div>    
</template>

<script>
import Vue from "vue"
import { NavBar, Toast } from 'vant'
import { RadioGroup, Radio } from 'vant';
import { SubmitBar } from 'vant';
Vue.use(SubmitBar);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(NavBar)
export default{
     data () {
        return {
           checked: true,
            radio: '',
            paystyle: 'common.paystyle',
            wxpay: 'common.wxpay',
            tuiwx: 'common.tuiwx',
            alipay: 'common.alipay',
            tuialipay: 'common.tuialipay',
            tuivisapay: 'common.tuivisapay'
        }
     },
     methods: {
         payWayChange (val) {
             this.$emit('getRadio', val)
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
.wxpay{
    width: 100%;
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
   width: 28px;
   height: 28px;
   background-size: cover;
   padding: 0;
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
    margin-right: 0.5rem;
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
