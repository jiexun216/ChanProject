<template>
     <div>
         <div class="settop">
            <router-link to="/Personal">
                <i class="back backs"></i>     
            </router-link>
            <span class="setshezhi">设置</span>
        </div>
        <div class="setitem">
             <div class="setitems" @click="setitemhead">
                 <span>
                     头像 </span>
                 <span>
                     <i class="back backtx"></i>
                     <span class="settx">＞</span>
                 </span>
             </div>
             <router-link to='/Personaldata'>
                 <div class="setitems">
                    <span>
                     个人资料 </span>
                  <span>
                     <span ref="personal"></span>
                     <span class="settx">＞</span>
                  </span>
                </div>
             </router-link>
             <router-link to='/Binding'>
                <div class="setitems">
                    <span>
                        绑定支付宝 </span>
                    <span>
                        <span>未绑定</span>
                        <span class="settx">＞</span>
                    </span>
                </div>
             </router-link>
             <router-link to='/Feedback'>
                <div class="setitems">
                    <span>
                        意见反馈 </span>
                    <span>
                        <span class="settx">＞</span>
                    </span>
                </div>
             </router-link>
             
             <div class="setitems">
                 <span>
                     清理缓存 </span>
                 <span>
                     <span class="settx">＞</span>
                 </span>
             </div>
             <div class="setitems">
                 <span>
                    检查更新 </span>
                 <span>
                     <span class="settx">＞</span>
                 </span>
             </div>
        </div>

        <div class="headerpro" @touchmove.prevent v-if="headerpro"> 
            <div class="headfoot"  >
                <p>拍摄</p>
                <p>从相册选择</p>
                <p class="headclose" @click="headdown">取消</p>
            </div>   
        </div>
        <div class="setfooter">
            <img src="../../assets/img/outlo.png" alt="">
             <p>退出登录</p>
        </div>
     </div>   
</template>

<script>
    export default {
         data () {
             return {
                 personal:'',
                 headerpro: false,
             }
         },
         created () {
             this.$getData('ucenter/index').then(res => {
                  this.data = res.data.data;
             }).catch(err =>{
                  return err
             })
        },
         methods: {
            headdown () {
                this.headerpro = false;
           },
             setitemhead () {
                 this.headerpro = true;
             },  
         }
         
    }
</script>

<style>
  .settop{
    font-size: 0.5rem;
    display: flex;
    justify-content:center;
    align-items: center;
    border-bottom: 1px solid #ccc;
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
 .setshezhi {
     margin:0 auto;
 }
 .setitem{
    padding: 0.4rem;
    font-size: 0.4rem; 
 }
 .setitems {
     display: flex;
     justify-content: space-between;
     align-items: center;
     height: 1rem;
 }
.backtx{
    background: url(../../assets/img/tx.png) no-repeat center center;
    border-radius: 50%;
    margin-bottom: -0.1rem;
}
.settx{
    color: #ccc;
}
.setfooter{
    position: fixed;
    bottom: 0;
    left:0;
    box-shadow: 0 0 0.5rem #ccc;
    text-align: center;
    color: #f00;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.45rem;
    line-height: 1.3rem;
}
.setfooter img{
    width: 0.8rem;
    margin-right: 0.2rem;
    margin-bottom: -0.1rem;
}
.headerpro{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background:rgba(0,0, 0, 0.5)
}
.headfoot{
    position: absolute;
    bottom: 0;
    left:0;
    font-size: 0.4rem;
    width: 100%;
    text-align: center;
    background: #fff;
}
.headfoot p{
    line-height: 1.2rem;
}
.headclose{
    color: #ccc;
    border-top: 1px solid #ccc;
}
</style>
