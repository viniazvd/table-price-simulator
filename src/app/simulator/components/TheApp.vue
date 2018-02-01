<template>
  <b-container class="container--color bv-example-row text-center mt-5">
    <TheHeading />
    <TheSubHeading />

    <hr class="mt-4">

    <div v-if="!consulted">
      <BaseInputsLoan
        :lending.sync="lending"
        :interest.sync="interest"
        :parcelSelected.sync="parcelSelected"
        :parcels="parcels"></BaseInputsLoan>
    </div>

    <div v-else>
      <BaseOutputsLoan
        :lending="lending"
        :interest="interest"
        :parcelSelected="parcelSelected"></BaseOutputsLoan>
    </div>

    <b-row class="justify-content-md-center">
      <b-col class="p-3" xl="2">
        <ButtonApplyOrConsultation
          :hasTable="hasTable"
          :isValidLoan="this.isValidLoan"
          @emitModalShow="modal=true"
          @resetTable="resetTable"></ButtonApplyOrConsultation>

        <ModalInputsUser
          :modal="modal"
          :email.sync="email"
          :cnpj.sync="cnpj"
          :isValidUserData="isValidUserData"
          :errorEmail="errorEmail"
          :errorCnpj="errorCnpj"
          @emitModalHide="modal=false"
          @calculatePriceTable="calculatePriceTable"></ModalInputsUser>
      </b-col>
    </b-row>

    <b-table class="pt-5 w-75 mx-auto" responsive hover :items="priceTable"></b-table>

  </b-container>
</template>

<script>
import { email, numeric, between } from 'vuelidate/lib/validators'
import { isEmpty } from 'ramda'

export default {
  name: 'TheApp',

  components: {
    TheHeading: () => import('./TheHeading'),
    TheSubHeading: () => import('./TheSubHeading'),
    BaseInputsLoan: () => import('./BaseInputsLoan'),
    BaseOutputsLoan: () => import('./BaseOutputsLoan'),
    ButtonApplyOrConsultation: () => import('./ButtonApplyOrConsultation'),
    ModalInputsUser: () => import('./ModalInputsUser')
  },

  data () {
    return {
      consulted: false,
      lending: '',
      parcelSelected: null,
      parcels: [
        { value: null, text: 'Parcelas' },
        { value: 3, text: 3 },
        { value: 4, text: 4 },
        { value: 5, text: 5 },
        { value: 6, text: 6 },
        { value: 7, text: 7 },
        { value: 8, text: 8 },
        { value: 9, text: 9 },
        { value: 10, text: 10 },
        { value: 11, text: 11 },
        { value: 12, text: 12 }
      ],
      interest: '',
      priceTable: [],
      modal: false,
      email: '',
      errorEmail: false,
      cnpj: '',
      errorCnpj: false
    }
  },

  validations: {
    lending: { between: between(0, 30) },
    email: { email },
    cnpj: { numeric }
  },

  methods: {
    resetTable () {
      this.lending = ''
      this.parcelSelected = null
      this.interest = ''
      this.email = ''
      this.cnpj = ''
      this.priceTable = []
      this.consulted = false
    },

    calculatePriceTable () {
      // validate fields
      this.$v.$touch()
      this.errorEmail = false
      this.errorCnpj = false

      if (this.$v.email.$error) {
        this.errorEmail = true
        return false
      }

      if (this.$v.cnpj.$error) {
        this.errorCnpj = true
        return false
      }

      // request and create table price
      this.$services.requestTablePrice(this.lending, this.parcelSelected, this.interest)
        .then(dataTable => (this.priceTable = dataTable))

      this.$loader.show()

      setTimeout(() => {
        this.$loader.hide()
        this.modal = false
        this.consulted = true
      }, 3000)
    }
  },

  computed: {
    isValidLoan () {
      if (this.lending === '0.00' || this.interest === '0.00' || !this.parcelSelected) return true
      if (!this.$utils.isBetween('0,00', '100.000,00', this.lending)) return true
      if (!this.$utils.isBetween('3,00', '8,00', this.interest)) return true

      return false
    },

    isValidUserData () {
      if (!this.email || !this.cnpj) return true
      return false
    },

    hasTable () {
      return isEmpty(this.priceTable)
    }
  }
}
</script>

<style lang="sass" scoped>
.container--color
  background: #E6E6FA;
</style>
