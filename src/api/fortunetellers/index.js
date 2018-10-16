import {postData,getData} from '../api.js'
//算命列表接口
export function fortunetellers () {
    const url = 'fortune/list'
    const data ={}
    return getData(url, data)
}


//算命结果接口
export function fortuneresults (fortuneId) {
    const url = 'fortune/telling'
    const data = {
        fortuneId: fortuneId
    }
    return getData(url, data)
}
//添加算命的接口
export function addfortune (fullName,sex,birthDate,birthTime,birthAddress) {
    const url = 'fortune/addFortune'
    const data = {
        fullName,
        sex,
        birthDate,
        birthTime,
        birthAddress
    }
    return postData(url,data)
}

//删除算命记录
export function deleteFortune (fortuneId) {
    const url = 'fortune/deleteFortune'
    const data = {
        fortuneId
    }
    return postData(url,data)
}
//意见反馈接口
export function issueComment(comment,fortuneId) {
    const url = 'fortune/editComment'
    const data = {
        comment,
        fortuneId
    }
    return postData(url, data)
}