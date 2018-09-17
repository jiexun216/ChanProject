import {postData,getData} from '../api.js'

// 获取首页数据
export function getMainData() {
    const url = 'main/index'
    const data = {}
    return getData(url, data)
}
