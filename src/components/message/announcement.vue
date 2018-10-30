<template>
   <div>
      <div class="messtopa"> 
           <div class="messimga">
                    <img src="../../assets/img/1.png" alt="">
              </div>
          <div class="messcona" v-for="lis in list.list" :key="lis.index"> 
              <div class="mestitlea" style="100%;">
                <span>{{lis.title}}</span>
                <span class="messrighta">{{lis.create_time}}</span>  
              </div>                              
              <p>{{lis.description}}</p>
          </div>
      </div>
   </div>    
</template>

<script>
    export default {
        data () {
            return {
                list: []
            }
        },
        created () {
            this.$getData('ucenter/myMessage').then(res => {
                  this.list = res.data.data;
            }).catch(err => {
                return err;
            })
        }
    }
</script>
<style>
.messtopa{
    margin: 0.4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.messimga{
   align-self: flex-start;
}
.messcona{
    margin-left:1.3rem;
    font-size: 0.4rem;
    border-bottom: 1px solid #ccc;
}
.mestitlea{
    width:100%;
}
.mestitlea span{
    line-height: 1rem;
}
.messcona p{
    margin-bottom: 0.5rem;
    color: #ccc;
}
</style>
