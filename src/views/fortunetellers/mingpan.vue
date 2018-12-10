<template>
    <div class="mp">
        <div class="mingpan">
            <div class="mpdisplay">
                <ul class="mingpanhead">
                    <li v-for="shizhu in shizhus" :key="shizhu.index" class="shizhustyle">{{shizhu.text}}</li>
                </ul>
            </div>
            
            <div class="mpdisplay">
                <!-- 时柱 -->
            <ul class="mpnianzhu"> 
                <li>{{shizhu.shishen}}</li>
                <li class="tianganthr">{{shizhu.tiangan}}</li>
                <li class="tianganthr">{{shizhu.dizhi}}</li>
                <li>
                    <div class="height">
                        <div v-for="cg in scanggan" :key="cg.index">
                            <span v-for="value in cg" :key="value">{{value}}</span>
                        </div>
                    </div>
                </li>
                <li>{{shizhu.nayin}}</li>
                <li style="border:none;">{{shizhu.xingyun}}</li>
            </ul>
              <!-- 日柱 -->
             <ul class="mpnianzhu">
                <li style="color:#ff5d64;">{{rizhu.shishen}}</li>
                <li class="tiangan">{{rizhu.tiangan}}</li>
                <li class="tiangan">{{rizhu.dizhi}}</li>
                <li>
                    <div class="height">
                        <div v-for="cg in rcanggan" :key="cg.index">
                            <span v-for="value in cg" :key="value">{{value}}</span>
                        </div>
                    </div>
                </li>
                <li>{{rizhu.nayin}}</li>
                <li style="border:none;">{{rizhu.xingyun}}</li>
            </ul>
               <!-- 月柱 -->
            <ul class="mpnianzhu"> 
                <li >{{yuezhu.shishen}}</li>
                <li class="tianganone">{{yuezhu.tiangan}}</li>
                <li class="tianganone">{{yuezhu.dizhi}}</li>
                <li >
                    <div class="height"> 
                        <div v-for="cg in ycanggan" :key="cg.index">
                            <span v-for="value in cg" :key="value">{{value}}</span>
                        </div>
                    </div>
                </li>
                <li>{{yuezhu.nayin}}</li>
                <li style="border:none;">{{yuezhu.xingyun}}</li>
            </ul>
                 <!-- 年柱 -->
            <ul class="mpnianzhu"> 
                <li>{{nianzhu.shishen}}</li>
                <li class="tiangantwo">{{nianzhu.tiangan}}</li>
                <li class="tiangantwo">{{nianzhu.dizhi}}</li>
                <li >
                    <div class="height">
                        <div v-for="cg in ncanggan" :key="cg.index">
                            <span v-for="value in cg" :key="value">{{value}}</span>
                        </div>
                    </div>
                </li>
                <li>{{nianzhu.nayin}}</li>
                <li style="border:none;">{{nianzhu.xingyun}}</li>
            </ul>
            
            <div class="mpnianzhu"> 
                <li>主星</li>
                <li>天干</li>
                <li>地支</li>
                <li>
                    <div  class="height">
                        <div>
                            <p>藏干</p>
                        </div>
                    </div>
                </li>
                <li>纳音</li>
                <li style="border:none;">星运</li>
            </div>
            </div>    
        </div>
    </div>
</template>

<script>
import { fortuneresults } from '@/api/fortunetellers/index.js'
    export default {
        data () {
           return {
               shizhus: [
                   {text:'时柱'},
                   {text:'日柱'},
                   {text:'月柱'},
                   {text:'年柱'},
                   {text:'日期'},
               ],
               nianzhu: [],
               yuezhu: [],
               rizhu: [],
               shizhu: [],
               ncanggan: [],
               ycanggan: [],
               rcanggan: [],
               scanggan: []
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
            this.nianzhu = res.data.data.mingpan.nianzhu            
            this.yuezhu  = res.data.data.mingpan.yuezhu
            this.rizhu   = res.data.data.mingpan.rizhu
            this.shizhu  = res.data.data.mingpan.shizhu
            this.ncanggan= res.data.data.mingpan.nianzhu.canggan
            this.ycanggan= res.data.data.mingpan.yuezhu.canggan
            this.rcanggan= res.data.data.mingpan.rizhu.canggan
            this.scanggan= res.data.data.mingpan.shizhu.canggan
        })
    }
        },
        created () {
        this.getData();
        
    }
    }
</script>

<style>
.mp{
    margin: 0.4rem;
}
.mingpan{
    width: 100%;
    box-shadow: 0 0 0.5rem #ccc;
    border-radius: 0.1rem;
}
.mingpanhead{ 
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding:0.2rem 0;
    width: 100%;
}
.mingpanbtom{
    border: none;
}
.shizhustyle{
    color: #ccc;
}
.zhenggongstyle{
    font-weight: bold;
}
.mpsizhu{
    margin: 0.4rem;
}
.sizhu{
    color: #f00;
    line-height: 0.8rem;
}
.sz{
    padding-top: 0.3rem;
    padding-bottom: 0.3rem; 
}
.szresultdis{
    display: flex;
    align-items: center;
}
.szresultshead{
    color: #ccc;
    line-height: 0.6rem;
    display: inline-block;
    width: 30%; 
}
.szresultsright{
    margin-left:0.3rem;
    line-height: 0.6rem;
}
.mpdisplay{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.4rem;
}
.mpnianzhu li{
    padding: 0.2rem 0;
    /* border-bottom: 1px solid #ccc; */
    text-align: center;   
}
.tiangan{
    color: #44dee7;
}
.tianganone{
    color: #fcdfaf;
}
.tiangantwo{
    color: #fcdfaf;
}
.tianganthr{
    color: #23b16c;
}
.height{
    height: 1rem;
    padding-bottom: 0.2rem;
}
</style>
