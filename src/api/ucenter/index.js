import {postData,getData} from '../api.js'

// 个人中心首页 0913 zhangjie
export function getIndex() {
    const url = 'ucenter/index'
    const data = {}
    return getData(url, data)
}

// 获取会员信息 0913
export function getMemberInfo() {
    const url = 'member/getInfo'
    const data = {}
    return getData(url, data)
}

// 修改个人资料接口 zhangjie 0913
export function modifyUserName(userName) {
    const url = 'ucenter/modifyUserName'
    const data = {
        userName: userName
    }
    return postData(url, data)
}

// 意见反馈接口 zhangjie 0913
export function issueOpinion(opinion) {
    const url = 'ucenter/issueOpinion'
    const data = {
        opinion: opinion
    }
    return postData(url, data)
}

// 退出登录 0914 zhangjie
export function exitLogon() {
    const url = 'ucenter/exitLogon'
    const data = {}
    return getData(url, data)
}