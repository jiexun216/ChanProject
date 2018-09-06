<template>
    <div>
     <div class="theLogin-top">
        <router-link to="/theLogin" class="theLogin-close"></router-link>  
        <router-link to='registered' class="registered">注册</router-link>
     </div>
     <div class="fastLogin">
        <p class="faLogin">账户登录</p>
        <p class="faLogin-more">登录k.chan，解锁更多功能</p>
     </div>
     <div class="login-tell">
         <label for="" class="space">用户名</label>
         <input type="text" class="tel" v-model="tel" placeholder="请输入手机号" :maxlength="11">
     </div>
     <div class="login-tell">
         <label for="" class="space">密&nbsp;&nbsp;&nbsp;码</label> 
         <input type="password" class="yzm" v-model="pwd" placeholder="请输入密码" :minlength="6" :maxlength="16">
     </div>
     <div class="click-login"> 
         <!-- <button  type="primary" size="large" class="cli-login" @click="login">登录</button> -->
         <button type="primary" size="large" class="cli-login" @click="login">登录</button>
         <span class="agree-reg">登录即代表您已同意“<span class="agree-color">用户协议</span>”</span>
         <div class="phfa">
             <router-link to="/theLogin" class="phonefast">手机快捷登录</router-link>
             <span class="phonefast-size">·</span>
             <router-link to="/forget" class="phonefast-size">忘记密码？</router-link>
         </div>
     </div> 
     <div class="otherLogin">
          <div class="icons">
            <i class="icon weixin"></i>
            <p class="name">微信登录</p>
          </div>
          <div class="icons">
            <i class="icon qq"></i>
            <p class="name">QQ登录</p>
          </div>
          <div class="icons">
            <i class="icon weibo"></i>
            <p class="name">微博登录</p>
          </div>
     </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Toast } from 'mint-ui'
import { handleLogin } from '@/api/api(1)'
import { rsaJsencrypt } from '../../assets/js/rsa.js'
    export default {
      data () {
          return {
              tel: '',
              pwd: ''
          }
      },
methods: {
    login (e) {
      const data = { name: this.tel, password: this.pwd }
      handleLogin(data).then(res => {
        let route = sessionStorage.getItem('boforeLoginRoute')
        if (route) {
          sessionStorage.removeItem('boforeLoginRoute')
          this.$router.push(JSON.parse(route))
        } else {
          // this.$router.push('/')
        }
      }).catch(err => {
        return err
      })
      let tel = this.tel.trim()
      let pwd = this.pwd
      let reg =  /^1\d{10}$/
      if(pwd === '') {
        this.$toast({
          message:'手机号或密码不能为空',
          position: 'top',     
         })
      } else {
        if(reg.test(tel)) {
          this.$store.dispatch('login')
          localStorage.setItem('userTel',tel)
          //用来直接加密密码
         //     res.data.paddword = rsaJsencrypt(res.data.paddword)
   
          // this.$router.go(-1)
        } else {
          e.preventDefault()
          this.$toast({
            message: '请输入正确格式的手机号',
            position: 'top'
          })
        }
      }
      // let  rsa = new RSAKey()
      // let passwordP = rsa(pwd)
      this.$postData('member/login',{
        data: {
          mobile: '15227186411',
          password: 'password'
        }
      }).then(res => {
        console.log(res)
           this.$refs.loginForm.validate((valid) => {
           if (valid) {
            if (this.tel === 'res.data.mobile' && this.pwd === 'res.data.paddword') {

              console.log(res.data.paddword)
                this.$notify({
                    type: 'success',
                    duration: 3000 
                })
            } else {
                this.$message({
                    type: 'error',
                    message: '用户名或密码错误',
                    showClose: true
                })
            }
        }
        else {
            return false
        }
    })
      }).catch(err =>{
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
.space{
    margin-right: 0.5rem;
}
.tel{
  line-height:0.7rem;
  font-size: 0.4rem;
  border:none;
}
.yzm{
  line-height:0.7rem;
  font-size: 0.4rem;
  border:none;
}
.click-login{
  margin: 0.4rem;
  text-align: center;
  font-size: 0.4rem;
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
.cliloginco{
    color:#000;
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
  .phfa{
      font-size:0.4rem;
  }
  .phonefast{
    color: #ff525a;
    font-weight:bold;
  }
  .phonefast-size{
      color: #999999;
  }

</style>

