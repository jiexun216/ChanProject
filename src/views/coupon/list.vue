<template>
    <div>
        <div class="orderdetop">
            <router-link to="/">
                <i class="back backs"></i>     
            </router-link>
            <span >{{$t(mycoupon)}}</span>
            <span class="myorder">
                <i class="back backcoups" @click="delecoupon"></i>
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
                    <!-- <img src="../../assets/img/27.png"  class="couponimgs"> -->
                    <span class="couponmoney couponimgs couponimg">
                        ￥{{item.preferentialAmount}}
                    </span>
                  </div>
                  <div class="couponman">
                      <p class="couponmanp">满{{item.condition}}元</p>
                      <p class="couponmantime">{{item.startDate}}-{{item.endDate}}</p>
                  </div>
             </div>
             <div class="couponright" v-if="item.couponStatus == 'waitingUse'">
                   <p @click="$router.push({path: '/Index'})">{{$t(goUse)}}</p>
             </div>
        </div>
        <van-popup v-model="show" position="bottom">
           <div class="delebottom">
              <p class="deleyi" @click="deleyi">删除已过期优惠券</p>
              <p @click="concaldele">取消</p>
           </div>
           <div>
           </div>
        </van-popup>
    </div>
</template>

<script>
import Vue  from 'vue';
import { Dialog } from "vant";
import { getCouponList, deleteCouponList} from "@/api/coupon/index.js";
import { Popup } from 'vant';

Vue.use(Popup);
export default {
  data() {
    return {
      mycoupon: 'common.mycoupon',
      goUse: 'common.gouse',
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
      listData: [],
      show:false
    };
  },
  methods: {
    getData() {
      getCouponList(this.status)
        .then(res => {
          if (res.data.status == 99) {
            this.$toast(res.data.message ? res.data.message : '操作失败')
            this.$router.push({name: res.data.data.url})
          }
          this.listData = res.data.data.list;
        })
        .catch(err => {
          return err;
        });  
    },
    postData () {
       deleteCouponList().then(res => {
         if(this.res.data.status == 99) {
           this.$toast(res.data.message ? res.data.message: '操作失败')
           this.$router.push({name:res.data.data.url})
         }
       })
       .catch(err => {
          return err
       })
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
    },
    delecoupon() {
      this.show = true
    },
    concaldele () {
      this.show = false
    },
    deleyi () {
      Dialog.confirm({
        title: '确认删除',
        message: '确认要删除过期优惠券吗？'
      }).then(() => {
        this.postData()
        this.show= false;
         window.location.reload()
      }).catch(() => {
        this.show = false
      });
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
  margin-left: 0.4rem;
}
.backs {
  background: url(../../assets/img/42.png) no-repeat center center;
}
.backcoups {
  background: url(../../assets/img/49.png) no-repeat center center;
}
.myorder{
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
  margin:0.2rem 0.4rem;
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
  
  align-items: center;
}
.couponmon {
  position: relative;
  margin: 0.2rem 0.3rem;
  width: 2.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.couponimgs {
  position: relative;  
  display: flex;
  justify-content: center;
  align-items: center;
}
.couponimg{
  background: url('../../assets/img/27.png') no-repeat center center;
}
.couponmoney {
  font-size: 0.3rem;
  font-weight: bold;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.couponmanp {
  font-weight: bold;
  line-height: 0.6rem;
}
.couponmantime {
  color: #ccc;
  font-size: 10px;
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
 margin: 0.3rem;
}
.delebottom{
  text-align: center;
  font-size: 0.4rem;
  line-height: 1rem;
  color: #ccc;
}
.deleyi{
  border-bottom: 1px solid #eee;
  color: #000;
}
</style>
