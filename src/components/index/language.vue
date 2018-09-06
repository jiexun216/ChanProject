<template>
   <div>
       <div class="lang-top">
           <router-link to="/index">
             <i class="icun lang"></i>
           </router-link>
          <p class="choose">语言选择</p>
       </div>
       <div class="lans">
           
       </div>
   </div>    
</template>

<script>
    
</script>

<style>
.lang-top{
    font-size: 0.5rem;
    line-height:1rem;   
    display: flex;
    justify-content: left;
}
.icun{
  display:block;
  width: 1rem;
  height: 1rem;
  background-size: cover;
}
.lang{
    background: url(../../assets/img/42.png) no-repeat  center center;
}
.choose{
    margin: 0 auto;
}
</style>
