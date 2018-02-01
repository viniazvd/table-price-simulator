<template>
  <b-modal 
    v-model="this.modal" 
    no-close-on-esc
    no-close-on-backdrop
    hide-header-close
    centered title="User data">

    <b-form-input 
      :value="this.email" 
      @input="this.emitEmail" 
      type="email"
      placeholder="Enter your e-mail">
    </b-form-input>
    <span class="input--erro-msg" v-if="this.errorEmail">Field is invalid</span>

    <b-form-input 
      class="mt-4"
      :value="this.cnpj" 
      @input="this.emitCnpj" 
      type="text"
      placeholder="Enter your cnpj">
    </b-form-input>
    <span class="input--erro-msg" v-if="this.errorCnpj">Field is invalid</span>

    <div slot="modal-footer" class="w-100">
      <b-btn variant="secondary" @click="emitModalHide">Close</b-btn>
      <b-btn variant="success" @click="emitCalculatePriceTable" :disabled="isValidUserData">Calculate</b-btn>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'ModalInputsUser',

  props: {
    modal: {
      type: Boolean,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    cnpj: {
      type: String,
      required: true
    },
    isValidUserData: {
      type: Boolean,
      required: true
    },
    errorEmail: {
      type: Boolean,
      required: true
    },
    errorCnpj: {
      type: Boolean,
      required: true
    }
  },

  methods: {
    emitEmail (value) {
      this.$emit('update:email', value)
    },

    emitCnpj (value) {
      this.$emit('update:cnpj', value)
    },

    emitCalculatePriceTable () {
      this.$emit('calculatePriceTable')
    },

    emitModalHide () {
      this.$emit('emitModalHide')
    }
  }
}
</script>

<style lang="sass" scoped>
.input--erro-msg
  color: red;
  font-size: 13px;
</style>
