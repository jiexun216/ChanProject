<template >
     <div class="payment">
            <p>{{$t(paystyle)}}</p>
            <van-radio-group v-model="radio" @change="payWayChange"> 
            <div class="wxpay" style="width:100%;">
                 <div class="wxpaycen">
                     <div class="wxwxwx">
                        <i class="wxpayimg wxpayimgs"></i>
                        <h4>{{$t(wxpay)}}</h4>  
                     </div>       
                     <div>
                         <van-radio name="1"></van-radio>
                     </div>  
                 </div>
            </div>
            <div class="wxpay" style="width:100%;">
                 <div class="wxpaycen">
                     <div class="wxwxwx">
                        <i class="wxpayimg wxpayimgtwo"></i>
                        <h4>{{$t(alipay)}}</h4> 
                     </div>  
                    <div>
                       <van-radio name="2"></van-radio> 
                    </div>
                 </div>
            </div>
            <div class="wxpay" style="width:100%;">
                 <div class="wxpaycen">
                     <div class="wxwxwx">
                        <i class="wxpayimg wxpayimgtwo"></i>
                        <h4>{{$t(alipayxg)}}</h4> 
                     </div>  
                    <div>
                       <van-radio name="3"></van-radio> 
                    </div>
                 </div>
            </div>
              <!-- <div class="wxpay" style="width:100%;">
                  <div class="wxpaycen">
                      <div class="wxwxwx">
                        <i class="wxpayimg wxpayimgthr"></i>
                        <h4>Visa</h4>  
                      </div>
                        
                        <div>
                           <van-radio name="4"></van-radio> 
                        </div>
                        
                 </div>
             </div> -->
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
            alipayxg:'common.alipayxg',
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
}
.wxpaycen{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.2rem;
}
.wxwxwx{
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.wxpayimg{
   display: inline-block;
   width: 28px;
   height: 28px;
   background-size: cover;
   padding: 0;
   margin-right: 0.3rem;
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
.payment  .van-radio-group{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
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
