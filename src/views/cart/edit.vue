<template>
 <div>
      <div class="cartop">
                
                <i class="carback  carbacks" @click="$router.back(-1)"></i>     
                <span >购物车编辑</span>
                <div class="carmyorder">
                    <span >完成</span>
                </div>
        </div>
         <div class="cargoods">
              <van-checkbox-group class="card-goods" @change="changeGoods" v-model="checkedGoods">
                
                <div class="van-card" v-for="(item,index) in goods" :key="index">
                    <van-checkbox class="card-goods__item" :name="item" ></van-checkbox>
                    <div>
                        <img :src="item.goodsCoverImg" alt="" class="van-card-img">
                    </div>
                    <div class="van-card-right">
                        <p>{{item.name}}</p>
                        <p class="van-card-p">{{item.skuInfo}}</p>
                        <div class="van-card-price">
                            <p class="van-price-p" >￥ {{item.price}}</p>
                            <van-stepper @change="cartNumChangeHandle(item.id,item.goodsQuantity)" v-model="item.goodsQuantity"  />
                        </div>
                    </div>
                </div>
                
                  </van-checkbox-group>
         </div>  
        <div class="carfoot">
                <van-checkbox @change="queryCheck" v-model="checked" class="chooseall">全选</van-checkbox>
                <button class="carclear" @click="deleteCartHandle">删除</button>
        </div>    
</div>    
</template>

<script>
import Vue from "vue";
import { Checkbox, CheckboxGroup, SubmitBar, Toast } from 'vant';
import { Stepper } from 'vant';
import { getCartList, deleteCart, changeCartQuantity } from '@/api/cart/index.js'
Vue.use(Stepper);
 export default {
  components: {
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data () {
    return {
      checkedGoods: [],
      checked: false,
      goods: []
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
        this.goods  = res.data.data.list
      });
    },
    queryCheck (data) {
      data ? this.checkedGoods = this.goods : this.checkedGoods = []
    },
    changeGoods (data) {
      data.length === this.goods.length ? this.checked = true : this.checked = false
    },
    // 删除购物车 zhangjie 0919
    deleteCartHandle () {
        if (this.checkedGoods.length == 0) {
            this.$toast('请选择需要删除的商品')
            return false
        }
        var cartIds = ''
        this.checkedGoods.forEach(val => {
            cartIds += val + ','
        });
        deleteCart (cartIds).then(res => {
            this.$toast(res.data.message ? res.data.message : '操作失败')
            if (res.data.status == 99) {
                 this.$router.push({name: res.data.data.url})
            } else if (res.data.status == 0) {
                this.getData();
            }
        })
    },
    // 购物车数量修改 zhangjie 0919
    cartNumChangeHandle (cartId,goodsQuantity) {
        changeCartQuantity (cartId, goodsQuantity).then(res => {
            this.$toast(res.data.message ? res.data.message : '操作失败')
            if (res.data.status == 99) {
                 this.$router.push({name: res.data.data.url})
            } else if (res.data.status == 0) {
                this.getData();
            }
        })
    },
  },
  created () {
      this.getData()
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
     margin-right: 0.3rem;
 }
 .card-goods__item {
    display: flex;
    justify-content: space-around;
    align-items: center;
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
   padding: 0.2rem;
}
.van-card{
    box-shadow: 0px 0px 10px 5px #fafafa;
    border: 1px solid #fbfbfb;
    margin: 0.2rem;
    display: flex;
    justify-content: space-around;
    justify-content: center;
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
    margin:0.1rem 0;
}
.van-card-price{
    color: #f00;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
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
.carfoot{
    width: 100%;
    height: 1.5rem;
    border-top: 1px solid #ccc;
    box-shadow: 0px 0px 10px 10px #fbfbfb;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
}
.chooseall{
    margin-left: 0.4rem;
    font-size: 0.4rem;
}
.carclear{
    font-size: 0.3rem;
    padding:0.1rem 0.4rem;
    color: #f00;
    border: 1px solid #f00;
    border-radius: 0.5rem;
    margin-right: 0.4rem;   
}
</style>
