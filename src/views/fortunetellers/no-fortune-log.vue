<template>
    <div class="navitem">
        <van-nav-bar
            :title="$t(sm)"
            left-arrow
            @click-left="onClickLeft"
        >
         <!-- <van-icon name="search" slot="right" />
         <van-icon name='add-o' slot="right" /> -->
        </van-nav-bar>
        <Addfortun></Addfortun>
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
             show: true,
         }
    },
    methods: {
        onClickLeft () {
            this.$router.push({path: '/Index'})
         }, 
         //添加算命隐藏
         changeYincang() {
             this.show  = true
         },
    },
    components: {
       Addfortun,
       ContentFortune,
       Add
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
    border-bottom: 0.2rem solid #ccc;
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

