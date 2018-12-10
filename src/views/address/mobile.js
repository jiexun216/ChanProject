// 验证手机号码
export function mobileReg (value) {
  value = value.replace(/[^-|\d]/g, '')
  // // return /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9\-]{10,13}$/.test(value)
  // // return /^1[345789][0-9]{9}$/.test(value)
  // return /^\d{6,}$/.test(value)
  return /^\d{6,11}$/.test(value)
}

// 验证邮政编码
export function zipCodeReg (value) {
  value = value.replace(/[^-|\d]/g, '')
  return !/^\d{6}$/.test(value)
}

// 验证6~16位密码
export function passwordReg (value) {
  value = value.replace(/[^-|\d]/g, '')
  return /^[0-9a-zA-Z_]{6,16}$/.test(value)
}

// 验证4位图形验证码
export function imgCodeReg (value) {
  value = value.replace(/[^-|\d]/g, '')
  return /^[0-9a-zA-Z]{4}$/.test(value)
}

// 验证6位验证码
export function codeReg (value) {
  value = value.replace(/[^-|\d]/g, '')
  return /^[0-9]{6}$/.test(value)
}

// 验证18位省份证
export function idCardReg (value) {
  value = value.replace(/[^-|\d]/g, '')
  return /^([0-9]{15}$|^[0-9]{18}$|^[0-9]{17}([0-9]|X|x))$/.test(value)
}

// 验证16至21位银行卡号
export function bankCardReg (value) {
  value = value.replace(/[^-|\d]/g, '')
  return /^[0-9]{16,21}$/.test(value)
}

// 输入32到34位的字符
export function computeAddressReg (value) {
  value = value.replace(/[^-|\d]/g, '')
  return /^[0-9a-zA-Z]{32,34}$/.test(value)
}

// 验证42位以0x开头的字符
export function ethAddressReg (value) {
  value = value.replace(/[^-|\d]/g, '')
  return /^0x[0-9a-zA-Z]{40}$/.test(value)
}

// 验证最少20最多1000000的整数
export function moneyReg (value) {
  value = value.replace(/[^-|\d]/g, '')
  return /^[1-9][0-9]{2,6}$|^[2-9][0-9]$/.test(value)
}

// 验证大于或者等于0.001的有效值
export function coinReg (value) {
  value = value.replace(/[^-|\d]/g, '')
  return /^([1-9][0-9]*)([.][0-9]{1,8})?$|^0[.][0-9]{2}[1-9][0-9]{0,5}|0[.]0[1-9][0-9]{0,6}|0[.][1-9][0-9]{0,7}$/.test(value)
}

// 验证整数或两位小数（价钱）
export function floatFReg (value) {
  value = value.replace(/[^-|\d]/g, '')
  return /^([1-9][0-9]*)([.][0-9]{1,2})?$|^0[.][0-9][1-9]?$/.test(value)
}

// 验证正整数
export function intFReg (value) {
  value = value.replace(/[^-|\d]/g, '')
  return /^[1-9][0-9]*$/.test(value)
}

// 验证最少100最多1000000的整数
export function bigMoney (value) {
  value = value.replace(/[^-|\d]/g, '')
  return /^[1-9][0-9]{2,6}$/.test(value)
}
