<template>
    <div class="navitem">
        <van-nav-bar
            title="算命"
            left-arrow
            @click-left="onClickLeft"
        >
         <van-icon name="search" slot="right" />
         <van-icon name='add-o' slot="right"/>
        </van-nav-bar>
        <div class="fortunecontent">
             <div class="fortunecon">
                 <img src="../../assets/img/25.png" class="fortuneimg">
                <p class="fortunep">你还未添加生辰八字</p>
                <button class="fortunebutton" @click="showAdd">添加</button>
             </div>
             <div>
                 <van-dialog
                    v-model="show"
                    title="生辰八字"
                    show-cancel-button
                    :before-close="beforeClose"
                    >
                    <div class="birth">
                        <span class="birthmd">
                            姓名
                        </span>
                         <input type="text" placeholder="请输入姓名">
                    </div>
                     <van-radio-group v-model="radio" title="性别">
                         <span class="birthmd">
                            性别
                        </span>
                        <van-radio name="1">男</van-radio>
                        <van-radio name="2">女</van-radio>
                    </van-radio-group>
                    <div class="birth">
                        <span class="birthmd">
                            {{birth.one}}
                        </span>
                        <span class="birthchoose" @click="birthchoose" v-html="time"></span>
                    </div>
                    <div class="birth">
                        <span class="birthmd">
                            {{birth.two}}
                        </span>
                        <span class="birthchoose" @click="timechoose" v-html="times"></span>
                    </div>
                   <div class="birth">
                        <span class="birthmd">
                            {{birth.three}}
                        </span>
                        <span class="birthchoose" @click="showaddress">请选择</span>
                    </div>
                    </van-dialog>                
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
                    <van-datetime-picker
                            v-model="currentDatetime"
                            type="time"  
                            v-if="showTime"
                            @confirm= "onConfirm"
                            />
                    <van-area :area-list="areaList"
                              v-if="showAddress"
                              @cancel= "onCancel"
                              @confirm="onConfirm"
                              @change="onChange"
                              />    
                      
             </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Vue from 'vue'
import { NavBar, Toast } from 'vant';
import { Icon } from 'vant';
import Footer from '@/components/footer';
import { Dialog } from 'vant';
import { Field } from 'vant';
import { RadioGroup, Radio } from 'vant';
import { DatetimePicker } from 'vant';
import { Area } from 'vant';
import { AddressEdit } from "vant";
import areaList from "@/common/js/area.js";
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
     data () {
        return {
            show: false,
            username: '',
            sex:'',
            radio: '1',
            currentDate: new Date(),
            currentDatetime: '12:00',
            minDate: new Date(1990),
            maxDate: new Date(2119, 10, 1),
            showcurrentDate: false,
            showTime: false,
            areaList,
            showAddress: false,
            getValues: [],
            datavalue: '',
            dataTime: {},
            time: '请选择',
            times:'请选择',
            birth: {
                one: '出生年月',
                two: '出生时辰',
                three: '出生地'
            }
        }
     },
      components: {
        Footer,
        "van-address-edit": AddressEdit
      },
     methods: {
         onClickLeft () {
            this.$router.push({path: '/Index'})
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
            } else {
                done();
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
        onConfirm () {
            this.showcurrentDate = false
            this.showTime = false
            this.showAddress = false
            this.time = this.datavalue;
        },
        onChange(picker,value,index) {
               this.datavalue = picker.getValues().join('-');
               this.dataTime = picker.getValues()
            console.log(this.datavalue)
        },
    },
    
     }
</script>
<style>
.navitem{
    position: relative;
}
.van-nav-bar .van-icon{
    color: #999999;
}
.van-icon-search{
    font-weight: bold;
    font-size: 0.5rem;
}
.van-icon-add-o{
    font-size: 0.6rem;
    margin-left: 0.4rem;
    font-weight: bold;
}
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

