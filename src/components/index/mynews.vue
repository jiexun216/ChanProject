<template>
   <div>
      <div class="messtop"> 
          <div class="messimg">
                    <img src="../../assets/img/7.png" alt="">
              </div>
          <div class="messcon" v-for="lis in list.list" :key="lis.index">
               <span>{{lis.title}}</span>
               <span class="messright">{{lis.create_time}}</span>
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
                //   console.log(this.list)
            }).catch(err => {
                return err;
            })
        }
    }
</script>

<style>
.messtop{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.4rem;
    position: relative;
}
.messimg{
   position: absolute;
   top:0;
   left: 0;
   margin: 0.1rem;
}
.messcon{
    margin-left: 1.3rem;
    font-size: 0.4rem;
    border-bottom: 1px solid #ccc;
}
.messcon span{
    line-height: 1rem;
}
.messcon p{
    margin-bottom: 0.5rem;
    color: #ccc;
}
.messright{
    float:right;
}
</style>
