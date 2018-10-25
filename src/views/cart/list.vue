<template>
   <div>
      <div v-if="cartGoodsList.length == 0">
      <div class="cartop">
                <router-link to="/">
                    <i class="carback  carbacks"></i>     
                </router-link>
                <span >{{$t(carts)}}</span>
                <div class="carmyorder">
                   <!-- <i class="carback carbackss"></i> -->
                </div>
        </div>
            <emptygoods :goodsList="goodsList"></emptygoods>
        </div>
     <div v-else>
        <div class="cartop">
                <router-link to="/">
                    <i class="carback  carbacks"></i>     
                </router-link>
                <span >{{$t(carts)}}</span>
                <div class="carmyorder">
                    <span @click="editor">{{$t(editors)}}</span>
                    <!-- <i class="carback carbackcoups"></i> -->
                </div>
        </div>
        <div class="cargoods" v-for="item in cartGoodsList" :key="item.index" >
                <div class="van-card">
                  <van-checkbox-group class="card-goods" v-model="checkedGoods">
                      <van-checkbox
                        class="card-goods__item"
                        :key="item.id"
                        :name="item.id"
                      >
                      </van-checkbox>
                  </van-checkbox-group>
                    <div>
                         <img :src="item.goodsCoverImg" alt="" class="van-card-img"  @click="$router.push({ name: 'goodsDetail', query: { goodsId: item.goodsId }})">       
                    </div>
                    <div class="van-card-right">
                        <p>{{item.name}}</p>
                        <p class="van-card-p">{{item.skuInfo}}</p>
                        <div class="van-card-price">
                            <p class="van-price-p" >￥{{item.price}}</p>
                            <p> <van-stepper @change="getGoodsNumber(item.id,item.goodsQuantity)" :min="1" v-model="item.goodsQuantity"/></p>
                        </div>
                    </div>
                </div>
                  <van-submit-bar
                      :price="totalPrice"
                      :disabled="!checkedGoods.length"
                      :button-text="submitBarText"
                      @submit="onSubmit"
                      class="payfor"
                      />
              </div>      
     </div>  
   </div>    
</template>

<script>
import emptygoods from"../../components/car/emptygoods"
import Vue from "vue";
import { Checkbox, CheckboxGroup, SubmitBar, Toast } from 'vant';
import { getCartList,orderSettlement } from '@/api/cart/index.js';
import {deleteCart, changeCartQuantity } from '@/api/cart/index.js'
import { getMainData } from "@/api/index/index.js";
import { Stepper } from 'vant';
Vue.use(Stepper);
 export default {
      components: {
            [Checkbox.name]: Checkbox,
            [SubmitBar.name]: SubmitBar,
            [CheckboxGroup.name]: CheckboxGroup,
            "emptygoods": emptygoods,
  },
  data() {
    return {
      checkedGoods: [],
      cartGoodsList: [],
      goodsList: [],
      goodsListitem: [],
      goodsQuantity: 1,
      carts: 'common.carts',
      editors: 'common.editor'
    };
  },
    computed: {
    submitBarText() {
      const count = this.checkedGoods.length;
      return '去支付' + (count ? `(${count})` : '');
    },
    totalPrice() {
      return this.cartGoodsList.reduce((total, item) => 
      total + (this.checkedGoods.indexOf(item.id) !== -1 ? Number(item.price * item.goodsQuantity * 100) : 0), 0)
    }
      
  },
  methods: {
    // 请求数据
    getData () {
      getCartList ().then(res => {
        if (res.data.status == 99) {
          this.$toast(res.data.message ? res.data.message : '操作失败')
          this.$router.push({name: res.data.data.url})
        }
        this.cartGoodsList  = res.data.data.list
        this.goodsList = res.data.data.goodsList
        
      });
    },
    // 获取商品数量
    getGoodsNumber (data, cartId, goodsQuantity) { 
          this,goodsQuantity = data
          changeCartQuantity (data,cartId, goodsQuantity).then(res => {
           this.goodsQuantity = cartId
            //this.$toast(res.data.message ? res.data.message : '操作失败')
            if (res.data.status == 99) {
                 this.$router.push({name: res.data.data.url})
            } else if (res.data.status == 0) {
                this.getData();
            }
        })
    },  
    // 下单结算
    onSubmit() {
      var cartIds = ''
      this.checkedGoods.forEach(val => {
        cartIds += val + ','
      });
      orderSettlement (1,cartIds,0,0,0,0).then(res => {
        this.$toast(res.data.message ? res.data.message : '操作失败')
        if (res.data.status == 0) {
          this.$router.push({
							name: 'cartSettlement',
							query: {
                buyType: 1,
                cartIds: cartIds,
                addressId: 0,
                goodsId: 0,
                skuId: 0,
                goodsQuantity: 1,
                cartGoodsList: 0,
							}
						})
        }
      });
    },
    editor () {
      this.$router.push({name:'cartEdit'})
    }
  },
  created () {
    this.getData();
  }
 
}
</script>

<style>
.cartop{
  font-size: 0.4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.carback{
   display: inline-block;
   width: 0.7rem;
   height: 0.7rem;
   background-size: cover;
   margin-left: 0.2rem;
 }
 .carbacks {
   background: url(../../assets/img/42.png) no-repeat center center;
 }
 .carbackcoups{
     background: url(../../assets/img/49.png) no-repeat center center;
 }
.carmyorder{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 0.6rem;
}
.van-checkbox__icon--checked .van-icon{
    background: #f00;
    border: 1px solid #f00;
    color: #fff;
}
.van-icon-success:before{
    content: '\F055';
}
.van-card{
   background: #fff;  
}
.card-goods__item{
   display: flex;
   justify-content: center;
   align-items: center;
   padding:0.2rem;
}
.van-card{
    box-shadow: 0px 0px 10px 5px #fbfbfb;
    border: 1px solid #fbfbfb;
    margin: 0.2rem;
    display: flex;
    justify-content:space-around; 
    align-items: center;
    padding: 0.2rem;
}
.van-card-img{
    width: 3rem;
    margin-right: 0.2rem;
}
.van-card-right{
    font-size: 0.3rem;
}
.van-card-p{
    color: #707070;
    font-size: 0.3rem;
}
.van-card-price{
    color: #f00;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.2rem;   
}
.van-price-p{
   color: #f00;
   margin-right: 0.5rem;
}
.van-stepper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}
.van-stepper__minus{
  border-radius: 40% 0% 0% 40%;
  width: 30px;
}
.van-stepper__plus{
  border-radius: 0% 40% 40% 0%; 
  width: 30px;
}
.payfor{
  box-shadow: 0px 0px 10px 5px #fbfbfb;
}
.cartop{
  font-size: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.5rem;
}
.carback{
   display: inline-block;
   width: 0.7rem;
   height: 0.7rem;
   background-size: cover;
   margin-left: 0.2rem;
 }
 .carbacks {
   background: url(../../assets/img/42.png) no-repeat center center;
 }
 .carbackss{
     background: url(../../assets/img/49.png) no-repeat center center;
 }
 .cargoods{
   display: flex;
   justify-content:space-around;
   align-content:center;
 }
 .van-stepper__input{
   height: 26px;
   padding:1px;
   line-height: 0px;
 }
</style>
