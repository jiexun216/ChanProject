<template>
   <div style="margin: 0.4rem;">
       <div class="xipanstyle">
           <div class="xipantop">
               <p >围棋大运显示小运，十部大运要打开设置</p>
              <ul class="xipanitem">
                  <li v-for="xipan in xipans" :key="xipan.index" class="xpcolor">{{xipan.text}}</li>
              </ul> 
           </div>
            <div class="xipantop">
              <ul class="xipanitem">
                  <li v-for="year in years" :key="year.index">{{year.text}}</li>
              </ul> 
           </div> 
           <div class="xipantop ">
              <ul class="xipanitem xipanbtom">
                  <li v-for="year in years" :key="year.index">{{year.text}}</li>
              </ul> 
           </div> 
       </div>
       <div class="xipanstyle">
           <div class="xipantop">
               <p >点击大运和流年的干支可去切换到上面</p>
              <ul class="xipanitem">
                  <li v-for="xipan in xipans" :key="xipan.index" class="xpcolor">{{xipan.text}}</li>
              </ul> 
           </div>
            <div class="xipantop">
              <ul class="xipanitem">
                  <li v-for="year in years" :key="year.index">{{year.text}}</li>
              </ul> 
           </div> 
           <div class="xipantop">
              <ul class="xipanitem xipanbtom">
                  <li v-for="year in years" :key="year.index">{{year.text}}</li>
              </ul> 
           </div> 
       </div>
       <div class="xipanstyle">
           <div class="xpmargin">
              <div class="xpresultdis">
                            <span class="xpresultshead">天干提示</span>
                            <span class="xpresultsright"> 无和的关系 </span>
            </div>
            <div class="xpresultdis">
                            <span class="xpresultshead">地支提示</span>
                            <span class="xpresultsright"> 床前明月光，疑是地上霜  </span>
            </div>
           </div>
           
       </div>
   </div>    
</template>

<script>
    export default {
        data () {
            return {
                xipans: [
                    {text: '日期'},
                    {text: '时柱'},
                    {text: '日柱'},
                    {text: '月柱'},
                    {text: '念珠'},
                    {text: '小运'},
                    {text: '流年'}

                ],
                years: [
                    {text: '岁年'},
                    {text: '*'},
                    {text: '*'},
                    {text: '*'},
                    {text: '*'},
                    {text: '1岁'},
                    {text: '1岁'}
                ]
            }
        }
    }
</script>
<style>
.xipanstyle{
    width: 100%;
    box-shadow: 0 0 0.5rem #ccc;
    border-radius: 0.1rem;
}
.xipantop{
    text-align: center;
}

.xipantop p{
    color: #f00;
    line-height: 0.8rem;
}
.xpcolor{
    color: #ccc;
}
.xipanitem{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin: 0.3rem;
    padding: 0.2rem 0;
}
.xipanbtom{
    border:none;
}
.xpresultdis{
    display: flex;
    align-items: center;
}
.xpresultshead{
    color: #ccc;
    line-height: 0.6rem;
    display: inline-block;
    width: 30%; 
}
.xpresultsright{
    margin-left:0.3rem;
    line-height: 0.6rem;
}
.xpmargin{
    margin: 0.4rem;
    padding: 0.2rem 0;
}
</style>
