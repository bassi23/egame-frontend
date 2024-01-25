<template>
  <div class="fixed level2-former-treasury">
    <img
      src="/images/whale.png"
      alt="whale"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 20rem; height: auto"
    >
    <img
      src="/images/level2/treasurer.png"
      alt="fish"
      class="character character_position_bottom character_animation_bottom character_horizontal_flip"
      style="width: auto; height: auto"
    >
    <div class="introContainer">
      <level-intro
        title="Ehemalige Schatzkammer"
        :dialouge="dialouge"
        link="/level/2/weekly-schedule/intro"
      />
    </div>
  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'Level2AlpenMethodQuizIntroEnd',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Schatzmeister: Du bist ja bereits ein Meister der Zeitplanung. Dann kann ich dir auch Timps goldene Armbanduhr anvertrauen. Die hatte ich mir natürlich nur ausgeliehen.',
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
