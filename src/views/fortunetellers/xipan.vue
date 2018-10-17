<template>
   <div style="margin: 0.4rem;">
       <div class="xipanstyle">
           <div class="xipantop">
               <p >未起大运显示小运，十部大运要打开设置</p>
              <ul class="xipanitem">
                  <li v-for="dayunnians in dayunnian" :key="dayunnians.index" class="xpcolor">{{dayunnians}}</li>
              </ul> 
              <ul class="xipanitem">
                  <li v-for="liunianshis in liunianshi" :key="liunianshis.index" class="xpcolor">{{liunianshis}}</li>
              </ul> 
              <ul class="xipanitem xipanbtom">
                  <ul v-for="item in dayun" :key="item.index">
                   <li v-for="value in item" :key="value.index" >{{value}}</li>
                 </ul>
              </ul> 
           </div>
       </div>
       <div class="xipanstyle">
           <div class="xipantop">
               <!-- <p >点击大运和流年的干支可去切换到上面</p> -->
              <ul class="xipanitem xipanbtom">
                  <ul v-for="item in liunian" :key="item.index" class="xpul">
                   <li v-for="value in item" :key="value.index" class="xpli">{{value}}</li>
                 </ul>
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
                dayunnian: [],
                liunianshi: [],
                dayun: [],
                liunian: []
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
                this.dayunnian = res.data.data.xipan.dayunnian
                this.liunianshi = res.data.data.xipan.liunianshi
                this.dayun = res.data.data.xipan.dayun
                this.liunian = res.data.data.xipan.liunian
            }) 
                }
        },
        created () {
           this.getData()
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
    flex-wrap: wrap;
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
.xpul{
    border-bottom: 1px solid #ccc;
}
.xpli{
    margin: 0.2rem;
}
</style>
