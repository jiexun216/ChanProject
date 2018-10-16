import {postData, getData} from '../api.js'
export function getCartList(languageType) {
    const url = 'main/languageSwitch'
    const data = {
        languageType
    }
    return getData(url, data)
}