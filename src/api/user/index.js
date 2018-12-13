import {postData,getData} from '../api.js'


// 账号密码登录 zhangjie 0914
export function passwordLogin(mobile,password) {
    const url = 'member/login'
    const data = {
        mobile,
        password
    }
    return postData(url, data)
}

// 发送短信 zhangjie 0914
export function messageSend(mobile,type,district_code) {
    const url = 'member/message'
    const data = {
        mobile,
        type,
        district_code
    }
    return postData(url, data)
}

// 短信验证码验证 zhangjie 0914
export function verifyMessageCode(telephone,code,type) {
    const url = 'member/verifyCode'
    const data = {
        telephone,
        code,
        type
    }
    return postData(url, data)
}

// 手机号注册 zhangjie 0914 
export function registerMember(telephone, verify_code, password, fpassword,district_code) {
    const url = 'member/register'
    const data = {
        telephone,
        verify_code,
        password,
        fpassword,
        district_code
    }
    return postData(url, data)
}

// 找回密码重置密码接口 zhangjie 0917
export function setMemberPassword(telephone, verify_code, password, fpassword) {
    const url = 'member/setPassword'
    const data = {
        telephone,
        verify_code,
        password,
        fpassword
    }
    return postData(url, data)
}

//国家手机号前缀
export function countryPhone (district_code) {
    const url = 'member/getDistrict'
    const data = {
        district_code
    }
    return postData(url, data)
}

