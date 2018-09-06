<template>
   <div class="con-top"  v-cloak>
      <div>
            <div  v-for=" goodsImage in goodsImages" :key="goodsImage.index">
               <img :src="goodsImage" style="width:100%"> 
            </div>
      </div> 
   </div> 
</template>

<script>
    export default {
       data () {
           return {
               goodsImages: [],
           }
       },
       created () {
         this.$getData('product/detail', {
             params: {
                goodsId: this.$store.state.page ? this.$store.state.page : localStorage.getItem('page')
             }
         }).then(res => {
               this.goodsImages = res.data.data.goodsInfo.goodsImages;
         }).catch(err => {
             return err
         })
       },
       methods: {

       }
    }
</script>

<style>
 .con-top{
     margin:0.5rem;
     text-align: center;
 }
</style>
