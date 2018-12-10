<template>
    <div style="margin:0.4rem;">
        <div class="liunian">
             <div class="lnian ">
                 <p>命主90年流年信息</p>
                <div>
                  <div class="liunianli">
                    <ul v-for="liunian in liunian" :key="liunian.index" class="lnul">
                        <li v-for="value in liunian" :key="value.index" class="lnli">{{value}}</li> 
                    </ul>
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
            liunian: []
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
                this.liunian = res.data.data.liunian
            }) 
        }
    },
    created () {
        this.getData();
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
    flex-wrap: wrap;
    margin: 0.2rem;
    padding: 0.2rem 0;
    
}
.lnian p{
    color: #f00;
    line-height: 0.8rem;
    margin: 0.2rem;
}
.lnul{
    border-bottom: 1px solid #ccc;
}
.lnli{
    margin: 0.2rem;
}
</style>
