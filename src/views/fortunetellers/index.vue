<template>
    <div class="navitem">
        <van-nav-bar
            :title="$t(sm)"
            left-arrow
            @click-left="onClickLeft">
         <!-- <van-icon name="search" slot="right" /> -->
         <van-icon name='add-o' slot="right" @click="showDialog" />
        </van-nav-bar>
        <Addfortun v-if="perlist.length == 0"></Addfortun>
        <div class="suanming">
             <div v-for="perlists in perlist" :key="perlists.fortuneId" >
                 <div class="personalstyle">
                    <div class="personaldata">
                      <h3>{{perlists.fullName}}</h3>
                      <span >{{perlists.sex}} | {{perlists.birthDate}} | {{perlists.birthTime}} | {{perlists.birthAddress}}</span>
                 </div>
                 <div class="buttom">
                    <button class="butstyle" @click="$router.push({ name: 'contentfortune', query: { fortuneId: perlists.fortuneId }})">查看结果</button>
                    <button class="butstyle butcolor" @click="handleDelete(perlists.fortuneId)">删除</button>
                 </div>
                 </div>
             </div>
        </div>        
        <Add :show="show"  @changeYincang="changeYincang"></Add>
        <!-- <ContentFortune ></ContentFortune> -->
    </div>
</template>
<script>
import Vue from 'vue'
import { Icon,Dialog } from 'vant';
import Addfortun from '@/views/fortunetellers/addfortun'
import Add from '@/views/fortunetellers/add'
import ContentFortune from '@/views/fortunetellers/contentfortune'
import { fortunetellers,addfortune,deleteFortune } from '@/api/fortunetellers/index.js'
Vue.use(Icon);
export default {
    data () {
         return {
             sm: 'common.sm',
             perlist: [],
             fortuneshow: false,
             show: false,
         }
    },
    methods: {
        onClickLeft () {
            this.$router.push({path: '/Index'})
         }, 
         showDialog () {
             this.show  = true
         },
         //添加算命隐藏
         changeYincang(boolval) {
             this.show  = boolval
         },
         //请求数据
         getData () {
             fortunetellers ().then (res => {
                 if (res.data.status == 99) {
                    this.$toast(res.data.message ? res.data.message : '操作失败')
                    this.$router.push({name: res.data.data.url})
                }
                 this.perlist  = res.data.data.list
             }) 
         },
         // 删除算命记录
         handleDelete (fortuneId) {
             Dialog.confirm({
                    title: "删除确认",
                    message: "此操作不可逆,确认要删除该记录吗?"
                }).then(() => {
            deleteFortune(fortuneId)
            .then(res => {
                if (res.data.status == 0) {
                this.$toast("记录删除成功");
                } else {
                this.$toast(res.data.message ? res.data.message : "记录删除失败");
                }
                this.getData();
            })
            .catch(() => {
                this.$toast("记录删除失败"); 
            });
      });
         }
    },
    created () {
        this.getData();
       
    },
    components: {
       Addfortun,
       ContentFortune,
       Add,
    }
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
.suanming{
    border: 1px solid #ccc;
}
.buttom{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 0.5rem;
    margin-bottom: 0.3rem;
}
.butstyle{
    font-size: 0.35rem;
    border: 1px solid #000;
    border-radius: 0.4rem;
    padding: 0.1rem 0.3rem;
}
.butcolor{
    color: #f00;
    border: 1px solid #f00;
}
.personalstyle{
    border-bottom: 0.1rem solid #ccc;
}
.personaldata{
    margin: 0.4rem;
}
.personaldata h3{
    font-size: 0.4rem;
}
.personaldata span{
    color: #999999;
    font-size: 0.35rem;
    line-height: 1rem;
}
</style>

