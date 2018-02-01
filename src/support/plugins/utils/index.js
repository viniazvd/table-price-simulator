import * as $utils from '../../utils'

const install = Vue => {
  Object.defineProperties(Vue.prototype, {
    $utils: {
      get () {
        return $utils
      }
    }
  })
}

export default { install }
