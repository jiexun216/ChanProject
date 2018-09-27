<template>
   <div>
      <div class="orderdetop">
            <router-link to="/">
                <i class="back backs"></i>     
            </router-link>
            <span >{{messagecenter}}</span>
            <span class="myorder">
                <span><i class="back backcoups" ></i></span>
            </span>
        </div>  
        <div class="message">  
            <nav v-for="(item, index) in tabText" :key="index">        
    　　　　　　<a href="javascript:void(0);" @click="toggleTabs(item.text,item.keys);"
                  :class="{ msgbg:changeRed == item.keys}">
                   {{item.text}}</a>
    　　　　</nav>
        </div>
     <announcement :is='currentView' keep-alive class="ann" v-if="annshow"></announcement>
     <div class="opertion" @touchmove.prevent v-if="opertionshow">
         <div class="operbtm">
             <p>{{AllMarkedRead}}</p>
             <p @click="keyempty">{{AkeyEmpty}}</p> 
              <!-- 这个是一键清空 -->
             <p class="operbtmp" @click="operhide">{{cancel}}</p>
         </div>
     </div>
     <div class="opertion" @touchmove.prevent v-if="clearshow">
          <div class="clear">
               <p class="clearall">{{emptyAll}}</p>
               <p class="clearno">{{carefulEmpty}}</p>
               <div class="cender">
                   <span @click="dercencal">{{cancel}}</span>
                   <span class="dermine" @click="dermine">{{determine}}</span>
                     <!-- 点击这个确定消息隐藏 -->
               </div>
          </div>
     </div>
   </div>    
</template>

<script>
import Vue from 'vue'
import announcement from "@/components/message/announcement";
import luck from '@/components/message/luck'
import mynews from '@/components/message/mynews'
    export default {
        data () {
            return {
                messagecenter: '消息中心',
                AllMarkedRead: '全部标记为已读',
                AkeyEmpty: '一键清空',
                cancel: '取消',
                emptyAll: '是否清空所有消息',
                carefulEmpty: '清空后无法恢复，请谨慎处理',
                determine: '确定',
                changeRed:'announcement',
                currentView: 'announcement',
                tabText: [
                    {
                        keys: 'announcement',
                        text: '平台公告',
                    },
                    {
                        keys: 'luck',
                        text: '运势资讯',
                    },
                    {
                        keys: 'mynews',
                        text: '我的消息',
                    },
                ],
                opertionshow: false, 
                clearshow: false,
                annshow: true,   //这个是消息的true
            }
        },
        created () {
             this.getMessage()
        },
        methods: {
            getMessage () {
                this.$getData('ucenter/myMessage').then(res => {
                   this.list = res.data.data.list;
                //    console.log(this.list)
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
            }
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
     font-size: 0.5rem;
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
    font-size: 0.5rem;
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
    font-size: 0.6rem;
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
</style>
