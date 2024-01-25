<template>
  <div class="fixed level2-ancient-ruins">
    <img
      src="/images/whale.png"
      alt="Whale"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 20rem; height: auto"
    >
    <img
      src="/images/level2/maid.png"
      alt="Maid"
      class="character character_position_bottom character_animation_bottom character_horizontal_flip"
      style="width: auto; height: auto"
    >
    <div class="introContainer">
      <level-intro
        title="Antike Ruinen"
        :dialouge="dialouge"
        link="/level/2/alpen-method-quiz/intro"
      />
    </div>
  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'Level2ChronoTestIntroEnd',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Zofe: Während du deinen Chronotyp bestimmt hast, habe ich noch ein bisschen geputzt. Und dabei bin ich auf dieses glitzernde Ding gestoßen.',
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
