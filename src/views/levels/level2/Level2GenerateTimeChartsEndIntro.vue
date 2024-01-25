<template>
  <div class="fixed level2-palace-garden">
    <img
      src="/images/whale.png"
      alt="Whale"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 20rem; height: auto"
    >
    <img
      src="/images/level2/gardener.png"
      alt="Gardener"
      class="character character_position_bottom character_animation_bottom"
      style="width: 20rem; height: auto"
    >
    <div class="introContainer">
      <level-intro
        title="Palastgarten"
        :dialouge="dialouge"
        link="/level/2/chrono-test/intro"
      />
    </div>
  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'Level2GenerateTimeChartsEndIntro',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Gärtner: Schau mal, diese Sonnenuhr habe ich hier im Garten gefunden. Suchst du die?',
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
