<template>
  <div v-if="!canEdit" class="content-card input_width el-input">
    <!-- <my-head :icon="require('assets/icon-info-4.png')" :text="head"/>  -->
    <div v-for="(img,i) in photos" class="img-wrap" :key="i">
      <img-tag class="image-1" :key="i" :src="{url:img.path,needLogin:true}" @click="showImg1(i)"/>
    </div>
  </div>
  <div v-else class="content-card">
    <div v-for="(img,i) in photos" class="img-wrap" :key="i">
      <img-tag class="image" :key="i" :src="img" @click="showImg(i)"/>
      <div class="btn font-red" @click="deletePhoto(i)">删除</div>
    </div>
    <label :for="'logisticsPhoto'" class="add"><span class="el-icon-picture-outline"></span><br/>点击上传</label>
    <file-input :id="'logisticsPhoto'" @input="addPhoto" multiple/>
  </div>
</template>

<script>
import imgTag from '@/components/upLoadImg/imageTag.vue'
import fileInput from '@/components/upLoadImg/fileInput.vue'
export default {
  name: 'Photos',
  props: {
    canEdit: Boolean,
    photos: {
      default () {
        return []
      },
      type: Array
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {
    input (item, val) {
      item.value = val
      this.$emit('input', this.items)
    },
    showImg (i) {
      this.imgFullScreen.open({ imgs: this.photos.map(img => ({ value: img })), index: i })
    },
    addPhoto (fileList) {
      [].map.call(fileList, file => this.photos.push(file))
    },
    deletePhoto (i) {
      this.photos.splice(i, 1)
    },
    showImg1 (i) {
      this.imgFullScreen.open({
        imgs: this.photos.map(img => ({ value: { url: img.path, needLogin: true } })),
        index: i
      })
    }
  },
  components: {fileInput, imgTag}
}
</script>

<style lang="scss" scoped>
.content-card {
  width: 70%;
  float: left;
  .img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
}
.add {
  @include bg(100px, auto, #f5f7fa);
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  padding: 0 0px 10px 0px;
  text-align: center;
  .el-icon-picture-outline {
     font-size: 50px;
     color: #999;
     margin-top: 20px;
  }
}
.img-wrap {
  @include bg(110px, 131px, #fff);
  border: 1px solid #dcdfe6;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
  text-align: center;
  .btn {
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
}
</style>
