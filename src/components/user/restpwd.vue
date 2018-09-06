<template>
<div>
    <div class="rest-top">
        <router-link to="/forget" class="theLogin-back"></router-link>
        <span>重置密码</span>
     </div>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="请输入密码"></el-input>
        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="请确认密码" class="demo-repwd"></el-input>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
      <el-button @click="resetForm('ruleForm2')">重置</el-button>
    </el-form-item>
</el-form>
</div>
</template>

<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
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
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          // if (valid) {
          // } else {
          //   console.log('error submit!!');
          //   return false;
          // }
          this.$postData('./member/message',{
            data: {
              mobile: '',
              type: ''
            }
          }).then(res => {
             console.log(res);
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
  margin-top:1rem;
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
