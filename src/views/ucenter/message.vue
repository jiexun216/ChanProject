<template>
   <div>
      <div class="orderdetop">
            <router-link to="/">
                <i class="back backs"></i>     
            </router-link>
            <span >{{$t(messagecenter)}}</span>
            <span class="myorder">
                <!-- <span><i class="back backcoups" @click="showinfo"></i></span> -->
            </span>
        </div>  
        <div class="message">  
            <div class="usecoupons">
                    <div v-for="val in cate" :key="val.cateId"  @click="handleSwitchTab(val.cateId)"
                     class="useitembg" :class="{'useitembgs':cateId===val.cateId}">
                        <span>{{val.title}}</span>
                    </div>
                </div>
        </div>
        <div v-for="(item,index) in list" :key="index" class="messtime">
                 <div>
                    <h3>{{item.create_time}}</h3> 
                 </div>
                 <div style="margin-top:0.3rem;">
                     {{item.description}}
                 </div>
         </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { Tab, Tabs } from 'vant';
import announcement from "@/components/message/announcement";
import luck from '@/components/message/luck'
import mynews from '@/components/message/mynews'
import { messageList} from "@/api/ucenter/index.js"
Vue.use(Tab).use(Tabs);
    export default {
        data () {
            return {
                messagecenter: 'common.messagecenter',
                AllMarkedRead: 'common.AllMarkedRead',
                AkeyEmpty: 'common.AkeyEmpty',
                cancel: 'common.cancel',
                emptyAll: 'common.emptyAll',
                carefulEmpty: 'common.carefulEmpty',
                determine: 'common.determine',
                changeRed:'announcement',
                currentView: 'announcement',
                list: [],
                cate: [],
                cateId:1,
                opertionshow: false, 
                clearshow: false,
                annshow: true, 
            }
        },
        created () {
             this.getMessage()
        },
        methods: {
            getMessage () {
                messageList(this.cateId,1).then(res => {
                   this.list = res.data.data.list;
                   this.cate= res.data.data.cate;
                   console.log(this.list)
                   if (this.list.length === 0) {
                       this.annshow = false
                   }
             }).catch(err => err) 
            },
            toggleTabs (tabText,index) {
                this.currentView = index;
                this.changeRed = index;
            },
            opertion () {
                this.opertionshow = true;
            },
            operhide () {
                this.opertionshow = false;
            },
            dermine () {
                this.opertionshow = false;
                this.clearshow = false;
                this.annshow = false;
                //一键清空操作，未更改地址(更改地址后完成操作)
                this.$postData('ucenter/myMessage', {
                    data: {
                        messageId: 1
                    }
                }).then(res => {
                   this.getMessage()
             }).catch(err => err) 
            },
            dercencal () {
                this.clearshow = false;
            },
            keyempty () {
                this.clearshow = true;
                this.opertionshow = false;
            },
            showinfo (){
                this.opertionshow = true
            },
            handleSwitchTab(cateId) {
                this.cateId = cateId;
                this.getMessage()
            },
        },
        components: {
           announcement,
           luck,
           mynews
      },
    }
</script>

<style>
a{
    color: #000;
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
   margin-left: 0.2rem;
 }
 .backs {
   background: url(../../assets/img/42.png) no-repeat center center;
 }
 .backcoups{
     background: url(../../assets/img/49.png) no-repeat center center;
 }
 .myorder {
     margin-right: 0.4rem;
 }
 .message{
     display: flex;
     justify-content: space-around;
     align-items: center;
     line-height: 1.2rem;
     font-size: 0.45rem;
     border-bottom: 1px solid #ccc;
     font-weight: bold;
 }
 .message a{
     font-size: 0.4rem;
 }
 .meaclass{
     color: #ccc;
     font-weight: bold;
 }
 .msgbg{
     color: #ff525a;
     font-weight: bold;
 }
 .opertion{
     position:fixed;
     left: 0;
     top:0;
     width: 100%;
     height: 100%;
     z-index: 10;
     background: rgba(0,0,0,0.5);
     
 }
 .operbtm{
     position: absolute;
     bottom: 0;
     left: 0;
     width: 100%;
     background: #fff;
     text-align: center;
     font-size: 0.4rem;
     line-height: 1.3rem;
 }
.operbtmp{
    border-top: 1px solid #ccc;
    color: #ccc;
}
.clear{
    position: absolute;
    left:0;
    right: 0;
    top:0;
    bottom:0;
    margin:auto;
    width: 7rem;
    height: 5rem;
    background: #fff;
    border-radius: 0.3rem;
    text-align: center;
}
.clearall{
    font-size: 0.4rem;
    font-weight: bold;
    margin-top: 1rem;
}
.clearno{
    color: #ccc;
    line-height: 1rem;
}
.cender{
    position: absolute;
    bottom: 0;
    width: 100%;
    font-size: 0.4rem;
    line-height: 1.2rem;
    border-top: 1px solid #ccc;
    display: flex;
}
.cender span{
    width: 50%;
    text-align: center;
}
.cender .dermine{
    color: #ff525a
}
.vantabs{
    margin:0.2rem;
}
.useitembg {
  margin:0.2rem 0.4rem;
  font-size: 0.4rem;
}
.useitembgs {
  color: #f00;
}
.messtime{
    margin: 0.3rem;
    padding:0.3rem;
    box-shadow: 0px 0px 5px 5px #f5f5f5; 
}
.usecoupons{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
