<template >
   <div class="pertop">
      <div class="settop">
            <router-link to="/Setup">
                <i class="back backs"></i>     
            </router-link>
            <span class="xgper">修改个人资料</span>
            <span class="deter" @click="deter">确定</span>
        </div>
        <div class="userdata"> 
            <form action="javascript:return true;">
                <input @keyup.13=show() type="search" ref="input1" :placeholder="$t(username)">
            </form>
        </div>
        <div class="perfoot">
           <span>这里是说明</span>
        </div>
   </div>    
</template>

<script>
    export default {
        data () {
            return {
                username: 'common.placeholder.username',

            }
        },
        methods: {
            show () {
                this.$refs.input1.blur();
            },
            deter () {
                this.$router.push('/Setup');
            }
        }
    }
</script>

<style>
 .settop{
    display: flex;
    justify-content:center;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 0.2rem;
}
  .back{
   display: inline-block;
   width: 0.7rem;
   height: 0.7rem;
   background-size: cover;
   margin-left: 0.2rem;
 }
 .backs {
   background: url(../../assets/img/42.png) no-repeat center center;
 }
 .xgper {
     margin:0 auto;
     font-size: 0.4rem;
 }
 .deter {
     color: #ff525a;
     margin-right: 0.3rem;
     font-size: 0.4rem;
 }
 .userdata{
     width: 100%;
 }
 .userdata input{
     margin-left: 0.3rem;
     line-height: 0.9rem;
 }
 .perfoot{
     background: #f7f7f7;  
     position: fixed;
     top: 2.8rem;
     left: 0;
     width: 100%;
     height: 100%;
 }
 .perfoot span{
     position: absolute;
     top:0.5rem;
     left: 0.4rem;
 }
</style>
