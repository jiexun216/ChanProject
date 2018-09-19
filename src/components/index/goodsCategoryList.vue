<template>
   <div class="gcList">
       <div class="goodheader">
           <ul v-for="goodsListcate in goodsListscate" :key="goodsListcate.index">
               <div class="goodscate">
                   <router-link to="" tag="li">
                     <img :src="goodsListcate.goodsCoverImg">
                   </router-link>
                   <p class="goodsstyle">
                       {{goodsListcate.name}}
                   </p>
                   <span class="goodprice1">
                        ￥{{goodsListcate.price}}
                    </span>
                    <span class="goodmarket1">
                        ￥{{goodsListcate.marketPrice}}
                    </span>
               </div> 
           </ul>
       </div>
   </div>    
</template>

<script>
    export default {
        data () {
            return {
                goodsListscate: []
            }
        },
        created () {
            this.$getData('product/index').then(res => {
                this.goodsListscate = res.data.data.goodsList;
                console.log(this.goodsLists) 
            }).catch(err =>{
                return err
            })
        }
    }
</script>

<style>
.goodheader{
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.2rem;
}
.goodscate{
  font-size: 0.4rem;
  line-height: 0.6rem;
  margin: 0.4rem; 
}
.goodscate img{
    width: 4rem;
}
.goodsstyle{
    font-size: 0.45rem;
    line-height: 0.8rem;
}
.goodprice1{
    color: #f00;
}
.goodmarket1{
    color: #ccc;
    font-size: 0.2rem;
    text-decoration:line-through;
}
</style>
