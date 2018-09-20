<template>
   <div>
       <div class="lang-top">
           <router-link to="/index">
             <i class="icun lang"></i>
           </router-link>
          <p class="choose">{{language}}</p>
       </div>
       <div class="lang-con">
           <div class="lang-zn">
               <span>简体中文</span>
               <el-switch
                    v-model="value2"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                    </el-switch>
           </div>
            <div class="lang-zn">
               <span>繁體中文</span>
               <el-switch
                    v-model="value3"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                    </el-switch>
           </div>
           <div class="lang-zn">
               <span>English</span>
               <el-switch
                    v-model="value4"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                    </el-switch>
           </div>
       </div>
   </div>    
</template>

<script>
    export default {
        data () {
            return {
                language: '语言选择',
                 value1: true,
                 value2: true,
                 value3: false,
                 value4: false
            }
        }
    }
</script>

<style>
.lang-top{
    font-size: 0.5rem;
    line-height:1rem;   
    display: flex;
    justify-content: left;
}
.icun{
  display:block;
  width: 1rem;
  height: 1rem;
  background-size: cover;
}
.lang{
    background: url(../../assets/img/42.png) no-repeat  center center;
}
.choose{
    margin: 0 auto;
}
.lang-con{
    margin: 0.4rem;
}
.lang-zn{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.5rem;
    line-height: 1rem;
}
</style>
