<template>
  <div id="root">
    <!-- 
      Segundo o style-guide oficial do vue, os componentes que só devem ter uma única
     instância ativa devem começar com o Theprefixo, para denotar que pode haver apenas um. 
    -->

    <Loader 
      :loading="this.showLoader" 
      size="30px"
      color="white"
      class="loader--configuration">
    </Loader>

    <TheApp></TheApp>
  </div>
</template>

<script>

export default {
  name: 'app',

  // lazy loading...
  components: {
    TheApp: () => import('./app/simulator/components/TheApp'),
    Loader: () => import('vue-spinner/src/PulseLoader.vue')
  },

  computed: {
    showLoader () {
      return this.$store.state.loader.loading
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./assets/sass/_base.sass"; 

.loader--configuration
  background-color: $color__primary--light;
  position: absolute;
  z-index: 99999;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 350px;
</style>
