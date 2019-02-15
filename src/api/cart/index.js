import {postData, getData} from '../api.js'

// 获取购物车商品内容
export function getCartList() {
    const url = 'cart/getList'
    const data = {
        
    }
    return getData(url, data)
}
// 加入购物车接口 zhangjie 0918
export function addGoodsToCart(cartGoodsId,goodsQuantity,cartSkuId) {
    const url = 'cart/addCart'
    const data = {
        cartGoodsId,
        goodsQuantity, 
        cartSkuId
    }
    return postData(url, data)
}

// 下单结算接口 zhangjie 0918
export function orderSettlement (buyType,cartIds,addressId,goodsId,skuId,goodsQuantity) {
    const url = 'order/settlement'
    const data = {
        buyType,
        cartIds, 
        addressId,
        goodsId,
        skuId,
        goodsQuantity
    }
    return postData(url, data)
}

// 结算下单生成订单并支付 zhangjie 0918
export function generatingOrder(buyType,cartIds,addressId,goodsId,skuId,goodsQuantity,memberCouponId,remark,payWay) {
    const url = '/order/generatingOrder'
    const data = {
        buyType,
        cartIds, 
        addressId,
        goodsId,
        skuId,
        goodsQuantity,
        memberCouponId,
        remark,
        payWay
    }
    return postData(url, data)
}

// 删除购物车 张杰 0919
 export function deleteCart(cartIds) {
    const url = 'cart/deleteInfo'
    const data = {
        cartIds
    }
    return postData(url, data)
 }

 // 修改购物车商品数量 张杰 0919
export function changeCartQuantity (cartId, goodsQuantity) {
    const url = 'cart/changeCart'
    const data = {
        cartId,
        goodsQuantity
    }
    return postData(url, data)
 }  

  //待付款 立即支付按钮
  export function immnetPayment (order_id, pay_way) {
     const url = 'order/payOrder'
     const data = {
        order_id,
        pay_way
     }
     return postData(url, data)
  }