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
        link="/level/2/generate-time-charts"
      />
    </div>
  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'Level2GenerateTimeChartsIntro',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Balina: Entschuldigen Sie, haben Sie eine Uhr gesehen?',
          position: 'right',
        },
        {
          text: 'Gärtner: Nein, aber du könntest mir hier beim Planen helfen. Danach habe ich bestimmt noch Zeit, um dir beim Suchen zu helfen. Zwischen den Pflanzen habe ich schon so manche Dinge gefunden.',
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
