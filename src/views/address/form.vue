<template>
  <div class="addresstop">
    <div v-for="(item, index) in formList" :key="index">
      <!-- 姓名、号码 详细地址 -->
      <van-field
        v-if="item.type === 'text'"
        v-model="data[item.alias]"
        clearable
        :label="item.label"
        :placeholder="item.placeholder"
        :error="errorInfo[item.alias]"
        @focus="onFocus(item.alias)"
        :address-info="formData"
         class="nameandphone"
         style="font-size:12px"/>
      <!-- 所在区域 -->
      <van-field
        readonly
        v-if="item.type === 'selectArea'"
        :label="item.label"
        :placeholder="item.placeholder"
        :value="areaText"
        @click="showAreaPopup = true"
        class="nameandphone" 
        style="font-size:12px"/>
      <!-- 选择默认地址 -->
      <van-switch-cell
        v-if="item.type === 'selectCell'"
        v-model="data[item.alias]"
        :title="item.label"
        @change="$emit('change-default', $event)"
        style="font-size:12px"/>
    </div>
    <van-button block @click="onSave" type="danger" class="save">{{$t(addsave)}}</van-button>
    <!-- 省市区 -->
    <van-popup v-model="showAreaPopup" position="bottom" :lazy-render="false" get-container="body" style="font-size:12px">
      <van-area ref="area" :value="data.areaCode" :area-list="areaList" @confirm="onAreaConfirm" @cancel="showAreaPopup = false"/>
    </van-popup>
  </div>
</template>

<script>
import Vue from 'vue'
import City from '@/common/js/area.js'
import {mobileReg, zipCodeReg} from './mobile'
import { SwitchCell } from 'vant';
import { Button } from 'vant';
import { Popup, Area } from 'vant';
import { getAddressInfo,saveAddressInfo } from "@/api/address/index.js";
Vue.use(Popup);
Vue.use(Button).use(Area)
Vue.use(SwitchCell);

export default {
  props: ['validator', 'formList', 'defaultData', 'regList', 'maxSize'],
  data () {
    return {
      data: {},
      value: '',
      addressInfo: this.defaultData,
      showAreaPopup: false,
      detailFocused: false,
      areaList: City,
      errorInfo: {
        mobile: false,
        name: false,
        // postalCode: false,
        addressDetail: false
      },
      addsave: 'common.addsave',
      //  regList: ['name', 'mobile', 'areaCode', 'addressDetail', 'postalCode'],
      //  defaultData: {name: '', mobile: '', country: '', province: '', city: '', county: '', areaCode: '', postalCode: '', addressDetail: '', isDefault: true},
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
    }
  },
  computed: {
    // 获取省市区
    areaText () {
      const {country, province, city, county, areaCode} = this.data
      if (areaCode) {
        const arr = [country, province, city, county]
        if (province && province === city) {
          arr.splice(1, 1)
        }
        return arr.filter(text => text).join('/')
      }
      return ''
    },
    imgList() {
      return this.value && !this.paddingImg ? [this.value] : []
    }
  },
  watch: {
    addressInfo: {
      handler (val) {
        this.data = {
          ...this.addressInfo,
          ...val
        }
      },
      deep: true,
      immediate: true
    },
    areaList () {
      this.setAreaCode(this.data.areaCode)
      this.getArea()
    }
  },
  methods: {
    onFocus (key) {
      this.errorInfo[key] = false
      this.detailFocused = key === 'addressDetail'
      this.$emit('focus', key)
    },
    onChangeDetail (val) {
      this.data.addressDetail = val
      this.$emit('change-detail', val)
    },
    // 区域选择
    onAreaConfirm (values) {
      this.showAreaPopup = false    //关闭地址弹出框
      this.assignAreaValues()       //调用地址弹窗框
      this.$emit('change-area', values)
    },
    assignAreaValues (values) {     //作用  将选中的地址添加到input中
      const { area } = this.$refs
      if (area) {
        const detail = area.getArea()       
        detail.areaCode = detail.code
        delete detail.code
        Object.assign(this.data, detail)
      }
    },
    getArea () {
      return this.$refs.area ? this.$refs.area.getValues() : []    //获取area的值
    },
    setAreaCode (code) {
      this.data.areaCode = code || ''
      code && this.$nextTick(this.assignAreaValues)
    },
    setAddressDetail (value) {
      this.data.addressDetail = value
    },
    // 提交
    onSave () {
      const items = this.regList
      const isValid = items.every(item => {
        const msg = this.getErrorMessage(item)    //对value进行验证
        if (msg) {
          this.errorInfo[item] = true
          this.$toast(msg)
        }
        return !msg 
      })
      if (isValid) {
        this.$emit('save', this.data)  
      }
      saveAddressInfo(    //请求接口传值
        '',
        this.data.name,
        this.data.mobile,
        this.data.province,
        this.data.city,
        this.data.county,
        this.data.addressDetail,
        this.data.areaCode,
        this.data.isDefault
      ).then(res => {
        this.$toast(res.data.message ? res.data.message : this.$t('common.failuredcaozuo'))
        if(res.data.status == 0){
          this.$router.push({
            name: 'addressList',
            query: {
                // buyType: this.$route.query.buyType,
                // cartIds: this.$router.query.cartIds,
                // addressId: this.$route.query.addressId,
                // goodsId: this.$router.query.goodsId,
                // skuId: this.$route.query.skuId,
                // goodsQuantity: this.$router.query.goodsQuantity,   
            }
          })
        }
      })
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
     // 添加地址链接 zhangjie 0919
    addAddressHandle () {
      this.$router.push({
        name:'s',
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
  }
}
</script>

<style >
.addresstop{
  margin:0.4rem;
  font-size:0.3rem !important;
}
  .nameandphone{
     border-bottom:1px solid #ccc;   
  }
  .save{
    font-size:0.35rem;
    width:100%;
    height:1rem;
    line-height:1rem;
    text-align:center;
    display:inline-block;
    margin-top:0.4rem;
    background:#f00;
    color: #fff;
    border-radius:0.1rem;

  }
</style>