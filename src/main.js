import Vue from 'vue'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
import money from 'v-money'
import Vuelidate from 'vuelidate'

// Defina false para previnir a exibição da dica sobre o modo de produção ao iniciar o Vue.
Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// registering bootstrap-fw-vue
Vue.use(BootstrapVue)

// register directive v-money and component <money>
Vue.use(money, {precision: 2})

// register vuelidate (for email and cnpj)
Vue.use(Vuelidate)

// pluggins
import ServicesPlugin from './support/plugins/calculations'
import LoaderPlugin from './support/plugins/loader'
import UtilsPlugin from './support/plugins/utils'

// registering pluggins
Vue.use(ServicesPlugin)
Vue.use(LoaderPlugin, store)
Vue.use(UtilsPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#root',
  store,
  render: h => h(require('./TheRoot'))
})
