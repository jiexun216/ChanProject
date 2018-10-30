<template>
    <div>
        <div class="suanming" >
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
      getData () {
             fortunetellers ().then (res => {
                 if (res.data.status == 99) {
                    this.$toast(res.data.message ? res.data.message : '操作失败')
                    this.$router.push({name: res.data.data.url})
                }
                 this.perlist  = res.data.data.list
             }) 
         },
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

</style>
