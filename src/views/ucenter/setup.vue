<template>
     <div>
         <div class="settop">
            <i class="back backs" @click="$router.back(-1)"></i>     
            <span class="setupup">{{$t(setup)}}</span>
        </div>
        <div class="setitem">
             <div class="setitems" >
                          <!-- 点击出现弹窗  @click="setitemhead" -->
                 <span>
                     {{$t(headportrait)}} </span>
                 <span>
                     <i class="back backtx"></i>
                     <span class="settx">＞</span>
                 </span>
             </div>
             
            <div class="setitems" @click="$router.push({name: 'ucenterPersonal'})">
                <span>
                   {{$t(personaldata)}}</span>
                <span>
                 <span ref="personal"></span>
                    <span class="settx">＞</span>
                </span>
            </div>
             <!-- <router-link to='/Binding'>
                <div class="setitems">
                    <span>
                        {{$t(bindingz)}} </span>
                    <span>
                        <span>{{$t(wbinding)}}</span>
                        <span class="settx">＞</span>
                    </span>
                </div>
             </router-link> -->
             
            <div class="setitems" @click="$router.push({name: 'ucenterFeedback'})">
                <span>
                    {{$t(feedback)}} </span>
                <span>
                    <span class="settx">＞</span>
                </span>
            </div>  
             <!-- <div class="setitems">
                 <span>
                     清理缓存 </span>
                 <span>
                     <span class="settx">＞</span>
                 </span>
             </div>
             <div class="setitems">
                 <span>
                    检查更新 </span>
                 <span>
                     <span class="settx">＞</span>
                 </span>
             </div> -->
        </div>
        <div class="headerpro" @touchmove.prevent v-if="headerpro"> 
            <div class="headfoot"  >
                <p>{{$t(shot)}}</p>
                <p>{{$t(chooseimg)}}</p>
                <p class="headclose" @click="headdown">{{$t(cancel)}}</p>
            </div>   
        </div>
        <div class="setfooter" @click="loginOut">
            <img src="../../assets/img/outlo.png" alt="">
             <p>{{$t(exitlogon)}}</p>
        </div>
        <!-- <my-file @input="input($event)" v-if="myfileshow"></my-file> -->
     </div>   
      
</template>

<script>
import { mapState } from 'vuex'
import { exitLogon } from '@/api/ucenter/index.js'
import myFile from '@/components/upLoadImg/myFile.vue'
    export default {
         data () {
             return {
                 personal:'',
                 headerpro: false,
                 setup: 'common.setup',
                 headportrait: 'common.headportrait',
                 personaldata: 'common.personaldata',
                 bindingz: 'common.bindingz',
                 wbinding:'common.wbinding',
                 feedback: 'common.feedback',
                 shot: 'common.shot',
                 chooseimg: 'common.chooseimg',
                 cancel: 'common.cancelqx',
                 exitlogon: 'common.exitlogon',
                 myfileshow: true
             }
         },
         created () {
             this.$getData('ucenter/index').then(res => {
                 if (res.data.status == 99) {
                     this.$toast(res.data.message ? res.data.message : this.$t("common.failuredcaozuo"))
                     this.$router.push({name: res.data.data.url})
                 }
                  this.data = res.data.data;
             }).catch(err =>{
                  return err
             })
        },
         methods: {
            // 退出登录
            loginOut () {
                exitLogon ().then(res => {
                    this.$toast(res.data.message ? res.data.message : this.$t("common.failuredcaozuo"))

                    if (res.data.status == 0) {
                        // Vue.prototype.$store = store
                        // Vue.prototype.$store.commit('local')
                        this.$router.push({name: 'PasswordLogin'})

                    }
                })
            },
            headdown () {
                this.headerpro = false;
            },
             setitemhead () {
                 this.headerpro = true;
            }, 
            input(val) {
            this.photosList = val  //获取到的图片路径base64
            } 
         },
         computed: {
            ...mapState(['lang'])
        },
        components: {
            myFile
            }
    }
</script>

<style>
  .settop{
    font-size: 0.5rem;
    display: flex;
    justify-content:center;
    align-items: center;
    border-bottom: 1px solid #ccc;
}
  .back{
   display: inline-block;
   width: 0.7rem;
   height: 0.7rem;
   background-size: cover;
   margin-left: 0.2rem;
 }
 .backs {
   background: url(../../assets/img/42.png) no-repeat center center;
 }
 .setupup {
     margin:0 auto;
 }
 .setitem{
    padding: 0.4rem;
    font-size: 0.4rem; 
 }
 .setitems {
     display: flex;
     justify-content: space-between;
     align-items: center;
     height: 1rem;
 }
.backtx{
    background: url(../../assets/img/timg.jpg) no-repeat center center;
    border-radius: 50%;
    margin-bottom: -0.1rem;
}
.settx{
    color: #ccc;
}
.setfooter{
    position: fixed;
    bottom: 0;
    left:0;
    box-shadow: 0 0 0.5rem #ccc;
    text-align: center;
    color: #f00;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.45rem;
    line-height: 1.3rem;
}
.setfooter img{
    width: 0.8rem;
    margin-right: 0.2rem;
    margin-bottom: -0.1rem;
}
.headerpro{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background:rgba(0,0, 0, 0.5)
}
.headfoot{
    position: absolute;
    bottom: 0;
    left:0;
    font-size: 0.4rem;
    width: 100%;
    text-align: center;
    background: #fff;
}
.headfoot p{
    line-height: 1.2rem;
}
.headclose{
    color: #ccc;
    border-top: 1px solid #ccc;
}
</style>
