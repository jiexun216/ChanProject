<template>
<div>
            <div class="orderdetop">
                <i class="back backs" @click="$router.back(-1)"></i>     
                <!-- <span class="orderaddress">{{$t(editoradd)}}</span> -->
                <span class="myorder"></span>
            </div>   
            <!-- 地址编辑列表  -->

              <my-form  :formList="formList" 
                        :defaultData="defaultData" 
                        :regList="regList" 
                        ></my-form>
            <!-- <van-address-edit
                :area-list="areaList"
                show-set-default
                show-search-result
                :address-info="formData"
                :tel-validator="validaphone"
                :validator="() => ''"
                @save="onSave"
              /> -->
              <!-- <p style="margin:0 0.4rem;color:#f00;">{{$t(deaddress)}}</p>  -->
</div>        
</template>

<script>
import Vue from 'vue'
import { Toast } from "mint-ui";
import { AddressEdit } from "vant";
import areaList from "@/common/js/area.js";
import { getAddressInfo,saveAddressInfo } from "@/api/address/index.js";
import { Dialog } from 'vant';
import { Picker } from 'vant';
import MyForm from './form'
Vue.use(Picker);
Vue.use(Dialog);
Vue.use(AddressEdit);
export default {
  components: {
    "van-address-edit": AddressEdit,
     MyForm
  },
  data() {
    var reg = /^\d*$/
    var  validatephone = function(value){
      if(!value){
        this.$toast(this.$t("common.placeholder.userphone"))
        return true
      }else if(reg.test(value)){
        return true
      } else {
        this.$toast(this.$t("common.correctphone"))
        return true
      }
    }
    return {
      loading: false,
      areaList,
      editoradd: 'common.editoradd',
      deaddress: 'common.deaddress',
      formList: [
        {label: this.$t("common.addname"), placeholder: this.$t("common.addinputname"), alias: 'name', type: 'text'},
        {label: this.$t("common.addphone"), placeholder: this.$t("common.addinputphone"), alias: 'mobile', type: 'text'},
        {label: this.$t("common.adderea"), placeholder: this.$t("common.addinputerea"), alias: 'areaText', type: 'selectArea'},
        {label: this.$t("common.adddetail"), placeholder: this.$t("common.addinputdetail"), alias: 'addressDetail', type: 'text'},
        {label: this.$t("common.addgoodsdetail"), placeholder: '', alias: 'isDefault', type: 'selectCell'}
      ],
      regList: ['name', 'mobile', 'areaCode', 'addressDetail', 'postalCode'],
      defaultData: {name: '', mobile: '', country: '', province: '', city: '', county: '', areaCode: '', postalCode: '', addressDetail: '', isDefault: true},
      formData: {
        id: 0,
        name: "",
        tel: "",
        province: "",
        city: "",
        county: "",
        addressDetail: "",
        areaCode: "",
        isDefault: true,
      },
      tel: '',
      // validaphone: validatephone
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
    // 正则验证处理
    getErrorMessage (key) {
      const value = String(this.data[key] || '').trim()
      if (this.validator) {
        const message = this.validator(key, value)
        if (message) {
          return message
        }
      }
      switch (key) {
        case 'name':
          return value ? '' : this.$t("common.addinputname")
        case 'mobile': 
          return mobileReg(value) ? '' : this.$t("common.addcorrectphone")
        case 'areaCode':
          return value ? '' : this.$t("common.addinputerea")
        case 'addressDetail':
          return value ? '' : this.$t("common.addinputdetail")
      }
    },
    // 添加、修改地址保存
    onSave(content) {
      const isValid = items.every(item => {
          const msg = this.getErrorMessage(item)    //对value进行验证
          if (msg) {
            this.errorInfo[item] = true
            this.$toast(msg)
            this.saveAddressInfo();
          }
        return !msg 
      })
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
          this.$toast(res.data.message ? res.data.message : this.$t("common.failuredcaozuo"))
          if (res.data.status == 0) {
           
              this.$router.push({
                // name: 'addressList',
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
            this.$toast(res.data.message ? res.data.message : this.$t("common.failuredcaozuo"))
            this.$router.push({name: res.data.data.url})
          } else {
            Toast({
              message: res.data.message
                ? res.data.message
                : this.$t("common.addresswaiting"),
              duration: 1500
            });
          }
        })
        .catch(() => {
          Toast({
            message: this.$t("common.addresswaiting"),
            duration: 1500
          });
        });
    },
    // 添加地址链接 zhangjie 0919
    addAddressHandle () {
      this.$router.push({
        name:'',
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
    
    }
   
}
</script>

<style>
.orderdetop {
  font-size: 0.3rem;
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
.van-area{
    border: 1px solid #eee;
    z-index: 10000;
    background: #fff;
}
.addressedit{
    border-top:1px solid #eee;
    border-bottom:1px solid #eee;
    height: 3rem;
    display: flex;
    justify-content:space-between;
    align-items: center;
}
.addressname{
  border-bottom:1px solid #eee;
  width:100%;
  border:1px solid #f00;
}

.addressspan {
  width:20%;
  margin:0.3rem;
  display: inline-block;
}
 </style>
