<template>
     <div>
         <!-- <h1>立即支付页面</h1> -->
         <van-nav-bar
            :title="vantitle"
            left-text=""
            :right-text="$t(ordercenter)"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
            />
            <!-- <div class="newaddtop" v-if="addressStatus === 0">
                <div class="newaddress" @click="addAddressHandle">
                    <div>
                        <p class="newaddressone">{{$t(newaddress)}}</p>
                        <p>{{$t(addressshou)}}</p> 
                    </div>
                    <i class="newaddressimg newaddressimgs"></i>
                </div>
           </div> -->
        <!-- <oldaddress @getAddress="selectAddressHandle" :deliveryPerson="addressInfo.deliveryPerson" :deliveryPhone="addressInfo.deliveryPhone" :fullAddress="addressInfo.fullAddress" v-else></oldaddress> -->
        <pay @getRadio = "handleChangePayWay"></pay>
        <!-- <coupons :couponList="this.couponList" @getCoupon = "handleChangeCoupon"></coupons>
        <orderInfo :orderData="this.orderData" :orderAmount="orderAmount" :goodsList="this.goodsList" @getRemark = "handleGetRemark"></orderInfo> -->
        <div class="footsubmit">
             <van-submit-bar
                :price="orderAmount"
                :button-text="$t(submitorder)"
                @submit="onSubmit"
                :label="$t(totallable)"
                />
        </div>
     </div>
</template>
<script>
import Vue from "vue";
import { NavBar, Toast } from "vant";
import { Checkbox, CheckboxGroup } from "vant";
import { SubmitBar } from "vant";
import { Dialog } from 'vant';

Vue.use(Dialog);
Vue.use(SubmitBar);
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(NavBar);
import orderInfo from "../../components/settlement/orderInfo";
import coupons from "../../components/settlement/coupons";
import address from "../../components/settlement/address";
import pay from "../../components/settlement/pay";
import newaddress from "../../components/settlement/newaddress";
import { orderSettlement,immnetPayment } from "@/api/cart/index.js";
export default {
  components: {
    orderInfo: orderInfo,
    coupons: coupons,
    oldaddress: address,
    pay: pay,
    newAddress: newaddress
  },
  data() {
    return {
      addressStatus: 1,
      addressInfo: {},
      couponList: [],
      goodsList: [],
      orderData: {},
      orderAmount: 0.00,
      payParam: {
        cartIds: "",
        pay_way: 0
      },
      newaddress: 'common.newaddress',
      addressshou: 'common.addressshou',
      jiesuan:'common.jiesuan',
      submitorder: 'common.submitorder',
      ordercenter: 'common.ordercenter',
      vantitle:'',
      totallable: 'common.totallable',
      erweimashow:false,
      order_id:'',
    };
  },
  methods: {
   getData () {
       this.orderAmount= Number.parseFloat(this.$route.query.price) * 100000
       this.order_id = this.$route.query.id
   },
    // 获取支付方式 zhangjie 0918
    handleChangePayWay (payType) {
        this.payParam.pay_way = payType
    },
    // 提交生成订单
    onSubmit() {
        if (this.payParam.pay_way == 0) {
            this.$toast(this.$t("common.choosepayfize"))
            return false
        }
        immnetPayment(
          this.order_id,
          this.payParam.pay_way
          ).then(res => {
              this.$toast(res.data.message ? res.data.message : this.$t("common.failuredcaozuo"))
              if (res.data.status == 99) {
                  this.$router.push({name: res.data.data.url})
              } else if (res.data.status == 0) {
                  window.location.href=res.data.data.pay_url;
              }
          }).catch((err) => {
              return err;
          })
        },
    onClickLeft() {
      this.$router.push({ name: "cartList" });
    },
    onClickRight() {
      this.$router.push({ name: "orderList" });
    },
    usetouchmove() {
      Toast("jaosd ahsd");
    }
  },
  created () {
      this.getData();

  }
};
</script>

<style>
.van-nav-bar{
   height:25px;
   line-height:29px;
}
.van-nav-bar .van-icon {
  color: #ccc;
}
.van-nav-bar__text {
  color: #ccc;
}
.van-hairline--bottom::after {
  border: none;
}
.newaddtop{
    margin: 0.4rem;
    border: 1px solid #fff;
    box-shadow: 0px 0px 10px 5px #fafafa;
    background: url(../../assets/img/symbols-group-3.png) no-repeat bottom;
    font-size: 0.4rem;
}
.settlhead span{
    display: inline-block;
    margin: 0.2rem;
    font-size: 0.4rem;
    font-weight: bold;
}
.newaddress{
    margin: 0rem 0.6rem 0.6rem 0.2rem;
    padding-top: 0.3rem;
    display: flex;
    justify-content: space-between;
}
.newaddressone{
    color: #f00;
    font-size: 0.45rem;
}
.newaddressimg{
    display: inline-block;
    width: 1.5rem;
    height:1.5rem;
    background-size: cover;
    display: inline-block;
    margin-right: -0.5rem;
}
.newaddressimgs {
    background: url(../../assets/img/19.png) no-repeat center center;
}
.van-nav-bar__title{
  font-size: 0.4rem;
}
.marginauto{
  width:100%;
  margin:auto;
  text-align: center;
}
</style>
