import * as types from './mutations-type'

export const showLoader = ({ commit }) => {
  commit(types.SET_LOADER, true)
}

export const hideLoader = ({ commit }) => {
  commit(types.SET_LOADER, false)
}
