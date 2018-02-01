<template>
  <b-row class="justify-content-md-center">
    <b-col class="p-3" sm="4" md="4" lg="2" xl="2">
      Lending
      <b-form-input 
        :value="this.lending" 
        @input="this.emiteLending" 
        v-money="moneyConfig"></b-form-input>
    </b-col>

    <b-col class="p-3" sm="4" md="4" lg="2" xl="2">
      Interest
      <b-form-input 
        :value="this.interest" 
        @input="this.emiteInterest"
        v-money="moneyConfig"></b-form-input>
    </b-col>

    <b-col class="p-3" sm="4" md="4" lg="2" xl="2">
      Parcels
      <b-form-select :value="this.parcelSelected" @input="this.emiteParcel" :options="this.parcels"/> 
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'BaseInputsLoan',

  props: {
    lending: {
      type: String,
      require: true
    },
    interest: {
      type: String,
      require: true
    },
    parcelSelected: {
      type: Number,
      require: true,
      validator: function (value) {
        return value >= 3 && value <= 12
      }
    },
    parcels: {
      type: [Array, String],
      require: true,
      validator: function (value) {
        return value[0].hasOwnProperty('value')
      }
    }
  },

  data () {
    return {
      moneyConfig: {
        decimal: '.',
        thousands: ',',
        precision: 2
      }
    }
  },

  methods: {
    emiteLending (value) {
      this.$emit('update:lending', value)
    },

    emiteInterest (value) {
      this.$emit('update:interest', value)
    },

    emiteParcel (value) {
      this.$emit('update:parcelSelected', value)
    }
  }
}
</script>
