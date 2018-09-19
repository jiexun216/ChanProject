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
export function orderSettlement(buyType,cartIds,addressId,goodsId,skuId,goodsQuantity) {
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
    const url = 'order/generatingOrder'
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

// 编辑购物车（实现增删）
 export function EditorGoods() {
     
 }