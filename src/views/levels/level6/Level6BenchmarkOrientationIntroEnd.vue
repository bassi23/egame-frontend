<template>
  <div class="fixed level6-coral-tower">
    <img
      src="/images/whale.png"
      alt="Whale"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 20rem; height: auto"
    >
    <img
      src="/images/level6/malkia-mermaid.png"
      alt="Malkia (Mermaid)"
      class="character character_position_bottom character_animation_bottom character_horizontal_flip"
      style="width: 12rem; height: auto"
    >
    <div class="introContainer">
      <level-intro
        title="Bezugsnormorientierung"
        :dialouge="dialouge"
        link="/level/6/practical-application/intro"
      />
    </div>
  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'Level6BenchmarkOrientationIntroEnd',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Malkia: Jetzt wird es spannend. Eine letzte Aufgabe steht dir noch bevor.',
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
