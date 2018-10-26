<template>
    <div>
        <div>
            <div class="settop">
                <div  @click="$router.back(-1)">
                    <i class="back backs"></i>     
                </div>
                <span class="bangding">{{$t(binding)}}</span>
          </div>
        </div>
        <div class="bindingwx" style="border-bottom: none;">
              <i class="bindicon bindiconimgwx"></i>
              <span>微信</span>
              <span class="mylove">(My Love)</span>
              <div class="bindright">
                    <i class="binditem bg1" style="width:1rem;" @click="bindimg"></i>
              </div>
        </div>
        <div class="bindingwx ">
              <i class="bindicon bindiconimgzfb"></i>
              <span>支付宝</span>
              <span class="mylove">(15227186411)</span>
              <div class="bindright">
                    <i class="binditem bg2" style="width:1rem"></i>
              </div>
        </div>
        <div class="bindingwx ">
              <i class="bindicon bindiconimgqq"></i>
              <span>腾讯QQ</span>
              <span class="mylove">(未绑定)</span>
              <div class="bindright">
                    <i class="binditem bg1" style="width:1rem;"></i>
              </div>
        </div>
        <div class="bindingwx ">
              <i class="bindicon bindiconimgwb"></i>
              <span>新浪微博</span>
              <span class="mylove">(未绑定)</span>
              <div class="bindright" >
                    <i class="binditem bg1" style="width:1rem;"></i>
              </div>
        </div>
    </div>
</template>

<script>
  export default {
      data () {
          return {
              binditem: '',
              binding: 'common.binding',
              bindwx: 'common.bindwx',
              bindali: 'common.bindali',
              bindqq: 'common.bindqq',
              bindwb: 'common.bindwb'
          }
      },
      methods: {
         bindimg () {
             
         } 
      },
      
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
 .bangding {
     margin:0 auto;
     font-size: 0.4rem;
 }
 .bindingwx{
     line-height: 1.3rem;
     width: 100%;   
 }
 .bindingwx1{
     border-bottom: none;
 }

 .bindicon{
    display: inline-block;
    width: 0.6rem;
    height: 0.6rem;
    background-size: cover;
    margin-bottom: -0.15rem;
    margin-left: 0.4rem;
    border-radius: 50%;
 }
 .bindiconimgwx{
     background: url(../../assets/img/12.png) no-repeat center center;
 }
 .bindiconimgzfb{
     background: url(../../assets/img/11.png) no-repeat center center;
 }
 .bindiconimgqq{
     background: url(../../assets/img/10.png) no-repeat center center;
 }
 .bindiconimgwb{
     background: url(../../assets/img/9.png) no-repeat center center;
 }
 .mylove{
     color: #ccc;
 }
 .binditem{
    display: inline-block;
    width: 1.5rem;
    height: 0.5rem;
    background-size: cover;
    margin-bottom: -0.15rem;
    margin-left: 0.4rem;
 }
 .bg1{
     background: url(../../assets/img/symbols-material-light-switch-on-copy.png) no-repeat center center/cover;
 }
 .bg2{
     background: url(../../assets/img/symbols-material-light-switch-on.png) no-repeat center center/cover;
 }
 .bindright{
     float:right;
     margin-right: 0.4rem;
 }
</style>
