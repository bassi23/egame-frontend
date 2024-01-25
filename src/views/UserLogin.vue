<template>
  <div class="fixed main-bg">
    <div class="box loginForm">
      <h1 class="heading">
        Anmeldung
      </h1>

      <form-input
        id="login-input"
        label="Gebe deine Benutzer-ID ein"
        @input="username = $event"
        @change="handleInput"
      />

      <base-button
        variant="primary"
        text="Anmelden"
        @click="login"
      />

      <span v-if="invalidUser">Bitte gebe eine gültige Benutzer-ID ein</span>
    </div>
  </div>
</template>

<script>
import FormInput from '@/components/ui/FormInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import route from '@/router/route'

export default {
  name: 'UserLogin',
  components: {
    FormInput,
    BaseButton,
  },
  data() {
    return {
      username: undefined,
      invalidUser: !this.$store.getters.isUserExist,
    }
  },
  computed: {
    userExist: {
      get() {
        return this.$store.getters.isUserExist
      },
      set() {
        this.$store.commit({
          type: 'updateUsername',
          username: this.username,
        })
      },
    },
    // invalidUser() {
    //   if (this.userExist) {
    //     return false
    //   }
    //   return true
    // },
  },
  watch: {
    username() {
      this.invalidUser = false
    },
    userExist(user) {
      if (user) {
        this.invalidUser = false
      } else {
        this.invalidUser = true
      }
    },
  },
  methods: {
    handleInput(value) {
      this.username = value.toUpperCase()
      this.invalidUser = false
    },
    async login() {
      if (this.username) {
        // Check if user exist
        await this.$store.dispatch({
          type: 'login',
          username: this.username,
        }).then(
          this.userExist = this.$store.getters.isUserExist,
          // this.username = this.$store.getters.getUsername,
        )

        // Start game
        if (this.userExist && this.username) {
          localStorage.username = this.username
          this.startGame()
        }
      }
    },
    startGame() {
      this.$router.push({
        // GET
        // path: '/main',
        // query: this.form,

        // POST
        name: route.MAIN,
        params: this.username,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';

.loginForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2rem;
}

</style>
