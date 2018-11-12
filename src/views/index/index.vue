<template>
     <div>
        <div class="index-top">
            <span class="language">
                <router-link to="/language">
                   {{language}}</router-link>
            </span>
            <div class="index-search" style="-webkit-user-select: text !important;"> 
                <i class="icon search-bg"></i>
                <form class="forminput" action="javascript:true">
                  <input type="text" v-model="keyword" :placeholder="$t(allsearch)" class="search" @keyup="searchGoods"
                       @click="searchleft($event)" :class="{'search': Iscenter,'searchleft': !Iscenter}"/>
                </form>  
            </div>
            <div>
                <router-link to="/ucenter/message">
                     <i class="icon notice"></i>
                </router-link>        
            </div>
        </div>
        <div class="store-sale">
            <ul class="store-list">
                <!-- <li class="store-items">                  
                       <span>店铺内销</span>
                </li> -->
                <li v-for="(type,index) in goodsCategoryList" :key="index">
                    <span @click="$router.push({name:'goodsList', query: {categoryId: type.id}})" style="font-size:0.3rem;">{{type.name}}</span>
                </li>
            </ul>
        </div>
       <div class="layout">
        <van-swipe :autoplay="3000" :showIndicators='false' :data-auto-play='4000'>
          <van-swipe-item v-for="banner in bannerList" :key="banner.index" :autoplay="autoplay">
                   <img :src="banner.picture" style="width:100%;height:100%;" @click="handdleClick(banner.url)">
          </van-swipe-item>
        </van-swipe>
          <!-- <div class="banner">
             <ul class="clearfix">
                <li v-for="banner in bannerList" :key="banner.index" >
                   <img :src="banner.picture">
                </li>
             </ul>
          </div> -->
       </div> 
        <!-- <ul class="thatmore" style="width:100%；">
           <router-link :to="{name:''}" tag="li"> 
             <div>
                 <i class="icon thatmroeimg"></i>
             </div>
             <div>{{$t(birth)}}</div>
           </router-link>
           <router-link :to="{name:''}" tag="li"> 
             <div>
                 <i class="icon thatmroeimg2"></i>
             </div>
             <div>{{$t(wds)}}</div>
           </router-link>
           <router-link :to="{name:''}" tag="li"> 
             <div>
                 <i class="icon thatmroeimg3" ></img>
             </div>
             <div>{{$t(jpclass)}}</div>
           </router-link>
           <router-link :to="{name:''}" tag="li"> 
             <div>
                 <i class="icon thatmroeimg4"></i>
             </div>
             <div>{{$t(more)}}</div>
           </router-link>
        </ul> -->

        <div class="moregoods">
            <ul> 
                <li class="moregoodsli">
                      <div class="goodcover" v-for="good in goodsList" :key="good.index" >
                           <img :src="good.goodsCoverImg" @click="$router.push({ name: 'goodsDetail', query: { goodsId: good.id }})" style="width:100%;height:100%;">
                      <div class="goods">
                          <p class="goodname">
                              {{good.name}}</p>
                           <p  class="goodsale">
                               {{$t(yishou)}} {{good.salesVolume}} {{$t(jian)}}
                           </p>
                           <span class="goodprice">
                               ￥{{good.price}}
                           </span>
                           <span class="goodmarket">
                                ￥{{good.market_price}}
                           </span>
                           <span  class="gobuy" @click="$router.push({ name: 'goodsDetail', query: { goodsId: good.id }})">
                               {{$t(gobuy)}}
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
import Vue from "vue";
import {wcSwiper, wcSlide} from 'wc-swiper'
import Footer from "@/components/footer";
import { getMainData } from "@/api/index/index.js";
import { Swipe, SwipeItem } from 'vant';
import { mapState } from 'vuex'
Vue.use(Swipe).use(SwipeItem);
export default {
  components: {
    Footer,
    wcSwiper,
    wcSlide
  },
  data() {
    return {
      keyword: "",
      goodsCategoryList: [],
      bannerList: [],
      goodsList: [],
      language: '',
      birth: 'common.birth',
      wds: 'common.wds',
      jpclass: 'common.jpclass',
      more: 'common.more',
      gobuy: 'common.gobuy',
      allsearch: 'common.placeholder.allsearch',
      yishou: 'common.yishou',
      jian: 'common.jian',
      Iscenter: true,
      autoplay: true
    };
  },
  methods: {
      // 首页数据
    getData() {
        getMainData ().then(res => {
            this.goodsList = res.data.data.goodsList;
            this.goodsCategoryList = res.data.data.goodsCategoryList;
            this.bannerList = res.data.data.bannerList;
        }).catch(err => {
            return err;
        })
    },
    // 搜索商品
    searchGoods(e,$event) { 
      var event=e||window.event
      var event = event ? event:(window.event ? window.event: null);
      if (event.keyCode == 13) {     
        event.preventDefault();
        this.$router.push({name:'goodsList', query: {keyword: this.keyword}})
      }
      if (event.target.value == "") {
        this.$router.push({
         path: '/'
        });
        this.$toast("请输入搜索内容");
      }
    },
    handdleClick(url) {
      window.location.href = url;
    },
    goPage(page) {
      this.$store.commit("getPage", page);
    }, 
    searchleft ($event) {
      this.Iscenter = false;
    },
  },
  created() {
    this.getData()
  },
  
  mounted(e) {
    if (this.lang === 'english') this.language = 'English'
    else if (this.lang === 'character') this.language = '繁體中文'
    else this.language = '简体中文'
  },
  computed: {
      ...mapState(['lang'])
  }

};
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
a {
  font-size: 12px;
}
.index-top {
  background-color: #fdfdfd;
  font-size: 0.4rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.language {
  margin: 0.3rem;
}
.index-search {
  background: #f5f5f5;
  border-radius: 0.5rem;
  width: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-user-select: text !important;
}
.forminput{
   width:100%;
   z-index: 99999;
}
.search {
  height: 35px;
  line-height: 35px;
  width: 80%;
  text-align: center;
  font-size: 12px;
  z-index: 1000;
  -webkit-user-select:text;
  -moz-user-select:text;
  user-select:text;
}
.searchleft{
  text-align: left;
}
.icon {
  display: inline-block;
  width:  0.7rem;
  height: 0.7rem;
  background-size: cover;
  vertical-align: middle;
  text-align: center;
  margin: 0 0.2rem;
}
.search-bg {
  background: url(../../assets/img/34@0.5x.png) no-repeat center center;
  background-size: 0.4rem;
}
.notice {
  background: url(../../assets/img/53.png) no-repeat center center;
}
.store-list {
  margin: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.store-list li a {
  /* float: left;
    font-size: 0.3rem; */
  flex-wrap: wrap;
}
.thatmore {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 0.5rem;
}
.thatmore li {
  font-size: 0.4rem;
  text-align: center;
}
.thatmore li i {
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
.goodcover {
  margin-bottom: 0.5rem;
}
.goodcover img {
  width: 100%;
  height:100%;
  border-top: 5px solid #f7f7f7;
}
.goods {
  font-size: 0.4rem;
  text-align: left;
  margin: 0.4rem;
}
.goodsale {
  color: #c5c5c5;
  font-size: 0.3rem;
  line-height: 0.8rem;
}
.goodprice {
  font-weight: bold;
  margin-right: 0.2rem;
}
.goodmarket {
  font-size: 0.3rem;
  color: #ccc;
  text-decoration: line-through;
}
.gobuy {
  border: 1px solid #ff525a;
  border-radius: 0.5rem;
  color: #ff525a;
  float: right;
  width: 1.5rem;
  text-align: center;
  line-height: 0.6rem;
  font-weight: bold;
  padding: 0.1rem 0.3rem;
}
.gobuy a {
  color: #f00;
  font-size: 0.3rem;
}
.moregoods{
  /* margin-bottom: 1rem; */
}
.moregoodsli{
  width: 100%;
  height: 100%;
}
/* .el-carousel__container{
  position: relative;
}
.el-carousel__container .el-carousel__item img{
  height:100%;
  width:100%;
} */
.clearfix::before,
.clearfix::after{
    content: "";
    display: block;
    height: 0;
    line-height: 0;
    visibility: hidden;
    clear: both;
}

</style>
