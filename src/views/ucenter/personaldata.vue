<template >
   <div class="pertop">
      <div class="settop">
            <i class="back backs" @click="$router.back(-1)"></i>     
            <span class="stt">{{$t(setpersonal)}}</span>
            <span class="deter" @click="confirmModify()">{{$t(determine)}}</span>
        </div>
        <div class="userdata"> 
            <form action="javascript:return true;">
                <input @keyup.13=show() type="search" ref="input1" v-model="nickname" :placeholder="$t(username)">
            </form>
        </div>
        <div class="perfoot">
           <!-- <span>这里是说明</span> -->
        </div>
   </div>    
</template>

<script>
import { getMemberInfo,modifyUserName } from '@/api/ucenter/index.js'
    export default {
        data () {
            return {
                nickname: '',
                setpersonal: 'commonsetpersonal',
                determine: 'common.determine',
                username: 'common.placeholder.username'
            }
        },
        methods: {
            getData () {
                getMemberInfo ().then(res => {
                    if (res.data.status == 99) {
                     this.$toast(res.data.message ? res.data.message : '操作失败')
                     this.$router.push({name: res.data.data.url})
                    }
                    this.nickname = res.data.data.nickName
                }).catch(err => {
                    return err
                })
            },
            show () {
                this.$refs.input1.blur();
            },
            confirmModify () {
                modifyUserName (this.nickname).then(res => {
                    this.$toast(res.data.message ? res.data.message : '操作失败')
                    if (res.data.status == 0) {
                        // this.$router.push({name: 'ucenterSetup'});
                    } 
                })
                
            }
        },
        mounted (){
            this.getData();
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
     font-size: 0.4rem;
 }
 .perfoot{
     background: #f7f7f7;  
     position: fixed;
     top: 2rem;
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
