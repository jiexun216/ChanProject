<template>
    <div>
     <div class="theLogin-top">
        <p class="theLogin-closese" @click="$router.push({path: '/'})">{{$t(backhome)}}</p>  
        <p @click="$router.push({name: 'userRegister'})" class="registered">{{$t(register)}}</p>
     </div>
     <div class="fastLogin">
        <p class="faLogin">{{$t(uselogin)}}</p>
        <p class="faLogin-more">{{$t(phonekc)}}</p>
     </div>
     <div class="login-tellpass">
         <label  class="space">{{$t(username)}}</label>
         <input type="text" class="teltel" v-model="tel" :placeholder="$t(userphone)" :maxlength="11">
     </div>
     <div class="login-tellpass">
         <label for="" class="space">{{$t(passwd)}}</label> 
         <input type="password" class="yzm" v-model="pwd" :placeholder="$t(userpwd)" :minlength="6" :maxlength="16">
     </div>
     <div class="click-login"> 
         <!-- <button  type="primary" size="large" class="cli-login" @click="login">登录</button> -->
         <button type="primary" size="large" class="cli-login" @click="memberPassLogin">{{$t(logins)}}</button>
         <!-- <span class="agree-reg">登录即代表您已同意“<span class="agree-color">用户协议</span>”</span> -->
         <div class="phfa">
             <!-- <p @click="$router.push({name: 'userMobileLogin'})" class="phonefast">{{$t(phone)}}</p> -->
             <!-- <span class="phonefast-size">·</span> -->
             <p @click="$router.push({name: 'userFindPass'})" class="phonefast-size">{{$t(forget)}}?</p>
         </div>
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
import Vue from "vue";
import { Toast } from "mint-ui";
import { rsaJsencrypt } from "@/common/js/rsa.js";
import { passwordLogin } from '@/api/user/index.js'
export default {
  data() {
    return {
      tel: "",
      pwd: "",
      password: "",
       phone: 'common.phone',
       uselogin: 'common.uselogin',
        phonekc: 'common.phonekc',
        logins: 'common.login',
        wx: 'common.wx',
        qq: 'common.qq',
        wb: 'common.wb',
        username: 'common.username',
        passwd: 'common.pwd',
        forget: 'common.forget',
        register: 'common.register',
        userphone: 'common.placeholder.userphone',
        userpwd: 'common.placeholder.userpwd',
        backhome: 'common.backhome'
    };
  },
  methods: {
    // 账号密码登录方法 zj 0914
    memberPassLogin () {             
      let tel = this.tel.trim();
      let pwd = this.pwd;
      // let reg = /^\d$/;
      // if (!reg.test(tel)) {
      //     this.$toast({
      //       message: "请输入正确格式的手机号",
      //       position: "top"
      //     });
      //     return false;
      // }
      if (pwd === "") {
        this.$toast({
          message: "登录密码不能为空",
          position: "top"
        });
        return false;
      }
       this.password = rsaJsencrypt(this.pwd);
       passwordLogin (this.tel, this.password).then(res => {
        this.$toast(res.data.message ? res.data.message : this.$t("common.failuredcaozuo"))
         if (res.data.status == 0) {
           this.$router.push({path: '/'})
         }
       }).catch(err => {
         return err
       })
    }
  }
};
</script>

<style>
.theLogin-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.2rem 0;
}
.theLogin-closese {
  margin-left: 0.15rem;
  color: #f00;
  /* width: 1.2rem;
  height: 1.2rem; */
  /* background: url(../../assets/img/39.png) no-repeat center; */
}
.registered {
  align-self: right;
  font-size: 0.45rem;
  color: #ff525a;
  margin-right: 0.5rem;
}
.fastLogin {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.fastLogin p {
  margin-left: 0.5rem;
}
.faLogin {
  font-size: 1rem;
  font-weight: blod;
}
.faLogin-more {
  font-size: 0.4rem;
  color: #999999;
  line-height: 1rem;
}
.login-tellpass {
  margin: 0.4rem;
  font-size: 0.3rem;
  line-height: 0.7rem;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.login-tellpass label{
  display: inline-block;
  /* width: 95px; */
 
}
.login-tellpass input{
  font-size: 0.3rem;   
   /* 在找回密码页面显示正常 */
  /* width: 70%; */
  width:80%;
}
.teltel {
  line-height: 0.7rem;
  font-size: 0.3rem;
  border: none;
}
.yzm {
  line-height: 0.7rem;
  font-size: 0.3rem;
  border: none;
}
.click-login {
  margin: 0.4rem;
  text-align: center;
  font-size: 0.3rem;
}
.cli-login {
  line-height: 1rem;
  background: #ff525a;
  color: #fff;
  border-radius: 0.1rem;
  display: block;
  margin-bottom: 0.2rem;
  width: 100%;
}
.cliloginco {
  color: #000;
}
.agree-reg {
  font-size: 0.3rem;
  display: block;
  margin-bottom: 1rem;
}
.agree-color {
  color: #f00;
}
.otherLogin {
  margin: 0.4rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: cneter;
}
.icon {
  width: 1rem;
  height: 1rem;
  display: block;
  border-radius: 50%;
  /* float: left; */
}
.weixin {
  background: url(../../assets/img/4.png) no-repeat center center;
}
.qq {
  background: url(../../assets/img/3.png) no-repeat center center;
}
.weibo {
  background: url(../../assets/img/2.png) no-repeat center center;
}
.name {
  display: block;
  font-size: 0.4rem;
  float: left;
  line-height: 1rem;
}
.phfa {
  font-size: 0.4rem;
}
.phonefast {
  color: #ff525a;
  font-weight: bold;
}
.phonefast-size {
  color: #999999;
}
.icons{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.icons i{
  text-align: center;
  width: 33%;
}
.icons p{
  width: 100%;
  text-align: center;
}
</style>

