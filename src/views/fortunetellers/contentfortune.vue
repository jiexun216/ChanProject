<template>
   <div>
       <van-nav-bar
            :title="$t(sm)"
            left-arrow
            @click-left="onClickLeft">
         <!-- <van-icon name="search" slot="right" /> -->
         <van-icon name='add-o' slot="right" @click="showDialog"/>
        </van-nav-bar>
      <van-tabs v-model="active" :swipe-threshold="6">
        <van-tab >
             <div slot="title">{{$t(jiben)}}
             </div>            
             <Results></Results >                           
        </van-tab>
        <van-tab >
             <div slot="title">{{$t(mingpan)}}
             </div>
                <Mingpan></Mingpan>
        </van-tab>
        <van-tab >
             <div slot="title">{{$t(xipan)}}
             </div>
                <Xipan></Xipan>
        </van-tab>
        <van-tab >
             <div slot="title">{{$t(dayun)}}
             </div>
             <Dayun></Dayun>
        </van-tab>
        <van-tab >
             <div slot="title">{{$t(liunian)}}
             </div>
             <Liunian></Liunian>
        </van-tab>
        <van-tab >
             <div slot="title">{{$t(pingyu)}}
             </div>
            <!-- <div class="fortunelist">
                 <div class="fortunecon">
                    <textarea v-model="pingyu" cols="45" rows="10" placeholder="开始输入..." class="fortunetext"></textarea>
                </div> 
            </div>
            <div class="fortunebtn">
                <button class="fortunesubmit" @click="submitpingyu()">提交</button>
            </div> -->
            <div class="pleaseinputs">
                <textarea v-model="comment" rows="8" :placeholder='$t(entering)' class="pleasesrs"> </textarea>
                <button type="submit" @click="submitOpinion()" class="submits" >{{$t(submit)}}</button>
          </div>
        </van-tab>
        </van-tabs>
        <Add :show="show"  @changeYincang="changeYincang"></Add>
   </div>       
</template>

<script>
import  Vue from "vue";
import { Tab, Tabs } from 'vant';
import { Icon,Dialog } from 'vant';
import Results from '@/views/fortunetellers/results'
import Mingpan from '@/views/fortunetellers/mingpan'
import Xipan from '@/views/fortunetellers/xipan'
import Dayun from '@/views/fortunetellers/dayun'
import Liunian from '@/views/fortunetellers/liunian'
import { issueComment,fortuneresults } from '@/api/fortunetellers/index.js'
import Add from '@/views/fortunetellers/add'
Vue.use(Tab).use(Tabs); 
Vue.use(Icon);
export default {
    data () {
        return {
            active: 0,
            swipeThreshold: '',
            fortuneId: '',
            comment: '',
            perlists: [],
            show: false,
            sm: 'common.sm',
            jiben: 'common.jiben',
            mingpan: 'common.mingpan',
            xipan: 'common.xipan',
            dayun: 'common.dayun',
            liunian: 'common.liunian',
            pingyu: 'common.pingyu',
            entering: 'common.placeholder.entering',
            submit: 'common.submit'
        }
    },
    methods: {
        getData () {
        fortuneresults(
            this.$route.query.fortuneId
            ).then(res => {
           if (res.data.status == 99) {
                this.$toast(res.data.message ? res.data.message : this.$t("common.failuredcaozuo"))
                this.$router.push({name: res.data.data.url})
            }
            this.comment = res.data.data.pingyu
        })
        },
        onClickLeft () {
            // this.$router.push({path: '/Index'})
            this.$router.back(-1)
         },
         submitOpinion () {
            let comment = this.comment
            let fortuneId =  this.$route.query.fortuneId
             issueComment (comment,fortuneId).then(res => {    
                    this.$toast(res.data.message ? res.data.message : this.$t("common.failuredcaozuo"))
                    if (res.data.status == 0) {
                        this.$router.push({name: 'contentfortune',
                        query: {
                            fortuneId: fortuneId
                        }});
                    } else if (res.data.status == 99) {
                        this.$toast(res.data.message ? res.data.message : this.$t("common.failuredcaozuo"))
                        this.$router.push({name: res.data.data.url})
                    }
                }).catch(err => {
                    return err
                })
         },  
         changeYincang(boolval) {
             this.show  = boolval
         },  
         showDialog () {
             this.show  = true
         },
    },
    created () {
        this.getData();
    },
    components: {
        Results,
        Mingpan,
        Xipan,
        Dayun,
        Liunian,
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
    height: 1rem;
    border: 1px solid #ff525a;
    background: #ff525a;
    color: #fff;
    border-radius: 0.2rem;
    font-size: 0.5rem;

}
.pleaseinputs{
    text-align: left;
    margin: 0.3rem;
    font-size: 0.4rem;
    color: #ccc;
}
.pleasesrs{
    box-shadow: 0 0 0.4rem #ccc;
    border: none;
    padding: 0.2rem;
    color: #000;
    width:88%;
}
.pleaseinputs .submits{
    width: 90%;
    font-size: 0.5rem;
    background: #ff525a;
    color: #fff;
    line-height: 1.2rem;
    border-radius: 0.2rem;
    margin-top: 0.6rem;
}
</style>
