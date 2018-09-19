import Vue from 'vue'
import Router from 'vue-router'
import Language from '@/components/index/language'
import Search from '@/components/index/search'
import GoodsDetails from '@/components/index/goodsdetails'
import Content from '@/components/index/content'
import ParamBase from '@/components/index/paramBase'
import purchaseNotice from '@/components/index/PurchaseNotice'
import Message from '@/components/index/message'
import Personal from '@/components/personal/personal'
import Myorder from '@/components/personal/myorder'
import Payment from '@/components/personal/payment'
import Allorder from '@/components/personal/allorder'
import Forgoods from '@/components/personal/forgoods'
import Orderdetails from '@/components/personal/orderdetails'
import Logisticsinfo from '@/components/personal/logisticsinfo'
import Dontuse from '@/components/personal/dontuse'
import Harvestaddress from '@/components/address/harvestaddress'
import Newaddress from '@/components/address/newaddress'
import Address from '@/components/address/address'
import Personaldata from '@/components/setupthe/personaldata'
import Binding from '@/components/setupthe/binding'

import Feedback from '@/components/setupthe/feedback'
import Cargoods from '@/views/car/cargoods'
import EditorGoods from "@/views/car/editorGoods"
import Settlement from "@/views/settlement/settlement"
import Empty from "@/views/car/empty"
 
// zhangjie
import OrderList from '@/views/order/list'
import OrderDetail from '@/views/order/detail'
import AddressList from '@/views/address/list'
import AddressEdit from '@/views/address/edit'
import CouponList from '@/views/coupon/list'
import UcenterSetup from '@/views/ucenter/setup'
import UcenterPersonnalData from '@/views/ucenter/personaldata'
import UcenterFeedback from '@/views/ucenter/feedback'
import UcenterIndex from '@/views/ucenter/index'
import Index from '@/views/index/index'
import GoodsList from '@/views/goods/list'
import GoodsDetail from '@/views/goods/detail'
import UserPwdLogin from '@/views/user/password-login'
import UserRegister from '@/views/user/register'
import UserMobileLogin from '@/views/user/mobile-login'
import UserFindPass from '@/views/user/find-pass'
import ResetPassword from '@/views/user/reset-password'
import CartList from '@/views/cart/list'
import CartSettlement from "@/views/cart/settlement"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    // 账号密码登录
    {
      name: 'PasswordLogin',
      path: '/user/password-login',
      component: UserPwdLogin,
      meta: { title: '密码登录' }
    },
    // 用户注册
    {
      name: 'userRegister',
      path: '/user/register',
      component: UserRegister,
      meta: { title: '用户注册' }
    },
    // 手机登录
    {
      name: 'userMobileLogin',
      path: '/user/mobile-login',
      component: UserMobileLogin,
      meta: { title: '手机登录' }
    },
    // 密码找回
    {
      name: 'userFindPass',
      path: '/user/find-pass',
      component: UserFindPass,
      meta: { title: '找回密码' }
    },
    // 密码找回-重置密码
    {
      name: 'resetPassword',
      path: '/user/reset-password',
      component: ResetPassword,
      meta: { title: '找回密码' }
    },

    // 订单管理
    {
      name: 'orderList',
      path: '/order/list',
      component: OrderList,
      meta: { title: '我的订单' }
    },
    {
      name: 'orderDetail',
      path: '/order/detail',
      component: OrderDetail,
      meta: { title: '订单详情' }
    },
    // 地址管理
    {
      name: 'addressList',
      path: '/address/list',
      component: AddressList,
      meta: { title: '我的地址' }
    },
    {
      name: 'addressEdit',
      path: '/address/edit',
      component: AddressEdit,
      meta: { title: '添加修改地址' }
    },
    // 优惠券管理
    {
      name: 'couponList',
      path: '/coupon/list',
      component: CouponList,
      meta: { title: '我的优惠券' }
    },
    // 个人中心
    {
      name: 'ucenterIndex',
      path: '/ucenter/index',
      component: UcenterIndex,
      meta: { title: '个人中心' }
    },
    {
      name: 'ucenterSetup',
      path: '/ucenter/setup',
      component: UcenterSetup,
      meta: { title: '设置' }
    },
    {
      name: 'ucenterPersonal',
      path: '/ucenter/personaldata',
      component: UcenterPersonnalData,
      meta: { title: '个人资料' }
    },
    {
      name: 'ucenterFeedback',
      path: '/ucenter/feedback',
      component: UcenterFeedback,
      meta: { title: '意见反馈' }
    },
    // 商品列表
    {
      name: 'goodsList',
      path: '/goods/list',
      component: GoodsList,
      meta: { title: '商品列表' }
    },
    {
      name: 'goodsDetail',
      path: '/goods/detail',
      component: GoodsDetail,
      meta: { title: '商品详情' }
    },
    // 购物车
    {
      name: 'cartList',
      path: '/cart/list',
      component: CartList,
      meta: { title: '购物车列表' }
    },
    {
      name: 'cartSettlement',
      path: '/cart/settlement',
      component: CartSettlement,
      meta: { title: '结算确认' }
    },






    
    {
      path: '/Message',
      name: 'Message',
      component: Message
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/language',
      name: 'Language',
      component: Language
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/goodsDetails',
      name: 'GoodsDetails',
      component: GoodsDetails,
      children: [
        {
          path: '/content',
          component: Content
        },
        {
          path: '/paramBase',
          component: ParamBase
        },
        {
          path: '/purchaseNotice',
          component: purchaseNotice
        }
      ]
    },
    {
      path: '/myorder',
      name: 'Myorder',
      component: Myorder,
      children: [
        {
          path: '/payment',
          name: 'payment',
          component: Payment
        },
        {
          path: '/allorder',
          name: 'Allorder',
          component: Allorder
        },
        {
          path: '/forgoods',
          name: 'Forgoods',
          component: Forgoods
        }
      ]
    },
    {
      path: '/orderdetails',
      name: 'Orderdetails',
      component: Orderdetails
    },
    {
      path: '/logisticsinfo',
      name: 'Logisticsinfo',
      component: Logisticsinfo
    },
    {
      path: '/dontuse',
      name: 'Dontuse',
      component: Dontuse
    },
    {
      path: '/harvestaddress',
      name: 'Harvestaddress',
      component: Harvestaddress
    },
    {
      path: '/newaddress',
      name: 'Newaddress',
      component: Newaddress
    },
    
    {
      path: '/Personaldata',
      name: 'Personaldata',
      component: Personaldata
    },
    {
      path: '/Binding',
      name: 'Binding',
      component: Binding
    },
    {
      path: '/Feedback',
      name: 'Feedback',
      component: Feedback
    },
    //购物车
    {
      path: '/Cargoods',
      name: 'Cargoods',
      component: Cargoods
    },
    {
      path: '/EditorGoods',
      name: 'EditorGoods',
      component: EditorGoods
    },{
      path: '/Settlement',
      name: 'Settlement',
      component: Settlement
    },{
      path: 'Empty',
      name: 'Empty',
      component: Empty
    }
  ]
})
