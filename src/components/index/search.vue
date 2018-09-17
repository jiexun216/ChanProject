<template>
<div style="position:relative;">
    <el-container>
        <el-header>
         <div class="search-header">
         <div class="search-top">
           <i class="search-icon search-bg"></i>
           <input type="search" class="searchs" style="line-height:1rem;" placeholder="搜索" >      
         </div>
           <p class="concel" @click="concel">{{concel}}</p>
        </div>
        </el-header>
     <el-container>
        <el-aside width="3rem">
           <div class="goodsleft">
             <div class="goodsCategoryList">
                 <ul v-for="(goodsCategoryList,index) in goodsCategoryLists" 
                     :key="goodsCategoryList.index" 
                     v-bind:class="{ classbg:index ==bgclickActive}"
                     @click="bgclick(index)">
                     <router-link to='/search' tag="li" > 
                        {{goodsCategoryList.name}}
                     </router-link>  
                 </ul>           
             </div>
        </div>
         <el-main>   
           <goodsCategoryList></goodsCategoryList>
         </el-main>
        </el-aside>
         
     </el-container>
    </el-container>
</div>
</template>

<script>
import goodsCategoryList from './goodsCategoryList'
    export default {
        data () {
            return {
                concel: '取消',
                keyword: '',
                bgclickActive: '-1',
                result1:null,
                input1:'',
                goodsCategoryLists: []
            }
        },
        created () {
           this.$getData('product/index').then(res =>{
               this.goodsCategoryLists = res.data.data.goodsCategoryList;
           }).catch(err => {
               return err
           })
        },
        methods: {
           bgclick:function (index){
               this.bgclickActive=index;   
           },
           concel: function () {
               this.result1 = this.input1;
               this.result1 = " ";
           }
         },
         components: {
            goodsCategoryList
         }
    }
</script>

<style>
  .el-main {
    position: fixed;
    top: 1.5rem;
    left: 2rem;
  }
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
.goodsleft{
    position: fixed;
    left: 0;
    top:2.5rem; 
    width: 2.5rem;
    height: 100%;
    background: #f7f7f7;
   
}
.goodsleft ul{
    margin: 0;
    padding: 0;
}
.goodsCategoryList li{   
    font-size: 0.4rem;
    text-align: center;
    line-height:1.2rem;
}
.classbg{
    border-left:2px solid #ff525a;
    font-weight: bold;
    background: #fff;
}
.concel{
  color: #ff525a;
  font-size: 0.4rem;
  float: right;
}
</style>
