<template>
 <div>
      <div class="cartop">
                <router-link to="/Index">
                    <i class="carback  carbacks"></i>     
                </router-link>
                <span >购物车</span>
                <div class="carmyorder">
                    <span >完成</span>
                </div>
        </div>
         <div class="cargoods">
              <van-checkbox-group class="card-goods" v-model="checkedGoods">
                <van-checkbox
                  class="card-goods__item"
                  v-for="item in goods"
                  :key="item.id"
                  :name="item.id"
                >
                <div class="van-card">
                    <div >
                        <img src="../../../dist/static/img/order.9623a3b.png" alt="" class="van-card-img">
                    </div>
                    <div class="van-card-right">
                        <p>商品种类的第一件，价格是总价的一般般啊的啊</p>
                        <p class="van-card-p">套装种类</p>
                        <div class="van-card-price">
                            <p class="van-price-p" >￥ 990</p>
                            <p> <van-stepper  /></p>
                        </div>
                    </div>
                </div>
                </van-checkbox>
                  </van-checkbox-group>
         </div>  
        <div class="carfoot">
                <van-checkbox v-model="checked" class="chooseall">全选</van-checkbox>
                <button class="carclear">删除</button>
        </div>    
</div>    
</template>

<script>
import Vue from "vue";
import { Checkbox, CheckboxGroup, SubmitBar, Toast } from 'vant';
import { Stepper } from 'vant';
Vue.use(Stepper);
 export default {
      components: {
            [Checkbox.name]: Checkbox,
            [SubmitBar.name]: SubmitBar,
            [CheckboxGroup.name]: CheckboxGroup
  },
  data () {
    return {
      checkedGoods: ['1', '2'],
      checked: '',
      goods: [{
        id: '1',
        price: 990,
        
      }, {
        id: '2',
        price: 990,
        num: 1,
      }, {
        id: '3',
        price: 990,
      }]
    }
  },
   
 
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
    font-size: 0.4rem;
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
    font-size: 0.4rem;
    padding: 0.1rem 0.4rem;
    color: #f00;
    border: 1px solid #f00;
    border-radius: 0.3rem;
    margin-right: 0.4rem;   
}
</style>
