<template>
   <div>
      <div class="cartop">
                <router-link to="/Index">
                    <i class="carback  carbacks"></i>     
                </router-link>
                <span >购物车</span>
                <div class="carmyorder">
                   <i class="carback carbackss"></i>
                </div>
        </div>
       <emptygoods></emptygoods>
   </div>    
</template>

<script>

import emptygoods from"../../components/car/emptygoods" 

export default { 
    components: {
           "emptygoods": emptygoods
       },
        data () {
           return {

           }
        }
}
</script>

<style>
.cartop{
  font-size: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.carback{
   display: inline-block;
   width: 0.7rem;
   height: 0.7rem;
   background-size: cover;
   margin-left: 0.2rem;
 }
 .carbacks {
   background: url(../../assets/img/42.png) no-repeat center center;
 }
 .carbackss{
     background: url(../../assets/img/49.png) no-repeat center center;
 }
</style>
