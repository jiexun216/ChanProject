import axios from 'axios'
import * as config from '../../config/config.js'

axios.defaults.baseURL = process.env.NODE_ENV==='production'? config.backendUrl:'/api/v1'
// axios.defaults.baseURL = '/api/v1'
export const getData = function (url, data = {}) { // 创建get请求方式
  return axios({
    url,
    params: data,
    headers: setHeaders()
  })
}
export const postData = function (url, data = {}) { // post请求方式
  return axios({
    url,
    data: data,
    method: 'post',
    headers: setHeaders()
  })
}
export const deleteData = function (url, data = {}) {
  return axios({
    url,
    data: data.data,
    method: 'delete',
    headers: setHeaders()
  })
}
export const putData = function (url, data = {}) {
  return axios({
    url,
    data: data.data,
    method: 'put',
    headers: setHeaders()
  })
}

function setHeaders () {
  return {
    'Content-Type': 'application/json'
  }
}
