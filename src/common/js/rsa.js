import { JSEncrypt } from 'jsencrypt'

export const rsaJsencrypt = (password) => {
  let publicKey = '-----BEGIN PUBLIC KEY-----'
  publicKey += 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC6VClo3glOd5G8Pema06uEU24Z'
  publicKey += 'SV11FHf/CGYao2aEhX9HLuzJPXMVfEa5FW7wkyFOK2kHFM1X0X9cD2IJKGmWnE7t'
  publicKey += 'GT3oCtxUlR9TVpzcgWmCOvLbhD82CpRITi0aSkdk9/CGTzfEnq6PWkPY0y5Iw3/e'
  publicKey += 'PM4nL3LfV0XLEkKmYQIDAQAB'
  publicKey += '-----END PUBLIC KEY-----'
  let encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey)
  let rsaPassWord = encryptor.encrypt(JSON.stringify({"encrypt": "yes", "password": password}))
  return rsaPassWord
}
