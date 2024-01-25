<template>
  <div class="fixed level5-garden">
    <img
      src="/images/whale.png"
      alt="Whale"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 20rem; height: auto"
    >
    <img
      src="/images/level5/balina.png"
      alt="Balina"
      class="character character_position_bottom character_animation_bottom character_horizontal_flip"
      style="width: 20rem; height: auto"
    >
    <div class="introContainer">
      <level-intro
        title="Lernstrategietest"
        :dialouge="dialouge"
        link="/level/5/learning-strategy-assessment"
      />
    </div>
  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'Level5LearningStrategyAssessmentIntro',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Balina: Auf den ersten Blick sehen die Quellen doch ganz normal aus. Vielleicht ist das Wissen einfach verloren gegangen? Vielleicht kann ich neues Wissen hinzufügen?',
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
