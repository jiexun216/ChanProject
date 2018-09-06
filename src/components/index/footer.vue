<template>
 <div class="footer">
    <ul class="foot">
      <router-link  :to="{name:'Index'}" tag="li" exact>
        <div>
          <i class="iconf iconimg"></i>
        </div>
        <div class="font-color">主页</div>
      </router-link>
      <router-link  :to="{name:''}" tag="li">
        <div>
          <i class="iconf iconimg2"></i>
        </div>
        <div>算命</div>
      </router-link>
      <router-link  :to="{name:''}" tag="li">
        <div>
          <i class="iconf iconimg3"></i>
        </div>
        <div>购物车</div>
      </router-link>
      <router-link  :to="{name:'Personal'}" tag="li">
        <div>
          <i class="iconf iconimg4"></i>
        </div>
        <div>个人</div>
      </router-link>
    </ul>
 </div> 
</template>

<script>
    
</script>

<style>

.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
  box-shadow: 0px 2px 20px #f0f0f0;
  width: 100%; 
} 
.footer::after{
  content:'';
  clear: both;
}
ul{
  display: flex;
  justify-content:space-around;
  align-items: center;
  padding:0.2rem 0;
}
ul li{
  float:left;
  text-align: center;
}
ul li div{
  font-size: 0.2rem;
}
.iconf{
  display:inline-block;
  width: 1rem;
  height: 1rem;
  background-size: cover;
  vertical-align: middle;
  text-align: center;
}
.iconimg{
    background: url(../../assets/img/46.png) no-repeat  center center;
    background-size: 0.8rem;  
}
.iconimg2{
    background: url(../../assets/img/48.png) no-repeat  center center;
    background-size: 1rem; 
}
.iconimg3{
    background: url(../../assets/img/44.png) no-repeat  center center;
    background-size: 0.8rem;  
}
.iconimg4{
    background: url(../../assets/img/45.png) no-repeat  center center; 
    background-size: 0.8rem; 
}
.font-color{
  color:#f00;
}
</style>
