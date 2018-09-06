<template>
    <div>
      <div>
        <div class="lang-top">
           <router-link to="/index">
             <i class="icun lang"></i>
           </router-link>
          <p class="choose">我的订单</p>
       </div>
       <div class="all">
            <router-link to="/allorder">
                <span>全部</span>
            </router-link>
           <router-link to="/payment">
                <span>待付款</span>
            </router-link>
            <router-link to="/forgoods">
                <span>待收货</span>
            </router-link>
            <router-link to="/allorder">
                <span>已完成</span>
            </router-link>
       </div>
       <router-view></router-view>
       </div>
       
    </div>
</template>

<script>
  export default {
      data() {
          return {
              
          }
      },
      created () {
          this.$router.push('/allorder')
      },
      methods:{
        allorder () {

        }
      }
        
  }    
</script>

<style>

.lang-top{

    line-height:1rem;
    display: flex;
    justify-content: left;
}
.icun{
  display:block;
  width: 1rem;
  height: 1rem;
  background-size: cover;
  margin-left:0.1rem;
}
.lang{
    background: url(../../assets/img/42.png) no-repeat  center center;
}
.choose{
    margin: 0 auto;
    font-size: 0.5rem;
}
.all {
    margin: 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.45rem;
}

</style>
