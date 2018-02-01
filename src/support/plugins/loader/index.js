import loaderFactory from './loaderFactory'
import registerStore from './registerStore'

const install = (Vue, store) => {
  registerStore(store)

  Object.defineProperty(Vue.prototype, '$loader', {
    get () {
      return loaderFactory(this)
    }
  })
}

export default { install }
