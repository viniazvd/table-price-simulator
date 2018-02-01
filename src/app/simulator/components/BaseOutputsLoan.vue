<template>
  <b-row class="justify-content-md-center">
    <b-col class="p-3" xl="2">
      Lending: {{ lending }}
    </b-col>

    <b-col class="p-3" xl="2">
      Interest: {{ interest }}
    </b-col>

    <b-col class="p-3" xl="2">
      Parcels: {{ parcelSelected }}
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'BaseOutputsLoan',

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
    }
  }
}
</script>
