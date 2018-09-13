import {postData,getData} from '../api.js'

// 获取优惠券列表
export function getCouponList(status) {
    const url = 'ucenter/couponList'
    const data = {
        status: status
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