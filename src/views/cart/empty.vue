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

</style>
