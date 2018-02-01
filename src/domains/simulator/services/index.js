import http from '../../../support/http'
import { range, mapAccum } from 'ramda'
import { toFixed, replaceComma, convertToNumAndPercent, convertToNum, sliceAfterComma } from '../../../support/utils'

const calculateInstallment = (lending, parcels, interest) => {
  const aux = Math.pow(1 + interest, parcels)
  return convertToNum(toFixed(lending * (aux * interest / (aux - 1)), 4))
}

const priceTable = ({ strLending, parcels, strBaseInterest }) => {
  const lending = convertToNum(replaceComma(sliceAfterComma(strLending)))

  const baseInterest = convertToNumAndPercent(strBaseInterest)

  const installment = calculateInstallment(lending, parcels, baseInterest)

  const tableRow = (data, index) => {
    const month = index + 1
    installment
    const interest = data.lending * baseInterest
    const amortisation = installment - interest
    const lending = Math.max(0, data.lending - amortisation)

    const next = {
      month,
      installment: toFixed((installment * 1000), 2),
      interest: toFixed((interest * 1000), 2),
      amortisation: toFixed((amortisation * 1000), 2),
      lending: toFixed(lending, 4)
    }
    return [next, next]
  }

  return mapAccum(tableRow, { lending }, range(0, parcels))[1]
}

export const requestTablePrice = async (strLending, parcels, strBaseInterest) => {
  const response = await http.post('post', { strLending, parcels, strBaseInterest })
  return priceTable(response.json)
}
