<template>
   <div>
       <div class="lang-top">
           <router-link to="/index">
             <i class="icun lang"></i>
           </router-link>
          <p class="choose">{{language}}</p>
       </div>
       <!-- <div class="lang-con">
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
       </div> -->
       <el-radio-group v-model="radio2" @change="changeLang(radio2)">
          <el-radio :label="value.lang" v-for="value in raioLang">{{value.name}}</el-radio>
       </el-radio-group>
   </div>    
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      language: '语言选择',
      radio2: '',
      raioLang: [
        {lang: 'chinese', name: '简体中文'},
        {lang: 'english', name: 'English'},
        {lang: 'character', name: '繁體中文'}
      ]
      //  value1: true,
      //  value2: true,
      //  value3: false,
      //  value4: false
    }
  },
  methods: {
    changeLang (lang) {
      this.$store.commit('SET_LANG', lang)
      this.$i18n.locale = lang
    }
  },
  computed: {
    ...mapState(['lang'])
  },
  mounted() {
    this.radio2 = this.lang ? this.lang : 'chinese'
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
.el-radio {
  width: 100%;
  padding: 0 30px 20px 30px;
  box-sizing: border-box;
}
.el-radio+.el-radio {
  margin-left: 0;
}
.el-radio__label {
  float: right;
}
</style>
