<template>
    <div>
        <div class="orderdetop">
            <router-link to="/">
                <i class="back backs"></i>     
            </router-link>
            <span >我的优惠券</span>
            <span class="myorder">
                <i class="back backcoups"></i>
            </span>
        </div>
        <div class="usecoupons">
             <div v-for="val in statusList" :class="{'useitembgs':status===val.key}" :key="val.key" :title="val.title" @click="handleSwitchTab(val.key)" class="useitembg">
                <span>{{val.title}}</span>
             </div>
        </div>
        <div class="couponsitem" v-for="(item,index) in listData" :key="index">
             <div class="couponitem">
                  <div class="couponmon">
                    <img src="../../assets/img/27.png"  class="couponimgs">
                    <span class="couponmoney">
                        ￥{{item.preferentialAmount}}
                    </span>
                  </div>
                  <div class="couponman">
                      <p class="couponmanp">满{{item.condition}}元</p>
                      <p class="couponmantime">{{item.startDate}}-{{item.endDate}}</p>
                  </div>
             </div>
             <div class="couponright" v-if="item.couponStatus == 'waitingUse'">
                   <p>去使用</p>
             </div>
        </div>
    </div>
</template>

<script>
import { Dialog } from "vant";
import { getCouponList } from "@/api/coupon/index.js";
export default {
  data() {
    return {
      statusList: [
        {
          key: "waitingUse",
          title: "未使用"
        },
        {
          key: "alreadyUse",
          title: "已使用"
        },
        {
          key: "haveExpired",
          title: "已过期"
        }
      ],
      loading: false,
      status: "waitingUse",
      listData: []
    };
  },
  methods: {
    getData() {
      getCouponList(this.status)
        .then(res => {
          this.listData = res.data.data.list;
        })
        .catch(err => {
          return err;
        });
    },
    handleSwitchTab(key) {
      this.status = key;
      this.listData = [];
      this.$router.replace(
        { name: "couponList", query: { status: this.status } },
        () => {
          this.getData();
        }
      );
    },
    refreshData() {
      this.status = this.$route.query.status
        ? this.$route.query.status
        : "waitingUse";
      this.listData = [];
      this.getData();
    }
  },
  created () {
      this.refreshData();
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.refreshData();
    });
  }
};
</script>

<style>
.orderdetop {
  font-size: 0.4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.back {
  display: inline-block;
  width: 0.7rem;
  height: 0.7rem;
  background-size: cover;
  margin-left: 0.2rem;
}
.backs {
  background: url(../../assets/img/42.png) no-repeat center center;
}
.backcoups {
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
  display: flex;
  justify-content: flex-start;
}
.couponitem {
  border-right: 1px dotted #ccc;
  width: 80%;
  border-radius: 0rem 0.4rem 0.4rem 0rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.couponmon {
  position: relative;
}
.couponimgs {
  margin: 0.2rem 0.3rem;
  margin-left: 0.4rem;
  width: 100%;
}
.couponmoney {
  font-size: 0.7rem;
  position: absolute;
  top: 25%;
  left: 26%;
  color: #fff;
}
.couponmanp {
  font-weight: bold;
  line-height: 0.6rem;
}
.couponmantime {
  color: #ccc;
  font-size: 0.3rem;
}
.couponright {
  width: 19%;
  border-left: 1px solid #ccc;
  border-radius: 0.4rem 0rem 0rem 0.4rem;
  color: #f00;
  font-size: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.couponman {
  margin-left: 0.3rem;
}
</style>
