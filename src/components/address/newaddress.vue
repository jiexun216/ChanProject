<template>
<div>
     <div class="orderdetop">
            <router-link to="/Harvestaddress">
                <i class="back backs"></i>     
            </router-link>
            <span >添加/编辑地址</span>
            <span class="oks" @click="complete">
                完成
            </span>
    </div>
    <div>
        <div class="recipi">
            <label class="margininput">
                收件人
            </label>
            <input type="text" placeholder="请填写收件人" ref="name" v-model="name">
        </div>
        <div class="recipi">
            <label class="margininput">
                联系方式
            </label>
            <input type="text" placeholder="请填写联系方式" ref="phone" v-model="phone">
        </div>
        <div class="recipi">
            <label class="margininput">
                所在地区
            </label>
            <div class="plsechoose">
                <span>请选择 ></span>
            </div>
        </div>
        <div class="recipi">
            <label class="margininput">
                详细地址
            </label>
            <input placeholder="如楼盘、街道" ref="address" v-model="address" class="addresslp">
        </div>
    </div>   
     
    <div v-if="completeshow">
       <div class="overlayer" @touchmove.prevent >
           <div class="restaddress" @touchmove.prevent>
              <p>再次确认消息</p>
              <span  ref="name">名字</span>
              <span ref="phone">收货地址是这里</span>
              <span ref="address"></span>
              <div class="closeaddress">
                 <span @click="close">
                    取消
                 </span> 
                 <span class="thecancel" @click="submit">确定 
                   <!-- <router-link to="/Harvestaddress">
                      
                   </router-link> -->
                  </span>
              </div>
          </div> 
        </div> 
    </div>
</div>        
</template>

<script>
import { Toast } from 'mint-ui';
    export default {
        data () {
            return {
                name: '',
                phone:'',
                city:'',
                address: '',
                completeshow: false,
            }
        },
        created () {
           
        },
        methods: {
            complete () {
                this.completeshow = true;
            },
            close () {
                this.completeshow = false;
            },
            submit() {
            if(!this.name){
                Toast({
                    message: '请输入您的姓名!',
                    duration: 1500
                });
                this.$refs.name.focus();
                return false;
            }
            if(!this.phone){
                Toast({
                    message: '请输入您的手机号码!',
                    duration: 1500
                });
                this.$refs.phone.focus();
                return false;
            }
            if(!this.testPhone.test(this.phone)){
                Toast({
                    message: '请输入正确手机号码!',
                    duration: 1500
                });
                this.$refs.phone.focus();
                return false;
            }
            if(!this.city){
                Toast({
                    message: '请选择省市县!',
                    duration: 1500
                });
                return false;
            }
            if(!this.address){
                Toast({
                    message: '请填写详细地址!',
                    duration: 1500
                });
                this.$refs.address.focus();
                return false;
            }
            //如果设置为默认地址就保存到localsorage
            if(this.radio){
                localStorage.name = this.name;
                localStorage.phone = this.phone;
                localStorage.address = this.city + this.address;
            }
            Toast({
                message: '创建成功!',
                iconClass: 'successIcon',
                duration: 1500
            });
            //this.$router.push('/personal/addressList');
        }
        }
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
.oks{
    color: #f00;
    margin-right: 0.4rem;
}
.recipi{
    border-top: 1px solid #ccc;
    padding: 0.4rem;
}
.margininput{
    width: 2rem;
    margin-right: 0.4rem;
    display: inline-block;
}
.plsechoose{
    float:right;
}
.addresslp{
    width: 3rem;
    word-wrap: break-word;
    word-break: normal;
}

.overlayer{
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    z-index:10;
    background: #000;
    opacity: 0.5;
}
.restaddress{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 8rem;
    height: 5rem;
    background: #fff; 
    border-radius: 0.3rem;
    text-align: center;
}
.restaddress p{
    font-size: 0.5rem;
    margin-top: 1rem;
    line-height: 1.3rem;
}
.closeaddress{
    position: absolute;
    bottom: 0;
    width: 100%;
    line-height: 1rem;
    font-size: 0.5rem;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
}
.closeaddress span{
    width: 50%;
    text-align: center;
} 
.closeaddress span a{
    color: #f00;
}
</style>
