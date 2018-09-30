<template>
 <div>
     <div class="theLogin-top">
        <p  class="theLogin-close"></p>
        <p @click="$router.push({name: 'PasswordLogin'})" class="registered">{{$t(login)}}</p>
     </div>
     <div class="fastLogin">
        <p class="faLogin">{{$t(creat)}}</p>
        <p class="faLogin-more">{{$t(phonekc)}}</p>
     </div>
     <div class="login-tell">
         <input type="text" class="tel" v-model="telephone" placeholder="请输入手机号">
         <span class="restsend" @click="sendMessage">{{$t(send)}}</span>
         <!-- <span class="restsend" >重新发送(<span>30</span>s)</span> -->
     </div>
      <div class="login-tell">
         <input type="text" class="yzm" v-model="verifyCode" placeholder="请输入验证码">
     </div>
     <div class="login-tell">
         <input type="password" class="yzm" v-model="password" placeholder="请输入密码">
     </div>
     <div class="login-tell">
         <input type="password" class="yzm" v-model="fpassword" placeholder="请确认密码">
     </div>
     <div class="click-login"> 
         <p class="cli-login" @click="memberRegister">{{$t(register)}}</p>
         <!-- <span class="agree-reg">点击注册按钮代表您已同意“<span class="agree-color">用户协议</span>”</span> -->
     </div> 
     <div class="otherLogin">
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
     </div>
  </div>   
</template>
<script>
import { Dialog } from 'vant';
import { rsaJsencrypt } from "@/common/js/rsa.js";
import { messageSend, registerMember } from '@/api/user/index.js'
    export default {
       name: 'register',
       data () {
         return {
           telephone: "",
           verifyCode: "",
           password: "",
           fpassword: "",
           wx: 'common.wx',
           qq: 'common.qq',
           wb: 'common.wb',
           phonekc: 'common.phonekc',
           creat: 'common.creat',
           forget: 'common.forget',
           login:'common.login',
           register:'common.register',
          send: 'common.send'
         }
       },
       methods: {
         // 发送验证码
         sendMessage () {
           let tel = this.telephone.trim();
           let reg = /^1\d{10}$/;
           if (!reg.test(tel)) {
             this.$toast({
             message: "请输入正确格式的手机号",
             position: "top"
             });
             return false;
           }
           messageSend (tel, 0).then(res => {
             this.$toast(res.data.message ? res.data.message : '操作失败')
             if (res.data.status == 0) {
                  Dialog.confirm({
                    title: '温馨提示',
                    message: '您的短信验证码为'+res.data.data.verifyCode
                  })
             }
           }).catch(err => {
             return err
           })
         },
         // 会员注册
         memberRegister () {
           let reg = /^1\d{10}$/;
           if (!reg.test(this.telephone)) {
              this.$toast({
              message: "请输入正确格式的手机号",
              position: "top"
              });
              return false;
           }
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
           registerMember (this.telephone, this.verifyCode, password, fpassword).then(res => {
             this.$toast(res.data.message ? res.data.message : '操作失败');
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
.theLogin-close{
  margin-left:0.15rem;
  width:1.2rem;
  height:1.2rem;
  background: url(../../assets/img/39.png) no-repeat center;
  
}
.registered{
  float:right;
  font-size:0.45rem;
  color: #ff525a;
  margin-right:0.5rem;
}
.fastLogin{
  margin-top:1rem;
  margin-bottom: 1rem;
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
.login-tell{
  margin: 0.4rem;
  font-size: 0.4rem;
  line-height:0.7rem;
  border-bottom:1px solid #f0f0f0;
}
.tel{
  line-height:0.7rem;
  font-size: 0.4rem;
  border:none;
}
.restsend{
  float:right;
  color: #ff525a;
}
.yzm{
  line-height:0.7rem;
  font-size: 0.4rem;
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
</style>
