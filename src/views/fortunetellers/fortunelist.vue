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
                    <button class="butstyle" @click="$router.push({ name: 'contentfortune', query: { fortuneId: perlists.fortuneId }})">{{$t(lookresult)}}</button>
                    <button class="butstyle butcolor" @click="handleDelete(perlists.fortuneId)">{{$t(cancel)}}</button>
                 </div>
                 </div>
             </div>
        </div> 
        <Add :show="show"  @changeYincang="changeYincang"></Add>
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
             lookresult: 'common.lookresult',
             cancel: 'common.deletes',
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
         changeYincang(boolval) {
             this.show  = boolval
         },
         getData () {
             fortunetellers ().then (res => {
                 if (res.data.status == 99) {
                    this.$toast(res.data.message ? res.data.message : this.$t("common.failuredcaozuo"))
                    this.$router.push({name: res.data.data.url})
                }
                 this.perlist  = res.data.data.list
             }) 
         },
         // 删除算命记录
         handleDelete (fortuneId) {
             Dialog.confirm({
                    title: this.$t("common.delecon"),
                    message: this.$t("common.deleteconfirmation")
                }).then(() => {
            deleteFortune(fortuneId)
            .then(res => {
                if (res.data.status == 0) {
                this.$toast(this.$t("common.deletesuccess"));
                } else {
                this.$toast(res.data.message ? res.data.message : this.$t("common.eletefailure"));
                }
                this.getData();
            })
            .catch(() => {
                this.$toast(this.$t("common.eletefailure")); 
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
[v-cloak] {
  display: none !important;
}
.navitembor{
    /* border: 1px solid #f00; */
}
</style>
