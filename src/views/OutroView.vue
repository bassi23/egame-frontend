<template>
  <div class="fixed level6-coral-tower">
    <img
      src="/images/level6/malkia-mermaid.png"
      alt="Malkia (Mermaid)"
      class="character character_position_top character_animation_top"
      style="width: 12rem; height: auto"
    >

    <h1 class="heading">
      Danke
    </h1>

    <div class="outro-container">
      <p>
        Ich erwache sitzend an meinem Schreibtisch. Wow, was ein verrückter Traum. Ich sehe mich in meinem Zimmer um und entdecke eine kleine, hübsch verpackte Box auf meinem Tisch. Ein Geschenk? Für mich?
      </p>

      <p>
        Gespannt packe ich das Geschenk aus und finde eine Schneekugel darin. Die Welt darin sieht Regulatia auffallend ähnlich, sogar ein kleiner blauer Wal schwimmt im Schneegestöber. Vielleicht war es doch kein Traum?
      </p>
    </div>

    <base-button
      variant="primary"
      text="Credits"
      @click="goToMain"
    />
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'

export default {
  name: 'OutroView',
  components: {
    BaseButton,
  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
    goToMain() {
      this.$router.push('/credits')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';
@import '@/assets/scss/character.scss';

</style>
