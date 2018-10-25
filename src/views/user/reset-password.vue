<template>
<div>
    <div class="rest-top">
        <p @click="$router.back(-1)" class="theLogin-back"></p>
        <span>{{$t(repwd)}}</span>
     </div>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
      </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm2')">{{$t(submit)}}</el-button>
      <el-button @click="resetForm('ruleForm2')">{{$t(reset)}}</el-button>
    </el-form-item>
     
</el-form>
</div>
</template>

<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
import { rsaJsencrypt } from "@/common/js/rsa.js";
import { setMemberPassword } from "@/api/user/index.js";
Vue.use(ElementUI);

  export default {
    data() {
      
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        repwd: 'common.repwd',
        submit: 'common.submit',
         reset: 'common.reset',
        ruleForm2: {
          pass: '',
          checkPass: '',
          tel: '',
          code: '',
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           // console.log(valid)
          } else {
           // console.log('error submit!!');
            return false;
          }
          this.ruleForm2.tel  = this.$route.query.tel ? this.$route.query.tel : ''
          this.ruleForm2.code = this.$route.query.code ? this.$route.query.code : ''
          let password = rsaJsencrypt(this.ruleForm2.pass);
          let fpassword = rsaJsencrypt(this.ruleForm2.checkPass);
          setMemberPassword (this.ruleForm2.tel,this.ruleForm2.code,password,fpassword).then(res => {
            this.$toast(res.data.message ? res.data.message : '操作失败');
            if (res.data.status == 0) {
               this.$router.push({name: 'PasswordLogin'})
             }
          });
        
          this.$postData('./member/message',{
            data: {
              mobile: '',
              type: ''
            }
          }).then(res => {
            // console.log(res);
          }).catch(err =>{
             return err
          })
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>
  .rest-top{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:0.45rem;
  margin-bottom: 2rem;
}
.theLogin-back{
  width:1.2rem;
  height:1.2rem;
  background: url(../../assets/img/42.png) no-repeat center; 
  position: absolute;
  left:0.05rem;
}
.demo-ruleForm{
    color:#f00;
    margin: 0.4rem;
    margin-top:1rem;

}
.demo-repwd{
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 0.1rem;
    outline: none;
}

</style>
