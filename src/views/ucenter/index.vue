<template>
    <div v-if="loading">
        <div class="personal-top">
            <div class="members clearfloat">
                 <img src="../../assets/img/24.png"  class="membersimg">
             </div>
            <div class="member"> 
                <!-- <div>
                    <router-link to="/userpwdlogin"> 
                        <p style="margin-left:0.5rem;font-size:0.6rem;">登陆</p>          
                    </router-link> 
                </div> -->
             </div>
             <div class="order">
                 <div class="orderitem">
                        <span>我的订单</span>
                        <span @click="allorder">全部订单 ＞</span>
                 </div>
             </div>
             <div class="shoppitem">
                  <div class="waitpay" @click="$router.push({name:'orderList', query: {status: 'waitingPay'}})" >
                      <i class="iconf waitpayone"></i>
                       <span class="waitnum">01</span>
                      <p>待付款</p>
                  </div> 
                  <div class="waitpay" @click="$router.push({name:'orderList', query: {status: 'waitingSign'}})">
                      <i class="iconf waitpaytwo"></i>
                      <p>待收货</p>
                  </div> 
                  <div class="waitpay" @click="$router.push({name:'orderList', query: {status: 'haveSigned'}})">
                      <i class="iconf waitpaythree"></i>
                      <p>已完成</p>
                  </div> 
                  <div class="waitpay">
                      <i class="iconf waitpayfour"></i>
                      <p>售后服务</p>
                  </div> 
             </div>
             <div class="buyitems">
                    
                     <div class="coupons" @click="$router.push({name: 'couponList'})">
                       <i class="iconc couponsone"></i>
                       <span>我的优惠券</span>
                       <span class="couponsnum"> {{personalitem.couponCount}}＞</span>
                     </div>  
               
                  <div class="coupons" @click="$router.push({name: 'addressList'})">
                    <i class="iconc couponstwo"></i>
                    <span>我的地址</span>
                    <span class="couponsnum">＞</span>
                  </div>
                 
                <div class="coupons">
                    <i class="iconc couponsthree"></i>
                    <span>在线客服</span>
                    <span class="couponsnum"> {{personalitem.serviceTelephone}}＞</span>
                </div>
                
                <div class="coupons" @click="$router.push({name: 'ucenterSetup'})">
                    <i class="iconc couponsfour"></i>
                    <span>设置</span>
                    <span class="couponsnum"> 0＞</span>
                </div>
                
             </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Vue from 'vue'
import Footer from '@/components/footer'
import { getIndex } from '@/api/ucenter/index.js'
export default {
    components: {
          Footer
      },
      data () {
         return {
             loading: false,
             member: '',
             personalitem: {
                 serviceTelephone: '',
                 couponCount:'',
             }
         }
      },
     methods: {
         // 获取数据
         getData () {
             getIndex ().then(res => {
                 if (res.data.status == 99) {
                     this.$toast(res.data.message ? res.data.message : '操作失败')
                     this.$router.push({name: res.data.data.url})
                 }
                 this.personalitem =res.data.data;
                 this.loading = true;
             }).catch(err => {
                 return err
             })
         },
         allorder () {
             this.$router.push({name: 'orderList'})
         }
     },
     created () {
         this.getData();
     },
}
</script>

<style>
* {
    font-size: 0.4rem;
}
.personal-top{
    height: 100%;
}
.members{
    margin: 0.4rem;
}
.clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0} 
.clearfloat{zoom:1} 
.membersimg{
    float: right;
}
.member{
    height: 2rem;
    border-bottom:5px solid #ccc;
}
.memberp{
    font-size: 0.5rem;
    margin:0 0.4rem;
}
.orderitem{
   font-size: 0.4rem;
   border-bottom: 2px solid #f7f7f7;
   display: flex;
   justify-content: space-between;
   align-items: center;
}
.orderitem span{
    margin: 0.4rem;
}
.shoppitem{
    border-bottom: 5px solid #f7f7f7;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.waitpay{
    margin: 0.4rem;
    text-align: center;
    position: relative;
}
.waitnum{
    position: absolute;
}
.waitpayone{
    background: url('../../assets/img/20.png') no-repeat center center;
}
.waitpaytwo{
    background: url('../../assets/img/23.png') no-repeat center center;
}
.waitpaythree{
    background: url('../../assets/img/22.png') no-repeat center center;
}
.waitpayfour{
    background: url('../../assets/img/21.png') no-repeat center center;
}
.coupons{
    width: 100%;
    line-height: 1rem;
}
.iconc{
    display:inline-block;
  width: 0.7rem;
  height: 0.7rem;
  background-size: cover;
  vertical-align: middle;
  text-align: center;
  margin:0 0.2rem;
}
.couponsone {
    background: url('../../assets/img/18.png') no-repeat center center;
}
.couponstwo {
    background: url('../../assets/img/17.png') no-repeat center center;
}
.couponsthree{
    background: url('../../assets/img/16.png') no-repeat center center;
}
.couponsfour{
    background: url('../../assets/img/15.png') no-repeat center center;
}
.couponsnum {
    float:right;
    margin: 0 0.4rem;
}
</style>
