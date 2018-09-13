import {postData,getData} from '../api.js'

// 获取地址列表 0912
export function getAddressList(page) {
    const url = 'address/getList'
    const data = {
        page: page,
    }
    return getData(url, data)

}

// 删除收货地址 zhangjie 0912
export function addressDelete(addressId) {
    const url = 'address/deleteInfo'
    const data = {
        id: addressId
    }
    return postData(url, data)
}
// 收货地址默认设置 zhangjie 0912
export function defaultAddressSet(addressId) {
    const url = 'address/setDefault'
    const data = {
        id: addressId
    }
    return postData(url, data)
}

// 获取地址详情 编辑地址页面 0912
export function getAddressInfo(id) {
    const url = 'address/getInfo'
    const data = {
        id: id,
    }
    return getData(url, data)
}

