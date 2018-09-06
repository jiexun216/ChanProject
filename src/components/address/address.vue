<template>
    <div> 
        <div class="orderdetop orderdetop1">
            <router-link to="/Harvestaddress">
                <i class="back backs"></i>     
            </router-link>
            <span >收获地址</span>
            <span class="oks">
                完成
            </span>
         </div>
         <div class="oldaddress">
            <div class="oldname">
                  <span>张三</span> <span>4626443433</span>
                  <p class="outaddress">收货地址湖南省长沙市雨花区 大桥一区新一栋（古区南路东）</p>      
               <div>
                  <div class="defaitem" >
                      <div @click="defauclick">
                        <span class="defaclass" :class="{'defaclass':isDefaA,'defaclasstwo':!isDefaA}">
                          <i class="defaimg defaimgs" ></i>
                         </span>
                        <span class="defamr" :class="{'defamr':isA,'defamrtwo':!isA}">设为默认</span>     
                      </div>
                    <div>
                         <span class="compile" @click="compileclick">编辑</span>
                        <span class="compile compiles" @click="deleteAddress">删除</span> 
                    </div>
                  </div>   
               </div>         
            </div>
            
         </div>
         <div class="deleteaddress" @touchmove.prevent v-if="completeshow">
              <div class="restdelete">
                    <p class="restde">删除确认</p>
                    <p>确认要删除该收货地址吗</p>
                 <div class="closeaddress">
                     <span @click="close" class="theqx">
                          取消
                     </span> 
                     <span class="thesc" @click="submit">删除
                  </span>
                 </div>
              </div>
         </div>

         <div class="addressfooter">
           <p>+ 新建地址</p>
         </div>
    </div>
</template>

<script>
   export default {
         data () {
             return {
                isA: true,
                isDefaA: true,
                completeshow: false,
             }
         },
         methods: {
              defauclick () {
                this.isA = !this.isA;
                this.isDefaA = !this.isDefaA;
              },
              compileclick () {
                  this.$router.push('/Newaddress')
              },
              deleteAddress () {
                  this.completeshow = true;
              },
              close () {
                  this.completeshow = true;
              },
              submit () {
                  //将收获地址删除
                //   this.completeshow = true;
              }     
         },
   }   
</script>

<style>
.orderdetop{
  font-size: 0.4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.orderdetop1 {
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
.oks{
    color: #f00;
    margin-right: 0.4rem;
}
.oldaddress{
    border-bottom: 4px solid #ccc;
}
.oldname{
    
    padding:0.4rem;
    font-size: 0.45rem;
}
.outaddress{
    line-height: 1rem;
    color: #ccc;
    font-size: 0.4rem;
}
.defaclass{
    background: #f00;
    border-radius: 50%;
}
.defaclasstwo{
    background:#fff;
    border: 1px solid #ccc;
    border-radius: 50%;
}
.defamr{
    color: #ff525a;
    font-size: 0.4rem;
}
.defamrtwo{
    color: #ccc;
    font-size: 0.4rem;
}
.defaimg{
    display:inline-block;
    width: 0.6rem;
    height: 0.5rem;
    background-size: cover;
    vertical-align: middle;
    border-radius: 50%;
    margin-bottom:0.1rem;
}
.defaimgs{
    background: url(../../assets/img/38.png) no-repeat center center;
}
.defaitem{
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.compile{
    border: 1px solid #ccc; 
    padding: 0.1rem 0.4rem;
    border-radius: 0.5rem;
    font-size: 0.3rem;
    margin: 0 auto;
}
.compiles {
    border: 1px solid #ff525a;
    color: #ff525a;
}
.deleteaddress {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index:10;
   background:rgba(0,0, 0, 0.5)
}
.restdelete{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 8rem;
    height: 4rem;
    background: #fff; 
    border-radius: 0.3rem;
    text-align: center;
}
.restde{
    font-size: 0.5rem;
    margin-top: 1rem;
}
.closeaddress{
    position: absolute;
    bottom: 0;
    width: 100%;
    line-height: 1rem;
    font-size: 0.4rem;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
}
.closeaddress span{
    width: 50%;
}
.thesc{
    color: #f00;
}






.addressfooter{
    color: #ff525a;
    text-align: center;
    line-height: 1rem;
    font-size: 0.5rem;
    box-shadow:0 0 0.5rem #ccc;
    width: 100%;
    position: fixed;
    bottom: 0;
}
</style>
