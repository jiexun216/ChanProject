<template>
    <div v-if="loading">
        <div class="personal-top">
            <div class="members clearfloat">
                 <img src="../../assets/img/24.png"  class="membersimg">
             </div>
            <div class="member">  
                <div class="loginafter">
                    <i class="memberImg"><img :src="personalitem.memberData.headImg" />
                                         </i>
                    <div class="loginright">
                        <p class="loginname">{{personalitem.memberData.nickname}}</p>
                        <p>{{personalitem.memberData.rankName}}</p>
                    </div>
                </div> 
            </div>
            <div class="order">
                 <div class="orderitem">
                        <span>{{$t(myorder)}}</span>
                        <span @click="allorder">{{$t(allorders)}} ＞</span>
                 </div>
            </div>
            <div class="shoppitem">
                  <div class="waitpay" @click="$router.push({name:'orderList', query: {status: 'waitingPay'}})" >
                      <i class="iconf waitpayone"></i>
                       <!-- <span class="waitnum">01</span> -->
                      <p>{{$t(waitpay)}}</p>
                  </div> 
                  <div class="waitpay" @click="$router.push({name:'orderList', query: {status: 'waitingSign'}})">
                      <i class="iconf waitpaytwo"></i>
                      <p>{{$t(waitgoods)}}</p>
                  </div> 
                  <div class="waitpay" @click="$router.push({name:'orderList', query: {status: 'haveSigned'}})">
                      <i class="iconf waitpaythree"></i>
                      <p>{{$t(completed)}}</p>
                  </div> 
                  <div class="waitpay">
                      <i class="iconf waitpayfour"></i>
                      <p>{{$t(serviced)}}</p>
                  </div> 
             </div>
             <div class="buyitems">
                    
                     <div class="coupons" @click="$router.push({name: 'couponList'})">
                       <i class="iconc couponsone"></i>
                       <span>{{$t(mycoupon)}}</span>
                       <span class="couponsnum"> {{personalitem.couponCount}}＞</span>
                     </div>  
               
                  <div class="coupons" @click="$router.push({name: 'addressList'})">
                    <i class="iconc couponstwo"></i>
                    <span>{{$t(myaddress)}}</span>
                    <span class="couponsnum">＞</span>
                  </div>
                 
                <div class="coupons">
                    <i class="iconc couponsthree"></i>
                    <span>{{$t(OnlineService)}}</span>
                    <span class="couponsnum"> {{personalitem.serviceTelephone}}＞</span>
                </div>
                
                <div class="coupons" @click="$router.push({name: 'ucenterSetup'})">
                    <i class="iconc couponsfour"></i>
                    <span>{{$t(setup)}}</span>
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
             },
             myorder: 'common.myorder',
             allorders: 'common.allorder',
             waitpay: 'common.waitpay',
             waitgoods: 'common.waitgoods',
             completed: 'common.completed',
             serviced: 'common.serviced',
             mycoupon: 'common.mycoupon',
             myaddress: 'common.myaddress',
             OnlineService: 'common.OnlineService',
             setup: 'common.setup'
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
                 this.memberData = res.data.data.memberData
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
.members{
    margin: 0.2rem;
}
.clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0} 
.clearfloat{zoom:1} 
.membersimg{
    float: right;
}
.member{
    border-bottom:5px solid #ccc;
}
.memberp{
    font-size: 0.5rem;
    margin:0 0.4rem;
}
.orderitem{
   border-bottom: 2px solid #f7f7f7;
   display: flex;
   justify-content: space-between;
   align-items: center;
}
.orderitem span{
    margin: 0.2rem 0.4rem;
    color: #ccc;
    font-size: 0.35rem;
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
    color: #f00;
    top: -8px;
}
.iconf{
    display: inline-block;
   width: 0.8rem;
   height: 0.8rem;
   background-size: cover;
   margin-left: 0.2rem;
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
.loginafter{
    margin: 0.4rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.memberImg{
   width: 1.5rem;
   border-radius: 50%;
}
.memberImg img{
    height: 1.5rem;
    width: 1.5rem;
   border-radius: 50%;
}
.loginright{
    margin-left: 0.2rem;
    color: #ccc;
    /* margin-top: 0.2rem; */
}
.loginname{
   font-size: 0.5rem;
   color: #000;
   font-weight: bold;
}
</style>
