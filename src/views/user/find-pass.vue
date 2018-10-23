<template>
   <div style="margin-top:0.2rem;">
      <div class="theLogin-top">
          <p @click="$router.back(-1)" slot="left" class="theLogin-back"></p>
      </div>
      <div class="fastLogin">
        <!-- <p class="faLogin">{{$t(phoneretrieval)}}</p> -->
        <p class="faLogin-more">{{$t(retrpwd)}}</p>
     </div>
     <div class="login-tell">
         <input type="telephone" 
           v-model="tel"
           class="tel" 
           :placeholder="$t(userphone)">
           <div class="restsend">
             <input type="button" 
                    style="width:100%"
                    class="sends" 
                    value=" 重新发送" 
                    v-show="sendAuthCode"
                    @click="getAuthCode">     
              <input type="button" 
                  class="sends" 
                  v-show="!sendAuthCode"
                  style="display:none"
                  v-model="auth_time">       
           </div>  
     </div>
     <div class="login-tell">
         <input type="text" class="yzm" v-model="code" :placeholder="$t(enteryzm)">
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
      enteryzm: 'common.placeholder.enteryzm'
    };
  },
  methods: {
    // 发送验证码
    getAuthCode: function() {
      let reg = /^1\d{10}$/;
      if (!reg.test(this.tel)) {
        this.$toast({
          message: "请输入正确格式的手机号",
          position: "top"
        });
        return false;
      }
      messageSend(this.tel, 2).then(res => {
        this.$toast(res.data.message ? res.data.message : "操作失败");
        if (res.data.status == 0) {
          Dialog.confirm({
            title: "温馨提示",
            message: "您的短信验证码为" + res.data.data.verifyCode
          });
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
    // 下一步 验证验证码
    nextStep: function() {
      let reg = /^1\d{10}$/;
      if (!reg.test(this.tel)) {
        this.$toast({
          message: "请输入正确格式的手机号",
          position: "top"
        });
        return false;
      }
      if (!this.code) {
        this.$toast({
          message: "请输入短信验证码",
          position: "top"
        });
        return false;
      }
      // 验证码验证方法
      verifyMessageCode (this.tel, this.code, 2).then(res => {
        this.$toast(res.data.message ? res.data.message : '操作失败')
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
.fastLogin {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.fastLogin p {
  margin-left: 0.5rem;
}
.faLogin {
  font-size: 0.6rem;
  font-weight: blod;
  letter-spacing: 0px;
}
.faLogin-more {
  font-size: 0.35rem;
  color: #999999;
  line-height: 1rem;
}
.login-tell {
  margin: 0.4rem;
  font-size: 0.4rem;
  line-height: 0.7rem;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
}
.tel {
  line-height: 0.7rem;
  font-size: 0.4rem;
  border: none;

}
.restsend {
  float: right;
  color: #ff525a;
  z-index: 20;
  position: absolute;
  top: 0;
  right: 0; 
}
.sends {
  color: #f00;
}
.yzm {
  line-height: 0.7rem;
  font-size: 0.4rem;
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
</style>
