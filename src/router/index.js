import Vue from 'vue'
import Router from 'vue-router'


import Language from '@/views/language/language'
import Forgoods from '@/components/personal/forgoods'
import Logisticsinfo from '@/components/personal/logisticsinfo'
import Binding from '@/components/setupthe/binding'

 
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
import UcenterMessage from '@/views/ucenter/message'
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
import CartEdit from "@/views/cart/edit"
import FortuneIndex from '@/views/fortunetellers/index'
import FortuneNoLog from '@/views/fortunetellers/no-fortune-log'
import ContentFortune from '@/views/fortunetellers/contentfortune'
import Results from '@/views/fortunetellers/results'
import fortunelist from '@/views/fortunetellers/fortunelist'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      redirect: '/index'
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
      meta: { title: '个人' }
    },
    {
      name: 'ucenterMessage',
      path: '/ucenter/message',
      component: UcenterMessage,
      meta: { title: '消息中心' }
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
      meta: { title: '购物车' }
    },
    {
      name: 'cartEdit',
      path: '/cart/edit',
      component: CartEdit,
      meta: { title: '购物车编辑' }
    },
    {
      name: 'cartSettlement',
      path: '/cart/settlement',
      component: CartSettlement,
      meta: { title: '结算确认' }
    },
    // 算命首页
    {
      name: 'fortuneTellers',
      path: '/fortunetellers/index',
      component: FortuneIndex
    },
    {
      name: 'fortuneList',
      path: '/fortunetellers/fortunelist',
      component: fortunelist
    },
    {
      name: 'fortuneNoLog',
      path: '/fortunetellers/no-fortune-log',
      component: FortuneNoLog
    },
    // 算命基本、命盘等
    {
      name: 'contentfortune',
      path: '/fortunetellers/contentfortune',
      component: ContentFortune
    },
    // 算命结果
    {
      name: 'results',
      path: '/fortunetellers/results',
      component: Results
    },



    

    {
      path: '/index',
      name: 'Index',
      component: Index,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/language',
      name: 'Language',
      component: Language
    },
    {
      path: '/logisticsinfo',
      name: 'Logisticsinfo',
      component: Logisticsinfo
    },
    {
      path: '/Binding',
      name: 'Binding',
      component: Binding
    }
  ]
})
