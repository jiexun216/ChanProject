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
       <Footer></Footer>
   </div>    
</template>

<script>

import emptygoods from"../../components/car/emptygoods" 
import Footer from '../../components/footer'
export default { 
    components: {
           "emptygoods": emptygoods,
           Footer
       },
        data () {
           return {

           }
        }
}
</script>

<style>

</style>
