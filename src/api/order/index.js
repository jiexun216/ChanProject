import {postData,getData} from '../api.js'

// 获取订单列表
export function getOrderList(status, page) {
    const url = 'order/list'
    const data = {
        status: status,
        page: page,
    }
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

// 订单确认收货 zhangjie 0911
export function orderConfirm(orderId) {
    const url = 'order/confirmOrder'
    const data = {
        orderId: orderId
    }
    return postData(url, data)
}

// 获取订单详情
export function getOrderInfo(orderId) {
    const url = 'order/detail'
    const data = {
        id: orderId
    }
    return getData(url, data)
}