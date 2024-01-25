<template>
  <div class="fixed level2-ship-wreck">
    <img
      src="/images/whale.png"
      alt="Whale"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 20rem; height: auto"
    >
    <img
      src="/images/level2/butler.png"
      alt="Butler"
      class="character character_position_bottom character_animation_bottom character_horizontal_flip"
      style="width: 15rem; height: auto"
    >
    <div class="introContainer">
      <level-intro
        title="Schiffswrack"
        :dialouge="dialouge"
        link="/level/2/end"
      />
    </div>
  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'Level2WeeklyScheduleIntroEnd',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Butler: Danke, das hat mir sehr weitergeholfen. Du sagtest, du suchst eine Uhr? Nimm doch einfach die Sanduhr hier drüben. Die steht seit ein paar Tagen als Deko hier, aber sie passt nicht so wirklich zum Ambiente.',
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
