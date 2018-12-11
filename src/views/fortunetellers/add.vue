<template>
    <div class="fortunecontent">
            <div>
                 <van-dialog
                    v-model="show"
                    :title="$t(bazi)"
                    show-cancel-button
                    :before-close="beforeClose"
                    :save="save"
                    :confirm-button-text="confirmButtonText"
                    :cancel-button-text="cancelButtonText"
                    >
                        <div class="birth">
                            <span class="birthmd">
                                {{$t(name)}}
                            </span>
                            <input type="text" v-model="save.fullName" :placeholder="$t(username)">
                        </div>
                        <!-- 性别 -->
                        <van-radio-group v-model="radioSex" title="性别" @change="handleSex">
                            <span class="birthmd">
                                {{$t(gender)}}
                            </span>
                                <van-radio name="男" checked>{{$t(nan)}}</van-radio>
                                <van-radio name="女">{{$t(nv)}}</van-radio>  
                        </van-radio-group>
                        <!-- 出生年月              -->
                        <div class="birth" >
                            <span class="birthmd">
                                {{$t(birthyear)}}
                            </span>
                            <span class="birthchoose" @click="birthchoose" v-html="time"></span>
                        </div>
                        <!-- 出生日期 -->
                        <div class="birth">
                            <span class="birthmd">
                                {{$t(birthtime)}}
                            </span>
                            <span class="birthchoose" @click="timechoose" v-html="times"></span>
                        </div>
                        <!-- 出生地 -->
                        <div class="birth">
                            <span class="birthmd">
                                {{$t(birthaddress)}}
                            </span>
                            <span class="birthchoose" @click="showaddress" v-html="timeth"></span>
                        </div>
                        <!-- 外国人填写 -->
                    </van-dialog>   
                    <!-- 出生年月              -->
                    <van-datetime-picker
                            v-model="currentDate"
                            type="date"
                            :min-date="minDate"
                            :max-date="maxDate" 
                            v-if="showcurrentDate"
                            @cancel="onCancel"
                            @confirm="onConfirm"
                            @change="onChange"
                            style="z-index:100000;position:fixed;bottom:0;top:auto;width:100%;"
                           />
                    <!-- 出生日期 -->
                    <van-datetime-picker
                            v-model="currentDatetime"
                            type="time"
                            v-if="showTime"
                            @cancel="onCancel"
                            @confirm="onConfirmt"
                            @change="onChanget"
                            style="z-index:100000;position:fixed;bottom:0;top:auto;width:100%;"
                            />
                    <!-- 出生地 -->
                    <van-area :area-list="areaList"
                              v-if="showAddress"
                              @cancel= "onCancel"
                              @confirm="onConfirmth"
                              @change="onChangeth"
                              style="z-index:100000;position:fixed;bottom:0;top:auto;width:100%;"
                              />
             </div>
        </div>
</template>
<script>
import Vue from 'vue'
import { NavBar, Toast } from 'vant';
import { Icon } from 'vant';
import { Dialog } from 'vant';
import { Field } from 'vant';
import { RadioGroup, Radio } from 'vant';
import Footer from '@/components/footer';
import { DatetimePicker } from 'vant';
import { Area } from 'vant';
import { AddressEdit } from "vant";
import areaList from "@/common/js/area.js";
import {addfortune, fortunetellers } from '@/api/fortunetellers/index.js'
import utils from '@/utils'
Vue.use(AddressEdit);
Vue.use(Area);
Vue.use(DatetimePicker);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Field);
Vue.use(Dialog);
Vue.use(Icon);
Vue.use(NavBar);
 export default {
     props: {
        show: {
        type: Boolean,
        required: !0
      },
     },
     watch: {
         show: function (val, oldVal) {
             console.log('new: %s, old: %s', val, oldVal)
         },
     },
     data () {
        return {
            nobirth: 'common.nobirth',
            add: 'common.add',  
            bazi: 'common.bazi',
            name: 'common.name',
            gender: 'common.gender',
            nan: 'common.nan',
            nv: 'common.nv',
            birthyear: 'common.birthyear',
            birthtime: 'common.birthtime',
            birthaddress: 'common.birthaddress',
            username:'common.placeholder.username',
            show: false,
            radioSex: '男',
            currentDate: new Date(),
            currentDatetime: '00:00',
            minDate: new Date(1900, 10, 1),
            maxDate: new Date(2050, 10, 1),
            showcurrentDate: false,
            showTime: false,
            formatter:'-',
            areaList,
            showAddress: false,
            getValues: [],
            datavalue: '',
            dataTime: {},
            time: this.$t("common.fortime"),
            times:this.$t("common.fortimes"),
            timeth: this.$t("common.fortimeth"),
            save: {
                fullName: '',
                sex: '男',
                birthDate: '',
                birthTime: '',
                birthAddress: '',
            },
            cancelButtonText: this.$t("common.cancelButtonText"),
            confirmButtonText:this.$t("common.confirmButtonText")
        }
     },
      components: {
          Footer,
          "van-address-edit": AddressEdit
      },
     methods: {
         showAdd() {
             this.show = true;
         },
         //年月日显示
         birthchoose () {
              this.showcurrentDate = true
              this.showTime = false
              this.showAddress = false
         },
         //时间显示
         timechoose () {
              this.showTime = true
              this.showcurrentDate = false
              this.showAddress = false
         },
         //省市地区选择
        showaddress() {
             this.showAddress = true
             this.showTime = false
             this.showcurrentDate = false
        },
        //控制弹窗 取消和确认按钮
         beforeClose(action, done) {
            if (action === 'confirm') {
                setTimeout(done,100);
             addfortune (
                 this.save.fullName,
                 this.save.sex,
                 this.save.birthDate,
                 this.save.birthTime,
                 this.save.birthAddress,
             ).then(res =>{
                  this.$toast(res.data.message ? res.data.message : this.$t("common.failuredcaozuo"))
                  this.$router.push({path: '/fortunetellers/index'})
                  if(res.data.status === 0){  
                      window.location.reload()
                  }
             }) 
            } else {
              done();
              this.$emit('changeYincang', false)
              this.showTime = false
              this.showcurrentDate = false
              this.showAddress = false
            }
        },
        handleSex (value) {
            this.save.sex = value
        },
        formatTime (time) {
            if (!time) {
                return time
            }
            let date = new Date(time)
            let Year = date.getFullYear()
            let Month = this.fillZero(date.getMonth() + 1)
            let Day = this.fillZero(date.getDate())
            let FormatTime = `${Year}-${Month}-${Day}`
            return FormatTime
        },
        fillZero (num) {
            return num < 10 ? `0${num}` : num
        },
        //年月日  时间的取消按钮
        onCancel() {
           this.showcurrentDate = false
           this.showTime = false
           this.showAddress = false
        },
        //年月日 时间的确认按钮
        onConfirm (value) {
            this.showcurrentDate = false
            this.showTime = false
            this.showAddress = false
            this.time = this.formatTime(value)
             this.save.birthDate = this.time
        },
        onChange(picker,value,index) {
               this.datavalue = picker.getValues().join('-');
               this.dataTime = picker.getValues()
        },
        //日期的确认按钮
        onConfirmt (value) {
            this.showcurrentDate = false
            this.showTime = false
            this.showAddress = false
            this.times = value;
            this.save.birthTime = this.times;
        },
        onChanget(picker,value,index) {
               this.datavalue = picker.getValues().join('-');
        },
        //这个是地址  
        onConfirmth (value) {
            this.showcurrentDate = false
            this.showTime = false
            this.showAddress = false
            this.timeth = value.map(item => {
                return item.name
            }).toString();
            this.save.birthAddress = this.timeth
        },
        // 控制出生地确认的按钮
        onChangeth(picker,value,index) {
               this.datavalue = picker.getValues()[0].name + picker.getValues()[1].name + picker.getValues()[2].name
        },
    },
    
     }
</script>

<style>
.fortunecontent{
    text-align: center;
    position: relative;
    font-size: 0.4rem;
}
.fortunecon{
    width: 9rem;
    height: 6rem;
   position:absolute;
   left: 0;
   right: 0;
   bottom: 0;
   top: 10rem;
   margin: auto;
}
.fortunep{
    color: #ccc;
    font-size: 0.4rem;
}
.fortunebutton{
    padding: 0.15rem 0.6rem;
    border: 1px solid #f00;
    border-radius: 0.5rem;
    color: #f00;
    margin-top: 0.4rem;
}
.van-radio-group{
    display: flex;
    justify-content:flex-start;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding: 0.2rem 0;
}
.van-radio .van-icon-checked{
    color: #f00;
}
.birth{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding: 0.2rem 0;
    line-height: 0.8rem;
}
.birthmd{
    width: 30%;
    text-align: right;
    margin-right: 0.5rem;
}
.birth input{
    width: 70%;
}
.birthchoose{
    color: #ccc;
    width: 70%;
    text-align:left;
}
/* .van-picker{
    z-index: 3000;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5rem;
} */
.van-radio{
    margin-right: 0.4rem;
}
.van-dialog__confirm, .van-dialog__confirm:active{
    color: #f00
}
</style>
