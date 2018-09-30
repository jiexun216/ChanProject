<template>
<div>
    <div>
        <div>
         <div class="search-header">
         <div class="search-top">
           <i class="search-icon search-bg"></i>
           <input type="search" class="searchs" style="line-height:1rem;" placeholder="搜索" >      
         </div>
           <p class="concel" @click="concel">{{$t(cancels)}}</p>
        </div>
        </div>
     <div>
        <div class="goodsposition">
           <div class="goodsleft">
             <div class="goodsCategoryList">
                 <ul v-for="(goodsCategoryList,index) in goodsCategoryLists" 
                     :key="index" 
                     class="goodsul">
                     <li @click="handleSwitchCate($event, goodsCategoryList.id)" :class="categoryId == goodsCategoryList.id ? 'classbg' : ''"> 
                        {{goodsCategoryList.name}}
                     </li>  
                 </ul>           
             </div>
        </div>
        <div class="goodsright">
          <ul class="glist" v-for="(item, index) in listData" :key="index" @click="$router.push({ name: 'goodsDetail', query: { goodsId: item.id }})">   
           <list-item :goodsCoverImg="item.goodsCoverImg" :name="item.name" :price="item.price" :marketPrice="item.marketPrice" />
         </ul>  
        </div>
         
        </div>
         
     </div>
    </div>
</div>
</template>

<script>
import ListItem from '@/components/list-item'
import { getGoodsList } from '@/api/goods/index.js'
    export default {
        components: {
            ListItem
         },
        data () {
            return {
                keyword: '',
                loading: false,
                page: 1,
                pageCount: 1,
                listData:[],
                goodsCategoryLists: [],
                total:0,
                categoryId:0,
                isLoadingFinished: false,
                cancels: 'common.cancel'
            }
        },
        created () {
           this.refreshData()
        },
        methods: {
           // 获取商品数据
           getData () {
               this.loading = true;
               getGoodsList (this.categoryId,this.keyword,this.page).then(res => {
                   this.loading = false;
                   this.goodsCategoryLists = res.data.data.goodsCategoryList;
                   this.listData = res.data.data.goodsList;
                   this.total = res.data.data.total
                   this.pageCount = res.data.data.pageCount
                   if (this.page >= this.pageCount) {
                       this.isLoadingFinished = true;
                   } else {
                       this.page++;
                   }
               }).catch(err => {
                   this.loading = false;
                   return err
               })
           },
           // 接收帅选搜索参数
           refreshData () {
            this.categoryId = this.$route.query.categoryId ? this.$route.query.categoryId : 0
            this.keyword = this.$route.query.keyword ? this.$route.query.keyword : ''
            this.page = 1
            this.listData = []
            this.total = 0
            this.getData()
           },
           handleSwitchCate (event, cateId) {
            this.categoryId = cateId
            this.page = 1
            this.listData = []
            this.isLoadFinished = false
        	this.getData()
           },
           concel: function () {
               this.result1 = this.input1;
               this.result1 = " ";
               this.$router.push('/Index')
           }
         },
         
    }
</script>

<style>
.search-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.search-top{
       width: 80%;
       border-radius: 0.5rem;
       background: #f5f5f5;
       margin:0 0.3rem;   
   }
.search-icon{
  display:inline-block;
  width: 0.8rem;
  height: 0.8rem;
  background-size: cover;
  vertical-align: middle;
  text-align: center;
}
.search-bg{
       background: url(../../assets/img/34@0.5x.png) no-repeat center center;
   }
   .goodsposition{
       position: relative;
   }
.goodsleft{
    position: fixed;  
    left: 0;
    top:2.5rem; 
    width: 25%;
    height: 100%;
    background: #f7f7f7;
    font-size: 0.4rem;
}
.goodsright{
    width: 70%;
    position: fixed;
    left: 25%;
    top: 2.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;  
}
.goodsul{
    margin: 0;padding: 0;
}
.goodsul li{
    margin: 0;
    padding: 0;
    line-height: 1rem;
    text-align: center;
}
.classbg{
    border-left:2px solid #ff525a;
    font-weight: bold;
    background: #fff;
}
.concel{
  color: #ff525a;
  font-size: 0.4rem;
  margin-right: 0.3rem;
}

</style>
