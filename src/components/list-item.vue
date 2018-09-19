<template>
   <div class="gcList">
       <div class="goodheader">
           <ul>
               <div class="goodscate">
                   <router-link to="" tag="li">
                     <img :src="goodsCoverImg">
                   </router-link>
                   <p class="goodsstyle">
                       {{name}}
                   </p>
                   <span class="goodprice1">
                        ￥{{price}}
                    </span>
                    <span class="goodmarket1">
                        ￥{{marketPrice}}
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

            }
        },
        props: {
            goodsCoverImg: String,
            name: String,
            price: [String, Number],
            marketPrice: [String, Number],
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
    width: 2rem;
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
