<template>
    <div class="mp">
        <div class="mingpan">
            <ul class="mingpanhead">
                <li v-for="shizhu in shizhus" :key="shizhu.index" class="shizhustyle">{{shizhu.text}}</li>
            </ul>
            <ul class="mingpanhead">
                 <li v-for="zhenggong in zhenggong" :key="zhenggong.index" class="zhenggongstyle">{{zhenggong.text}}</li>
            </ul>
            <ul class="mingpanhead">
                 <!-- <li v-for="value in ding" :key="value.index" class="zhenggongstyle">{{value}}</li> -->
                 <li class="tianone">丁</li>
                 <li class="tiantwo">庚</li>
                 <li class="tianthr">庚</li>
                 <li class="tianfour">酉</li>
                 <li class="tianfive">天干</li>
            </ul>
            <ul class="mingpanhead">
                 <li v-for="ding in dings" :key="ding.index" class="zhenggongstyle">{{ding.text}}</li>
            </ul>
            <ul class="mingpanhead">
                <li>
                   <ol>
                      <li v-for="yitu in yitu" :key="yitu.index" class="zhenggongstyle">{{yitu.text}}</li>
                   </ol>
                </li>
                <li>
                   <ol>
                      <li v-for="yitu in yitu" :key="yitu.index" class="zhenggongstyle">{{yitu.text}}</li>
                   </ol>
                </li>
                <li>
                   <ol>
                      <li v-for="yitu in yitu" :key="yitu.index" class="zhenggongstyle">{{yitu.text}}</li>
                   </ol>
                </li>
                <li>
                   <ol>
                      <li v-for="yitu in yitu" :key="yitu.index" class="zhenggongstyle">{{yitu.text}}</li>
                   </ol>
                </li>
                <li>藏干</li>
            </ul>
            <ul class="mingpanhead">
                <li>
                   <ol>
                      <li v-for="yitu in yitu" :key="yitu.index" class="zhenggongstyle">{{yitu.text}}</li>
                   </ol>
                </li>
                <li>
                   <ol>
                      <li v-for="yitu in yitu" :key="yitu.index" class="zhenggongstyle">{{yitu.text}}</li>
                   </ol>
                </li>
                <li>
                   <ol>
                      <li v-for="yitu in yitu" :key="yitu.index" class="zhenggongstyle">{{yitu.text}}</li>
                   </ol>
                </li>
                <li>
                   <ol>
                      <li v-for="yitu in yitu" :key="yitu.index" class="zhenggongstyle">{{yitu.text}}</li>
                   </ol>
                </li>
                <li>藏干</li>
            </ul>
            <ul class="mingpanhead mingpanbtom">
                 <li v-for="zhenggong in zhenggong" :key="zhenggong.index" class="zhenggongstyle">{{zhenggong.text}}</li>
            </ul>
        </div>
        <div class="mingpan">
            <div class="mpsizhu">
                <p class="sizhu">命盘四柱提示</p>
                <div class="sz">
                  <div class="szresultdis">
                      <span class="szresultshead">天干提示</span>
                      <span class="szresultsright"> 无和的关系 </span>
                  </div>
                  <div class="szresultdis">
                      <span class="szresultshead">地支提示</span>
                      <span class="szresultsright"> 床前明月光，疑是地上霜  </span>
                  </div>
                 </div>
            </div>
            
        </div>
        <div class="mingpan">
                    <div class="mpsizhu">
                        <p class="sizhu">命盘四柱提示</p>
                        <div class="sz">
                        <div class="szresultdis">
                            <span class="szresultshead">天干提示</span>
                            <span class="szresultsright"> 无和的关系 </span>
                        </div>
                        <div class="szresultdis">
                            <span class="szresultshead">地支提示</span>
                            <span class="szresultsright"> 床前明月光，疑是地上霜  </span>
                        </div>
                        </div>
                    </div>
                    
                </div>
    </div>
</template>

<script>
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
               zhenggong: [
                   {text: '正宫'},
                   {text: '元男'},
                   {text: '比肩'},
                   {text: '偏印'},
                   {text: '主星'},
               ],
               
               dings: [
                   {text: '丁'},
                   {text: '庚'},
                   {text: '庚'},
                   {text: '酉'},
                   {text: '地支'},
               ],
               yitu: [
                   {text: '已土'},
                   {text: '已土'},
                   {text: '已土'}
               ]
           }
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
    margin: 0.3rem;
    padding: 0.2rem 0;
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
.tianone{
    color: #0f0;
}
.tiantwo{
    color: #f00;
}
.tianthr{
    color: #ff0;
}
.tianfour{
    color: #00f;
}
.tianfive{
    color:#ccc;
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
</style>
