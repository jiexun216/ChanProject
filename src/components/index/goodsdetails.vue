<template>
   <div>
       <div class="details-top">
           <el-header>   
                 <router-link to="/index">
                 <i class="de-icon de-iconimg1"> </i>
                 </router-link>
             <span>商品详情</span> 
             <div class="details-right">
               <i class="de-icon de-iconimg2">
                   <router-link to="/goodsDetails"> </router-link>
               </i>
               <i class="de-icon de-iconimg3">
                   <router-link to="/goodsDetails">
                   </router-link>
                </i> 
             </div>          
           </el-header>
       </div> 
       <div class="moregoods moregoodss">
            <ul> 
                <li style="width:100%;">
                      <div class="goodcover" >
                        <el-carousel tag="ul" height="6rem" indicator-position="none" arrow="none">
                            <el-carousel-item v-for="goodsImage in goodsImages" :key="goodsImage.index" tag="li">
                              <img :src="goodsImage" style="width:100%"> 
                             </el-carousel-item >
                        </el-carousel>  
                      <div class="goods">
                          <p class="goodname">
                              {{goodsInfos.name}}</p>
                           <p  class="goodsale">
                               已售{{goodsInfos.salesVolume}}件
                           </p>
                           <span class="goodprice">
                               ￥{{goodsInfos.price}}
                           </span>
                           <span class="goodmarket">
                                ￥{{goodsInfos.marketPrice}}
                           </span>
                           <span class="buy">
                               {{goodsInfos.purchaseNumber}}人已购买
                           </span>
                      </div>    
                      </div>     
                </li> 
            </ul>
        </div>
        <div>
            <div class="details"> 
                           <span class="detailsspan" @click="detailsbg" ref="clickdeta">
                              <router-link to="/content"
                                 class="detailsbg" v-html="goodsInfos.content">
                              </router-link>
                           </span> 
                           <span class="detailsspan" @click="detailsbg">
                             <router-link to="/paramBase"  v-html="goodsInfos.content">
                             </router-link>
                           </span>
                           <span class="detailsspan" @click="detailsbg">  
                             <router-link to="/purchaseNotice" v-html="goodsInfos.content" >
                             </router-link>
                           </span>
            </div>
            <router-view></router-view>
        </div>
        <div class="foot">
            <div class="customer">
                <img src="../../assets/img/36.png" alt="">
                <p>客服</p>
            </div>
            <button class="inbuy" @click="joinbuy">加入购物车</button>
            <button class="inbuys">立即购买</button>
        </div>
        <div  style="overflow:hidden;" v-if="detailsshow">
            <div class="overlayer" @touchmove.prevent > </div>
            <div class="detailssize" @touchmove.prevent>
                 <img :src="goodsImages" style="width:40%;"> 
                 <img src="../../assets/img/39.png" class="closebuy" @click="closebuy">
                  <div class="goodssize">
                           <p class="goodprice">
                               ￥{{goodsInfos.price}}
                           </p>
                           <p class="goodmarket">
                                ￥{{goodsInfos.marketPrice}}
                           </p>
                  </div>
                  <div class="specifications skuModule">
                        <div class="specisitem">
                            <ul  v-for="item in goodsAttributes" :key="item.id"> {{item.skuTitle}} 
                                <li v-for="ss in item.skuInfo" :key="ss.index">
                                    {{ss.attributesName}}</li>      
                            </ul>                      
                        </div>
                  </div>
                  <div class="number">
                      <span class="num">数量</span>
                       <el-input-number :min="0" v-model="num1" @change="handleChange"></el-input-number>
                  </div>
                  <button class="joinsbuy" @click="addcar">加入购物车</button>
             </div>
        </div>
        
   </div> 
</template>
<script src="http://libs.baidu.com/jquery/1.9.0/jquery.min.js"></script>
<script>

    export default {
        data () {
            return {
                goodsInfos: [], 
                goodsImages: [],  
                num1: 1,  
                skuResultList: [],
                goodsAttributes: [],
                skuAttrInfo: {},
                skuInfo: [],
                skuAtterInfo:[],
                skuInfos: [],
                detailsshow:false,
                
            }
        },
        created () {
            if (this.$store.state.page) {
                localStorage.setItem('page', this.$store.state.page)
            }
                this.$getData('product/detail', {
                    params: {
                        goodsId: this.$store.state.page ? this.$store.state.page : localStorage.getItem('page')
                    }
                }).then(res => {
                    this.goodsAttributes = res.data.data.specifications.goodsAttributes;
                    this.skuInfo = res.data.data.specifications.goodsAttributes.map(item => {
                        return item.skuInfo
                    })
                    this.goodsInfos = res.data.data.goodsInfo;    
                    this.goodsImages = res.data.data.goodsInfo.goodsImages; 
              }).catch(err => {
                  return err
            })  
              
        }, 
        methods: {
            detailsbg () {
            },
           joinbuy () {
               this.detailsshow = true;
           },
            handleChange(value) {
              
          },
          addcar () {
            this.$toast('已经加入购物车')
            
          },
          closebuy () {
              this.detailsshow = false;
          }

        },
       components: {
        
       }
    }
</script>

<style>
.details-top{
    text-align: center;
}
.de-icon{
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    background-size: cover;
    vertical-align: middle;
    text-align: center;
}
.details-top  span{
    font-size: 0.5rem;
    font-weight: bold;
}
.details-right{
    float:right;
}
.de-iconimg1{
    background: url(../../assets/img/42.png) no-repeat center center;
    float: left;
}
.de-iconimg2{
    background: url(../../assets/img/44.png) no-repeat center center;
}
.de-iconimg3{
    background: url(../../assets/img/49.png) no-repeat center center;
    
}
.moregoodss{
    border-bottom: 5px solid #f7f7f7;
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
.buy{
    float:right;
}
.details{
    display:flex;
    justify-content:space-around;
    align-items: center;
    font-size: 0.5rem;
}
.details a{
    float:left;
    margin: 0.4rem;
    font-size: 0.4rem;;
}
.detailsbg{
    color: #ff525a;
    font-weight: bold;
}
.mashlayer{
    display: none;
}
.foot{
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
  box-shadow: 0px 2px 20px #f0f0f0;
  width: 100%; 
  display: flex;
  align-items: center;
  text-align: center;
}
.customer{
    font-size:0.4rem;
    width: 15%;
    border-right: 1px solid #f0f0f0;
}
.inbuy{
    width: 42.5%;
    font-size: 0.5rem;
    color: #ff525a;
    line-height: 1.4rem;
}
.inbuys{
    width: 42.5%;
    font-size: 0.5rem;
    background: #ff525a;
    color: #fff;
    line-height: 1.4rem;
}
.overlayer {
    position:fixed;
    left:0;
    top:0;
    width: 100%;
    height: 100%;
    z-index:10;
    background-color: #000;
    opacity: 0.6;
}
.detailssize{
    position:fixed;
    bottom: 0;
    height: 50%;
    width: 100%;
    background-color:#fff;
    z-index: 20;
    border-radius:0.4rem 0.4rem  0rem 0rem;
}
.detailssize img {
    margin: 0.5rem 0 0rem 0.5rem;
    display: inline-block;
}
.goodssize{
     display: inline-block;
     margin-left: 0.2rem;
}
.specifications{
    margin: 0.4rem;
    font-size: 0.3rem;
}
.specis{
    color: #999;
}
.specisitem {
    margin: 0;
    padding: 0;
    text-align: left;
}
.specisitem ul{
     margin: 0;
     padding: 0;
}
.specisstyle{
    border: 1px solid #999;
    border-radius: 0.5rem;
    padding: 0.1rem 0.4rem;
}
.inthe{
    border: 1px solid #ff525a;
    background: #fff4f5;
    color: #ff525a;
}
.joinsbuy{
    width: 100%;
    line-height: 1rem;
    background: #ff525a;
    color: #fff;
    position:fixed;
    bottom: 0;
    font-size: 0.4rem;
}
.number {
    font-size: 0.35rem;
    margin: 0.4rem;
}
.number .num{
    font-size: 0.4rem;
    margin-right: 0.5rem;
    color: #999;
}
.closebuy{
    float:right;
    width: 0.8rem;
    padding-right: 0.5rem;
}
</style>
