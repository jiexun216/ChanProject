<template>
<div>
    <div>
        <div>
         <div class="search-header">
         <div class="search-top">
           <i class="search-icon search-bg"></i>
           <input type="search" class="searchs"  :placeholder="$t(search)" v-model="keyword"
                                  @click="searchleft($event)"  @keyup="searchGoods"  :class="{'search': Iscenter,'searchleft': !Iscenter}">      
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
        <div class="goodsabsolute">
            <div class="goodsrighttt">
          <div v-for="(item, index) in listData" :key="index" @click="$router.push({ name: 'goodsDetail', query: { goodsId: item.id }})">   
            <!-- <list-item :goodsCoverImg="item.goodsCoverImg" :name="item.name" :price="item.price" :marketPrice="item.marketPrice" /> -->
               <div class="goodsrightImg">
                    <div><img :src="item.goodsCoverImg" alt=""></div>
                    <div class="goodsnamespan">
                        <div>
                            <span>{{item.name}}</span>
                            <div class="goodsspanimg">
                                <div>  <span class="goodsrightspan">{{item.price}}</span> <br> 
                                    <span class="goodsrightspantwo">{{item.marketPrice}}</span>
                                </div>
                                <div >
                                    <img src="../../assets/img/26@0.5x.png" style="width:0.4rem;height:0.4rem;float:right;">
                                </div>
                            </div>
                        </div>
                    </div>
                    
               </div>
         </div>  
        </div>
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
                cancels: 'common.cancel',
                search: 'common.placeholder.search',
                Iscenter:true
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
           // 接收筛选搜索参数
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
           },
           searchleft ($event) {
            this.Iscenter = false;
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
                path: '/goods/list'
                });
                this.$toast(this.$t("common.searchcontent"));
            }
            },
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
    top:1.5rem; 
    width: 25%;
    height: 100%;
    background: #f7f7f7;
    font-size: 0.4rem;
}
.goodsrighttt{
    width: 70%;
    position: absolute;
    left: 25%;
    top:0.4rem;
}
.goodsrightImg{
    margin:0.3rem;
    display: flex;
    justify-content: space-between;
}
.goodsnamespan{
    margin-left:0.3rem;
    width:100%;
    /* display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border: 1px solid #f00; */
}
.goodsspanimg{
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
.goodsrightImg img{
    width:2.7rem;
    height:2rem;
}
.goodsrightspan {
  font-size:0.3rem;
  color: #f00;
}
.goodsrightspantwo{
    text-decoration:line-through;
    font-size: 0.2rem;
    color: #ccc;
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
