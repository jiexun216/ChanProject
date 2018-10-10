<template>
    <div class="navitem">
        <van-nav-bar
            :title="$t(sm)"
            left-arrow
            @click-left="onClickLeft"
        >
         <van-icon name="search" slot="right" />
         <van-icon name='add-o' slot="right"/>
        </van-nav-bar>
        <Addfortun v-if="fortunelist.length ==0"></Addfortun>
        <div class="suanming">
             <div >
                 <div class="personaldata">
                      <h3>姓名</h3>
                      <span>男 | 1989.01.01 | 卯时 | 浙江省西湖区</span>
                 </div>
                 <div class="buttom">
                    <button class="butstyle">查看结果</button>
                    <button class="butstyle butcolor">删除</button>
                 </div>
             </div>
        </div>
        
    </div>
</template>
<script>
import Vue from 'vue'
import { Icon } from 'vant';
import Addfortun from '@/views/fortunetellers/addfortun'
import { fortunetellers,addfortune } from '@/api/fortunetellers/index.js'
Vue.use(Icon);
export default {
    data () {
         return {
             sm: 'common.sm',
             fortunelist: [],
             list: ''
         }
    },
    methods: {
        onClickLeft () {
            this.$router.push({path: '/Index'})
         },
         getData () {
             fortunetellers ().then (res => {
                 if (res.data.status == 99) {
                    this.$toast(res.data.message ? res.data.message : '操作失败')
                    this.$router.push({name: res.data.data.url})
                }
                 this.listData = res.data.data.list;
                 console.log(this.listData)
             }) 
         },
                      
         created() {
            this.getData();
        }
    },
    components: {
       Addfortun
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
    font-size: 0.4rem;
    border: 1px solid #000;
    border-radius: 0.4rem;
    padding: 0.1rem 0.35rem;
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

