<template>
   <div>
     <!-- <router-link to="/theLogin">点击跳转</router-link> -->
     <!-- <Footer></Footer> -->
     <router-view></router-view>
     
   </div>
   
</template>

<script>  
import Footer from './components/index/footer'
   export default {
     name: 'app',
     components: {
      //  Footer
     }
   }

</script>

<style style="css">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
