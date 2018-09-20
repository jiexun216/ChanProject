<template>
   <div>
       <div class="details-top">
           <el-header>   
                 <router-link to="/index">
                 <i class="de-icon de-iconimg1"> </i>
                 </router-link>
             <span>商品详情</span> 
             <div class="details-right" @click="$router.push({name: 'cartList'})">
               <i class="de-icon de-iconimg2">
                   <router-link to="/cart/list"> </router-link>
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
                          <van-tabs v-model="active">
                            <van-tab  >
                                <div slot="title">图文详情
                                </div>
                                <div class="goodstu">
                                    {{goodsInfos.content}}   
                                </div>
                            </van-tab>
                            <van-tab  >
                                <div slot="title" >商品参数
                                </div>
                                <div class="goodstu">
                                    {{goodsInfos.paramBase}}
                                </div>
                            </van-tab>
                            <van-tab  >
                                <div slot="title" >购买须知
                                </div>
                                <div class="goodstu">
                                    {{goodsInfos.purchaseNotice}}
                                </div>
                            </van-tab>
                            </van-tabs>                          
            </div>
        </div>
        <div class="foot">
            <div class="customer">
                <img src="../../assets/img/36.png" alt="">
                <p>客服</p>
            </div>
            <button class="inbuy" @click="joinbuy">加入购物车</button>
            <button class="inbuys" @click="joinbuy">立即购买</button>
        </div>
        <van-sku
                    v-if="detailsshow"
                    v-model="showBase"
                    :sku="sku"
                    :goods="goods"
                    :goods-id="goodsId"
                    :hide-stock="sku.hide_stock"
                    @buy-clicked="onBuyClicked"
                    @add-cart="onAddToCart"
                        />       

                        
   </div> 
</template>

<script>

import { getGoodsInfo } from '@/api/goods/index.js'
import { addGoodsToCart,orderSettlement } from "@/api/cart/index.js";
import Vue from "vue"
import { Sku } from 'vant'
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);
Vue.use(Sku)
    export default {
        data () {
            return {
                goodsId: 0,
                goodsInfos: [], 
                goodsImages: [],  
                num1: 1,  
                active: 2,
                skuAtterInfo:[],
                detailsshow:false,
                showBase: '',
                sku: {},
                goods: {
                    title: '商品',
                    picture: '../../assets/img/order.png'
                },           
            }
        },
        created () {
            this.goodsId = this.$route.query.goodsId ? this.$route.query.goodsId : 0
            if (this.goodsId != 0) {
                this.getData()
            }      
        }, 
        methods: {
            // 获取商品详情数据
            getData () {
                getGoodsInfo (this.goodsId).then(res => {
                    this.goodsInfos = res.data.data.goodsInfo;
                    this.goods.title = res.data.data.goodsInfo.name
                    this.goods.picture = res.data.data.goodsInfo.goodsCoverImg
                    this.goodsImages = res.data.data.goodsInfo.goodsImages; 
                    if (this.goodsInfos.isSku == 1) {
                        this.sku = res.data.data.sku;
                    }
                    
                }).catch(err => {
                    return err
                })
            },
            // 加入购物车 zhangjie 0918
            onAddToCart (skuData) {
                console.log(skuData)
                let cartGoodsId = skuData.goodsId
                let goodsQuantity = skuData.selectedNum
                let cartSkuId = skuData.selectedSkuComb.id ? skuData.selectedSkuComb.id : 0
                addGoodsToCart (cartGoodsId,goodsQuantity,cartSkuId).then(res => {
                    this.$toast(res.data.message ? res.data.message : '操作失败')
                    if (res.data.status == 99) {
                        this.$router.push({name: res.data.data.url})
                    } else if (res.data.status == 0) {
                        // window.location.reload()
                    }
                })
            },
            // 立即购买 zhangjie 0919
            onBuyClicked (skuData) {
                let goodsId = skuData.goodsId
                let goodsQuantity = skuData.selectedNum
                let skuId = skuData.selectedSkuComb.id ? skuData.selectedSkuComb.id : 0
                orderSettlement (2,'',0,goodsId,skuId,goodsQuantity).then(res => {
                    this.$toast(res.data.message ? res.data.message : '操作失败')
                    if (res.data.status == 0) {
                        this.$router.push({
							name: 'cartSettlement',
							query: {
                                buyType: 2,
                                cartIds: '',
                                addressId: 0,
                                goodsId: goodsId,
                                skuId: skuId,
                                goodsQuantity: goodsQuantity
							}
						})
                    }
                });
            },
            detailsbg () {
            },
           joinbuy () {
               this.detailsshow = true;
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
   font-size: 0.4rem;
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
    position: relative;
    bottom: 0.3rem;
}
.details a{
    float:left;
    margin: 0.4rem;
    font-size: 0.4rem;
    color: #f44;
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
    left: 0;
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
.van-stepper__input{
    line-height: 1rem;
}
.van-sku-row__item--disabled{
    background: #fff;
}
.van-sku-row__item--active{
    color: #fff;
    background: #f44;
}
.van-tabs--line{
    width: 100%;
}
.van-tabs__wrap{
    position: relative;
}
.van-hairline--top-bottom::after{
    border: none;
}
.van-tab{
    font-size: 0.4rem;
}
.van-tabs__nav{
    margin: 0 0.4rem;
}
.goodstu{
    margin: 0 0.4rem;
}
</style>
