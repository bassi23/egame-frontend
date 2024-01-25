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
        link="/level/2/weekly-schedule"
      />
    </div>
  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'Level2WeeklyScheduleIntro',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Balina: Hallo? Ich suche eine Uhr. Haben Sie zufällig eine gesehen?',
          position: 'left',
        },
        {
          text: 'Butler: Ich habe keine Zeit nach einer Uhr zu suchen. Ich muss schließlich die Zeit hier im Palast im Auge behalten. Eine gute Planung ist da das A und O. Hilf mir lieber bei meinem Wochenplan.',
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
