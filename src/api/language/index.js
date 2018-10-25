import {postData, getData} from '../api.js'
export function languageList(languageType) {
    const url = 'main/languageSwitch'
    const data = {
        languageType
    }
    return postData(url, data)
}