<template>
  <div class="stretched main-bg">
    <div class="box">
      <h1 class="heading">
        Bitte, gib deine Daten ein, um das Spiel zu starten
      </h1>
      <b-form
        ref="Form"
        class="registrationForm"
      >
        <form-input
          id="mother-name"
          label="Die ersten beiden Buchstaben des Namens der Mutter"
          @input="user.motherName = $event"
        />

        <form-input
          id="month-of-birth"
          label="Monat deiner Geburt (Format: 01-12)"
          @input="user.monthOfBirth = $event"
        />

        <form-input
          id="father-name"
          label="Die letzten beiden Buchstaben des Namens des Vaters"
          @input="user.fatherName = $event"
        />

        <form-input
          id="place-of-birth"
          label="Anfangsbuchstabe des Geburtsortes"
          @input="user.placeOfBirth = $event"
        />

        <base-button
          variant="primary"
          text="Anmeldung"
          @click="register"
        />
      </b-form>
      <span v-if="userExist">Nutzer existiert bereits, bitte anmelden</span>
      <span v-if="empty">Alle Eingabefelder müssen befüllt sein!</span>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
import FormInput from '@/components/ui/FormInput.vue'
import route from '@/router/route'

export default {
  name: 'UserRegistration',
  components: {
    BaseButton,
    FormInput,
  },

  data() {
    return {
      user: {
        motherName: '',
        monthOfBirth: '',
        fatherName: '',
        placeOfBirth: '',
      },
      empty: false,
    }
  },
  computed: {
    username() {
      const username = this.user.motherName + this.user.monthOfBirth + this.user.fatherName + this.user.placeOfBirth
      if (username) {
        return username.toUpperCase()
      }
      return undefined
    },
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
  },
  watch: {
    username() {
      this.empty = false
    },
  },
  methods: {
    async register() {
      if (this.username) {
        // Check if user exist
        await this.login()

        // Register new user
        if (!this.userExist) {
          await this.$store.dispatch({
            type: 'register',
            username: this.username,
          }).then(
            this.userExist = this.$store.getters.isUserExist,
          )

          // Start game
          if (this.userExist) {
            localStorage.username = this.username
            this.startGame()
          }
        }
      } else {
        this.empty = true
      }
    },
    async login() {
      await this.$store.dispatch({
        type: 'login',
        username: this.username,
      })
        .then(
          this.userExist = this.$store.getters.isUserExist,
        )
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

.registrationForm {
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2rem;
}
</style>
