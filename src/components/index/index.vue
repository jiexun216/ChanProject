<template>
     <div>
        <div class="index-top">
            <span class="language" style="font-size: 10px">
                <router-link to="/language">
                   EN</router-link>
            </span>
            <div class="index-search" > 
                <i class="icon search-bg"></i>
                <input type="text" :placeholder="$t(allsearch)" class="search" @keypress.stop.prevent="searchGoods" style="-webkit-user-select:auto;" >
            </div>
            <div>
                <router-link to="/Message">
                     <i class="icon notice"></i>
                </router-link>
                
            </div>
        </div>
        <div class="store-sale">
            <ul class="store-list">
                <li class="store-items">                  
                       <span>{{store}}</span>
                </li>
                <li v-for="(type,index) in types" :key="index">
                    <router-link to="/Search">
                        <span style="font-size:0.3rem;">{{type.name}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
       <div class="swiper-container">
        <el-carousel tag="ul" height="4rem" indicator-position="none" arrow="none">
            <el-carousel-item  v-for="banner in banners" :key="banner.index" tag="li">
               <img :src="banner.picture" style="width:100%"> 
            </el-carousel-item >
        </el-carousel>
       </div> 
        <ul class="thatmore" style="width:100%；">
           <router-link :to="{name:''}" tag="li"> 
             <div>
                 <i class="icon thatmroeimg"></i>
             </div>
             <div>{{birth}}</div>
           </router-link>
           <router-link :to="{name:''}" tag="li"> 
             <div>
                 <i class="icon thatmroeimg2"></i>
             </div>
             <div>{{master}}</div>
           </router-link>
           <router-link :to="{name:''}" tag="li"> 
             <div>
                 <i class="icon thatmroeimg3" ></i>
             </div>
             <div>{{course}}</div>
           </router-link>
           <router-link :to="{name:''}" tag="li"> 
             <div>
                 <i class="icon thatmroeimg4"></i>
             </div>
             <div>{{more}}</div>
           </router-link>
        </ul>

        <div class="moregoods">
            <ul> 
                <li style="width:100%;">
                      <div class="goodcover" v-for="good in goods" :key="good.index" >
                           <img :src="good.goodsCoverImg">
                      <div class="goods">
                          <p class="goodname">
                              {{good.name}}</p>
                           <p  class="goodsale">
                               已售{{good.salesVolume}}件
                           </p>
                           <span class="goodprice">
                               ￥{{good.price}}
                           </span>
                           <span class="goodmarket">
                                ￥{{good.market_price}}
                           </span>
                           <span class="gobuy" @click="goPage(good.id)">
                               <router-link to='/goodsDetails' :key="good.id">{{tobuy}}</router-link>
                           </span>
                      </div>    
                      </div>     
                </li> 
            </ul>
        </div>
        <Footer></Footer>
     </div>
</template>
<script>
import Vue from 'vue'
import Footer from './footer'
    export default {
        data () {
            return {
                allsearch: 'commom.placeholder.allsearch',
                store: '店铺内销',
                birth: '生辰八字',
                master: '问大师',
                course: '精品课程',
                more: '更多',
                tobuy: '去购买',
                goodsId: '',
                types: [],
                banners: [],
                goods: []
            }
        },
        created () {
                this.$getData('main/index').then(res => {
                this.goods = res.data.data.goodsList;
                this.types = res.data.data.goodsCategoryList; 
                this.banners = res.data.data.bannerList;
              }).catch(err => {
                  return err
              })
        },
       methods: {
           searchGoods () {
               if(event.keyCode == 13){
                   event.preventDefault();
                   this.$router.push({
                       path:'/search',
                       params:{
                           keyword: ''
                       }
                   })   
               }
               if(event.target.value == ''){
                     this.$router.push({
                         path: 'index'
                     })
                     this.$toast("请输入搜索内容")
                 }
           },
           goPage(page) {
               this.$store.commit('getPage', page)
        },
        },    
      components: {
          Footer
      }
    }
    
</script>

<style>
        a,
        button,
        input {
            -webkit-tap-highlight-color: rgba(255, 0, 0, 0);
            text-decoration: none;
            border: none;
            background: none;
            color: #000;
        }
.index-top{
    background-color: #fdfdfd;
    font-size: 0.4rem; 
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.language{
   margin: 0.3rem;  
   
}
.index-search{
    background: #f5f5f5;
    border-radius: 15px;
    width: 80%;
}
.search{
    line-height:25px;
    text-align: left;
    font-size: 12px;
    -webkit-user-select:auto;
    user-select: auto;
}
.icon{
  display:inline-block;
  width: 0.7rem;
  height: 0.7rem;
  background-size: cover;
  vertical-align: middle;
  text-align: center;
  margin:0 0.2rem;
}
.search-bg{
    background: url(../../assets/img/34@0.5x.png) no-repeat  center center; 
}
.notice{
    background: url(../../assets/img/53.png) no-repeat center center;
}
.store-list{
    margin:0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
.store-list li a{
    /* float: left;
    font-size: 0.3rem; */
    flex-wrap: wrap;
}
.thatmore{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
}
.thatmore li{
    font-size: 0.4rem;
}
.thatmore li i{
    width: 1.3rem;
    height: 1.3rem;
    margin-bottom: 0.3rem;
}
.thatmroeimg {
    background: url(../../assets/img/48.png) no-repeat center center;
}
.thatmroeimg2 {
    background: url(../../assets/img/51.png) no-repeat center center;
}
.thatmroeimg3 {
    background: url(../../assets/img/50.png) no-repeat center center;
}
.thatmroeimg4 {
    background: url(../../assets/img/49.png) no-repeat center center;
}
.goodcover{
    margin-bottom: 0.5rem;
}
.goodcover img{
    width: 100%;
    border-top: 5px solid #f7f7f7;
}
.goods{
    font-size: 0.4rem; 
    text-align: left;
    margin: 0.4rem;
}
.goodsale {
    color:#c5c5c5;
    font-size: 0.3rem;
    line-height: 0.8rem;
}
.goodprice {
   font-weight: bold;
   margin-right:0.2rem;
}
.goodmarket{
    font-size: 0.3rem;
    color: #ccc;
    text-decoration: line-through;
}
.gobuy{
    border:1px solid #ff525a;
    border-radius: 0.3rem;
    color: #ff525a;
    float: right;
    width:1.5rem;
    text-align: center;
    line-height: 0.6rem;
    font-weight: bold;  
}
.gobuy a{
    color: #f00;
    font-size: 0.3rem;
}
</style>
