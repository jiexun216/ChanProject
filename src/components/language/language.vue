<template>
   <div>
       <div class="lang-top">
           <router-link to="/index">
             <i class="icun lang"></i>
           </router-link>
          <p class="choose">{{language}}</p>
       </div>
       <keep-alive> 
         <el-radio-group v-model="radio2" @change="changeLang(radio2)">
            <el-radio :label="value.lang" v-for="(value, index) in raioLang" :key="index" 
                      :click="languaging(index)" style="margin-left:0;"> {{value.name}}
            </el-radio>
         </el-radio-group>
       </keep-alive>
       
       <!-- <my-file @input="input($event)"></my-file> -->
   </div>    
</template>

<script>
import { mapState } from 'vuex'
import myFile from '@/components/upLoadImg/myFile.vue'
import {  languageList } from '@/api/language/index.js'
export default {
  data () {
    return {
      language: '语言选择',
      radio2: '',
      photosList: [],
      raioLang: [
        {lang: 'chinese', name: '简体中文'},
        {lang: 'english', name: 'English'},
        {lang: 'character', name: '繁體中文'}
      ]
    }
  },
  created () {
    
  },
  methods: { 
    postData () {
      var languageType =  this.radio2
      languageList (languageType).then( res => {
       // this.$toast(res.data.message ? res.data.message : '操作失败')
        }) 
    },
    languaging () {
      // console.log(this.radio2)
      this.postData();
    },
    changeLang (lang) {
      this.$store.commit('SET_LANG', lang)
      this.$i18n.locale = lang
      this.$router.push({path:'/'})
      localStorage.setItem('local',lang)
    },
    input(val) {
      this.photosList = val  //获取到的图片路径base64
    },
  },
  computed: {
    ...mapState(['lang'])
  },
  mounted() {
      this.radio2 = this.lang ? this.lang : 'chinese'
  },
  components: {myFile}
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
.el-radio-group{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 0.5rem;
 
}
.el-radio {
  width: 100%;
  padding: 0 30px 20px 30px;
  box-sizing: border-box;
}
/* .el-radio +.el-radio {
  margin-left: 0;
} */
.el-radio__label {
  float: right;
}
</style>
