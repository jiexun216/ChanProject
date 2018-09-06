import axios from 'axios'
import Cookie from 'js-cookie'
// import {JSEncrypt} from '@/assets/js/jsencrypt.min.js'
axios.defaults.baseURL = '/api/v1'
let jsessionId = localStorage.getItem('jsessionId')

// 登录操作，登录成功做本地处理并将请求成功的数据进行返回
export const handleLogin = function ({name, password, remember}) {
  // 从本地获取登录标识登录标识
  let userPass = password
  let params = new URLSearchParams()
  params.append('username', name)
  params.append('password', userPass)
  params.append('grant_type', 'password')
  params.append('scope', 'app')
  params.append('client_id', 'webApp')
  params.append('client_secret', 'webApp')
  return axios.post('/member/login', params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer'
    }
  }).then(({data}) => {
    jsessionId = data.access_token
    // let goSunUserCode = data.userId
    // let goSunUserName = name
    localStorage.setItem('jsessionId', jsessionId)
    // localStorage.setItem('goSunUserCode', goSunUserCode)
    // localStorage.setItem('goSunUserName', goSunUserName)
    axios.post('/member/login', {
      name,
      password: userPass,
      ip: 'localhost',
      loginType: 'web'
    }, {
      headers: setHeaders()
    }).then(({ data }) => {
      // errorCode === 1002 用户不存在
      if (data.resthead && data.resthead.errorCode === 0) {
        // 登录成功，如果 remember === true 将用户信息存储，
        let goSunUserCode = data.restbody.id
        let goSunUserName = name
        localStorage.setItem('goSunUserCode', goSunUserCode)
        localStorage.setItem('goSunUserName', goSunUserName)
        Cookie.set('goSunJSESSIONID', jsessionId)
        return Promise.resolve(data.restbody)
      } else {
        return Promise.reject(data.resthead.message)
      }
    }).catch(error => {
      if (process.env.NODE_ENV === 'development') {
        return error
      }
      return Promise.reject(error)
    })
  })
}

function setHeaders () {
  return {
    Authorization: 'Bearer ' + jsessionId || localStorage.getItem('jsessionId'),
    'Content-Type': 'application/json'
  }
}
