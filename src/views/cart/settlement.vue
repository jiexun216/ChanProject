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
        <new-address v-if="addressStatus === 0"></new-address>
        <oldaddress :deliveryPerson="addressInfo.deliveryPerson" :deliveryPhone="addressInfo.deliveryPhone" :fullAddress="addressInfo.fullAddress" v-else></oldaddress>
        <pay @getRadio = "handleChangePayWay"></pay>
        <coupons :couponList="this.couponList" @getCoupon = "handleChangeCoupon"></coupons>
        <orderInfo :orderData="this.orderData" :orderAmount="orderAmount" :goodsList="this.goodsList" @getRemark = "handleGetRemark"></orderInfo>
        <div class="foot">
             <van-submit-bar
                :price="orderAmount"
                button-text="提交订单"
                @submit="onSubmit"
                />
        </div>
     </div>
</template>
<script>
import Vue from "vue";
import { NavBar, Toast } from "vant";
import { Checkbox, CheckboxGroup } from "vant";
import { SubmitBar } from "vant";
Vue.use(SubmitBar);
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(NavBar);
import orderInfo from "../../components/settlement/orderInfo";
import coupons from "../../components/settlement/coupons";
import address from "../../components/settlement/address";
import pay from "../../components/settlement/pay";
import newaddress from "../../components/settlement/newaddress";
import { orderSettlement,generatingOrder } from "@/api/cart/index.js";
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
        buyType: 1,
        cartIds: "",
        addressId: 0,
        goodsId: 0,
        skuId: 0,
        goodsQuantity: 0,
        memberCouponId: 0,
        remark: "",
        payWay: 0
      }
    };
  },
  methods: {
    // 请求接口返回数据 zhangjie
    getData() {
      this.payParam.buyType = this.$route.query.buyType
        ? this.$route.query.buyType
        : 1;
      this.payParam.cartIds = this.$route.query.cartIds
        ? this.$route.query.cartIds
        : "";
      this.payParam.addressId = this.$route.query.addressId
        ? this.$route.query.addressId
        : 0;
      this.payParam.goodsId = this.$route.query.goodsId
        ? this.$route.query.goodsId
        : 0;
      this.payParam.skuId = this.$route.query.skuId
        ? this.$route.query.skuId
        : 0;
      this.payParam.goodsQuantity = this.$route.query.goodsQuantity
        ? this.$route.query.goodsQuantity
        : 0;
      orderSettlement(
        this.payParam.buyType,
        this.payParam.cartIds,
        this.payParam.addressId,
        this.payParam.goodsId,
        this.payParam.skuId,
        this.payParam.goodsQuantity
      ).then(res => {
          this.$toast(res.data.message ? res.data.message : '操作失败')
          if (res.data.status == 99) {
              this.$router.push({name: res.data.data.url})
          } else if (res.data.status == 0) {
              this.addressStatus = res.data.data.addressStatus
              this.addressInfo = res.data.data.addressInfo
              this.couponList = res.data.data.couponList
              this.goodsList = res.data.data.goodsList
              this.orderData = res.data.data.orderData
              this.orderAmount = Number(res.data.data.orderData.orderAmount * 100)
              this.payParam.addressId = res.data.data.addressInfo.id
          }

      })
    },
    // 获取支付方式 zhangjie 0918
    handleChangePayWay (payType) {
        this.payParam.payWay = payType
    },
    // 获取备注信息
    handleGetRemark (remark) {
        this.payParam.remark = remark
    },
    // 获取选择的优惠券 zhangjie 0918
    handleChangeCoupon (memberCouponId) {
        this.payParam.memberCouponId = memberCouponId
        let couponInfo = {}
        this.couponList.forEach(val => {
            if (val.memberCouponId == memberCouponId) {
                couponInfo = val
            }
        });
        // 判断是否满足使用条件
        if (couponInfo.condition > this.orderAmount) {
            this.payParam.memberCouponId = 0
            this.$toast('此优惠券不满足使用条件')
        } else {
            this.payParam.memberCouponId = couponInfo.id
            this.orderAmount = Number((this.orderData.orderAmount - couponInfo.preferentialAmount) * 100)
        }
    },
    // 提交生成订单
    onSubmit() {
        if (this.payParam.addressId == 0) {
            this.$toast('请先选择收货地址')
            return false
        }
        if (this.payParam.remark == '') {
            this.$toast('请填写备注信息')
            return false
        }
        if (this.payParam.payWay == 0) {
            this.$toast('请选择支付方式')
            return false
        }
        generatingOrder(
        this.payParam.buyType,
        this.payParam.cartIds,
        this.payParam.addressId,
        this.payParam.goodsId,
        this.payParam.skuId,
        this.payParam.goodsQuantity,
        this.payParam.memberCouponId,
        this.payParam.remark,
        this.payParam.payWay
      ).then(res => {
          this.$toast(res.data.message ? res.data.message : '操作失败')
          if (res.data.status == 99) {
              this.$router.push({name: res.data.data.url})
          } else if (res.data.status == 0) {
               this.$router.push({name: 'orderList'})
          }

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
.van-nav-bar .van-icon {
  color: #ccc;
}
.van-nav-bar__text {
  color: #ccc;
}
.van-hairline--bottom::after {
  border: none;
}
</style>
