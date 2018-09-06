<template>
 <div>
     <div class="theLogin-top">
        <router-link to="/theLogin" class="theLogin-close"></router-link>
        <router-link to='/userPwdLogin' class="registered">登录</router-link>
     </div>
     <div class="fastLogin">
        <p class="faLogin">创建账户</p>
        <p class="faLogin-more">登录k.chan，解锁更多功能</p>
     </div>
     <div class="login-tell">
         <input type="text" class="tel" v-model="tel" placeholder="请输入手机号">
         <span class="restsend" >重新发送(<span>30</span>s)</span>
     </div>
      <div class="login-tell">
         <input type="text" class="yzm" v-model="yzm" placeholder="请输入验证码">
     </div>
     <div class="login-tell">
         <input type="password" class="yzm" v-model="pwd" placeholder="请输入密码">
     </div>
     <div class="login-tell">
         <input type="password" class="yzm" v-model="pwd" placeholder="请确认密码">
     </div>
     <div class="click-login"> 
         <router-link class="cli-login">注册</router-link>
         <span class="agree-reg">点击注册按钮代表您已同意“<span class="agree-color">用户协议</span>”</span>
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
    export default {
       name: 'registered'
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
