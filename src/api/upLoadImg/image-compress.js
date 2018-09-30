import { blobToURL } from '@/api/upLoadImg/blob-url'

export function imageCompress (file, { scale = 0.5, width }, { type = 'image/jpeg', quality = 0.8 }) {
  return new Promise((resolve, reject) => {
    if (!(file instanceof File || file instanceof HTMLImageElement)) throw new Error('参数 file 必须为 File 对象或者 HTMLImageElement 对象')
    if (!scale && !width) throw new Error('必须指定一种压缩方式，scale 表示压缩倍数，width 表示将图片压缩到 width 宽度')

    let canvas = createElement('canvas')
    let img = file instanceof File ? createElement('img') : file

    if (file instanceof File) {
      const blobUrl = blobToURL(file)
      img.src = blobUrl.url
      img.onload = () => {
        compress(canvas, img, resolve, { scale, width }, { type, quality })
        canvas = null
        img = null
        blobUrl.revokeFn()
      }
    } else {
      compress(canvas, img, resolve, { scale, width }, { type, quality })
      canvas = null
      img = null
    }
  })
}

export function compress (canvas, img, callback, { scale = 0.5, width }, { type = 'image/jpeg', quality = 0.8 }) {
  const ctx = canvas.getContext('2d')
  const originSize = img.naturalWidth ? { width: img.naturalWidth, height: img.naturalHeight } : { width: img.width, height: img.height }
  const size = {
    width: width || originSize.width * scale,
    height: width ? originSize.height * width / originSize.width : originSize.height * scale
  }

  canvas.width = size.width
  canvas.height = size.height

  ctx.drawImage(img, 0, 0, size.width, size.height)
  callback(canvas.toDataURL(type, quality))
}

export function createElement (tag) {
  return document.createElement(tag)
}
