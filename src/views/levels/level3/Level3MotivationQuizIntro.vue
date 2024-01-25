<template>
  <div class="fixed level3-reef">
    <img
      src="/images/whale.png"
      alt="Whale"
      class="character character_position_top character_animation_top character_horizontal_flip"
      style="width: 20rem; height: auto"
    >
    <img
      src="/images/level3/child-3.png"
      alt="Child 3"
      class="character character_position_bottom character_animation_bottom"
      style="width: 12rem; height: auto"
    >
    <div class="introContainer">
      <level-intro
        title="Selbstmotivationsriff"
        :dialouge="dialouge"
        link="/level/3/motivation-quiz"
      />
    </div>
  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'Level3MotivationQuizIntro',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Balina: So langsam habe ich den Dreh raus.',
          position: 'left',
        },
        {
          text: 'Kind: Na, bist du  jetzt motiviert genug, um dich an meinem Quiz zu versuchen?',
          position: 'left',
        },
        {
          text: 'Balina: Aber klar doch!',
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
