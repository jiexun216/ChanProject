<template>
   <div>
      <van-tabs v-model="active" :swipe-threshold="6">
        <van-tab >
             <div slot="title">基本
             </div>
            <div class="fortunelist">
                <div class="fortunecon">
                    这个算命人的基本信息
                   askldj asdad
                </div>
            </div>
        </van-tab>
        <van-tab >
             <div slot="title">命盘
             </div>
            <div class="fortunelist">
                <div class="fortunecon">
                    这个算命人的基本信息
                   askldj asdad
                </div>
            </div>
        </van-tab>
        <van-tab >
             <div slot="title">细盘
             </div>
            <div class="fortunelist">
                <div class="fortunecon">
                    这个算命人的基本信息
                   askldj asdad
                </div>
            </div>
        </van-tab>
        <van-tab >
             <div slot="title">大运
             </div>
            <div class="fortunelist">
                <div class="fortunecon">
                    这个算命人的基本信息
                   askldj asdad
                </div>
            </div>
        </van-tab>
        <van-tab >
             <div slot="title">流年
             </div>
            <div class="fortunelist">
                <div class="fortunecon">
                    这个算命人的基本信息
                   askldj asdad
                </div>
            </div>
        </van-tab>
        <van-tab >
             <div slot="title">评语
             </div>
            <div class="fortunelist">
                 <div class="fortunecon">
                    <textarea name="" id="" cols="45" rows="10" placeholder="开始输入..." class="fortunetext"></textarea>
                </div>
                
            </div>
            <div class="fortunebtn">
                <button class="fortunesubmit">提交</button>
            </div>
            
        </van-tab>
        
        </van-tabs>
   </div>       
</template>

<script>
import  Vue from "vue";
import { Tab, Tabs } from 'vant';

Vue.use(Tab).use(Tabs); 
export default {
    data () {
        return {
            active: 5,
            swipeThreshold: ''
        }
    }
}
</script>

<style>
.van-tab{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16%;
}
.fortunelist{
    margin: 0.4rem;
    box-shadow: 0 0 0.5rem #ccc;
}
.fortunelist .fortunecon{
    padding: 0.3rem;
}
.fortunetext{
    border:none;
    font-size: 0.3rem;
}
.fortunebtn{
    margin: 0.4rem;
}
.fortunesubmit{
    width: 100%;
    height: 1.5rem;
    border: 1px solid #ff525a;
    background: #ff525a;
    color: #fff;
    border-radius: 0.2rem;
    font-size: 0.6rem;

}
</style>
