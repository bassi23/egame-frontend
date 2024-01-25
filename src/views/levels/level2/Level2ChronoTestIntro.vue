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
        link="/level/2/chrono-test"
      />
    </div>
  </div>
</template>

<script>
import LevelIntro from '@/components/intro/LevelIntro.vue'

export default {
  name: 'Level2ChronoTestIntro',
  components: {
    LevelIntro,
  },
  data() {
    return {
      dialouge: [
        {
          text: 'Zofe: Du hast mich aber erschreckt! Was machst du hier in den Ruinen des Zeitpalastes?',
          position: 'left',
        },
        {
          text: 'Balina: Ich bin auf der Suche nach Timps Uhren',
          position: 'right',
        },
        {
          text: 'Zofe: Er verlegt aber auch wirklich immer seine Uhren. Das liegt daran, dass er kein Morgentyp ist. Weißt du, ob du ein Morgen- oder Abendtyp bist? Lass es uns herausfinden.',
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
