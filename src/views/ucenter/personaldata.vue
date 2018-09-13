<template >
   <div class="pertop">
      <div class="settop">
            <i class="back backs" @click="$router.back(-1)"></i>     
            <span class="stt">修改个人资料</span>
            <span class="deter" @click="deter">确定</span>
        </div>
        <div class="userdata"> 
            <form action="javascript:return true;">
                <input @keyup.13=show() type="search" ref="input1" v-model="nickname" placeholder="请输入用户名">
            </form>
        </div>
        <div class="perfoot">
           <span>这里是说明</span>
        </div>
   </div>    
</template>

<script>
import { getMemberInfo } from '@/api/ucenter/index.js'
    export default {
        data () {
            return {
                nickname: '',
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
 .stt {
     margin:0 auto;
     font-size: 0.5rem;
 }
 .deter {
     color: #ff525a;
     margin-right: 0.3rem;
     font-size: 0.5rem;
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
