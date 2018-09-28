/**
 * dataURL(base64) to blob
 **/
export function dataURLtoBlob (dataUrl) {
  let arr = dataUrl.split(',')
  let mime = arr[0].match(/:(.*?)/)[1]
  let blobStr = atob(arr[1])
  let n = blobStr.length
  let uArr = new Uint8Array(n)
  while (n--) {
    uArr[n] = blobStr.charCodeAt(n)
  }
  return new Blob([uArr], { type: mime })
}

/**
 * blob to dataURL(base64)
 **/
export function blobToDataURL (blob, callback) {
  let a = new FileReader()
  a.onload = e => {
    callback(e.target.result)
  }
  a.readAsDataURL(blob)
}

/**
 * blob to url
 **/
export function blobToURL (blob) {
  return { url: window.URL.createObjectURL(blob), revokeFn: () => window.URL.revokeObjectURL(blob) }
}

/**
 * blob to download
 **/
export function download (target, downloadName) {
  let url = ''
  if (target instanceof Blob) {
    url = blobToURL(target)
  } else if (typeof target === 'string') {
    url = target
  }
  if (url) {
    let a = document.createElement('a')
    a.href = url.url || url
    a.download = downloadName || ''
    a.click()
    if (url.revokeFn) url.revokeFn()
    a = null
  }
}
