<template>
<div>
            <div class="orderdetop">
                <i class="back backs" @click="$router.back(-1)"></i>     
                <span class="orderaddress">编辑/添加地址</span>
                <span class="myorder"></span>
            </div>    
            <van-address-edit
              :area-list="areaList"
              :address-info="formData"
              show-set-default
              show-search-result
              @save="onSave"   
            /> 
</div>        
</template>

<script>
import Vue from 'vue'
import { Toast } from "mint-ui";
import { AddressEdit } from "vant";
import areaList from "@/common/js/area.js";
import { getAddressInfo,saveAddressInfo } from "@/api/address/index.js";
Vue.use(AddressEdit);
export default {
  components: {
    "van-address-edit": AddressEdit
  },
  data() {
    return {
      loading: false,
      areaList,
      formData: {
        id: 0,
        name: "",
        tel: "",
        province: "",
        city: "",
        county: "",
        addressDetail: "",
        areaCode: "",
        isDefault: true
      },
    };
  },
  methods: {
    beforeClose(action, done) {
      if (action === 'confirm') {
        setTimeout(done, 1000);
      } else {
        done();
      }
    },
    // 添加、修改地址保存
    onSave(content) {
      console.log(content);
      saveAddressInfo(
        content.id,
        content.name,
        content.tel,
        content.province,
        content.city,
        content.county,
        content.addressDetail,
        content.areaCode,
        content.isDefault
      ).then(res => {
          this.$toast(res.data.message ? res.data.message : '操作失败')
          if (res.data.status == 0) {
              this.$router.push({
                name: 'addressList',
                query: {
                  buyType: this.$route.query.buyType,
                  cartIds: this.$route.query.cartIds,
                  addressId: this.$route.query.addressId,
                  goodsId: this.$route.query.goodsId,
                  skuId: this.$route.query.skuId,
                  goodsQuantity: this.$route.query.goodsQuantity
                }
              });
          }
      });
    },
    // 编辑地址数据
    getData() {
      getAddressInfo(this.formData.id)
        .then(res => {
          if (res.data.status == 0) {
            this.formData.name = res.data.data.contactName;
            this.formData.tel = res.data.data.contactMobile;
            this.formData.province = res.data.data.provinceName;
            this.formData.city = res.data.data.cityName;
            this.formData.county = res.data.data.sectionName;
            this.formData.addressDetail = res.data.data.detailAddress;
            this.formData.areaCode = res.data.data.areaCode;
            this.formData.isDefault = res.data.data.isDefault == 1;
          } else if (res.data.status == 99) {
            this.$toast(res.data.message ? res.data.message : '操作失败')
            this.$router.push({name: res.data.data.url})
          } else {
            Toast({
              message: res.data.message
                ? res.data.message
                : "获取用户地址失败，请稍后再试",
              duration: 1500
            });
          }
        })
        .catch(() => {
          Toast({
            message: "获取用户地址失败，请稍后再试",
            duration: 1500
          });
        });
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
    },
      created() {
        this.formData.id = this.$route.query.id ? this.$route.query.id : 0;
        if (this.formData.id != 0) {
          this.getData();
        }
      }
    }
}
</script>

<style>
.orderdetop {
  font-size: 0.4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.3rem;
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
.backcoups{
  background: url(../../assets/img/49.png) no-repeat center center;
}
.oks {
  color: #f00;
  margin-right: 0.4rem;
}
.orderaddress{
  font-size: 0.45rem;
}
/* .recipi {
  border-top: 1px solid #ccc;
  padding: 0.4rem;
}
.margininput {
  width: 2rem;
  margin-right: 0.4rem;
  display: inline-block;
}
.plsechoose {
  float: right;
}
.addresslp {
  width: 3rem;
  word-wrap: break-word;
  word-break: normal;
}
.restaddress {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;  
  right: 0;
  margin: auto;
  width: 8rem;
  height: 5rem;
  background: #fff;
  border-radius: 0.3rem;
  text-align: center;
}
.restaddress p {
  font-size: 0.5rem;
  margin-top: 1rem;
  line-height: 1.3rem;
}
.closeaddress {
  position: absolute;
  bottom: 0;
  width: 100%;
  line-height: 1rem;
  font-size: 0.5rem;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
}
.closeaddress span {
  width: 50%;
  text-align: center;
}
.closeaddress span a {
  color: #f00;
} */
.van-popup{
   width: 100%;
   /* height: 4rem; */
   text-align: center;
   overflow-y: 0;
}
/* .el-button--text{
  color: #000;
  margin-right: 0.4rem;
}
.el-message-box{
  position: absolute;
  left: 0;
  top:0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 80%;
  height: 4rem;
}
.el-message-box__btns{
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.el-button--primary{
  border-color: #ccc;
}
.el-button{
  width: 45%;
  border: none;
}
.el-button:focus, .el-button:hover{
  background: #fff;
  color: #606266;
}
.el-button--primary{
  background: #fff;
  color: #606266;
}
.el-dialog{
  border-radius: 0.3rem;
}
.addressfooter {
  color: #ff525a;
  text-align: center;
  line-height: 1rem;
  font-size: 0.5rem;
  box-shadow: 0 0 0.5rem #ccc;
  width: 100%;
  position: fixed;
  bottom: 0;
} */
 </style>
