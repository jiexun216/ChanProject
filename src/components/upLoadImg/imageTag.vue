<template>
  <img :src="img"
    :alt="alt"
    ref="image"
    @load="$emit('load',$event.target)"
    @click="stopDefault($event);$emit('click',$event)"
    @dragstart="$emit('dragStart',$event)"
    @dragend="$emit('dragEnd',$event)">
</template>

<script>
import { blobToURL } from '@/api/upLoadImg/blob-url'
import { stopDefault } from '@/api/upLoadImg/browser-default'

const validators = {
  isBase64: val => typeof val === 'string' && val.indexOf('data') === 0,
  isFileList: val => val instanceof FileList,
  isFile: val => val instanceof File,
  isBlobImg: val => val instanceof Blob && val.type.indexOf('image') === 0,
  isLoginImg: val => val.url && val.needLogin
}

export default {
  name: 'image-tag',
  mounted () {
    this.convert(this.src)
  },
  props: {
    defaultImg: String,
    src: {
      validator (val) {
        return !val || Object.values(validators).some(fn => fn(val)) || (val instanceof Array && (validators.isBase64(val[0]) || validators.isFile(val[0]) || validators.isBlobImg(val[0])))
      }
    },
    alt: String
  },
  data () {
    return {
      img: ''
    }
  },
  watch: {
    src (val) {
      this.convert(val)
    }
  },
  methods: {
    convert (val) {
      this.img = this.defaultImg
      if (!val || typeof val === 'string') {
        this.img = val
      } else if (validators.isFileList(val) || (val instanceof Array && (validators.isBase64(val[0]) || validators.isFile(val[0]) || validators.isBlobImg(val[0])))) {
        if (validators.isBase64(val[0])) this.img = val[0]
        else this.setImg(blobToURL(val[0]))
      } else if (validators.isFile(val) || validators.isBlobImg(val)) {
        this.setImg(blobToURL(val))
      } else if (validators.isLoginImg(val)) {
        // 适用于获取的图片需要验证登录的情况
        this.$cache.getFile(val.url).then(blob => {
          this.setImg(blobToURL(blob))
        }).catch(e => this.snackBar.error(e))
      }
    },
    stopDefault,
    setImg (blobUrl) {
      this.img = blobUrl.url
      this.$refs.image.onload = blobUrl.revokeFn
    }
  },
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  /* float: left; */
}
</style>
