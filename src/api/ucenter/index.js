import {postData,getData} from '../api.js'

// 获取会员信息 0913
export function getMemberInfo() {
    const url = 'member/getInfo'
    const data = {}
    return getData(url, data)
}

// 取消订单 zhangjie 0911
export function cancelOrder(orderId) {
    const url = 'Order/cancelOrder'
    const data = {
        orderId: orderId
    }
    return postData(url, data)
}