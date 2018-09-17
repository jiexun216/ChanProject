import {postData,getData} from '../api.js'

// 获取商品列表
export function getGoodsList(categoryId,keyword,page) {
    const url = 'product/index'
    const data = {
        categoryId: categoryId,
        keyword:keyword,
        page:page
    }
    return getData(url, data)

}

// 获取商品详情
export function getGoodsInfo(goodsId) {
    const url = 'product/detail'
    const data = {
        goodsId: goodsId
    }
    return getData(url, data)

}
