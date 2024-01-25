<template>
  <div class="fixed level5-garden">
    <img
      src="/images/whale.png"
      alt="Whale"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 16rem; height: auto"
    >
    <img
      src="/images/level5/balina.png"
      alt="Balina"
      class="character character_position_bottom character_animation_bottom character_horizontal_flip"
      style="width: 16rem; height: auto"
    >
    <div class="introContainer">
      <level-intro
        title="Lernstrategietest"
        :dialouge="dialouge"
        link="/level/5/loci-method/intro"
      />
    </div>
  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'Level5LearningStrategyAssessmentIntroEnd',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Balina: Ich glaube es klappt! Die Quelle funkelt wieder ein bisschen mehr.',
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
