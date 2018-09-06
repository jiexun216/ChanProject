<template>
    <div class="header">
        <div class="orderdetop">
            <router-link to="/">
                <i class="back backs"></i>     
            </router-link>
            <span >收获地址</span>
            <span class="myorder">
                <i class="back backcoups"></i>
            </span>
        </div>
        <div class="address">
             <img src="../../assets/img/13.png" alt="">
             <p class="addressji">没有收货地址寄不了快递哦</p>
             <router-link to="/Newaddress">
                 <button class="add">添加</button>
             </router-link>
             
        </div>
    </div>
</template>

<script>
  export default {

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
 .backcoups{
     background: url(../../assets/img/49.png) no-repeat center center;
 }
 .header{
    position: fixed;
    padding: 0;margin: 0;
    width: 100%;
    height: 100%;
 }
 .address{
     position:relative;
     top: 30%;
     /* left: 45%; */
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     align-items: center;
 }
 .addressji{
     width: 100%;
     text-align: center;
     line-height: 1rem;
     color: #ccc;
 }
 .add{
     border: 1px solid #ff525a;
     padding:0.1rem 0.5rem;
     border-radius: 0.6rem;
     color: #ff525a;
     font-weight: bold;
 }
</style>
