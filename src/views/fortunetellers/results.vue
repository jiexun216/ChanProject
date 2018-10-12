<template>
   <div class="resultesstyle">
      <div class="resultsone">
            <div class="resultscon  resultsconimg">
                <div style="margin:0.4rem;">
                  <div class="resultdis">
                      <span class="resultshead">姓名</span>
                      <span class="resultsright">{{basic.fullName}}</span>
                  </div>
                   <div class="resultdis">
                      <span class="resultshead">属相</span>
                      <span class="resultsright">{{basic.zodiac}}</span>
                  </div>
                  <div class="resultdis">
                      <span class="resultshead">阳历</span>
                      <span class="resultsright">{{basic.gregorianCalendar}}</span>
                  </div>
                  <div class="resultdis">
                      <span class="resultshead">阴历</span>
                      <span class="resultsright">{{basic.lunarCalendar}}</span>
                  </div>
                </div>
                  
            </div>
      </div>
      <div class="resultsone resultslint">
            <div class="resultscon">
                <div style="margin:0.4rem;">
                  <div class="resultdis">
                      <span class="resultshead">节气</span>
                      <div class="jieqiresults">
                        <p class="resultsright">{{basic.jieqi.name1}}</p>
                        <p class="resultsright">{{basic.jieqi.name2}}</p>  
                      </div>
                      
                  </div>
                   <div class="resultdis">
                      <span class="resultshead">星座</span>
                      <span class="resultsright">{{basic.xingzuo}}</span>
                  </div>
                  <div class="resultdis">
                      <span class="resultshead">二十八星宿</span>
                      <span class="resultsright">{{basic.xingxiu}}</span>
                  </div>
                  <div class="resultdis">
                      <span class="resultshead">空亡（年月）</span>
                      <span class="resultsright">{{basic.kongwang}}</span>
                  </div>
                  <div class="resultdis">
                      <span class="resultshead">命宫</span>
                      <span class="resultsright">{{basic.minggong}}</span>
                  </div>
                  <div class="resultdis">
                      <span class="resultshead">胎元</span>
                      <span class="resultsright">{{basic.taiyuan}}</span>
                  </div>
                  <div class="resultdis">
                      <span class="resultshead">胎息</span>
                      <span class="resultsright">{{basic.taixi}}</span>
                  </div>
                </div>
                  
            </div>
      </div>
      <div class="resultsone">
            <div class="resultscon">
                <div style="margin:0.4rem;">
                    <p class="resultscg">袁天罡称骨</p>
                  <div class="resultdis">
                      <span class="resultshead">重量</span>
                      <span class="resultsright"> {{basic.weight}}</span>
                  </div>
                   <div class="resultdis">
                      <span class="resultshead">评语</span>
                      <span class="resultsright">{{basic.comment}}</span>
                  </div>
                </div>
                  
            </div>
      </div>
       <div class="resultsone">
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
      </div>
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
          
        }
    },
    methods: {
        getData () {
        fortuneresults(
            this.$route.query.fortuneId
            ).then(res => {
           if (res.data.status == 99) {
                    this.$toast(res.data.message ? res.data.message : '操作失败')
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
