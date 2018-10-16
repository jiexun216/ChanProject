<template>
    <div class="fortunecontent">
             <div class="fortunecon">
                 <img src="../../assets/img/25.png" class="fortuneimg">
                <p class="fortunep">{{$t(nobirth)}}</p>
                <button class="fortunebutton" @click="showAdd">{{$t(add)}}</button>
             </div>
             <div>
                 <van-dialog
                    v-model="show"
                    :title="$t(bazi)"
                    show-cancel-button
                    :before-close="beforeClose"
                    :save="save"
                    >
                    <div class="birth">
                        <span class="birthmd">
                            {{$t(name)}}
                        </span>
                         <input type="text" v-model="save.fullName" :placeholder="$t(username)">
                    </div>
                     <van-radio-group v-model="radio" title="性别">
                         <span class="birthmd">
                            {{$t(gender)}}
                        </span>
                            <van-radio name="1" @click="one">{{$t(nan)}}</van-radio>
                            <van-radio name="2" @click="one">{{$t(nv)}}</van-radio>   
                    </van-radio-group>
                     <!-- 出生年月              -->
                    <div class="birth" >
                        <span class="birthmd">
                            {{$t(birthyear)}}
                        </span>
                        <span class="birthchoose"   @click="birthchoose" v-html="time"></span>
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
                           />
                    <!-- 出生日期 -->
                    <van-datetime-picker
                            v-model="currentDatetime"
                            type="time"  
                            v-if="showTime"
                            @cancel="onCancel"
                            @confirm="onConfirmt"
                            @change="onChanget"
                            />
                    <!-- 出生地 -->
                    <van-area :area-list="areaList"
                              v-if="showAddress"
                              @cancel= "onCancel"
                              @confirm="onConfirmth"
                              @change="onChangeth"
                              />    
                      
             </div>
             <Footer></Footer>
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
import {addfortune } from '@/api/fortunetellers/index.js'
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
        required: false
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
            radio: '1',
            currentDate: new Date(),
            currentDatetime: '12:00',
            minDate: new Date(1990),
            maxDate: new Date(2119, 10, 1),
            showcurrentDate: false,
            showTime: false,
            formatter:'-',
            areaList,
            showAddress: false,
            getValues: [],
            datavalue: '',
            dataTime: {},
            time: '请选择',
            times:'请选择',
            timeth: '请选择',
            save: {
                fullName: '',
                sex: '',
                birthDate: '',
                birthTime: '',
                birthAddress: '',
            }
        }
     },
      components: {
          Footer,
        "van-address-edit": AddressEdit
      },
     methods: {
         getData () {
            fortunetellers () .then(res =>{
                console.log(res)
            })
         },
         onsaveadd () {
            
         },
         
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
                console.log(this.save);return false;
             addfortune (
                 this.save.fullName,
                 this.save.sex,
                 this.save.birthDate,
                 this.save.birthTime,
                 this.save.birthAddress,
             ).then(res =>{
                  this.$toast(res.data.message ? res.data.message : '操作失败')
                  if(res.data.status = 0){
                      this.$router.push({
                          name: 'fortuneTellers',
                          query: {
                              fullName: this.$route.query.fullName,
                              sex: this.$route.query.sex,
                              birthDate: this.$route.query.birthDate,
                              birthTime: this.$route.query.birthTime,
                              birthAddress: this.$route.query.birthAddress,
                          }
                      })
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
            // console.log(value);return false;
            this.time = this.datavalue
             this.save.birthDate = this.time
        },
        one(name) {
            this.save.sex = this.name
            console.log(this.name)

        },
        onChange(picker,value,index) {
               this.datavalue = picker.getValues().join('-');
               this.dataTime = picker.getValues()
            console.log(this.datavalue)
        },
        onConfirmt () {
            this.showcurrentDate = false
            this.showTime = false
            this.showAddress = false
            this.times = this.datavalue;
            this.save.birthTime = this.times;
        },
        onChanget(picker,value,index) {
               this.datavalue = picker.getValues().join('-');
            console.log(this.datavalue)
        },
        onConfirmth () {
            this.showcurrentDate = false
            this.showTime = false
            this.showAddress = false
            this.timeth = this.datavalue;
            this.save.birthAddress = this.timeth
        },
        // 控制出生地确认的按钮
        onChangeth(picker,value,index) {
               this.datavalue = picker.getValues()[0].name + picker.getValues()[1].name + picker.getValues()[2].name
        },
    },
    created () {
        console.log(this.show)
    }
    
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
.van-picker{
    z-index: 3000;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5rem;
}
.van-radio{
    margin-right: 0.4rem;
}

</style>
