<template>
   <div style="margin-top:0.4rem;">
      <div class="theLogin-top">
          <p @click="$router.back(-1)" slot="left" class="theLogin-back"></p>
      </div>
      <div class="fastLoginfind">
        <p class="faLoginfind">{{$t(phoneretrieval)}}</p>
        <p class="faLoginfind-more">{{$t(retrpwd)}}</p>
     </div>
     <!-- <div class="login-tell">
         <input type="telephone" 
           v-model="tel"
           class="findtel" 
           :placeholder="$t(userphone)">
           <div class="restsendse">
             <input type="button" 
                    style="width:100%"
                    class="sends"
                    :value="$t(restsend)"
                    v-show="sendAuthCode"
                    @click="getAuthCode">
           </div>
     </div> -->
     <div class="find-tellre find-restsend">
         <input type="text" class="findyzm" v-model="tel" :placeholder="$t(userphone)">
         <span class="findrestsend" @click="getAuthCode">{{$t(send)}}</span>
     </div>
     <div class="login-tell">
         <input type="text" class="find-yzm" v-model="code" :placeholder="$t(enteryzm)">
     </div>
     <div class="click-login">
        <p>
           <button class="cli-login" @click="nextStep">{{$t(next)}}</button>
        </p>
     </div>
   </div>
   
</template>

<script>
import Vue from "vue";
import { Dialog } from "vant";
import { Toast } from "mint-ui";
import { Field } from "mint-ui";
import { messageSend, verifyMessageCode } from "@/api/user/index.js";
export default {
  data() {
    return {
      tel: "",
      code: "",
      sendAuthCode: true,
      auth_time: 0,
      phoneretrieval: 'common.phoneretrieval',
      retrpwd: 'common.retrpwd',
      next: 'common.next',
      userphone: 'common.placeholder.userphone',
      enteryzm: 'common.placeholder.enteryzm',
      restsend: 'common.send',
      duanxin: 'common.duanxin',
      tishi: 'common.tishi',
      inputSMS:'common.placeholder.inputSMS',
      send: 'common.send',
      addcorrectphone: 'common.addcorrectphone'
    };
  },
  methods: {
    // 发送验证码
    getAuthCode: function() {
      let tel = this.tel.trim();
      // let reg =  /^\d$/
      if (!this.tel) {
        this.$toast({
          message: this.$t(this.addcorrectphone),
          position: "top"
        });
        return false;
      }
      messageSend(this.tel, 2).then(res => {
        this.$toast(res.data.message ? res.data.message : this.$t("common.failuredcaozuo"));
        // if (res.data.status == 0) {
        //   this.sendAuthCode = false;
        //   this.auth_time = 30;
        //   var auth_timer = setInterval(() => {
        //     this.auth_time--;
        //     if (this.auth_time <= 0) {
        //       this.sendAuthCode = true;
        //       clearInterval(auth_timer);
        //     }
        //   }, 1000);
        // }
      }).catch(err =>{
          return err;
      });
    },
    // 下一步 验证手机号和验证码
    nextStep: function() {
      // let reg = /^\d$/;
      let tel = this.tel.trim();
      if (!this.tel) {
        this.$toast({
          message: this.$t(this.addcorrectphone),
          position: "top"
        });
        return false;
      }
      if (!this.code) {
        this.$toast({
          message: this.$t(this.inputSMS),
          position: "top"
        });
        return false;
      }
      // 验证码验证方法
      verifyMessageCode (this.tel, this.code, 2).then(res => {
        this.$toast(res.data.message ? res.data.message : this.$t("common.failuredcaozuo"))
        if (res.data.status == 0) {
          this.$router.push({name:'resetPassword', query: {tel: this.tel,code:this.code}})
        }
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
}
.theLogin-back {
  margin-left: 0.15rem;
  width: 1.2rem;
  height: 1.2rem;
  background: url(../../assets/img/42.png) no-repeat center;
}
.fastLoginfind {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.fastLoginfind p {
  margin-left: 0.5rem;
}
.faLogin {
  font-size: 0.6rem;
  font-weight: blod;
  letter-spacing: 0px;
}
.faLoginfind-more {
  font-size: 0.35rem;
  color: #999999;
  line-height: 1rem;
}
.login-tell {
  margin: 0.4rem;
  font-size: 0.3rem;
  line-height: 0.7rem;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.findtel {
  line-height: 0.7rem;
  font-size: 0.3rem;
  border: none;

}
.restsendse {
  color: #ff525a;
  z-index: 20;
  float:right;
}
.sends {
  color: #f00;
  font-size:0.4rem;
}
.find-yzm {
  line-height: 0.7rem;
  font-size: 0.3rem;
  border: none;
}
.click-login {
  margin: 0.4rem;
  text-align: center;
  font-size: 0.4rem;
}
.cli-login {
  width: 100%;
  line-height: 1rem;
  background: #ff525a;
  color: #fff;
  border-radius: 0.1rem;
  display: block;
  margin-bottom: 0.2rem;
}
.find-tellre{
  margin: 0.4rem;
  line-height:0.7rem;
  border-bottom:1px solid #f0f0f0;
}
.find-restsend{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.findyzm{
  line-height:0.7rem;
  font-size: 0.3rem;
  border:none;
}
.findrestsend{
  color: #f00;
  font-size:0.4rem;
}
</style>
