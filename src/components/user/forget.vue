<template>
   <div>
      <div class="theLogin-top">
          <router-link to="/userPwdLogin" slot="left" class="theLogin-back"></router-link>
      </div>
      <div class="fastLogin">
        <p class="faLogin">手机找回</p>
        <p class="faLogin-more">使用注册手机号找回密码</p>
     </div>
     <div class="login-tell">
         <input type="telephone" 
           v-model="tel"
           class="tel" 
           placeholder="请输入手机号">
           <div class="restsend">
             <input type="button" 
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
         <input type="text" class="yzm" v-model="yzm" placeholder="请输入验证码">
     </div>
     <div class="click-login">
        <router-link to="/restPwd" > 
        <button class="cli-login" @click="next">下一步</button>
        </router-link>
       
     </div>
     
   </div>

</template>

<script>
import Vue from 'vue'
import { Toast } from 'mint-ui'
import { Field } from 'mint-ui'
    export default {
      data () {
        return {
          tel: '',
          yzm: '',
          sendAuthCode:true,
          auth_time:0
        }
      },
  methods: {
    getAuthCode: function() {
      this.sendAuthCode = false;
      this.auth_time = 30;
      var auth_timer = setInterval(()=>{
        this.auth_time--;
        if(this.auth_time<=0){
          this.sendAuthCode = true;
          clearInterval(auth_timer)
        }
      },1000)
    },
    next: function () {
      this.$postData('member/message', {
        data: {
          mobile: '',
          type: '0'
        }
      }).then(res => {  
        this.$refs.loginForm.validate((valid) => {
           if (valid) {
            if (this.tel === this.res.data.mobile && this.pwd === this.res.data.verify_code) {
                this.$notify({
                    type: 'success',
                    duration: 3000
                })
            } else {
                this.$message({
                    type: 'error',
                    message: '用户名或验证码错误',
                    showClose: true
                })
            }
        }
        else {
            return false
        }
    })
      }).catch(err => {
        return err
      })
    }
    }
      }
</script>

<style>
  .theLogin-top{
  margin-top:1rem;
  display: flex;
  justify-content:space-between;
  align-items:center;
}
.theLogin-back{
  margin-left:0.15rem;
  width:1.2rem;
  height:1.2rem;
  background: url(../../assets/img/42.png) no-repeat center; 
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
.sends{
  color:#f00;
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
  width: 100%;
  line-height:1rem;
  background:#ff525a;
  color: #fff;
  border-radius: 0.1rem;
  display: block;
  margin-bottom:0.2rem;
}
</style>
