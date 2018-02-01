<template>
  <div>
    <b-btn 
      v-if="this.hasTable"
      @click="emitModalShow" 
      v-b-modal.refModal
      variant="primary" 
      :disabled="this.isValidLoan">
      Apply Loan
    </b-btn>

    <b-btn 
      v-else
      @click="emitResetTable" 
      variant="danger">
      New consultation
    </b-btn>
  </div>
</template>

<script>
export default {
  name: 'ButtonApplyOrConsultation',

  props: {
    hasTable: {
      type: Boolean,
      required: true
    },
    isValidLoan: {
      type: Boolean,
      required: true
    }
  },

  methods: {
    emitModalShow () {
      this.$emit('emitModalShow')
    },

    emitResetTable () {
      this.$emit('resetTable')
    }
  }
}
</script>
