<template>
   <div>
       <div class="details-top">
           <el-header style="height:40px;">   
                 <router-link to="/index">
                 <i class="de-icon de-iconimg1"> </i>
                 </router-link>
             <span>{{$t(goodsdetails)}}</span> 
             <div class="details-right" @click="$router.push({name: 'cartList'})">
               <i class="de-icon de-iconimg2">
                   <router-link to="/cart/list"> </router-link>
               </i>
             </div>          
           </el-header>
       </div> 
       <div class="moregoods moregoodss">
            <div> 
                <div >
                      <div class="layout" >
                        <van-swipe :autoplay="3000" :showIndicators='false' :data-auto-play='4000' style="width:100%;">
                                <van-swipe-item v-for="goodsImage in goodsImages" :key="goodsImage.index" :autoplay="autoplay">
                                    <div class="goodsvan">
                                         <img :src="goodsImage"/>
                                    </div>
                                </van-swipe-item>
                        </van-swipe>
                      <div class="goods">
                          <p class="goodname">
                              {{goodsInfos.name}}</p>
                           <p  class="goodsale">
                              {{$t(yishou)}} {{goodsInfos.salesVolume}}  {{$t(jian)}}
                           </p>
                           <span class="goodprice">
                               ￥{{goodsInfos.price}}
                           </span>
                           <span class="goodmarket">
                                ￥{{goodsInfos.marketPrice}}
                           </span>
                           <span class="buy">
                               {{goodsInfos.purchaseNumber}} {{$t(ren)}}{{$t(yibuy)}}
                           </span>
                      </div>    
                      </div>     
                </div> 
            </div>
        </div>
        <div>
            <div class="details"> 
                          <van-tabs v-model="active">
                            <van-tab  >
                                <div slot="title">{{$t(twdetails)}}
                                </div>
                                <div class="goodstu" >
                                    <div v-html="goodsInfos.content">
                                    </div>
                                </div>
                            </van-tab>
                            <van-tab  >
                                <div slot="title" >{{$t(parameters)}}
                                </div>
                                <div class="goodstu" >
                                    <ul class="list-paddingleft-2">
                                        <li v-html="goodsInfos.paramBase"></li>
                                    </ul>
                                </div>
                            </van-tab>
                            <van-tab>
                                <div slot="title" >{{$t(attention)}}
                                </div>
                                <div class="goodstu">
                                     <ul class="list-paddingleft-2">
                                        <li v-html="goodsInfos.purchaseNotice"></li>
                                    </ul>
                                </div>
                            </van-tab>
                            </van-tabs>                          
            </div>
        </div>
        <div class="foot">
            <div class="customer">
                <img src="../../assets/img/36.png" alt="">
                <p>{{$t(customerservice)}}</p>
            </div>
            <button class="inbuy" @click="joinbuy">{{$t(joinbuys)}}</button>
            <button class="inbuys" @click="joinbuy">{{$t(buy)}}</button>
        </div>
        <div class="sku-container">
           
            <van-sku
                v-model="showBase"
                :sku="sku"
                :goods="goods"
                :goods-id="goodsId"
                :hide-stock="sku.hide_stock"
                :close-on-click-overlay="closeOnClickOverlay = true"
                :stepper-title="$t(stepperTitle)"
                @buy-clicked="onBuyClicked"
                @add-cart="onAddToCart"
                :get-container="getContainer"
                :customStepperConfig="customStepperConfig"
                >
                <template slot="sku-actions" slot-scope="props">
                    <div class="van-sku-actions">
                        <van-button bottom-action @click="props.skuEventBus.$emit('sku:addCart')" 
                        style="background:#ff976a;border-radius:0px 0px 0px 6px;">{{$t(addCarts)}}</van-button>
                        <van-button bottom-action @click="props.skuEventBus.$emit('sku:buy')"
                        style="border-radius:0px 0px 6px 0px;">{{$t(buy)}}</van-button>
                    </div>
                </template>
            </van-sku>
        </div>
         
               
   </div> 
</template>

<script>
import Vue from "vue"
import {wcSwiper, wcSlide} from 'wc-swiper'
import { getGoodsInfo } from '@/api/goods/index.js'
import { addGoodsToCart,orderSettlement } from "@/api/cart/index.js";
import { Sku } from 'vant'
import { mapState } from 'vuex'
import { Tab, Tabs, Dialog } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Button } from 'vant';
Vue.use(Button);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Sku);
Vue.use(Swipe).use(SwipeItem);

    export default {
        props: {
            getContainer: Function,

        },
        data () {
            return {
                goodsId: 0,
                goodsInfos: [], 
                goodsImages: [
                    {a:'12134'},
                    {a: '113346'}
                ],  
                num1: 1,  
                active: 0,
                skuAtterInfo:[],
                showBase: false,
                sku: {},
                showAddCartBtn: true,
                goods: {
                    title: '商品',
                    picture: '../../assets/img/order.png'
                },
                goodsdetails: 'common.goodsdetails',
                twdetails: 'common.twdetails',
                parameters: 'common.parameters',
                attention: 'common.attention',
                customerservice: 'common.customerservice',
                joinbuys: 'common.joinbuy',
                buy: 'common.buy',
                yishou: 'common.yishou',
                jian: 'common.jian',
                yibuy: 'common.yibuy',
                autoplay:true,
                addCarts: 'common.addCarts',
                goodsnum: 1,
                stepperTitle: 'common.stepperTitle',
                shengyu: 'common.shengyu',
                notkucun: 'common.kucun',
                ren: 'common.ren',
                lastchoose: 'common.lastchoose',
                nokucun: 'common.notkucun',
                customStepperConfig: {
                    shengyu:'common.shengyu',
                    jian:'common.jian',
                    stockFormatter: (stock) => ` ${this.$t(this.shengyu)} ${stock} ${this.$t(this.jian)}`,
                    handleOverLimit: (data) => {
                    const { action, limitType, quota } = data;

                    if (action === 'minus') {
                        this.$toast(`${this.$t(this.lastchoose)}`);
                    } else if (action === 'plus') {
                        // if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
                        // this.$toast(`限购${quota}件`);
                        // } else {
                        // }
                        this.$toast(`${this.$t(this.nokucun)}`);
                    }
                    }
            },
            }
        },
        created () {
            this.goodsId = this.$route.query.goodsId ? this.$route.query.goodsId : 0
            this.vanSkuStock = 'stock'
            if (this.goodsId != 0) {
                this.getData()
            }
        },
        methods: {
            // 获取商品详情数据
            getData () {
                getGoodsInfo (this.goodsId).then(res => {
                    if(res.data.status == 0){   
                        this.goodsInfos = res.data.data.goodsInfo;
                        this.goods.title = res.data.data.goodsInfo.name
                        this.goods.picture = res.data.data.goodsInfo.goodsCoverImg
                        this.goodsImages = res.data.data.goodsInfo.goodsImages; 
                        this.sku = res.data.data.sku;
                        
                    }
                }).catch(err => {
                    return err
                })
            },
            // 加入购物车 zhangjie 0918
            onAddToCart (skuData) {
                let cartGoodsId = skuData.goodsId
                let goodsQuantity = skuData.selectedNum
                let cartSkuId = skuData.selectedSkuComb.id ? skuData.selectedSkuComb.id : 0
                addGoodsToCart (cartGoodsId,goodsQuantity,cartSkuId).then(res => {
                    if (res.data.status == 99) {
                        Dialog.confirm({
                            title: this.$t("common.warmprompt"),
                            message: this.$t("common.gologin")
                        }).then(() => {
                            // on confirm
                            this.$router.push({name: res.data.data.url})
                            
                        }).catch(() => {
                        });
                    } else if (res.data.status == 0) {
                        Dialog.confirm({
                            title: this.$t("common.warmprompt"),
                            message: this.$t("common.lookcart"),
                            confirmButtonText: this.$t('common.confirmButtonText'),
                            cancelButtonText: this.$t('common.cancelButtonText')
                        }).then(() => {
                            // on confirm
                            this.$router.push({name: 'cartList'})
                            
                        }).catch(() => {
                        });
                        // window.location.reload()
                    } else {
                        this.$toast(res.data.message ? res.data.message :this.$t("common.failuredcaozuo"))
                    }
                })
            },
            // 立即购买 zhangjie 0919
            onBuyClicked (skuData) {
                let goodsId = skuData.goodsId  
                let goodsQuantity = skuData.selectedNum
                let skuId = skuData.selectedSkuComb.id ? skuData.selectedSkuComb.id : 0
                orderSettlement (2,'',0,goodsId,skuId,goodsQuantity).then(res => {
                    console.log(res)
                    if (res.data.status == 0) {
                        this.$router.push({
							name: 'cartSettlement',
							query: {
                                buyType: 2,
                                cartIds: '',
                                addressId: 0,
                                goodsId: goodsId,
                                skuId: skuId,
                                goodsQuantity: goodsQuantity,
							}
						})
                    } else if (res.data.status == 99) {
                        Dialog.confirm({
                            title: this.$t("common.warmprompt"),
                            message: this.$t("common.gologin"),
                            confirmButtonText: this.$t('common.confirmButtonText'),
                            cancelButtonText: this.$t('common.cancelButtonText')
                        }).then(() => {
                            // on confirm
                            this.$router.push({name: res.data.data.url})                      
                        }).catch(() => {
                        });
                    } else {
                        this.$toast(res.data.message ? res.data.message : this.$t("common.failuredcaozuo"))
                    }
                });
            },

            detailsbg () {
            },
            handdleClick(url) {
            window.location.href = url;
            },
           joinbuy () {
               this.showBase = true;
           },
           gobuy () {
           
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
    font-size: 0.45rem;
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
.goodsvan{
    width:10rem;
    height:6rem;
    margin:auto;
    display: flex;
    justify-content:center;
    align-items:center;
}
.goodsvan img{
    max-width:100%;
    max-height:100%;
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
  box-shadow: 0px 2px 10px #f0f0f0;
  width: 100%; 
  display: flex;
  align-items: center;
  text-align: center;
  z-index: 100;
}
.customer{
    font-size:0.4rem;
    width: 15%;
    border-right: 1px solid #f0f0f0
}
.inbuy{
    width: 42.5%;
    height:1.4rem;
    font-size: 0.5rem;
    color: #fff;
    margin: 0;
    padding: 0;
    /* background:#ff525a;  */
    color: #ff525a;
}
.inbuys{
    width: 42.5%;
    height: 1.4rem;
    font-size: 0.5rem;
    background: #ff525a;
    color: #fff;
}
/* .overlayer {
    position:fixed;
    left:0;
    top:0;
    width: 100%;
    height: 100%;
    z-index:10;
    background-color: #000;
    opacity: 0.6;
} */
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
    line-height: 1.1rem;
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
    margin: 0.4rem;
    text-align:left;
    display: block;
    flex-wrap: wrap;
    font-size: 0.3rem;
}
.goodstu img{
    width: 100%;
    margin:0;
    padding: 0;
}
.goodstu ul{
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-wrap: wrap;
   width: 100%;
}
.goodstu ul  li{
     width: 100%;
     float: left;
     line-height: 0.8rem;
     
}
.list-paddingleft-2 li{
    margin: 0 0.2rem;
}
.el-header{
    padding: 0 5px;
}
.van-button--primary{
    display: none;
}
.van-button--bottom-action{
    background: #ff525a;
}
.van-dialog__confirm {
    color: #ff525a;
}
.mint-toast {
    z-index: 10000;
}
.mint-toast .is-placemiddle {
            z-index: 10000;
}
.van-sku-stepper{
    margin:0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
.van-sku__stepper .van-stepper{
    line-height: 1rem;
}
.van-stepper__input{
    height: 26.5px;
}
</style>
