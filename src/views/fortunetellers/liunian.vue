<template>
    <div style="margin:0.4rem;">
        <div class="liunian">
             <div class="lnian ">
                 <p>命主90年流年信息</p>
                <div class="lnbtom">
                  <ul class="liunianli">
                    <li v-for="liunian in liunians" :key="liunian.index">{{liunian.text}}</li>
                   </ul> 
                   <ul class="liunianli">
                    <li v-for="geng in gengs" :key="geng.index">{{geng.text}}</li>
                   </ul>
                </div>
                 <div class="lnbtom">
                  <ul class="liunianli">
                    <li v-for="liunian in liunians" :key="liunian.index">{{liunian.text}}</li>
                   </ul> 
                   <ul class="liunianli">
                    <li v-for="geng in gengs" :key="geng.index">{{geng.text}}</li>
                   </ul>
                </div>
                
             </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            liunians: [
                {text: '1岁'},
                {text: '1岁'},
                {text: '1岁'},
                {text: '1岁'},
                {text: '1岁'},
                {text: '1岁'},
                {text: '1岁'},
            ],
            gengs: [
                {text: '庚午'},
                {text: '庚午'},
                {text: '庚午'},
                {text: '庚午'},
                {text: '庚午'},
                {text: '庚午'},
                {text: '庚午'},
            ]
        }
    }

}
</script>
<style>
.liunian{
    width: 100%;
    box-shadow: 0 0 0.5rem #ccc;
    border-radius: 0.1rem;  
}
.liunianli{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.2rem;
    /* padding: 0.2rem 0; */
    
}
.lnian p{
    color: #f00;
    line-height: 0.8rem;
    margin: 0.2rem;
}
.lnbtom{
border-bottom:1px solid #ccc;
}
</style>
