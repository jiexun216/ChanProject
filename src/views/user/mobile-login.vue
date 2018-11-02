<template>
  <div>
     <div class="theLogin-top">
        <p class="theLogin-close" ></p>
        <p @click="$router.push({name: 'userRegister'})" class="registered">{{$t(register)}}</p>
     </div>
     <div class="fastLogin">
        <p class="faLogin">{{$t(phone)}}</p>
        <p class="faLogin-more">{{$t(phonekc)}}</p>
     </div>
     <div class="login-tellmo">
         <input type="telephone" 
           v-model="tel"
           class="telmo" 
           :placeholder="$t(userphone)">
           <div class="restsends">
             <input type="button" 
                    style="width:100%;"
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
     <div class="login-telmolmo">
         <input type="text" class="yzm" v-model="yzm" :placeholder="$t(enteryzm)">
     </div>
     <div class="click-login"> 
         <button  type="primary" size="large" class="cli-login" @click="login">{{$t(logins)}}</button>
         <span class="agree-reg">{{$t(agree)}}</span>
         <router-link 
           to="/user/password-login" class="userpwd">
            {{$t(userpwd)}}
         </router-link>
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
import { Toast } from 'mint-ui'
import { Field } from 'mint-ui'
import { rsaJsencrypt } from "@/common/js/rsa.js";
export default {
  data () {
    return {
        telmo: '',
        yzm: '',
        sendAuthCode:true,
        auth_time:0,
        phone: 'common.phone',
        phonekc: 'common.phonekc',
        logins: 'common.login',
        register: 'common.register',
        agree: 'common.agree',
        userpwd: 'common.uesrpwd',
        wx: 'common.wx',
        qq: 'common.qq',
        wb: 'common.wb',
        userphone: 'common.placeholder.userphone',
       enteryzm: 'common.placeholder.enteryzm'
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
      this.$postData('member/message', {
        data: {
          mobile: '',
          type: '0'
        }
      }).then(res => {  
      }).catch(err => {
        return err
      })
    },
    login: function (e) {
      let tel = this.tel.trim()
      let yzm = this.yzm
      let reg =  /^1\d{10}$/
      if(yzm === '') {
        this.$toast({
          message:'手机号或验证码不能为空',
          position: 'top',     
         })
      } else {
        if(reg.test(tel)) {
          this.$store.dispatch('login')
          localStorage.setItem('userTel',tel)
          this.$router.push('/Index')
        } else {
          e.preventDefault()
          this.$toast({
            message: '请输入正确格式的手机号',
            position: 'top'
          })
        }
      }
    }
        
    },
    created () {
      this.$getData('main/index').then(res => {
        // alert(res)
      })
      this.$postData('member/message', {
        data: {
          mobile: '15033565079',
          type: '0'
        }
      }).then(res => {  
       // console.log(res)
      }).catch(err => {
        return err
      })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.theLogin-top{
  display: flex;
  justify-content:space-between;
  align-items:center;
}
.theLogin-close{
  margin-left:0.15rem;
  width:1.2rem;
  height:1.2rem;
  /* background: url(../../assets/img/39.png) no-repeat center;  */
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
  font-size:0.6rem;
  font-weight:blod;
}
.faLogin-more{
  font-size:0.4rem;
  color:#999999;
  line-height: 1rem;
}
.login-tellmo{
  margin: 0.4rem;
  font-size: 0.4rem;
  line-height:0.8rem;
  border-bottom:1px solid #f0f0f0;
}
.telmo{
  line-height: 0.7rem;
  font-size: 1rem;
  border: none;
}
.restsends{
  color: #ff525a;
  font-size: 0.4rem;
}
.sends{
  color:#f00;
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
  width: 100%;
}
.agree-reg{
  font-size: 0.3rem;
  display: block;
  margin-bottom:1rem;
}
.agree-color{
  color:#f00;
}
.userpwd{
   font-weight: bold;
   color:#ff525a;
}
.otherLogin{
   margin: 0.4rem;
   margin-top:1rem;
   display:flex;
   justify-content: center;
   align-items:center;
}
.icon{
    width: 1rem;
    height: 1rem;
    display: block;
    border-radius: 50%;
    float: left;  
    align-items: center;
    text-align: center;
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
    align-items: center;
  }
  .toast {
    font-size: 1.6rem ;
    width: 80%;
    margin: 0 auto;
  }
</style>
