<template>
     <div>
         <van-nav-bar
            title="结算"
            left-text=""
            right-text="订单中心"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
            />
        <oldaddress></oldaddress>
        <new-address v-if="newaddress"></new-address>
        <pay></pay>
        <coupons></coupons>
        <orderInfo></orderInfo>
        <div class="foot">
             <van-submit-bar
                :price="3050"
                button-text="提交订单"
                @submit="onSubmit"
                />
        </div>
     </div>
</template>
<script>
import Vue from "vue"
import { NavBar, Toast } from 'vant'
import { Checkbox, CheckboxGroup } from 'vant'
import { SubmitBar } from 'vant'
Vue.use(SubmitBar);
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(NavBar)
import orderInfo from "../../components/settlement/orderInfo"
import coupons from "../../components/settlement/coupons"
import address from "../../components/settlement/address"
import pay from "../../components/settlement/pay"
import newaddress from "../../components/settlement/newaddress"
export default{
    components: {
       "orderInfo": orderInfo,
       "coupons": coupons,
       "oldaddress": address,
       "pay": pay,
       "newAddress": newaddress,
    },
     data () {
         return {
            newaddress: false
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
.van-nav-bar .van-icon{
    color: #ccc;
}
.van-nav-bar__text{
    color: #ccc;
}
.van-hairline--bottom::after{
    border: none;
}
</style>
