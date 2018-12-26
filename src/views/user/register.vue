<template>
 <div>
     <div class="theLogin-top">
        <p  class="theLogin-closere" @click="$router.push({path: '/'})">{{$t(backhome)}}</p>
        <p @click="$router.push({name: 'PasswordLogin'})" class="registered">{{$t(login)}}</p>
     </div>
     <div class="fastLogin">
        <p class="faLogin">{{$t(creat)}}</p>
        <p class="faLogin-more">{{$t(phonekc)}}</p>
        <p class="faloginwrain">{{$t(choosecode)}} </p>
     </div>
     <div>
     </div>
     <div class="login-tellre logintel">
          <template>
            <el-select v-model='value' :placeholder="$t(choosearea)" @focus="phoneCountry" :value="valueCode">
              <el-option
                v-for="item in prephone"
                :key="item.index"
                :label="item.countrydes + '+' + item.code"
                :value="item.code"
                >
                <div>
                    {{item.country + '+' + item.code}}
                </div>
              </el-option>
            </el-select>
          </template>
           <input type="text" class="tel" v-model="tel" :placeholder="$t(userphone)">
     </div>
     <!-- <div class="login-teller">
         <van-cell-group>
          <van-field
            v-model="sms"
            center
            clearable
            :label="$t(SMS)"
            :placeholder="$t(inputSMS)"
          >
            <van-button slot="button" size="small" type="primary" @click="sendMessage">{{$t(send)}}</van-button>
          </van-field>
        </van-cell-group>
     </div> -->
     <div class="login-tellre login-restsend">
         <input type="text" class="yzm" v-model="verifyCode" :placeholder="$t(enteryzm)">   
          <span class="restsend" @click="sendMessage">{{$t(send)}}</span>
     </div>
     <div class="login-tellre">
         <input type="password" class="yzm" v-model="password" :placeholder="$t(userpwd)">
     </div>
     <div class="login-tellre">
         <input type="password" class="yzm" v-model="fpassword" :placeholder="$t(resetpwd)">
     </div>
     <div class="click-login"> 
         <p class="cli-login" @click="memberRegister">{{$t(register)}}</p>
         <!-- <span class="agree-reg">点击注册按钮代表您已同意“<span class="agree-color">用户协议</span>”</span> -->
     </div> 
     <!-- <div class="otherLogin">
          <div class="icons">
            <i class="icon weixin"></i>
            <p class="name">{{$t(wx)}}</p>
          </div>
          <div class="icons">
            <i class="icon qq"></i>
            <p class="name">{{$t(qq)}}</p>
          </div>
          <div class="icons">
            <i class="icon weibo"></i>
            <p class="name">{{$t(wb)}}</p>
          </div>
     </div> -->
  </div>   
</template>
<script>
import Vue from 'vue'
import { Dialog } from 'vant';
import { rsaJsencrypt } from "@/common/js/rsa.js";
import { messageSend, registerMember,verifyMessageCode, countryPhone } from '@/api/user/index.js'
import { Field } from 'vant';
import { Cell, CellGroup } from 'vant';

Vue.use(Cell).use(CellGroup);
Vue.use(Field);
    export default {
       name: 'register',
       data () {
         return {
           tel: "",
           telephone:'',
           verifyCode: "",
           password: "",
           fpassword: "",
           wx: 'common.wx',
           qq: 'common.qq',
           wb: 'common.wb',
           sendAuthCode: true,
           auth_time: 0,
           restsend: 'common.restsend',
           phonekc: 'common.phonekc',
           creat: 'common.creat',
           forget: 'common.forget',
           login:'common.login',
           register:'common.register',
           send: 'common.send',
           SMS: 'common.SMS',
           inputSMS: 'common.placeholder.inputSMS',
           userphone: 'common.placeholder.userphone',
           enteryzm: 'common.placeholder.enteryzm',
           userpwd: 'common.placeholder.userpwd',
           resetpwd: 'common.placeholder.resetpwd',
           backhome: 'common.backhome',
           choosearea: 'common.placeholder.choosearea',
           sms: '',
           prephone: [],
           value: '',
           district_code: '',
           code: '',
           countryCode: '',
           valueCode: '',
           choosecode: 'common.choosecode'
         }
       },
       created () {
         this.phoneCountry();
       },
       methods: {
         //获取地区手机号标识
         phoneCountry () {
             countryPhone ().then (res => {
              //  this.$toast(res.data.message ? res.data.message : '')
               this.prephone = res.data.data.map(item => {return item})
               this.value = res.data.data[0].code
              //  let country = res.data.data.map(item =>{return item.countrydes})[0]
              //  let code = res.data.data.map(item =>{return item.code})[0]
              //  this.countryCode = country + "+" + code 
              //  this.values = this.countryCode
             })
         },
         //发送验证码
         sendMessage () {
           let tel = this.tel.trim();
          //  let reg = /^\d$/;
          //  if (!reg.test(tel)) {
          //    this.$toast({
          //    message: "请输入正确格式的手机号",
          //    position: "top"
          //    });
          //    return false;
          //  }
          let district_code = this.value;
           messageSend (tel, 0,district_code ).then(res => {     
             this.$toast(res.data.message ? res.data.message : this.$t("common.failuredcaozuo"))
           }).catch(err => {
             return err
           })
         },
         // 发送验证码
         getAuthCode: function() {
            // let reg =/^\d$/;
            // if (!reg.test(this.tel)) {
            //   this.$toast({
            //     message: "请输入正确格式的手机号",
            //     position: "top"
            //   });
            //   return false;
            // }
            let district_code = this.value;
            messageSend(this.tel, 0,district_code).then(res => {
              this.$toast(res.data.message ? res.data.message : this.$t("common.failuredcaozuo"));
              if (res.data.status == 0) {
                this.sendAuthCode = false;
                this.auth_time = 30;
                var auth_timer = setInterval(() => {
                  this.auth_time--;
                  if (this.auth_time <= 0) {
                    this.sendAuthCode = true;
                    clearInterval(auth_timer);
                  }
                }, 1000);
              }
            });
          },
         // 会员注册
         memberRegister () {
          //  let reg = /^\d$/;
          //  if (!reg.test(this.tel)) {
          //     this.$toast({
          //     message: "请输入正确格式的手机号",
          //     position: "top"
          //     });
          //     return false;
          //  }
           if (!this.verifyCode) {
              this.$toast({
              message: "请输入验证码",
              position: "top"
              });
              return false;
           }
           if (!this.password) {
              this.$toast({
              message: "请输入密码",
              position: "top"
              });
              return false;
           }
           if (!this.fpassword) {
              this.$toast({
              message: "请输入确认密码",
              position: "top"
              });
              return false;
           }
           if (this.password != this.fpassword) {
             this.$toast({
              message: "两次密码不一致",
              position: "top"
              });
              return false;
           }
           let password = rsaJsencrypt(this.password);
           let fpassword = rsaJsencrypt(this.fpassword);
           let district_code = this.value
           registerMember (this.tel, this.verifyCode, password, fpassword,district_code).then(res => {
             this.$toast(res.data.message ? res.data.message : this.$t("common.failuredcaozuo"));
             if (res.data.status == 0) {
               this.$router.push({name: 'PasswordLogin'})
             }
           }).catch(err => {
             return err
           })
         }
       }
    }
</script>

<style>
 .theLogin-top{
  display: flex;
  justify-content:space-between;
  align-items:center;
}
.theLogin-closere{
  margin-left:0.15rem;
  color: #ff525a;
  /* width:1.2rem;
  height:1.2rem;
  background: url(../../assets/img/39.png) no-repeat center;  */
}
.registered{
  float:right;
  font-size:0.45rem;
  color: #ff525a;
  margin-right:0.5rem;
}
.fastLogin{
  margin-top:1rem;
  /* margin-bottom: 1rem; */
}
.fastLogin p{
   margin-left:0.5rem;
}
.faLogin{
  font-size:1rem;
  font-weight:blod;
}
.faLogin-more{
  font-size:0.4rem;
  color:#999999;
  line-height: 1rem;
}
.faloginwrain{
  color:#f00;
  font-size:0.3rem;
  margin-top:0.4rem;
}
.login-restsend{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.restsend{
  color: #f00;
  font-size:0.4rem;
}
.login-tellre{
  margin: 0.4rem;
  font-size: 0.4rem;
  line-height:0.7rem;
  border-bottom:1px solid #f0f0f0;
}
.logintel{
  display: flex;
  display:-webkit-flex;
  justify-content: space-between;
  align-items: center;
}
.tel{
  line-height:0.7rem;
  font-size: 0.3rem;
  border:none;
  width:150%;
  margin-left:0.3rem;
}
.restsendsend{
  color: #ff525a;
}
.yzm{
  line-height:0.7rem;
  font-size: 0.3rem;
  border:none;
}
.click-login{
  margin: 0.4rem;
  text-align: center;
  font-size:0.4rem;
}
.cli-login{
  line-height:1rem;
  background:#ff525a;
  color: #fff;
  border-radius: 0.1rem;
  display: block;
  margin-bottom:0.2rem;
}
.agree-reg{
  font-size: 0.3rem;
  display: block;
  margin-bottom:1rem;
}
.agree-color{
  color:#f00;
}
.otherLogin{
   margin: 0.4rem;
   margin-top:3rem;
   display:flex;
   justify-content: space-around;
   align-items:cneter;
}
.icon{
    width: 1rem;
    height: 1rem;
    display: block;
    border-radius: 50%;
    float: left;  
}
.weixin{
   background: url(../../assets/img/4.png) no-repeat center center;
}
.qq{
   background: url(../../assets/img/3.png) no-repeat center center;
}
.weibo{
   background: url(../../assets/img/2.png) no-repeat center center;
}
 .name {
    display: block;
    font-size: 0.4rem;
    float: left;
    line-height:1rem;
  }
  /* .van-cell{
    width:90%;
    margin: 0.4rem;
    border-bottom:1px solid #f0f0f0;
  } */
  .el-input__inner{
    height:20px;
    line-height:20px;
    font-size:12px;
    width:2.6rem;
    overflow: hidden;
  }
  .el-input__suffix{
    /* position: absolute;
    top:8px; */
    /* display: none; */
  }
  .el-input__icon{
    line-height: 20px;
  }
</style>
