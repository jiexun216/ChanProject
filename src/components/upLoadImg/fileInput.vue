<template>
  <input v-if="needCapture" type="file" accept='image/*' capture="camera" :id="id"
         @change="compress($event.target.files)" hidden multiple/>
  <input v-else="" type="file" accept='image/jpeg,image/gif,image/png' :id="id"
         @change="compress($event.target.files)" hidden/>
</template>

<script>
import { isAndroid, isWeiXin } from '@/api/upLoadImg/user-agent'
import { imageCompress } from '@/api/upLoadImg/image-compress'
import { blobToDataURL } from '@/api/upLoadImg/blob-url'
const maxSize = 1000000
export default {
  name: 'FileInput',
  mounted () {
  },
  props: {
    id: [String, Number]
  },
  data () {
    const needCapture = isWeiXin() && isAndroid()
    return {
      needCapture
    }
  },
  computed: {},
  methods: {
    compress (files) { // 转换为 base64 再提交
      Promise.all(
        [].map.call(
          files,
          file => file.size > maxSize ? imageCompress(file, { scale: 0.4 }, {}) : new Promise((resolve, reject) => blobToDataURL(file, base64 => resolve(base64)))
        )
      ).then(values => {
        this.$emit('input', values)
      }).catch(e => this.snackBar.error(e))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
