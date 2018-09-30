<template> 
 <div class="common_foot"> 
      <ul> 
        <li v-for="item in nav" @click="selectNav(item.title)" :key="item.index">
        <img :src="isSelect === item.title ? item.url : item.url_one" alt="item.title"> 
        <p :class="isSelect === item.title ? 'active' : ''">{{$t(item.title)}}</p> 
      </li> 
      </ul> 
 </div> 
</template> 
  
<script> 
 export default { 
 data () { 
  return { 
  isSelect: 'common.home', 
  nav: [ 
   {title: 'common.home', url: require('../assets/img/46.png'), url_one: require('../assets/img/4601.png')}, 
   {title: 'common.telling', url: require('../assets/img/4301.png'), url_one: require('../assets/img/43.png')}, 
   {title: 'common.cart', url: require('../assets/img/4401.png'), url_one: require('../assets/img/44.png')},
   {title: 'common.personal', url: require('../assets/img/4501.png'), url_one: require('../assets/img/45.png')}
  ]
  }
 },
 created () {
  this.isSelect = this.$route.meta.title
 },
 methods: {
  selectNav (title) { 
  this.isSelect = title
  switch (title) { 
   case 'common.home': this.$router.push('/Index') 
   break 
   case 'common.telling': this.$router.push('/Index') 

   break 
   case 'common.cart': this.$router.push('/cart/list') 
   break 
   case 'common.personal': this.$router.push('/ucenter/index') 
   break 
  } 
  } 
 },
 mounted() {
   console.log(this.$i18n.locale)
 }
 } 
</script> 
<style>
.common_foot ul{
position: fixed; 
 bottom: 0; 
 z-index: 1000; 
 width: 100%; 
 overflow: hidden; 
 background-color: white;
}
.common_foot ul li{
  float: left; 
  width: 25%; 
  height: 100%; 
  text-align: center; 
  cursor: pointer; 
  list-style: none;
  padding: 0.2rem 0;
}
.common_foot p{
  font-size: 0.2rem;color: #7f7f7f;
}
.common_foot img{
     width: 0.8rem; 
     height: 0.8rem; 
}
.common_foot .active{
  color: #f44; 
}
</style>

