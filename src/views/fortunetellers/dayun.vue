
<template>
    <div style="margin:0.4rem;">
        <div class="dayun ">
            <p>出生后7年7月开始大运，每年交大运年3月起运（年历）</p>
            <ul class="dayunli">
                <li v-for="year in years" :key="year.index">{{year.text}}</li>
            </ul>
            <ul class="dayunli">
                <li v-for="year in years" :key="year.index">{{year.text}}</li>
            </ul>
            <ul class="dayunli dayunbtom">
                <li v-for="year in years" :key="year.index">{{year.text}}</li>
            </ul>
        </div>
        <div class="dayun ">
            <p class="xiaoyun">排小运（80年）</p>
            <ul class="dayunli">
               <li v-for="year in years" :key="year.index">{{year.text}}</li>
            </ul>
            <ul class="dayunli">
               <li v-for="year in years" :key="year.index">{{year.text}}</li>
            </ul>
            <ul class="dayunli dayunbtom">
                <li v-for="year in years" :key="year.index">{{year.text}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
     data () {
         return {
             years: [
                 {text: '年岁'},
                 {text: '1岁'},
                 {text: '2岁'},
                 {text: '3岁'},
                 {text: '4岁'},
                 {text: '5岁'},
                 {text: '6岁'},
                 {text: '7岁'},
                 {text: '8岁'},
             ]
         }
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
    margin: 0.2rem;
    padding: 0.2rem 0;
    border-bottom:1px solid #ccc;
}
.dayunbtom{
    border: none;
}
.xiaoyun{
    text-align: left;
    margin-left: 0.4rem;
}
</style>
