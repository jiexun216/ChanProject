<template>
   <div class="resultesstyle">
      <div class="resultsone">
            <div class="resultscon  resultsconimg">
                <div style="margin:0.4rem;">
                  <div class="resultdis">
                      <span class="resultshead">{{$t(name)}}</span>
                      <span class="resultsright">{{basic.fullName}}</span>
                  </div>
                   <div class="resultdis">
                      <span class="resultshead">{{$t(shuxiang)}}</span>
                      <span class="resultsright">{{basic.zodiac}}</span>
                  </div>
                  <div class="resultdis">
                      <span class="resultshead">{{$t(yangli)}}</span>
                      <span class="resultsright">{{basic.gregorianCalendar}}</span>
                  </div>
                  <div class="resultdis">
                      <span class="resultshead">{{$t(yinli)}}</span>
                      <span class="resultsright">{{basic.lunarCalendar}}</span>
                  </div>
                </div>
                  
            </div>
      </div>
      <div class="resultsone resultslint">
            <div class="resultscon">
                <div style="margin:0.4rem;">
                  <div class="resultdis">
                      <span class="resultshead">{{$t(jieqi)}}</span>
                      <div class="jieqiresults">
                        <p class="resultsright">{{basic.jieqi.name1}}</p>
                        <p class="resultsright">{{basic.jieqi.name2}}</p>  
                      </div>
                      
                  </div>
                   <div class="resultdis">
                      <span class="resultshead">{{$t(xingzuo)}}</span>
                      <span class="resultsright">{{basic.xingzuo}}</span>
                  </div>
                  <div class="resultdis">
                      <span class="resultshead">{{$t(xingxiu)}}</span>
                      <span class="resultsright">{{basic.xingxiu}}</span>
                  </div>
                  <div class="resultdis">
                      <span class="resultshead">{{$t(kongwang)}}</span>
                      <span class="resultsright">{{basic.kongwang}}</span>
                  </div>
                  <div class="resultdis">
                      <span class="resultshead">{{$t(minggong)}}</span>
                      <span class="resultsright">{{basic.minggong}}</span>
                  </div>
                  <div class="resultdis">
                      <span class="resultshead">{{$t(taiyuan)}}</span>
                      <span class="resultsright">{{basic.taiyuan}}</span>
                  </div>
                  <div class="resultdis">
                      <span class="resultshead">{{$t(taixi)}}</span>
                      <span class="resultsright">{{basic.taixi}}</span>
                  </div>
                </div>
                  
            </div>
      </div>
      <div class="resultsone">
            <div class="resultscon">
                <div style="margin:0.4rem;">
                    <p class="resultscg">{{$t(chenggu)}}</p>
                  <div class="resultdis">
                      <span class="resultshead">{{$t(weight)}}</span>
                      <span class="resultsright"> {{basic.weight}}</span>
                  </div>
                   <!-- <div class="resultdis">
                      <span class="resultshead">评语</span>
                      <span class="resultsright">{{basic.comment}}</span>
                  </div> -->
                </div>
                  
            </div>
      </div>
       <!-- <div class="resultsone">
            <div class="resultscon">
                <div style="margin:0.4rem;">
                    <p class="resultscg">五行信息</p>
                  <div class="resultdis">
                      <span class="resultshead">命主属性</span>
                      <span class="resultsright"> {{basic.mingzhushuxing}}</span>
                  </div>
                   <div class="resultdis">
                      <span class="resultshead">参考用神</span>
                      <span class="resultsright">{{basic.cankaoyongshen}}</span>
                  </div>
                  <div class="resultdis">
                      <span class="resultshead">参考祀神</span>
                      <span class="resultsright">{{basic.cankaojishen}}</span>
                  </div>
                </div>  
            </div>
      </div> -->
   </div>    
</template>

<script>
import { fortuneresults } from '@/api/fortunetellers/index.js'
export default {
    data () {
        return {
            basic: {
                jieqi: {
                    name1: '',
                    name2: ''
                }
                },
            name: 'common.name',
            shuxiang: 'common.shuxiang',
            yangli: 'common.yangli',
            yinli: 'common.yinli',
            jieqi: 'common.jieqi',
            xingzuo: 'common.xingzuo',
            xingxiu: 'common.xingxiu',
            kongwang: 'common.kongwang',
            minggong: 'common.minggong',
            taiyuan: 'common.taiyuan',
            taixi: 'common.taixi',
            chenggu: 'common.chenggu',
            weight: 'common.weight'
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
            this.basic = res.data.data.basic
        })
        
    }
    },
    created () {
        this.getData();
        
    }
}
</script>
<style>
.resultesstyle{
    margin: 0.4rem; 
    font-size: 0.3rem;  
}
.resultsone{
    margin-top: 0.4rem;
    width: 100%;
    box-shadow: 0 0 0.5rem #ccc;
    border-radius: 0.1rem;
}
.resultscon{
    padding-top: 0.3rem;
    padding-bottom: 0.3rem; 
}
.resultsconimg{
    background: url(../../assets/img/33.png) no-repeat right;
    background-size: contain;
}
.resultslint{
  border-left: 2px solid ;
  border-image: -webkit-linear-gradient(#fe9501,#8423b0); /* Safari 5.1 - 6.0 */
  border-image: -o-linear-gradient(#fe9501,#8423b0); /* Opera 11.1 - 12.0 */
  border-image: -moz-linear-gradient(#fe9501,#8423b0); /* Firefox 3.6 - 15 */
  border-image: linear-gradient(#fe9501,#8423b0) 1; /* 标准的语法 */
}
.resultshead{
    color: #ccc;
    line-height: 0.6rem;
    display: inline-block;
    width: 30%; 
}
.resultsright{
    margin-left:0.3rem;
    line-height: 0.6rem;
}
.resultdis{
    display: flex;
    align-items: center;
}
.resultscg{
    color: #f00;
    margin: 0.2rem 0;
}
.jieqiresults{
    width: 70%;
}
</style>
