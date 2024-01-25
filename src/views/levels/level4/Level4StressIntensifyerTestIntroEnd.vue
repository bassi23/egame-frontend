<template>
  <div class="fixed level4-cave-of-stress">
    <img
      src="/images/whale.png"
      alt="Whale"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 20rem; height: auto"
    >
    <img
      src="/images/level4/cera.png"
      alt="Cera"
      class="character character_position_bottom character_animation_bottom character_horizontal_flip"
      style="width: 10rem; height: auto"
    >
    <div class="introContainer">
      <level-intro
        title="Stressverstärkertest"
        :dialouge="dialouge"
        link="/level/4/concentration-quiz/intro"
      />
    </div>
  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'Level4StressIntensifyerTestIntroEnd',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Cera: So. Jetzt bist du auf allen Ebenen gegen Stress gerüstet. Fehlt also nur noch eins: die Konzentration',
          position: 'left',
        },
      ],
    }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';
@import '@/assets/scss/character.scss';

</style>
