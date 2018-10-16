const utils = {}

utils.translateQuery = function (obj, needEmpty = 'isNeedEmpty') {
  let query = ''
  for (let key in obj) {
    if (obj[key] || obj[key] === 0) {
      query += `&${key}=${obj[key]}`
    } else if (needEmpty === 'isNeedEmpty') {
      query += `&${key}=`
    }
  }
  return query.slice(1)
}

function fillZero (num) {
  return num < 10 ? `0${num}` : num
}

utils.fillZero = fillZero

utils.formatTime = function (time) {
  if (!time) {
    return time
  }
  let date = new Date(time)
  let Year = date.getFullYear()
  let Month = fillZero(date.getMonth() + 1)
  let Day = fillZero(date.getDate())
  let Hours = fillZero(date.getHours())
  let Minutes = fillZero(date.getMinutes())
  let Seconds = fillZero(date.getSeconds())
  let FormatTime = `${Year}-${Month}-${Day} ${Hours}:${Minutes}:${Seconds}`
  return FormatTime
}

utils.yearMonthTime = function (time) {
  if (!time) {
    return time
  }
  let date = new Date(time)
  let Year = date.getFullYear()
  let Month = fillZero(date.getMonth() + 1)
  let FormatTime = `${Year}-${Month}`
  return FormatTime
}

utils.formatDay = function (time) {
  if (!time) {
    return time
  }
  let date = new Date(time)
  let Year = date.getFullYear()
  let Month = fillZero(date.getMonth() + 1)
  let Day = fillZero(date.getDate())
  let FormatTime = `${Year}-${Month}-${Day}`
  return FormatTime
}

// [{value: '', label: ''}],根据value 返回label得知
utils.getLabel = function (dataList, itemValue) {
  if (!Array.isArray(dataList)) {
    return itemValue
  }
  let label = itemValue
  dataList.forEach(item => {
    if (item.value === itemValue) {
      label = item.label
    }
  })
  return label
}

/**
 * [trim 去除字符串空格]
 * @description [当参数g为'g'时表示去除字符串所有空格，否则去除字符串首尾空格]
 * @param  {[string]} str [源字符串]
 * @param  {[string]} g   [值为'g'或者其他]
 * @return {[string]}     [返回结果]
 */
utils.trim = function (str, g) {
  let result = str
  if (typeof str === 'string') {
    result = str.replace(/(^\s*)|(\s*$)/g, '')
    if (g && g.toLowerCase() === 'g') {
      result = result.replace(/\s/g, '')
    }
  }
  return result
}

export default utils
