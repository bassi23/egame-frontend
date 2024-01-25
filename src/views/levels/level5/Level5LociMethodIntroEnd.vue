<template>
  <div class="fixed level5-garden">
    <img
      src="/images/whale.png"
      alt="Whale"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 20rem; height: auto"
    >
    <img
      src="/images/level5/little-turtle1.png"
      alt="Little Turtle 1"
      class="character character_position_bottom character_animation_bottom character_horizontal_flip"
      style="width: 10rem; height: auto"
    >
    <div class="introContainer">
      <level-intro
        title="Loci Methode"
        :dialouge="dialouge"
        link="/level/5/learning-groups-quiz/intro"
      />
    </div>
  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'Level5LociMethodIntroEnd',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Kleine Schildkröte: Ja, wir habe es geschafft! Nun fließt endlich wieder reines Wasser. Danke!',
          position: 'left',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/background.scss';
@import '@/assets/scss/character.scss';

</style>
