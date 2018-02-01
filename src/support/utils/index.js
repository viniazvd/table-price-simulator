const { clamp } = require('ramda')

export const toNumber = num => +num.replace(/(\.|,)/g, '')

export const toFixed = (num, positions) => num.toFixed(positions)
export const replaceComma = num => num.replace(',', '.')
export const convertToNumAndPercent = num => +num / 100
export const convertToNum = num => +num
export const sliceAfterComma = str => str.slice(0, -3)

export const isBetween = (min, max, num) =>
  clamp(toNumber(min), toNumber(max), toNumber(num)) === toNumber(num)
