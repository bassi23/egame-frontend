<template>
  <div
    class="fixed main-bg"
  >
    <img
      src="images/whale.png"
      alt="Whale"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 20rem; height: auto"
    >
    <h1 class="heading">
      Spielmenü
    </h1>
    <div class="box mainContainer">
      <h2>Willkommen <b class="username">{{ username }}</b></h2>
      <base-button
        variant="success"
        text="Spiel Beginnen"
        @click="start"
      />

      <base-button
        variant="primary"
        text="Spielkarte"
        @click="gameMap"
      />
      <base-button
        variant="primary"
        text="Credits"
        @click="credits"
      />

      <base-button
        variant="danger"
        text="Spiel verlassen"
        @click="quit"
      />
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'

export default {
  name: 'MainView',
  components: {
    BaseButton,
  },
  data() {
    return {
      username: this.$store.getters.getUsername,
    }
  },
  computed: {
    // username() {
    //   return this.$store.getters.getUsername
    // },
  },
  mounted() {
    // this.username = this.$route.params
    this.username = this.$store.getters.getUsername
    if (!this.username) {
      this.$router.push('/login')
    }
  },
  methods: {
    start() {
      this.$router.push('/start')
    },
    gameMap() {
      this.$router.push({
        path: '/game-map',
      })
    },
    credits() {
      this.$router.push({
        path: '/credits',
      })
    },
    quit() {
      localStorage.removeItem('username')
      this.$router.push({
        path: '/',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';
@import '@/assets/scss/character.scss';

.username {
  color: #383636;
  text-decoration: underline;
}

.mainContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2rem;
}
</style>
