<template>
    <div>
        <div class="header" v-if="listData.length == 0">
         <div class="orderdetop">
            <i class="back backs" @click="$router.push({path: '/ucenter/index'})"></i>     
            <span class="orderaddress">{{$t(shipaddress)}}</span>
            <span class="myorder">
                <i class="back backcoups"></i>
            </span>
         </div>
        <div class="address">
                <img src="../../assets/img/13.png" alt="">
                <p class="addressji">{{$t(noshipaddress)}}</p>
                <button @click="$router.push({name:'addressEdit'})" class="add">{{$t(addressadd)}}</button>
        </div>
       </div>
        <div v-else> 
            <div class="orderdetop orderdetop1">
                <i class="back backs" @click="$router.push({path: '/ucenter/index'})"></i>     
                <span >{{$t(shipaddress)}}</span>
                <span class="oks" @click="$router.back(-1)">
                  <!-- {{$t(completes)}} -->

                </span>
                </div>
                <div class="oldaddress" v-for="(item, index) in listData" :key="index" @click="choiceAddressHandle(item.id)">
                <div class="oldname">
                        <span>{{item.deliveryPerson}}</span> <span>{{item.deliveryPhone}}</span>
                        <p class="outaddress">{{item.province}}{{item.city}}{{item.section}} {{item.deliveryAddress}}</p>      
                    <div>
                        <div class="defaitem" >
                            <div @click="setDefault(item.id)">
                            <span class="defaclass" :class="{'defaclass':item.isDefault,'defaclasstwo':!item.isDefault}">
                                <i class="defaimg defaimgs" ></i>
                                </span>
                            <span v-if="item.isDefault == 1" class="defamr">
                                {{$t( nowdefault)}}
                            </span> 
                            <span v-else class="defamr defamrtwo">
                                {{$t(updefault)}}
                            </span>     
                            </div>
                        <div>
                            <span class="compile" @click="$router.push({name:'addressEdit', query: {id: item.id}})">{{$t(editor)}}</span>
                            <span class="compile compiles" @click="deleteAddress(item.id)">{{$t(deletes)}}</span> 
                        </div>
                        </div>   
                    </div>         
                </div>
                </div>

                <div class="addressfooter" @click="addAddressHandle">
                    <p>{{$t(addressadd)}}</p>
                </div>
        </div>
    </div>
    
</template>

<script>
import {
  getAddressList,
  addressDelete,
  defaultAddressSet
} from "@/api/address/index.js";
import { Dialog } from "vant";
export default {
  data() {
    return {
      loading: false,
      submitLoading: false,
      page: 1,
      listData: [],
      total: 0,
      pageCount: 1,
      isLoadingFinished: false,
      shipaddress:'common.shipaddress',
      noshipaddress: 'common.noshipaddress',
      addressadd: 'common.addressadd',
      completes: 'common.completes',
      nowdefault: 'common.nowdefault',
      updefault: 'common.updefault',
      editor: 'common.editor',
      deletes: 'common.deletes',
      addressjia: 'common.addressjia'
    };
  },
  methods: {
    // 获取地址列表数据
    getData() {
      this.loading = true;
      getAddressList(this.page)
        .then(res => {
          if (res.data.status == 99) {
            this.$toast(res.data.message ? res.data.message : this.$t("common.failuredcaozuo"))
            this.$router.push({name: res.data.data.url})
          }
          this.loading = false;
          this.listData = res.data.data.list;
          this.total = res.data.data.total;
          this.pageCount = res.data.data.pageCount;
          if (this.page >= this.pageCount) {
            this.isLoadingFinished = true;
          } else {
            this.page++;
          }
        })
        .catch(res => {
          this.loading = false;
        });
    },
    // 删除地址
    deleteAddress(id) {
      Dialog.confirm({
        title: this.$t("common.delecon"),
        message: this.$t("common.caredelete")
      }).then(() => {
        addressDelete(id)
          .then(res => {
            if (res.data.status == 0) {
              this.$toast(this.$t("common.addressdelete"));
            } else {
              this.$toast(res.data.message ? res.data.message : this.$t("common.addressnode"));
            }
            this.getData();
          })
          .catch(() => {
            this.$toast(this.$t("common.addressnode"));
          });
      });
    },
    // 地址设为默认
    setDefault(id) {
      defaultAddressSet(id)
        .then(res => {
          if (res.data.status == 0) {
            this.$toast(this.$t("common.setdefaultaddress"));
          } else {
            this.$toast(
              res.data.message ? res.data.message : this.$t("common.setdefaultaddressno")
            );
          }
          this.getData();
        })
        .catch(() => {
          this.$toast( this.$t("common.setdefaultaddressno"));
        });
    },
    // 下单选择地址
    choiceAddressHandle (addressId) {
      if (this.$route.query.buyType == 1 || this.$route.query.buyType == 2) {
        if (!addressId) {
          this.$toast(this.$t("common.addresschooseerror"));
          return false;
        }
        this.$router.push({
          name: 'cartSettlement',
          query: {
            buyType: this.$route.query.buyType,
            cartIds: this.$route.query.cartIds,
            addressId: addressId,
            goodsId: this.$route.query.goodsId,
            skuId: this.$route.query.skuId,
            goodsQuantity: this.$route.query.goodsQuantity
          }
        });
      }
    },
    // 添加地址链接 zhangjie 0919
    addAddressHandle () {
      this.$router.push({
        name:'addressEdit',
        query: {
          buyType: this.$route.query.buyType,
          cartIds: this.$route.query.cartIds,
          addressId: this.$route.query.addressId,
          goodsId: this.$route.query.goodsId,
          skuId: this.$route.query.skuId,
          goodsQuantity: this.$route.query.goodsQuantity
        }
      })
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style>
.orderdetop {
  font-size: 0.4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.orderdetop1 {
  border-bottom: 1px solid #ccc;
}
.back {
  display: inline-block;
  width: 0.7rem;
  height: 0.7rem;
  background-size: cover;
  margin-left: 0.2rem;
}
.backs {
  background: url(../../assets/img/42.png) no-repeat center center;
}
.orderaddress{
  font-size: 0.4rem;
}
.oks {
  color: #f00;
  margin-right: 0.4rem;
}
.oldaddress {
  border-bottom: 4px solid #ccc;
}
.oldname {
  padding: 0.4rem;
  font-size: 0.45rem;
}
.outaddress {
  line-height: 1rem;
  color: #ccc;
  font-size: 0.4rem;
}
.defaclass {
  background: #f00;
  border-radius: 50%;
}
.defaclasstwo {
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
}
.defamr {
  color: #ff525a;
  font-size: 0.4rem;
}
.defamrtwo {
  color: #ccc;
  font-size: 0.4rem;
}
.defaimg {
  display: inline-block;
  width: 0.6rem;
  height: 0.5rem;
  background-size: cover;
  vertical-align: middle;
  border-radius: 50%;
  margin-bottom: 0.1rem;
}
.defaimgs {
  background: url(../../assets/img/38.png) no-repeat center center;
}
.defaitem {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.compile {
  border: 1px solid #ccc;
  padding: 0.1rem 0.4rem;
  border-radius: 0.5rem;
  font-size: 0.3rem;
  margin: 0 auto;
}
.compiles {
  border: 1px solid #ff525a;
  color: #ff525a;
}
.deleteaddress {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
}
.restdelete {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 8rem;
  height: 4rem;
  background: #fff;
  border-radius: 0.3rem;
  text-align: center;
}
.restde {
  font-size: 0.5rem;
  margin-top: 1rem;
}
.closeaddress {
  position: absolute;
  bottom: 0;
  width: 100%;
  line-height: 1rem;
  font-size: 0.4rem;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
}
.closeaddress span {
  width: 50%;
}
.thesc {
  color: #f00;
}

.addressfooter {
  color: #ff525a;
  text-align: center;
  line-height: 1.2rem;
  font-size: 0.5rem;
  background:#fff;
  box-shadow: 0 0 0.5rem #ccc;
  width: 100%;
  position: fixed;
  bottom: 0;
}
.orderdetop{
  font-size: 0.4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.back{
   display: inline-block;
   width: 0.7rem;
   height: 0.7rem;
   background-size: cover;
 }
 .backs {
   background: url(../../assets/img/42.png) no-repeat center center;
 }
 .backcoups{
     background: url(../../assets/img/49.png) no-repeat center center;
 }
 .header{
    position: fixed;
    padding: 0;margin: 0;
    width: 100%;
    height: 100%;
 }
 .address{
     position:relative;
     top: 30%;
     /* left: 45%; */
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     align-items: center;
 }
 .addressji{
     width: 100%;
     text-align: center;
     line-height: 1rem;
     color: #ccc;
 }
 .add{
     border: 1px solid #ff525a;
     padding:0.1rem 0.5rem;
     border-radius: 0.6rem;
     color: #ff525a;
     font-weight: bold;
 }
 .van-switch__node{
   position:absolute;
   top: -1px;
   left: -20px;
   right: 0;
   bottom: 0;
   margin: auto;
 }
 .van-switch--on .van-switch__node{
   transform: translateX(0.4rem);
 }
</style>
