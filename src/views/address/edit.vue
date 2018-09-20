<template>
<div>
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
import { Toast } from "mint-ui";
import { AddressEdit } from "vant";
import areaList from "@/common/js/area.js";
import { getAddressInfo,saveAddressInfo } from "@/api/address/index.js";
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
        isDefault: false
      },
      completeshow: false
    };
  },
  methods: {
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
    }
  },
  created() {
    this.formData.id = this.$route.query.id ? this.$route.query.id : 0;
    if (this.formData.id != 0) {
      this.getData();
    }
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
.oks {
  color: #f00;
  margin-right: 0.4rem;
}
.recipi {
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

.overlayer {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: #000;
  opacity: 0.5;
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
}
</style>
