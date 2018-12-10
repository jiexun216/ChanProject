
<template>
    <div style="margin:0.4rem;">
        <div class="dayun">
            <p>出生后7年7月开始大运，每年交大运年3月起运（年历）</p>
            <div class="dayunli">
                <ul v-for="item in dayun" :key="item.index">
                   <li v-for="value in item" :key="value.index">{{value}}</li>
                </ul>
            </div>
        </div>
        <div class="dayun ">
            <p class="xiaoyun">排小运（80年）</p>
            <div class="dayunli">
               <ul v-for="item in paixiaoyun" :key="item.index" class="daul">
                   <li v-for="value in item" :key="value.index" class="dali">{{value}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { fortuneresults } from '@/api/fortunetellers/index.js'
export default {
     data () {
         return {
            dayun: [],
            paixiaoyun: []
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
            this.dayun = res.data.data.dayun.dayun
            this.paixiaoyun = res.data.data.dayun.paixiaoyun
        })
        
    }
     },
     created () {
        this.getData();
        
    }
}
</script>

<style>
.dayun{
    width: 100%;
    box-shadow: 0 0 0.5rem #ccc;
    border-radius: 0.1rem;
}
.dayun p{
    color: #f00;
    line-height: 0.8rem;
    text-align: center;   
}
.dayunli{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 0.2rem;
    padding: 0.2rem 0;
}
.daul{
    border-bottom: 1px solid #ccc;
}
.dali{
    margin: 0.2rem;
}
.dayunbtom{
    border: none;
}
.xiaoyun{
    text-align: left;
    margin-left: 0.4rem;
}
</style>
