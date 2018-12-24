<template> 
 <!-- <div class="common_foot"> 
      <ul> 
        <li v-for="item in nav" @click="selectNav(item.title)" :key="item.index">
          <img :src="isSelect === item.title ? item.url : item.url_one" alt="item.title"> 
        <p :class="isSelect === item.title ? 'active' : ''">{{$t(item.title)}}</p> 
      </li> 
      </ul> 
 </div>  -->
 <div class="common_foot">
    <div class="tab-item" @click="switchTo('/Index')">
            <img :src="'/Index' === $route.path ? tabBarImgArr[0].selected  : tabBarImgArr[0].normal" alt="首页">
            <span :class="{active: '/Index' === $route.path}">{{$t(home)}}</span>
        </div>
    <div class="tab-item" @click="switchTo('/fortunetellers/index')">
            <img :src="'/fortunetellers/index' === $route.path ? tabBarImgArr[1].selected : tabBarImgArr[1].normal" alt="算命">
            <span :class="{active: '/fortunetellers/index' === $route.path}">{{$t(telling)}}</span>
        </div>
    <div class="tab-item" @click="switchTo('/cart/list')">
            <img :src="'/cart/list' === $route.path ? tabBarImgArr[2].selected : tabBarImgArr[2].normal" alt="购物车">
            <span :class="{active: '/cart/list' === $route.path}">{{$t(cart)}}</span>
        </div>
    <div class="tab-item" @click="switchTo('/ucenter/index')">
            <img :src="'/ucenter/index' === $route.path ? tabBarImgArr[3].selected : tabBarImgArr[3].normal" alt="个人">
            <span :class="{active: '/ucenter/index' === $route.path}">{{$t(personal)}}</span>
        </div>
  </div>
</template> 
  
<script> 
 export default { 
 data () { 
  return { 
  //  isSelect = title
  // nav: [ 
  //  {title: 'common.home', url: require('../assets/img/46.png'), url_one: require('../assets/img/4601.png')}, 
  //  {title: 'common.telling', url: require('../assets/img/4301.png'), url_one: require('../assets/img/43.png')}, 
  //  {title: 'common.cart', url: require('../assets/img/4401.png'), url_one: require('../assets/img/44.png')},
  //  {title: 'common.personal', url: require('../assets/img/4501.png'), url_one: require('../assets/img/45.png')}
  // ],
  tabBarImgArr:[   //图片切换
        {normal: require('../assets/img/4601.png'), selected: require('../assets/img/46.png')},
        {normal: require('../assets/img/43.png'), selected: require('../assets/img/4301.png')},
        {normal: require('../assets/img/44.png'), selected: require('../assets/img/4401.png')},
        {normal: require('../assets/img/45.png'), selected: require('../assets/img/4501.png')},
      ],
      home: 'common.home',
      telling: 'common.telling',
      cart: 'common.cart',
      personal: 'common.personal'
  }
 },
 created () {
   //this.isSelect = this.$route.meta.normal
   this.tabBarImgArr.normal = this.$router.path
 },
 methods: {
  selectNav (title) { 
  this.isSelect = title
  switch (title) {
    case 'common.home': this.$router.push('/Index') 
    break 
    case 'common.telling': this.$router.push('/fortunetellers/index')
    break 
    case 'common.cart': this.$router.push('/cart/list')
    break 
    case 'common.personal': this.$router.push('/ucenter/index') 
    break 
    } 
  } ,
  switchTo(path){
      // console.log(this.$router)
      this.$router.replace(path)
    }
 },
 mounted() {
  //  console.log(this.$i18n.locale)
 }
 } 
</script> 
<style>
.common_foot{
 position: fixed; 
 bottom: 0; 
 z-index: 1000; 
 width: 100%; 
 overflow: hidden; 
 background-color: white;
 display:flex;
 justify-content:space-between;
 text-align:center;
}
.common_foot .tab-item{
  float: left; 
  width: 25%; 
  height: 100%; 
  text-align: center; 
  cursor: pointer; 
  list-style: none;
  padding: 0.1rem 0;
}
.common_foot .tab-item span{
  font-size: 0.2rem;
  color: #7f7f7f;
  width: 100%;
  display: inline-block;
}
.common_foot img{
     width: 0.7rem; 
     height: 0.7rem; 
}
.common_foot .tab-item .active{
  color: #f44; 
}
</style>

