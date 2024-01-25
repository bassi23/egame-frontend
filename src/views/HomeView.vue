<template>
  <div class="fixed main-bg">
    <div class="box">
      <base-button
        class="registerBtn"
        variant="primary"
        text="Registrieren"
        @click="register"
      />

      <base-button
        variant="primary"
        text="Anmelden"
        @click="login"
      />
    </div>
  </div></template>

<script>
// @ is an alias to /src
import BaseButton from '@/components/ui/BaseButton.vue'
import route from '@/router/route'

export default {
  name: 'HomeView',
  components: {
    BaseButton,
  },
  data() {
    return {
    }
  },
  methods: {
    register() {
      this.$router.push(route.REGISTER)
    },
    login() {
      this.$router.push(route.LOGIN)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';

.registerBtn {
  padding-bottom: 2rem;
}
</style>
