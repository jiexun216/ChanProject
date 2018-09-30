<template>
  <label v-if="canEdit" class="file-input" :for="id">
    <template v-if="!myValue">
      <!-- <img :src="require('assets/icon-upload.png')" alt=""> -->
      <!-- <i class="icon">重新拍照</i> -->
      <div class="file_width">
        <span class="el-icon-upload"></span>
        <br/>
        <span>{{tip || '点击拍照'}}</span>
      </div>
    </template>
    <template v-else="">
      <img-tag :src="myValue" alt="" @click="$emit('imgClick',myValue)"/>
      <!-- 上传成功： -->
      <!-- <img :src="require('assets/icon-edit.png')" alt="" class="edit"> -->
      <span class="icon">重新上传图片</span>
    </template>
    <file-input v-if="type!=='file'" :id="id" @input="input"/>
    <input v-else :id='id' type="file" @change="input($event.target.files)" hidden>
  </label>
  <img-tag class="img" v-else=""
           :src="typeof myValue==='string'&&myValue.indexOf('http')>-1?{url:myValue,needLogin:true}:myValue"
           @click="$emit('imgClick',myValue)"/>
</template>

<script>
import imgTag from '@/components/upLoadImg/imageTag.vue'
import FileInput from '@/components/upLoadImg/fileInput'
export default {
  name: 'MyFileInput',
  components: {FileInput, imgTag},
  beforeMount () {
    this.setMyValue(this.value)
  },
  props: {
    id: [String, Number],
    value: [String, Number, Object, FileList, File],
    type: {
      type: String,
      default: 'image'
    },
    tip: String,
    canEdit: {
      default: true,
      type: Boolean
    }
  },
  data () {
    return {
      myValue: null
    }
  },
  computed: {},
  watch: {
    value (val) {
      this.setMyValue(val)
    }
  },
  methods: {
    input (val) {
      if (val.length > 0) {
        this.setMyValue(val)
        this.$emit('input', val)
      }
    },
    setMyValue (val) {
      if (val) this.myValue = this.type === 'file' ? '上传' : val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.file_width {
  width: 150px;
  height: 150px;
  background: #fff;
  border: 1px solid #ddd;
  text-align: center;
  margin-top: 20px;
}
.el-icon-upload {
  font-size: 30px;
  margin: 35px 0 20px 0;
}
</style>
