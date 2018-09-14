import Vue from 'vue'
import Router from 'vue-router'
import TheLogin from '@/components/user/theLogin'
import Registered from '@/components/user/registered'
import UserPwdLogin from '@/components/user/userPwdLogin'
import Forget from '@/components/user/forget'
import RestPwd from '@/components/user/restpwd'
import Index from '@/components/index/index'
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
import Setup from '@/components/setupthe/setup'
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
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
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
    {
      name: 'couponList',
      path: '/coupon/list',
      component: CouponList,
      meta: { title: '我的优惠券' }
    },
    // 个人中心
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
      meta: { title: '设置' }
    },






    {
      path: '/theLogin',
      name: 'TheLogin',
      component: TheLogin
    },
    {
      path: '/Message',
      name: 'Message',
      component: Message
    },
    {
      path: '/registered',
      name: 'Registered',
      component: Registered
    },
    {
      path: '/userPwdLogin',
      name: 'UserPwdLogin',
      component: UserPwdLogin
    },
    {
      path: '/forget',
      name: 'Forget',
      component: Forget
    },
    {
      path: '/restpwd',
      name: 'RestPwd',
      component: RestPwd
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
      path: '/personal',
      name: 'Personal',
      component: Personal
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
      path: '/Setup',
      name: 'Setup',
      component: Setup
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
