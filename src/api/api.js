import axios from 'axios'
axios.defaults.baseURL = '/api/v1'

export const getData = function (url, data = {}) {
  return axios({
    url,
    params: data.params,
    headers: setHeaders()
  })
}
export const postData = function (url, data = {}) {
  return axios({
    url,
    data: data.data,
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
