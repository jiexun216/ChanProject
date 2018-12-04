<template>
   <div>
        <div class="cartop">
                <router-link to="/Index">
                    <i class="carback  carbacks"></i>     
                </router-link>
                <span >
                  
                  
                </span>
                <div class="carmyorder">
                    <span @click="editor">{{$t(editor)}}</span>
                    <i class="carback carbackcoups"></i>
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
                <div class="van-cardgoods">
                    <div >
                        <img src="../../assets/img/order.png" alt="" class="van-card-img">
                    </div>
                    <div class="van-card-right">
                        <p>商品种类的第一件，价格是总价的一般般啊的啊</p>
                        <p class="van-card-p">套装种类</p>
                        <div class="van-card-price">
                            <p class="van-price-p" >￥ 990</p>
                            <p>
                               <van-stepper  />
                               </p>
                        </div>
                    </div>
                </div>
                </van-checkbox>
                  </van-checkbox-group>
                  <van-submit-bar
                      :price="totalPrice"
                      :disabled="!checkedGoods.length"
                      :button-text="submitBarText"
                      @submit="onSubmit"
                      class="payfor"
                      />
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
  data() {
    return {
      checkedGoods: ['1', '2'],
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
    };
    editor: 'common.editor'
  },
    computed: {
    submitBarText() {
      const count = this.checkedGoods.length;
      return '去支付' + (count ? `(${count})` : '');
    },
    totalPrice() {
      return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0), 0);
    }
  },
  methods: {
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
    onSubmit() {
      this.$router.push('/Settlement')
    },
    editor () {
      this.$router.push('/EditorGoods')
    }
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
.van-cardgoods{
   background: #fff;  
}
.card-goods__item{
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0.2rem;
}
.van-card{
    box-shadow: 0px 0px 10px 5px #fbfbfb;
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
    margin-left:0.2rem;
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
.payfor{
  box-shadow: 0px 0px 10px 5px #fbfbfb;
}
</style>
